/*
* Command: $facepalm
* Author: Cake#0002
* Description: generate a humungus faceplam
*/

const Discord = require('discord.js');
const { Attachment } = require("discord.js");
const Idiot = require("idiotic-api");

exports.exec = async (client, message, args, API, user) => {
client.API = new Idiot.Client("xxxxxxxxxxxxxx", { dev: true });


	let url = message.author.displayAvatarURL;
    if (message.mentions.users.first()) {
    url = message.mentions.users.first().displayAvatarURL;
    }


	message.channel.send('`Processing image`.')
	.then(msg => {
    msg.delete(5000)
	})
    message.channel.startTyping();
    let bs = await client.API.facepalm(url);
    
    await message.channel.stopTyping();
    return message.channel.send({ files: [{ attachment: bs }] });
	
};



/* * * * */
