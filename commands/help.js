module.exports = {
  name: "help",
  description: "Show all commands",
  execute(message) {
    message.channel.send(
      `📜 **Commands List**
      
      🎲 **!dado** - Roll a dice
      ✊ **!ppt [rock/paper/scissors]** - Play Rock Paper Scissors
      ⭐ **!ranking** - Show the top active members
      🏅 **!points** - Show your points
      🎭 **!roleadmin** - Configure selectable roles (Admin only)
      `
    );
  }
};
