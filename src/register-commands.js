require('dotenv').config();
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');


const commands = [
    {
        name: 'explain',
        description: 'Use artificial intelligence to explain something.',
        type: 1,
        options: [
            {
                name: 'text',
                description: 'The text to be explained (1000 characters limit).',
                type: 3,
                required: true,
            },
        ],
    },
    {
        name: 'debug',
        description: 'Upload defective Java code and the error statement to be debugged.',
        type: 1,
        options: [
            {
                name: 'java_code',
                type: 3,
                description: 'Upload your Java code that contains errors (1900 character limit).',
                required: true,
            },
            {
                name: 'error',
                type: 3,
                description: 'Upload the error you received (1900 character limit)',
                required: true,
            },
        ],
    },
    {
        name: 'execute',
        description: 'Get instructions on how to execute java code in discord.',
        type: 1,
    },
    {
        name:'edit',
        description: 'Information about editing java code.',
        type: 1,

    },
    {
        name: 'about',
        description: 'Information about the bot and its commands.',
        type: 1,
    },

];


// node src/register-commands.js

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async() => {
    try{
        console.log('Registering slash commands');
        
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }

        )

        console.log('slash commands were registered sucessfully.')

    } catch(error) {
        console.log(`There was an error: ${error}`);


    }


})();
