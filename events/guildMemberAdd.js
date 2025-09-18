const config = require("../config.json");

module.exports = {
  name: "guildMemberAdd",
  execute(member) {
    const channel = member.guild.channels.cache.find(ch => ch.name === config.welcomeChannel);
    if (channel) {
      channel.send(`👋 Welcome ${member} to the server!`);
    }
  }
};
