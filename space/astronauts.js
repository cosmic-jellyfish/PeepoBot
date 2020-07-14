const Discord = require('discord.js');
const oneLine = require('common-tags').oneLine;
const fetch = require('node-fetch')
var name = "astronauts"

exports.exec = (Peepo, message) => {

        var reply;
        var astro_link = "http://api.open-notify.org/astros.json";

        fetch(astro_link)
            .then(res => res.json())
            .then((out) => {
                var astro_list = out;
                var number_astronauts = astro_list["number"];

                var astro_output = `There are currently **${number_astronauts}** astronauts aboard the International Space Station (ISS) right now.`

                 const embed = new Discord.RichEmbed()
  		.setColor(0)
  		.setDescription(astro_output)
  		.setTimestamp()
  		return message.channel.send({ embed });

                    

    })
};


exports.config = {
  aliases: [],
  enabled: true
};

exports.help = {
  name: 'astronauts',
  description: 'Fetch how many Astronauts are currently aboard the ISS.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'astronauts',
  example: []
};
