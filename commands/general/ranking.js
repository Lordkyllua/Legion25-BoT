const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ranking")
    .setDescription("Show the top 5 users by points"),
  async execute(interaction, client) {
    if (!client.points) return interaction.reply("⚠️ No points recorded yet.");

    const ranking = Object.entries(client.points)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    let response = "🏆 **Points Ranking:**\n";
    for (let i = 0; i < ranking.length; i++) {
      const [userId, puntos] = ranking[i];
      const user = await interaction.guild.members.fetch(userId).catch(() => null);
      const username = user ? user.user.username : "Unknown";
      response += `**${i + 1}.** ${username} — ${puntos} points\n`;
    }

    await interaction.reply(response);
  }
};
