const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dice")
    .setDescription("Roll a dice (1–6)"),
  async execute(interaction) {
    const num = Math.floor(Math.random() * 6) + 1;
    await interaction.reply(`🎲 You rolled a **${num}**`);
  }
};
