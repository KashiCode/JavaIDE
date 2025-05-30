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



### 1. Creating a New Discord Bot

- Visit the Discord [developer portal](https://discord.com/developers/applications) and create a new application and bot.
- Invite the bot to your server.


### 2. Adding your bots tokens

- Inside VSCode, open the `.env` file and add all relevant tokens.

### 3. Registering Commands

- In your VSCode terminal, type and run:
  
     ```bash
     node src/register-commands.js
     ```

### 4. Running the application

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



###### KashiCode © 2023








