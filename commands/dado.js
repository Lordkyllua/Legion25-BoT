const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "dado",
  description: "Lanza un dado de 6 caras",
  async execute(message, args, client) {
    const numero = Math.floor(Math.random()*6)+1;

    const embed = new EmbedBuilder()
      .setColor("Orange")
      .setTitle("🎲 ¡Dado lanzado!")
      .setDescription(`Te salió un **${numero}**`);

    const channelId = client.config.gamesChannel || message.channel.id;
    const channel = message.guild.channels.cache.get(channelId);
    if (!channel) return message.reply("⚠️ Canal de juegos no configurado.");

    channel.send({ embeds: [embed] });
  }
};
