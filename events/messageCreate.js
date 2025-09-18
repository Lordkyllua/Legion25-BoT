const db = require("../utils/database");
const prefix = require("../config.json").prefix;

module.exports = {
  name: "messageCreate",
  execute(message, client) {
    if (message.author.bot) return;

    // Sistema de puntos
    db.addPoints(message.author.id, 1);

    // Prefijo
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (command) {
      command.execute(message, args, client);
    }
  }
};
