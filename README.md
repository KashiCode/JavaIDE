# JavaIDE

![Java Logo](JAVA%20logo2.jpg)




## Introduction

The JavaIDE Bot serves as a tool on Discord to help users debug, elucidate, and run Java code. It harnesses the capabilities of the Java Runtime Environment and is enhanced by OpenAI integration. The bot's foundation is constructed using JavaScript, Node.js, and discord.js.

## Installation

## 1. Installing Node.js:

- Visit the official Node.js website: [Node.js](https://nodejs.org/) and install version v18.18.2.
-  Make sure to include `npm` (Node Package Manager) in the installation.

## 2. Installing the Java Development Kit (JDK):

- Visit the official Oracle website: [Oracle JDK Downloads](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html).
- Download the JDK version 17.0.8 for your operating system.

## 3. Installing Dependencies:

After installing Node.js and JDK:

1. Open the terminal/command prompt.
2. Navigate to your project directory.
3. Install the required dependencies:

   ```bash
   npm install axios
   npm install discord.js
   npm install dotenv
   npm install openai
   ```

## 4. Create a New Discord Bot:
- Visit the Discord Developer Portal: Discord Developers and create a new application and bot. 

## 5. Inviting the Bot to a Server:
- invite the bot to your server.

## 6.Add your bot tokens:

- add all relevant tokens into the .env file. 

## 7. Registering Commands:
In your terminal/command prompt type and run:

```bash
node src/register-commands.js
```

## 8. Running the Program:
Start the bot with:

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








