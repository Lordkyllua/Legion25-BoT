const db = require("../utils/database");

module.exports = {
  name: "roleadmin",
  description: "Set allowed roles for selection",
  execute(message, args) {
    if (!message.member.permissions.has("Administrator")) {
      return message.reply("❌ You need to be an admin to use this command.");
    }
    if (!args.length) {
      return message.reply("Use: !roleadmin Role1 Role2 Role3...");
    }
    db.setAllowedRoles(message.guild.id, args);
    message.channel.send(`✅ Allowed roles updated: ${args.join(", ")}`);
  }
};
