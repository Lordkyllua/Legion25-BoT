const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ppt",
  description: "Juega piedra, papel o tijera",
  async execute(message, args, client) {
    const opciones = ["piedra","papel","tijera"];
    const botChoice = opciones[Math.floor(Math.random()*3)];
    const userChoice = args[0]?.toLowerCase();
    if(!opciones.includes(userChoice)) return message.reply("⚠️ Usa: `!ppt piedra|papel|tijera`");

    let resultado = "Empate";
    if((userChoice==="piedra" && botChoice==="tijera")||
       (userChoice==="papel" && botChoice==="piedra")||
       (userChoice==="tijera" && botChoice==="papel")) resultado="Ganaste 🎉";
    else if(userChoice!==botChoice) resultado="Perdiste 😢";

    const embed = new EmbedBuilder()
      .setColor("Purple")
      .setTitle("✂️ Piedra Papel Tijera")
      .setDescription(`Tu elección: **${userChoice}**\nMi elección: **${botChoice}**\nResultado: **${resultado}**`);

    const channelId = client.config.gamesChannel || message.channel.id;
    const channel = message.guild.channels.cache.get(channelId);
    if(!channel) return message.reply("⚠️ Canal de juegos no configurado.");

    channel.send({ embeds: [embed] });
  }
};
                
