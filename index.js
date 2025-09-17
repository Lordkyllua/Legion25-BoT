const { Client, GatewayIntentBits, Collection, Partials } = require("discord.js");
const fs = require("fs");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

client.commands = new Collection();
client.points = new Map();
client.config = require("./config.json");

// Cargar comandos
fs.readdirSync("./commands").filter(f => f.endsWith(".js")).forEach(file => {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
});

// Cargar eventos
fs.readdirSync("./events").filter(f => f.endsWith(".js")).forEach(file => {
  const event = require(`./events/${file}`);
  if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
  else client.on(event.name, (...args) => event.execute(...args, client));
});

// Prefijo
client.on("messageCreate", async message => {
  if (message.author.bot || !message.content.startsWith("!")) return;

  const args = message.content.slice(1).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName);
  if (!command) return;

  try { await command.execute(message, args, client); }
  catch(err) { console.error(err); message.reply("⚠️ Error ejecutando comando."); }
});

// Menu de roles
client.on("interactionCreate", async interaction => {
  if (!interaction.isStringSelectMenu()) return;
  if (interaction.customId === "select-role") {
    const roleId = interaction.values[0];
    const role = interaction.guild.roles.cache.get(roleId);
    try {
      await interaction.member.roles.add(role);
      await interaction.reply({ content: `✅ Se te asignó el rol **${role.name}** 🎉`, ephemeral: true });
    } catch(err) { console.error(err); await interaction.reply({ content: "⚠️ No pude asignar ese rol.", ephemeral: true }); }
  }
});

client.login(process.env.DISCORD_TOKEN);
                                                                    
