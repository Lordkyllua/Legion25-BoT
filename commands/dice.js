module.exports = {
  name: "dado",
  description: "Roll a dice",
  execute(message) {
    const roll = Math.floor(Math.random() * 6) + 1;
    message.reply(`🎲 You rolled a **${roll}**!`);
  }
};
