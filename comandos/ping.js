const Discord = require('discord.js')
const {prefix} = require('../otros/config.json')

module.exports = {
    name: 'ping',
    alias: ['ping'],
    execute(message, MessageEmbed, args, client) {
      const embed = new Discord.MessageEmbed()
      .setDescription('Pong! 🏓 | `' + client.ws.ping + 'ms` | Prefix: `' + prefix + '`')
      .setColor('GREEN')
      message.channel.send(embed)
    },
  }; 