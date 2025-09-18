module.exports = {
  name: "ppt",
  description: "Rock Paper Scissors",
  execute(message, args) {
    const choices = ["rock", "paper", "scissors"];
    const userChoice = args[0]?.toLowerCase();
    if (!choices.includes(userChoice)) {
      return message.reply("❌ Use: !ppt rock/paper/scissors");
    }
    const botChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "🤝 It's a tie!";
    if (
      (userChoice === "rock" && botChoice === "scissors") ||
      (userChoice === "paper" && botChoice === "rock") ||
      (userChoice === "scissors" && botChoice === "paper")
    ) {
      result = "🎉 You win!";
    } else if (userChoice !== botChoice) {
      result = "😢 You lose!";
    }
    message.reply(`You chose **${userChoice}** - I chose **${botChoice}**\n${result}`);
  }
};
