const {
	SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
	name: "tekrar",
	command: new SlashCommandBuilder().setName("tekrar").setDescription("Sırayı tekrarlama modununu açar/kapatır."),
	async run(client, int, player, embed) {
		let queue = player.createQueue(int.guild, {
			metadata: {
				channel: int.channel
			}
		});

		let text;

		if(queue.repeatMode) {
			text = "Tekrarlama modunu kapattım!";
			queue.setRepeatMode(0);
		}
		else {
			text = "Tekrarlama modunu açtım!";
			queue.setRepeatMode(2);
		};

		

		return await int.reply({
			embeds: [embed(int.guild, int.member.user).setTitle(`${text}`).setThumbnail("https://cdn.discordapp.com/attachments/1059908288642289664/1061029186355081337/standard.gif")]
		});
	}
};