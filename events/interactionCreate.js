const db = require("../utils/database");

module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    if (!interaction.isStringSelectMenu()) return;

    // Guardar roles permitidos en roleadmin
    if (interaction.customId === "roleadmin_select") {
      db.setAllowedRoles(interaction.guild.id, interaction.values);
      await interaction.reply({
        content: `✅ Allowed roles updated: ${interaction.values.map(r => `<@&${r}>`).join(", ")}`,
        ephemeral: true
      });
    }

    // Asignar roles en roles
    if (interaction.customId === "roles_select") {
      const roleId = interaction.values[0];
      const role = interaction.guild.roles.cache.get(roleId);

      if (!role) {
        return interaction.reply({ content: "❌ Role no longer exists.", ephemeral: true });
      }

      try {
        await interaction.member.roles.add(role);
        await interaction.reply({ content: `✅ You have been given the role: **${role.name}**`, ephemeral: true });
      } catch (err) {
        console.error(err);
        await interaction.reply({ content: "⚠️ I couldn't assign that role.", ephemeral: true });
      }
    }
  }
};
