const db = require("../utils/database");

module.exports = {
  name: "ranking",
  description: "Show top users",
  execute(message) {
    const top = db.getRanking();
    if (!top.length) return message.channel.send("🏆 No points yet!");
    const leaderboard = top.map((u, i) => `${i + 1}. <@${u.id}> - ⭐ ${u.points}`).join("\n");
    message.channel.send(`🏆 **Ranking**\n${leaderboard}`);
  }
};
