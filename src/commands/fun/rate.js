const { MessageEmbed } = require("discord.js")
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Rate something idk',
			category: 'Fun',
			usage: 'rate <something>'
		});
	}
	
async run(message, args) {

   if(!args[0]) return message.channel.send("**Ask me to rate someone or something** \n`rate <someone/something>`");
   let ratings = ["0", "⭐ - 1", "⭐⭐ - 2", "⭐⭐⭐ - 3", "⭐⭐⭐⭐- 4", "⭐⭐⭐⭐⭐ - 5", "⭐⭐⭐⭐⭐⭐ - 6",  "⭐⭐⭐⭐⭐⭐ - 7", "⭐⭐⭐⭐⭐⭐⭐⭐ - 8", "⭐⭐⭐⭐⭐⭐⭐⭐⭐ - 9", "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ - 10"];

   let result = Math.floor((Math.random() * ratings.length));
   let user = message.mentions.users.first();

   let rateEmbed = new MessageEmbed()

   .setAuthor(message.author.username)
   .setColor("#000000")
   .addField("Something", args[0])
   .addField("Rating", ratings[result])
   .setTimestamp()
   .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL()}`)

   message.channel.send(rateEmbed)


}
}