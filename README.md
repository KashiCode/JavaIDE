# JavaIDE
![Java Logo](https://i.imgur.com/WO7iL6D.png)





## Introduction

## Features:

- compiling java files in discord
- Accepts user inputs

- includes general features such as openAI support for debugging code and basic tutorials on installing java and using the application. 



## Installation

## 1. Installing Node.js:

- Visit the official Node.js website: [Node.js](https://nodejs.org/) and install version v18.18.2.
-  Make sure to include `npm` (Node Package Manager) in the installation.

## 2. Installing the Java Development Kit (JDK):

- Visit the official Oracle website: [Oracle JDK Downloads](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html).
- Download the JDK version 17.0.8 for your operating system.

 ## 3. Install Visual Studio Code:
- Install [Visual Studio Code.](https://code.visualstudio.com/).
- Install [Build tools for Visual Studio 2022](https://visualstudio.microsoft.com/downloads/?q=build+tools).
- Right-click on your project folder and select 'Open with Visual Studio Code', or navigate to your project directory in terminal/command prompt and type `code .` to open it in VSCode.

## 4. Installing Dependencies:

1. Open the terminal in vscode.
3. Install the required dependencies:

   ```bash
   npm install axios
   npm install discord.js
   npm install dotenv
   npm install openai
   ```

## 5. Create a New Discord Bot:
- Visit the Discord [developer portal](https://discord.com/developers/applications) and create a new application and bot.
- Invite the bot to your server.


## 6. Add your bot tokens:

- Inside VSCode, open the `.env` file and add all relevant tokens.

## 7. Registering Commands:

- In your VSCode terminal, type and run:
     ```bash
     node src/register-commands.js
     ```

## 8. Running the Program:

- Start the bot within the VSCode terminal with:
     ```bash
     nodemon
     ```

## Dependencies

- **Node.js**
  > This project requires node v18.18.2 or later.

- **Axios**
  > Install using `npm install axios`.

- **Discord.js**
  > Install using `npm install discord.js`.

- **Dotenv**
  > Install using `npm install dotenv`.

- **OpenAI**
  > Install using `npm install openai`.

- **Java**
  > This project requires Java 17.0.8 or later.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://opensource.org/licenses/MIT)

## Contact
If you have any questions or comments, please feel free to contact me at ostrynskimaks@gmail.com



###### KashiCode © 2023








