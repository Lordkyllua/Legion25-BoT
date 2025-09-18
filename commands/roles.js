const db = require("../utils/database");

module.exports = {
  name: "roles",
  description: "Show available roles",
  execute(message) {
    const roles = db.getAllowedRoles(message.guild.id);
    if (!roles.length) {
      return message.channel.send("❌ No roles have been configured yet. Ask an admin to use !roleadmin");
    }
    message.channel.send(`🎭 Available roles: ${roles.map(r => `\`${r}\``).join(", ")}`);
  }
};
