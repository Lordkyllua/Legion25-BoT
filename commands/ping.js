module.exports = {
  name: "ping",
  description: "Verifica latencia del bot",
  async execute(message) {
    const sent = await message.channel.send("🏓 Pong!");
    sent.edit(`🏓 Pong! Latencia: **${sent.createdTimestamp - message.createdTimestamp}ms**`);
  }
};
