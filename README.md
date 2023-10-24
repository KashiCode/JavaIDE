![Java Logo](https://i.imgur.com/D1Qwyww.png)

# JavaIDE

# 🔍 Introduction
JavaIDE is a Discord bot developed using [Node.js](https://nodejs.org/) and [Discord.js](https://discord.js.org/). Serving as a proof of concept, this application redefines the boundaries of Discord bot functionalities by allowing users to execute Java files directly within Discord.

# 🌐 Features

### Core Feature
- **Java File Execution:** Simply upload a `.java` file to discord, and our bot will allow you to interact with it and view the final output.

  

### Current Features
- **OpenAI Support:** Descriptive debugging and code explanation using OpenAI.
- **Multiple Function Execution:** Execute code with various functions and different code lengths.
- **User Input Support:** Accepts simple user inputs into the system.
- **Diverse Input Data Types:** Including boolean, strings, and more.
- **Data Structures:** Supports arrays, abstract data types (ADT), and records.
- **Import Statements:** Compatibility with most import statements.
- **General Features:** Includes basic tutorials on installing Java and using the application.

### Upcoming Features
- **Language Expansion:** Integration and support for Python and other programming languages.
- **Graphical Interface Support:** Enabling the bot to work with GUIs.
- **External Dependencies:** Expanding the scope to include more external dependencies.
- **IDE integration:** Enabling users to edit `.java` files within discord and delete or write code.
- **Sandboxing and security** Expanding on the security features to include a sandbox environment and additional precautions. 

# 📌 Usage:

### 1. Installing Node.js:

- Visit the official Node.js website: [Node.js](https://nodejs.org/) and install version v18.18.2.
-  Make sure to include `npm` (Node Package Manager) in the installation.

### 2. Installing the Java Development Kit (JDK):

- Visit the official Oracle website: [Oracle JDK Downloads](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html).
- Download the JDK version 17.0.8 for your operating system.

### 3. Install Visual Studio Code:
- Install [Visual Studio Code.](https://code.visualstudio.com/).
- Install [Build tools for Visual Studio 2022](https://visualstudio.microsoft.com/downloads/?q=build+tools).
- Right-click on your project folder and select 'Open with Visual Studio Code', or navigate to your project directory in terminal/command prompt and type `code .` to open it in VSCode.

### 4. Installing Dependencies:

1. Open the terminal in vscode.
3. Install the required dependencies:

   ```bash
   npm install axios
   npm install discord.js
   npm install dotenv
   npm install openai
   ```

### 5. Create a New Discord Bot:
- Visit the Discord [developer portal](https://discord.com/developers/applications) and create a new application and bot.
- Invite the bot to your server.


### 6. Add your bot tokens:

- Inside VSCode, open the `.env` file and add all relevant tokens.

### 7. Registering Commands:

- In your VSCode terminal, type and run:
     ```bash
     node src/register-commands.js
     ```

### 8. Running the Program:

- Start the bot within the VSCode terminal with:
     ```bash
     nodemon
     ```

# ⚙ Dependencies
- Node.js (Version v18.18.2 or newer)
- Axios
- Discord.js
- Dotenv
- OpenAI
- Java (At least JDK 17.0.8)

# 📝 Contributing
Your contributions are always welcome. For major revisions, please start by opening an issue to discuss what you'd like to change.

# 📜 License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

# 💼 Contact
For any inquiries, suggestions, or feedback, don't hesitate to email me at [ostrynskimaks@gmail.com](mailto:ostrynskimaks@gmail.com).

Note: There are some restrictions with JavaIDE Bot due to Discord's limitations. For instance, it doesn't support:
- Files that need an input or output over 2000 characters.
- Multiple dependencies that aren't part of the JDK.
- Code that uses a GUI.

We encourage suggestions for improvements and new features!

###### KashiCode © 2023








