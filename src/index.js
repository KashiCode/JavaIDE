require('dotenv').config();
const { Client, IntentsBitField, ActivityType, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const fs = require('fs');
const { exec } = require('child_process');
const axios = require('axios');
const tmp = require('tmp');
const { Readable } = require('stream');




const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

let status = [
    {
        name: 'Visual Studio Code',
        type: ActivityType.Playing,
    },
    {
        name: 'GitHub',
        type: ActivityType.Watching,
    },
];

// Create an empty conversation history
const conversationHistory = [];

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);

    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);
    }, 240000);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand() || interaction.commandName !== 'explain') {
        return;
    }

    // Acknowledge the interaction
    await interaction.deferReply();

    const textToExplain = interaction.options.getString('text');

    if (!textToExplain) {
        return await interaction.followUp('Please provide text to explain.');
    }

    try {
        // Add the user's input to the conversation history
        conversationHistory.push({ role: 'user', content: textToExplain });

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: conversationHistory, // Use the entire conversation history
        });

        if (response && response.choices && response.choices[0]) {
            // Get the bot's reply from OpenAI's response
            const botReply = response.choices[0].message.content;

            // Limit the response to 1900 characters or less
            const truncatedReply = botReply.slice(0, 1999);

            // Add the bot's reply to the conversation history
            conversationHistory.push({ role: 'assistant', content: botReply });

            await interaction.followUp(truncatedReply);
        } else {
            await interaction.followUp('An error occurred with the OpenAI response.');
        }
    } catch (error) {
        console.error('OpenAI error\n', error);
        await interaction.followUp('An error occurred with the OpenAI request.');
    }
});




// New Slash command 'debug'
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand() || interaction.commandName !== 'debug') {
        return;
    }

    // Acknowledge the interaction
    await interaction.deferReply();

    const javaCode = interaction.options.getString('java_code');
    const errorText = interaction.options.getString('error');

    if (!javaCode || !errorText) {
        return await interaction.followUp('Please provide Java code and error text.');
    }

    // Combine Java code and error text into a single request text
    const requestText = `This Java code received this error: \n${javaCode}\nError: ${errorText}\nPlease explain in text why and how to fix it.`;

    try {
        // Add the user's input to the conversation history
        conversationHistory.push({ role: 'user', content: requestText });

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: conversationHistory,
        });

        if (response && response.choices && response.choices[0]) {
            const botReply = response.choices[0].message.content;
            const truncatedReply = botReply.slice(0, 1999);

            conversationHistory.push({ role: 'assistant', content: botReply });

            await interaction.followUp(truncatedReply);
        } else {
            await interaction.followUp('An error occurred with the OpenAI response.');
        }
    } catch (error) {
        console.error('OpenAI error\n', error);
        await interaction.followUp('An error occurred with the OpenAI request.');
    }
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand() || interaction.commandName !== 'execute') {
        return;
    }
    await interaction.reply("**To execute code using the JavaIDE, you can follow these steps:**\n1. Upload your Java code using Discord's upload file feature.\n2. Press the RUN button.\n3. Ensure that your file suffix ends in `.java`.\n4. JavaIDE will only compile and run files ending with the `.java` suffix.\n5. Ensure that your file starts with the following code:\n```java\npublic class JavaConceptExamples {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}\n```\n6. The java file must not be uploaded as a spoiler.\n7. Make sure that the initial class name is the same as your file name.\n8. If your code requires user input, precede the input request with the string `Please enter`. For example:\n```java\nSystem.out.print(\"Please enter a number: \");\n```\n9.If there are any compilation errors, the bot will help explain them.\n10. Once the code is error-free, it will be compiled and executed.\n11. The bot will provide the execution result.");

});

// The 'about' command logic
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand() || interaction.commandName !== 'about') {
        return;
    }
    await interaction.reply('**JavaIDE Bot v1.1.1**\n\n**Summary:**\n\n**Slash Commands:**\n1. `/explain` - Use artificial intelligence to explain any topic.\n2. `/debug` - Upload defective Java code and the error statement to be debugged.\n3. `/execute` - Get instructions on how to execute code using the JavaIDE natively in Discord.\n4. `/about` - Get information about the bot and its commands.\n5. `/edit` - Get instructions on how to edit java code.\n\n**Bot Summary:**\n\nThis bot assists with Java code debugging, editing, explanation, and execution. It integrates with the Java Runtime Environment and OpenAI to help users understand code issues and execute simple Java programs.\n\n**Current Features:**\n\n1. OpenAI integration to allow for descriptive debugging of coding and explanation.\n2. Ability to execute code with multiple functions and various code lengths.\n3. Supports simple user inputs into the system.\n4. Supports multiple input data types, including boolean, strings, and more.\n5. Supports various data structures, including arrays, abstract data types (ADT), and records.\n6. Supports most import statements.\n7. Allows users to edit Java files.\n\n**Future Features:**\n\n- Python integration and support for other programming languages.\n- Support for Graphical interfaces.\n- Support for External dependencies.\n\n**Support:**\n\nDue to the nature of Discord, many features of the JavaIDE are limited.\n\nJavaIDE Bot currently does NOT support:\n- Files requiring an input of over 2000 characters.\n- Files requiring an output of over 2000 characters.\n- Code that requires multiple dependencies that are not preinstalled with the Java Development Kit.\n- Code that features a GUI.\n\nFeel free to suggest improvements and additional features.\n\n**Development:**\n\nThis bot is developed by KashiCode. You can find the source code on [GitHub](https://github.com/KashiCode).');

});


client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand() || interaction.commandName !== 'edit') {
        return;
    }

    // Respond with the Java installation tutorial and programming basics
    await interaction.reply("**To edit code using the JavaIDE, you can follow these steps:**\n1. Upload your `.java` file using Discord's upload file feature.\n2. Select EDIT on the menu.\n3. Write the new code you want to go inside of the file into an input field.\n4. Ensure the code is correctly formatted.\n5. Ensure the classname is the same as the previous file.\n6. When ready, press enter and send the message.\n7. The new file content will be returned, ready to download.");

});





//JAVA FUNCTIONALITY

function containsMaliciousContent(code) {
    const forbiddenPatterns = [
        "Runtime.getRuntime().exec",     // Prevents running system commands
        "System.exit",                   // Prevents termination of the JVM
        //"FileOutputStream",              // Can be used to write files () OFF
        //"FileInputStream",               // Can be used to read files  () OFF
        "File.delete",                   // Can be used to delete files
        "java.nio.file.Files.delete",    // Newer API for file deletion
        "Socket",                        // Prevents creation of raw sockets
        "ServerSocket",                  // Prevents binding to a port
        "URLClassLoader",                // Prevents loading classes from URLs
        "ScriptEngineManager",           // Prevents JavaScript execution
        "ProcessBuilder",                // Another way to run system commands
        "System.setSecurityManager",     // Prevents changing the security manager
        "Cipher",                       // To avoid encryption/decryption operations
        "KeyGenerator",                 // To avoid key generation for crypto
        "Robot",                        // Can be used for native events like mouse clicks
        "java.net.URL.openStream",      // Can open streams to external URLs
        "java.net.HttpURLConnection",   // Can make HTTP requests
        "Toolkit.getDefaultToolkit",    // Access to GUI operations
        "System.getProperties",         // Reads system properties
        "System.getenv",                // Reads environment variables
        "System.getProperty"            // Fetches system propeties
    ];

    return forbiddenPatterns.some(pattern => code.includes(pattern));
}


let javaProcess = null;
let awaitingInput = false;

let promptBuffer = "";
let resultBuffer = "";

const processedMessages = new Set();
const userActions = new Map(); 

function compileJavaFile(fileName) {
    return new Promise((resolve, reject) => {
        exec(`javac ${fileName}`, (error, stdout, stderr) => {
            if (error) {
                resolve({ success: false, error: stderr });
            } else {
                resolve({ success: true, error: null });
            }
        });
    });
}

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

        if (awaitingInput && !message.author.bot && userActions.has(message.author.id)) {
        const userJavaProcess = userActions.get(message.author.id).javaProcess;
        if (userJavaProcess) {
            userJavaProcess.stdin.write(message.content + '\n');
            awaitingInput = false;
            return;
        }
    }

    if (processedMessages.has(message.id)) return;

    if (userActions.has(message.author.id) && userActions.get(message.author.id).action === 'EDIT') {
        const userChoice = userActions.get(message.author.id);
        fs.writeFileSync(userChoice.fileName, message.content);
        userActions.delete(message.author.id);

        message.reply({
            content: '**New file to download:**',
            files: [{
                attachment: userChoice.fileName,
                name: userChoice.fileName
            }]
        });
        return;
    }


    if (message.attachments.size === 1) {
        const attachment = message.attachments.first();
        const fileName = attachment.name;
        const fileExtension = fileName.split('.').pop();

        if (fileExtension !== 'java') return;

        const response = await axios.get(attachment.url);
        const codeContent = response.data;

        if (containsMaliciousContent(codeContent)) {
            message.reply("**WARNING:** Your code contains potential security risks and cannot be executed.");
            return;
        }

        if (codeContent.includes("import org.apache.http") ||
            codeContent.includes("import org.apache.commons.") ||
            codeContent.includes("import com.") ||
            codeContent.includes("import com.google.api") ||
            codeContent.includes("import javax.swing") ||
            codeContent.includes("import javafx")) {
            message.reply(`**Java IDE version 1.1.0 does not currently support external dependencies that are not included in the JDK, or complex graphical user interface features.**`);
            return;
        }

        const userClassName = fileName.replace('.java', '');
        const javaFileName = `${userClassName}.java`;
        fs.writeFileSync(javaFileName, codeContent);

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder().setCustomId('run').setLabel('RUN').setStyle('Primary'),
                new ButtonBuilder().setCustomId('edit').setLabel('EDIT').setStyle('Secondary'),
                new ButtonBuilder().setCustomId('quit').setLabel('QUIT').setStyle('Danger')
            );

        try {
            await message.reply({
                content: '**Please select an option:**',
                components: [row]
            });

            userActions.set(message.author.id, {
                action: null,
                fileName: javaFileName,
                userClassName: userClassName
            });

            if (awaitingInput && javaProcess) {
                javaProcess.stdin.write(message.content + '\n');
                awaitingInput = false;
            }
        } catch (error) {
            console.error('Error handling file upload\n', error);
            message.reply('An error occurred during code execution.');
        }
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
    if (!userActions.has(interaction.user.id)) return;

    await interaction.deferReply();

    if (interaction.customId === 'run' || interaction.customId === 'edit' || interaction.customId === 'quit') {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder().setCustomId('run').setLabel('RUN').setStyle('Primary').setDisabled(true),
                new ButtonBuilder().setCustomId('edit').setLabel('EDIT').setStyle('Secondary').setDisabled(true),
                new ButtonBuilder().setCustomId('quit').setLabel('QUIT').setStyle('Danger').setDisabled(true) // Disable the QUIT button
            );
        
        await interaction.message.edit({ components: [row] });
    }

    if (interaction.customId === 'run') {
        const fileName = userActions.get(interaction.user.id).fileName;
        const compilationResult = await compileJavaFile(fileName);

        if (compilationResult.success) {
            javaProcess = exec(`java ${userActions.get(interaction.user.id).userClassName}`, { encoding: 'utf8' });
            userActions.get(interaction.user.id).javaProcess = javaProcess;  
            let bufferedOutput = "Execution Result:\n";
            let awaitingInputMessage = "";

            javaProcess.stdout.on('data', (data) => {
                if (data.includes('Please enter')) {
                    awaitingInput = true;
                    promptBuffer += data.trim().split('\n').pop(); // Store the input prompt in its own buffer
                    interaction.followUp(promptBuffer); // Send the prompt to the user
                    promptBuffer = ""; // Reset the prompt buffer after sending
                } else {
                    resultBuffer += data; // Store execution results in its own buffer
                }

            });
            
            javaProcess.on('exit', (code) => {
                if (resultBuffer.trim() !== "") {
                    interaction.followUp('```markdown\n' + resultBuffer + '```');
                }
                resultBuffer = ""; // Optionally, you can reset the result buffer after sending
            });

            processedMessages.add(interaction.message.id);
        } else {
            interaction.followUp(`Compilation Error:\n\`\`\`markdown\n${compilationResult.error}\n\`\`\``);
        }
    } else if (interaction.customId === 'edit') {
        userActions.get(interaction.user.id).action = 'EDIT';
        interaction.followUp('**Please send the new content for the file:**');

    } else if (interaction.customId === 'quit') {
        if (userActions.has(interaction.user.id)) {
            const userAction = userActions.get(interaction.user.id);
            if (userAction.javaProcess) {
                userAction.javaProcess.kill(); // Terminate the Java process
            }
            userActions.delete(interaction.user.id); // Remove the user's action
        }
        await interaction.followUp('**Program terminated**');
        return;
    }
});


client.login(process.env.TOKEN);
