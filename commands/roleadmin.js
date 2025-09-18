const { ActionRowBuilder, StringSelectMenuBuilder, PermissionsBitField } = require("discord.js");
const db = require("../utils/database");

module.exports = {
  name: "roleadmin",
  description: "Configure allowed roles for selection",
  async execute(message) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
      return message.reply("❌ You need to be an admin to use this command.");
    }

    // Obtener roles del servidor (excluyendo @everyone y roles administradores)
    const roles = message.guild.roles.cache
      .filter(r => r.name !== "@everyone" && !r.permissions.has(PermissionsBitField.Flags.Administrator))
      .map(r => ({ label: r.name, value: r.id }));

    if (!roles.length) {
      return message.reply("❌ No roles available to configure.");
    }

    const menu = new StringSelectMenuBuilder()
      .setCustomId("roleadmin_select")
      .setPlaceholder("Select roles to allow...")
      .setMinValues(1)
      .setMaxValues(roles.length)
      .addOptions(roles);

    const row = new ActionRowBuilder().addComponents(menu);

    await message.channel.send({
      content: "🛠 Select the roles you want to allow members to choose:",
      components: [row]
    });
  }
};
