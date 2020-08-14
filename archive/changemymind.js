/*
* Command: $changemymind
* Author: Cake#0585
* Description: Change my mind meme with text
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
	message.channel.send('`Processing image`.')
	.then(msg => {
    msg.delete(5000)
	})
    message.channel.startTyping();
    let bs = await client.API.changemymind(message.author.displayAvatarURL, args.join(' '));
    
    await message.channel.stopTyping();
    return message.channel.send({ files: [{ attachment: bs }] });
	
};



/* * * * */
