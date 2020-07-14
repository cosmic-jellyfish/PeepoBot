const Discord = require('discord.js');
const oneLine = require('common-tags').oneLine;
const fetch = require('node-fetch')
var name = "neo"

exports.exec = (Peepo, message) => {

       var reply;
        var astro_link = "http://api.open-notify.org/astros.json";

        message.reply("`Pinging the Nasa Database and retrieving all near-earth objects.`")
	  	.then(message => {
    		message.delete(5000)
  		})
        var nasa_neo_checker = "https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=HahaAPIkeygozing"

        fetch(nasa_neo_checker)
            .then(res => res.json())
            .then((out) => {
                var nasa_output = out;
                var total_near_earth_objects = out.element_count;
                var neo_message = "There are a total of " + total_near_earth_objects + " near-earth objects circulating around Earth right now."

	         const embed = new Discord.RichEmbed()
  		.setColor(0)
  		.setDescription(neo_message)
  		.setTimestamp()
  		return message.channel.send({ embed });
    })
};


exports.config = {
  aliases: [],
  enabled: true
};

exports.help = {
  name: 'neo',
  description: 'Fetch how many near-earth Objects are circulating around Earth.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'neo',
  example: []
};
