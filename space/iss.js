const Discord = require('discord.js');
const oneLine = require('common-tags').oneLine;
const fetch = require('node-fetch')


exports.exec = (Peepo, message) => {

       var iss_link = "http://api.open-notify.org/iss-now.json"
        fetch(iss_link)
            .then(res => res.json())
            .then((out) => {
                var iss_info = out;
                var position = iss_info["iss_position"];
                var latitude = position["latitude"];
                var longitude = position["longitude"];

                var iss_output = `Latitude: ${latitude}\nLongitude: ${longitude}`

	         const embed = new Discord.RichEmbed()
  		.setColor(0)
		.setTitle(`Location currently of the International Space Station`)
  		.setDescription(iss_output)
  		.setTimestamp()
		.setThumbnail("https://newslanded.com/wp-content/uploads/2020/03/Featured-min-1068x534.jpg")
		.setFooter(`API updates every second.`)
  		return message.channel.send({ embed });
    })
};


/* * * */

