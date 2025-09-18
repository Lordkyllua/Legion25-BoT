const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Show all available commands"),
  async execute(interaction, client) {
    let reply = "📜 **Available Commands:**\n\n";
    client.commands.forEach(cmd => {
      reply += `**/${cmd.data.name}** → ${cmd.data.description}\n`;
    });
    await interaction.reply(reply);
  }
};
