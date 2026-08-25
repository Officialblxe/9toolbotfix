const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('event')
    .setDescription('Announce or create a simple event')
    .addStringOption(option =>
      option.setName('title')
        .setDescription('Name of the event')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('description')
        .setDescription('What is the event about?')
        .setRequired(false))
    .addStringOption(option =>
      option.setName('time')
        .setDescription('When is it happening?')
        .setRequired(false)),
  async execute(interaction) {
    const title = interaction.options.getString('title');
    const description = interaction.options.getString('description') || 'No description provided.';
    const time = interaction.options.getString('time') || 'TBD';

    const embed = new EmbedBuilder()
      .setColor(0xEB459E)
      .setTitle(`Event: ${title}`)
      .setDescription(description)
      .addFields(
        { name: 'Hosted by', value: `${interaction.user}`, inline: true },
        { name: 'When', value: time, inline: true }
      )
      .setFooter({ text: 'React or reply if you want to join!' })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
