
const Discord = require("discord.js");
var client = new Discord.Client();

client.on("ready", function() {
        console.log("YEAAAAAAAAAAAAAAAHOOOOO!")
});

client.on("message", message => {
var msg = message.content;
if(message.author.id != "970666828433080330"){
    if(msg.startsWith("=") && msg != "=help" && !msg.startsWith("=purge ")){
        message.channel.send({embed: new Discord.RichEmbed()
                .setColor("#258345")
                .setDescription("This command doesn't exist.")
        })
     }


     // =help

     if(msg == "=help"){
        message.channel.send({embed: new Discord.RichEmbed()
                .setColor("#10A585")
                .setTitle("SFL Commands")
                .setDescription(`**Miscellaneous**
=help : Show bot commands.`)
        })
     }

     if(msg.startsWith("=purge ") && message.author.id == "634872299069374488"){
             message.delete();
             message.channel.bulkDelete(msg.slice(6,9))
     }
     //client.guilds.get("").channels.get("").send("**[#" + message.channel.name + "]** " + message.author.username + "#" + message.author.discriminator + ": " + message.content)
}
});


client.login(process.env.TOKEN);
