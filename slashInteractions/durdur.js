const {
	SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
	name: "durdur",
	command: new SlashCommandBuilder().setName("durdur").setDescription("Şarkıyı durdurur."),
	async run(client, int, player, embed) {

		let queue = player.createQueue(int.guild, {
			metadata: {
				channel: int.channel
			}
		});

		queue.setPaused(true);

		await int.reply({
			embeds: [embed(int.guild, int.member.user).setTitle("Durduruldu!").setThumbnail("https://cdn.discordapp.com/attachments/1059908288642289664/1061029186355081337/standard.gif")]
		});
	}
};