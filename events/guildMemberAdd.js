const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  async execute(member, client) {
    const channelId = client.config.welcomeChannel;
    if (!channelId) return;
    const channel = member.guild.channels.cache.get(channelId);
    if (!channel) return;

    const embed = new EmbedBuilder()
      .setColor("Green")
      .setTitle("👋 ¡Bienvenido!")
      .setDescription(`Hola ${member}, bienvenido/a a **${member.guild.name}** 🎉\nDisfruta tu estadía!`)
      .setThumbnail(member.user.displayAvatarURL())
      .setFooter({ text: "Sistema de bienvenida" });

    channel.send({ embeds: [embed] });
  }
};
