const config = require("../config.json");

module.exports = {
  name: "guildMemberAdd",
  execute(member) {
    const channelId = config.channels.welcome;
    if (!channelId) return;

    const channel = member.guild.channels.cache.get(channelId);
    if (channel) {
      channel.send(`👋 Welcome to the server, **${member.user.username}**!`);
    }
  }
};
