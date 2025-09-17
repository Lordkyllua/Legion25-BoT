module.exports = {
  name: "messageCreate",
  async execute(message, client) {
    if (message.author.bot) return;
    const userId = message.author.id;
    const current = client.points.get(userId) || 0;
    client.points.set(userId, current + 1);
  }
};
