module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`✅ Logged in as ${client.user.tag}`);

    // 👾 Estado del bot
    client.user.setPresence({
      activities: [{ name: "Tiny Survivors", type: 0 }], // 0 = Playing
      status: "online"
    });

    // 📝 Información del bot (About Me)
    client.user.setPresence({
      activities: [{ name: "Tiny Survivors", type: 0 }],
      status: "online"
    });

    client.application.edit({
      description: "Developed by LordK"
    }).catch(err => console.log("⚠️ No se pudo actualizar la descripción del bot:", err));
  }
};
