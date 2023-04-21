const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('saycongrats')
		.setDescription('Say congrats to @fmilansyah'),
	async execute(interaction) {
		await interaction.reply('Congratulations to @fmilansyah for creating his first bot');
	},
};
