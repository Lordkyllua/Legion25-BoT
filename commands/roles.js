const { ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");
const db = require("../utils/database");

module.exports = {
  name: "roles",
  description: "Show available roles to choose",
  async execute(message) {
    const allowedRoles = db.getAllowedRoles(message.guild.id);

    if (!allowedRoles.length) {
      return message.channel.send("❌ No roles configured. Ask an admin to use !roleadmin.");
    }

    const roles = allowedRoles
      .map(roleId => {
        const role = message.guild.roles.cache.get(roleId);
        return role ? { label: role.name, value: role.id } : null;
      })
      .filter(r => r !== null);

    if (!roles.length) {
      return message.channel.send("⚠️ The configured roles no longer exist.");
    }

    const menu = new StringSelectMenuBuilder()
      .setCustomId("roles_select")
      .setPlaceholder("Select a role...")
      .addOptions(roles);

    const row = new ActionRowBuilder().addComponents(menu);

    await message.channel.send({
      content: "🎭 Choose your role:",
      components: [row]
    });
  }
};
