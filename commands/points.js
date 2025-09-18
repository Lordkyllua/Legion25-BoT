const db = require("../utils/database");

module.exports = {
  name: "points",
  description: "Check your points",
  execute(message) {
    const points = db.getPoints(message.author.id);
    message.reply(`⭐ You have **${points}** points!`);
  }
};
