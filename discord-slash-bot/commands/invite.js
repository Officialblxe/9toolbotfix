const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('invite')
    .setDescription('Get an invite link for this bot'),
  async execute(interaction) {
    const clientId = process.env.CLIENT_ID;
    const invite = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&permissions=8&scope=bot%20applications.commands`;
    await interaction.reply(`Invite me to your server:\n${invite}`);
  },
};
