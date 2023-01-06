const {
	SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
	name: "karıştır",
	command: new SlashCommandBuilder().setName("karıştır").setDescription("Sırayı karıştırır."),
	async run(client, int, player, embed) {
		let queue = player.createQueue(int.guild, {
			metadata: {
				channel: int.channel
			}
		});

		queue.shuffle();

		return await int.reply({
			embeds: [embed(int.guild, int.member.user).setTitle("Sırayı karıştırdım!").setThumbnail("https://cdn.discordapp.com/attachments/1059908288642289664/1061029186355081337/standard.gif")]
		});
	}
};