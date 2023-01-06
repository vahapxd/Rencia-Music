const {
	SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
	name: "ses",
	command: new SlashCommandBuilder().setName("ses").setDescription("Ses ayarlar.").addIntegerOption(o => o.setName("value").setDescription("Değer").setRequired(true)),
	async run(client, int, player, embed) {

		let value = int.options.getInteger("value");

		if (isNaN(value)) return await int.reply({
			embeds: [embed(int.guild, int.member.user).setColor("RED").setTitle("Lütfen sayı girin!")]
		});

		let queue = player.createQueue(int.guild, {
			metadata: {
				channel: int.channel
			}
		});

		queue.setVolume(value);

		await int.reply({
			embeds: [embed(int.guild, int.member.user).setTitle(`Ses ${value} olarak ayarlandı!`).setThumbnail("https://cdn.discordapp.com/attachments/1059908288642289664/1061029186355081337/standard.gif")]
		});
	}
};