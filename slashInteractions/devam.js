const {
	SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
	name: "devam",
	command: new SlashCommandBuilder().setName("devam").setDescription("Şarkıya devam ettirir."),
	async run(client, int, player, embed) {

		let queue = player.createQueue(int.guild, {
			metadata: {
				channel: int.channel
			}
		});

		queue.setPaused(false);

		await int.reply({
			embeds: [embed(int.guild, int.member.user).setTitle("Devam ediyor!").setThumbnail("https://cdn.discordapp.com/attachments/1059908288642289664/1061029186355081337/standard.gif")]
		});
	}
};