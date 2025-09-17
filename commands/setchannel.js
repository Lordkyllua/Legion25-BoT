const fs = require("fs");

module.exports = {
  name: "setchannel",
  description: "Configura canales: bienvenida | roles | juegos (solo admin)",
  async execute(message, args, client) {
    if (!message.member.permissions.has("Administrator")) return message.reply("❌ Solo administradores.");

    const type = args[0];
    if (!["bienvenida","roles","juegos"].includes(type)) return message.reply("⚠️ Uso: `!setchannel bienvenida|roles|juegos`");

    client.config[`${type}Channel`] = message.channel.id;
    fs.writeFileSync("./config.json", JSON.stringify(client.config, null, 2));
    message.reply(`✅ Canal para **${type}** configurado en <#${message.channel.id}>`);
  }
};
