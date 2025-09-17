module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`✅ Bot conectado como ${client.user.tag}`);
    client.user.setActivity("🎮 Juegos y roles", { type: 0 });
  }
};
