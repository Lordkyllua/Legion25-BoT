function rotateStatus(client) {
  const statuses = [
    "Tiny Survivors ⚔️",
    "Collecting points ⭐",
    "Use !help 📜",
    "Developed by LordK 💻"
  ];
  let i = 0;
  setInterval(() => {
    client.user.setPresence({
      activities: [{ name: statuses[i], type: 0 }],
      status: "online"
    });
    i = (i + 1) % statuses.length;
  }, 60000);
}

module.exports = { rotateStatus };
