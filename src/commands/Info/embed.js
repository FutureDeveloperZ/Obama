const { MessageEmbed } = require("discord.js");
const Command = require('../../Structure/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: 'Make and embed customizable',
			category: 'Utilities',
			usage: 'embed [text]'
		});
	}

	async run(message, args) {
	  
  const text = args.join(` `).substr(0, 1000) || "No text provided.";
  const embed = new MessageEmbed().setDescription(text).setColor("#FFFFFF");
  message.channel.send(embed);
};
}
