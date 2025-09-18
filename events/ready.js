module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`✅ Logged in as ${client.user.tag}`);

    // Lista de estados dinámicos
    const statuses = [
      { name: "Tiny Survivors 🏹", type: 0 }, // Playing
      { name: "farming resources ⛏️", type: 0 },
      { name: "helping allies 🤝", type: 0 },
      { name: "training troops ⚔️", type: 0 },
      { name: "protecting the base 🏰", type: 0 },
      { name: "planning strategies 🧠", type: 0 },
      { name: "exploring dungeons 🗺️", type: 0 }
    ];

    let i = 0;

    // Cambia el estado cada minuto
    setInterval(() => {
      const status = statuses[i];
      client.user.setPresence({
        activities: [{ name: status.name, type: status.type }],
        status: "online"
      });
      i = (i + 1) % statuses.length; // Avanza en la lista de estados
    }, 60 * 1000); // 1 minuto

    // Poner el primero al arrancar
    client.user.setPresence({
      activities: [statuses[0]],
      status: "online"
    });

    // About me (se edita en la app del bot)
    client.application.edit({
      description: "Developed by LordK"
    }).catch(err => console.log("⚠️ No se pudo actualizar la descripción:", err));
  }
};
