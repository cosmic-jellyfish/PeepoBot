const Discord = require('discord.js');
const oneLine = require('common-tags').oneLine;
const fetch = require('node-fetch')
var name = "earth"

exports.exec = (Peepo, message) => {
               message.reply("`Pinging the Nasa Database and retrieving footage of Earth.`")
	  	.then(message => {
    		message.delete(5000)
  		})
        var earth_link = "https://api.nasa.gov/EPIC/api/natural/images?api_key=HahaAPIkeygozing"

	function getRandomNumber(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}


        fetch(earth_link)
            .then(res => res.json())
            .then((out) => {
                var earth_output = out;

                var randomNumber = getRandomNumber(0, earth_output.length - 1)
                var image_name = earth_output[randomNumber].image

                var date = earth_output[randomNumber].date;
                var date_split = date.split("-")

                var year = date_split[0];

                var month = date_split[1];

                var day_and_time = date_split[2];
                var sliced_date = day_and_time.slice(0, 2);

                var image_link = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${sliced_date}/png/` + image_name + ".png"
                console.log(image_link)

	         const embed = new Discord.RichEmbed()
  		.setColor(0)
		.setImage(image_link)
  		.setTimestamp()
		.setFooter(`${earth_output[randomNumber].caption} on ${date}`)
  		return message.channel.send({ embed });
    })
};


/* * * */
