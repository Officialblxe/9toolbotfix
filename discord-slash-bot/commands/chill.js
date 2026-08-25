const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('chill')
    .setDescription('Start a chill vibes session'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x57F287)
      .setTitle('Chill Mode Activated')
      .setDescription('Time to relax and hang out.\n\nGrab a drink, put on some lo-fi, and enjoy the vibes.')
      .addFields(
        { name: 'Suggested', value: 'Join a voice channel and just talk, play games, or listen to music together.' }
      )
      .setFooter({ text: 'No stress, just good times' })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
