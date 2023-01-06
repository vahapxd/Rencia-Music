const {
	SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
	name: "kapat",
	command: new SlashCommandBuilder().setName("kapat").setDescription("Sırayı siler ve sesten çıkar."),
	async run(client, int, player, embed) {

		let queue = player.createQueue(int.guild, {
			metadata: {
				channel: int.channel
			}
		});

		queue.destroy(true);

		return await int.reply({
			embeds: [embed(int.guild, int.member.user).setTitle("Sırayı sildim ve sesten çıktım!").setThumbnail("https://cdn.discordapp.com/attachments/1059908288642289664/1061029186355081337/standard.gif")]
		});
	}
};