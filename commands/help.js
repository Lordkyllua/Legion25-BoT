module.exports = {
  name: "help",
  description: "List all commands and their descriptions",
  async execute(message) {
    const helpMessage = `
**📖 Available Commands**

⚙️ **!help**  
Shows this help message with the list of available commands.

🏆 **!ranking**  
Displays the top 10 players with the most points.

🎲 **!dado**  
Rolls a dice and gives you a random number between 1 and 6.

✂️ **!ppt**  
Play Rock, Paper, Scissors against the bot.

🎭 **!roles**  
Displays a menu with the roles available.  
You can pick one and the bot will assign it to you.

🛠 **!roleadmin** *(admin only)*  
Displays a menu with all existing roles in the server.  
Admins select which roles will be available to members in **!roles**.

📢 **!setchannel** *(admin only)*  
Configures a channel where the bot will send important messages such as rankings or announcements.
    `;

    await message.channel.send(helpMessage);
  }
};
