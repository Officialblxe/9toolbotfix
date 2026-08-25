const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hangout')
    .setDescription('Start a hangout session in this server'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0xFEE75C)
      .setTitle('Hangout Time!')
      .setDescription(`${interaction.user} is looking for people to hang out with!`)
      .addFields(
        { name: 'What to do', value: 'Jump in a voice channel, play some games, or just chat.' },
        { name: 'Ideas', value: '• Watch a movie together\n• Play multiplayer games\n• Just vibe and talk' }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
