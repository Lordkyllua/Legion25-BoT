const { ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "roles",
  description: "Elige un rol del servidor",
  async execute(message, args, client) {
    const roles = message.guild.roles.cache
      .filter(r => r.name !== "@everyone")
      .map(r => ({ label: r.name, value: r.id }));
    if (!roles.length) return message.reply("⚠️ No hay roles disponibles.");

    const row = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId("select-role")
        .setPlaceholder("🎭 Elige un rol")
        .addOptions(roles.slice(0, 25))
    );

    const channelId = client.config.rolesChannel || message.channel.id;
    const channel = message.guild.channels.cache.get(channelId);
    if (!channel) return message.reply("⚠️ Canal de roles no configurado.");

    const embed = new EmbedBuilder()
      .setColor("Blurple")
      .setTitle("🎭 Selección de roles")
      .setDescription("Selecciona un rol del menú para asignártelo.");

    channel.send({ embeds: [embed], components: [row] });
  }
};
  
