![Java Logo](https://i.imgur.com/D1Qwyww.png)

# JavaIDE

# Introduction
JavaIDE is a Discord bot developed using [Node.js](https://nodejs.org/) and [Discord.js](https://discord.js.org/). Serving as a proof of concept, this application allows users to execute, debug and edit `.java` files directly within Discord.

# 🌐 Features

### Java File Execution:
**Simply upload a `.java` file to discord**, and our bot will allow you to interact with it and view the final output.


![How to use java IDE](https://i.imgur.com/qK5fL96.gif)

### Java File Editing:
**Simply upload a `.java` file to discord**, and our bot will allow you to edit it and download the updated version.

![How to use java IDE](https://i.imgur.com/v55EY8P.gif)

### OpenAI support:
**Simply use the `/explain` or `/debug` commands**, in order to use the inbuilt artificial intelligence model to solve your code queries.


![How to use OpenAI](https://i.imgur.com/E9vQ29I.gif)

### Guides and information:
**Simply use the `/about`, `/execute` or `/edit` commands**, to get helpful information and guides built into the program.


![How to view guides](https://i.imgur.com/YrqVxEG.gif)


### 🚀 Upcoming Features:
- **Language Expansion:** Integration and support for Python and other programming languages.
- **Graphical Interface Support:** Enabling the bot to work with GUIs.
- **External Dependencies:** Expanding the scope to include more external dependencies.

# 📌 Usage

### 1. Installing Node.js

- Visit the official Node.js website: [Node.js](https://nodejs.org/) and install version v18.18.2.
-  Make sure to include `npm` (Node Package Manager) in the installation.

### 2. Installing the Java Development Kit

- Visit the official Oracle website: [Oracle JDK Downloads](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html).
- Download the JDK version 17.0.8 for your operating system.

### 3. Installing Visual Studio Code

- Install [Visual Studio Code.](https://code.visualstudio.com/).
- Install [Build tools for Visual Studio 2022](https://visualstudio.microsoft.com/downloads/?q=build+tools).
- Right-click on your project folder and select 'Open with Visual Studio Code', or navigate to your project directory in terminal/command prompt and type `code .` to open it in VSCode.

### 4. Installing Dependencies

- Open the terminal in vscode.
- Install the required dependencies:

   ```bash
   npm install axios
   npm install discord.js
   npm install dotenv
   npm install openai
   ```

### 5. Creating a New Discord Bot

- Visit the Discord [developer portal](https://discord.com/developers/applications) and create a new application and bot.
- Invite the bot to your server.


### 6. Adding your bots tokens

- Inside VSCode, open the `.env` file and add all relevant tokens.

### 7. Registering Commands

- In your VSCode terminal, type and run:
  
     ```bash
     node src/register-commands.js
     ```

### 8. Running the application

- Start the bot within the VSCode terminal with:

     ```bash
     nodemon
     ```

# ⚙ Dependencies
- Node.js (Version v18.18.2 or newer)
- Java (At least JDK 17.0.8)
- Axios
- Discord.js
- Dotenv
- OpenAI

# 📝 Contributing
Your contributions are always welcome. For major revisions, please start by opening an issue to discuss what you'd like to change.

# 📜 License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

# 💼 Contact
For any inquiries, suggestions, or feedback, don't hesitate to email me at [ostrynskimaks@gmail.com](mailto:ostrynskimaks@gmail.com).


###### KashiCode © 2023








