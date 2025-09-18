const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rps")
    .setDescription("Play Rock, Paper, Scissors")
    .addStringOption(option =>
      option.setName("choice")
        .setDescription("Your choice")
        .setRequired(true)
        .addChoices(
          { name: "Rock", value: "rock" },
          { name: "Paper", value: "paper" },
          { name: "Scissors", value: "scissors" }
        )
    ),
  async execute(interaction) {
    const choice = interaction.options.getString("choice");
    const options = ["rock", "paper", "scissors"];
    const bot = options[Math.floor(Math.random() * 3)];

    let result = "🤝 It's a tie!";
    if (
      (choice === "rock" && bot === "scissors") ||
      (choice === "paper" && bot === "rock") ||
      (choice === "scissors" && bot === "paper")
    ) {
      result = "🎉 You win!";
    } else if (choice !== bot) {
      result = "💀 You lose!";
    }

    await interaction.reply(`🧑 You: ${choice}\n🤖 Bot: ${bot}\n➡️ ${result}`);
  }
};
