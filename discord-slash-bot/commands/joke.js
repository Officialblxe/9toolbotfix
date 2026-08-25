const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('joke')
    .setDescription('Get a random joke'),
  async execute(interaction) {
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "Why don't eggs tell jokes? They'd crack each other up!",
      "What do you call a fake noodle? An impasta!",
      "Why did the bicycle fall over? Because it was two-tired!",
      "What do you call cheese that isn't yours? Nacho cheese!",
      "Why can't you give Elsa a balloon? Because she will let it go!",
      "What did the ocean say to the beach? Nothing, it just waved!",
      "Why did the math book look sad? Because it had too many problems!",
      "What do you call a bear with no teeth? A gummy bear!"
    ];

    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    await interaction.reply(joke);
  },
};
