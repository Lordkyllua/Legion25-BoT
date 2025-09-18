const config = require("../config.json");

module.exports = {
  name: "setchannel",
  description: "Set a channel for welcome, roles, or games",
  execute(message, args) {
    if (!message.member.permissions.has("Administrator")) {
      return message.reply("❌ You need admin permissions to use this command.");
    }
    const [type, channelMention] = args;
    if (!["welcome", "roles", "games"].includes(type)) {
      return message.reply("❌ Use: !setchannel [welcome/roles/games] #channel");
    }
    const channel = message.mentions.channels.first();
    if (!channel) return message.reply("❌ Please mention a valid channel.");
    config[`${type}Channel`] = channel.name;
    message.channel.send(`✅ Channel for **${type}** set to ${channel}`);
  }
};
