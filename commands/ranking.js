const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ranking",
  description: "Top usuarios con más puntos",
  async execute(message, args, client) {
    const sorted = [...client.points.entries()].sort((a,b) => b[1]-a[1]).slice(0,10);
    if (!sorted.length) return message.reply("⚠️ No hay puntos aún.");

    const desc = sorted.map(([id, pts], i) => `${i+1}. <@${id}> - **${pts} puntos**`).join("\n");

    const embed = new EmbedBuilder()
      .setColor("Gold")
      .setTitle("🏆 Ranking de puntos")
      .setDescription(desc);

    message.reply({ embeds: [embed] });
  }
};
