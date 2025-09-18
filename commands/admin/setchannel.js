const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const fs = require("fs");
const config = require("../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setchannel")
    .setDescription("Set channels for welcome, roles or games")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption(option =>
      option.setName("type")
        .setDescription("Channel type")
        .setRequired(true)
        .addChoices(
          { name: "Welcome", value: "welcome" },
          { name: "Roles", value: "roles" },
          { name: "Games", value: "games" }
        )
    )
    .addChannelOption(option =>
      option.setName("channel")
        .setDescription("Channel to assign")
        .setRequired(true)
    ),
  async execute(interaction) {
    const type = interaction.options.getString("type");
    const channel = interaction.options.getChannel("channel");

    config.channels[type] = channel.id;
    fs.writeFileSync("./config.json", JSON.stringify(config, null, 2));

    await interaction.reply(`✅ Channel for **${type}** set to ${channel}`);
  }
};
