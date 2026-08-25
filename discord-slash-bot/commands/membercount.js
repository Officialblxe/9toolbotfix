const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('membercount')
    .setDescription('Shows the current member count of the server'),
  async execute(interaction) {
    await interaction.reply(`This server has **${interaction.guild.memberCount}** members.`);
  },
};
