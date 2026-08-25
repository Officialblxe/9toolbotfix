const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Play music (basic version)')
    .addStringOption(option =>
      option.setName('song')
        .setDescription('Song name or YouTube link')
        .setRequired(true)),
  async execute(interaction) {
    const song = interaction.options.getString('song');

    const embed = new EmbedBuilder()
      .setColor(0x57F287)
      .setTitle('Music Request')
      .setDescription(`You requested: **${song}**`)
      .addFields(
        { name: 'Note', value: 'Full music playback (with voice) requires extra setup and packages.\nFor now this is a placeholder. I can upgrade this to a real music bot if you want.' }
      )
      .setFooter({ text: 'Coming soon: real YouTube / Spotify playback' });

    await interaction.reply({ embeds: [embed] });
  },
};
