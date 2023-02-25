import axios from "axios";

const Discord = require('discord.js');
const client = new Discord.Client({intents:8});
const prefix= "/" ;
const config = require("./config")

client.on("ready", () => {
    
    client.user.setActivity("je sniffe ", { type: "WATCHING"}) // pour le statut du bot
    console.log(" Le Sniffer est arrivé ! !"); //
})
function findALoLUserByUserNameInEuw(){
    const url = test ;
    axios.get()
    return "mon zizi" ;
}


client.on("message", function (message) {
    
    
    if (message.content === "Salut") { // Lorsque "Salut" est envoyé
        message.channel.send("Salut mon Wati-pote!")
        message.channel.send("https://tenor.com/view/vianney-ma%C3%AEtre-gims-danse-gif-11679190")
    }
    if (message.content === "bonne journée" | message.content === "bonne journee"){
        message.channel.send("https://tenor.com/view/yass-gif-20014661")
        message.channel.send("Passe une bonne journée mon Wati-frérot !")
    }

//})
//client.on("message", function(message) { // => teste pour crée des commandes avec un préfixe
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    const command2 = args.splice(1,1).shift();

    if (command === "bg" ) {
        message.channel.send("Bien ou quoi "+message.author.toString())//deumss
    }
    if (command === "bisous"){
        message.channel.send("Bien ou quoi"+command2)
    }
    
    if (command === "casquette") {
        message.channel.send
    }

    });


client.login(config.token);
