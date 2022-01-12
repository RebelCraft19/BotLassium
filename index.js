const Discord = require("discord.js")

const Client = new Discord.Client();

const bdd = require("./bdd.json");

const fs = require("fs")

const prefix = "!";



Client.on("ready", () => {
    console.log("Bot opérationnel");
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    if(message.member.hasPermission){
        if(message.content.startsWith(prefix + kick)){
            let mention = message.mentions.members.first();
        }
    }
});


fs.writeFile("./bdd.json", JSON.stringify(economy, null, 4), (err) => {
    if (err)
        message.channel.send("Une erreur est survenue");
});
