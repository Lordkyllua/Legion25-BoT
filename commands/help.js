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
      🎭 **!roles** - Show available roles
      🛠 **!roleadmin [Role1 Role2...]** - Configure allowed roles (Admin only)
      ⚙️ **!setchannel [welcome/roles/games] #channel** - Set channels (Admin only)
      `
    );
  }
};
