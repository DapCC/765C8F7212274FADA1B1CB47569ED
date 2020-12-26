const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require("discord.js")
const {token, prefix} = require('./otros/config.json')
const { init, dev } = require('./otros/init.json')
const {textowc, textolc} = require('./otros/config.json')
let db = require('quick.db')
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
  }

client.on('ready', () =>{
    client.user.setPresence({
        status: "online",
        activity: {
          name: `${client.users.cache.size} usuarios 🍎`,
          type: "WATCHING"
        }
      });
    console.log(client.users.cache.size)

    console.log(init)
    console.log(dev)
    console.log('')
    console.log('        .- ' + client.user.username)
});

client.on('message', (message) => {


    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;
    if(message.author.id === '411706137877020682' || '677935939355410442'){

        if(message.content === 'test'){
            console.log(message.author)
        }
        try {
            command.execute(message, args, MessageEmbed, client);
        } catch (error) {
            console.error(error);
            
        }
    } else { 
        const embed3 = new MessageEmbed()
        .setDescription('🚫 **Aún no** puedes usar estos comandos, **lo siento.** 🚫')
        .setColor('GREEN')
        .setFooter('Bot siendo desarrollado por TeamEurasia', 'https://cdn.discordapp.com/icons/772105463478616065/a_1526a8975bcab3aeb79c613045ae2de7.gif')
        console.log('test')
        message.author.send(embed3)
    }

    



})

client.login(token)