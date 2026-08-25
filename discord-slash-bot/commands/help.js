const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Shows all available commands'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setTitle('Bot Commands')
      .setDescription('Here are all the available slash commands:')
      .addFields(
        { name: 'Utility', value: '`/ping` `/serverinfo` `/userinfo` `/avatar` `/membercount` `/invite`', inline: false },
        { name: 'Games & Fun', value: '`/coinflip` `/dice` `/rps` `/8ball` `/joke`', inline: false },
        { name: 'Hangout & Chill', value: '`/chill` `/hangout` `/event`', inline: false },
        { name: 'Roles', value: '`/roleinfo`', inline: false },
        { name: 'Music', value: '`/play` (basic - full music coming soon)', inline: false }
      )
      .setFooter({ text: 'Use / before every command' })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
