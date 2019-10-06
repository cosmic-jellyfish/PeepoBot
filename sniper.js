/*
* Command: $sniper
* Author: Cake#0002
* Description: Some sniper scope with avatar
*/

const Discord = require('discord.js');
const { Attachment } = require("discord.js");
const Idiot = require("idiotic-api");

exports.exec = async (client, message, args, API, user) => {
client.API = new Idiot.Client("xxxxxxxxxxxxxx", { dev: true });
    // Fires Error message that the command wasn't ran correctly.
    if (args == '') {
        return client.emit('commandUsage', message, this.help);
    }
    // Fires Error message that the command wasn't ran correctly.

	let url = message.author.displayAvatarURL;
    if (message.mentions.users.first()) {
    url = message.mentions.users.first().displayAvatarURL;
    }

	message.channel.send('`Processing image`.')
	.then(msg => {
    msg.delete(5000)
	})
    message.channel.startTyping();
    let bs = await client.API.sniper(url);
    
    await message.channel.stopTyping();
    return message.channel.send({ files: [{ attachment: bs }] });

};




/* * * * */

