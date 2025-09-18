const db = require("../utils/database");
const prefix = require("../config.json").prefix;

module.exports = {
  name: "messageCreate",
  execute(message, client) {
    if (message.author.bot) return;

    // Add points for activity
    db.addPoints(message.author.id, 1);

    // Commands
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (command) {
      command.execute(message, args, client);
    }
  }
};
