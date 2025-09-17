module.exports = {
  name: "puntos",
  description: "Muestra puntos de usuario",
  async execute(message, args, client) {
    const userId = message.author.id;
    const points = client.points.get(userId) || 0;
    message.reply(`⭐ ${message.author.username}, tienes **${points} puntos**.`);
  }
};
