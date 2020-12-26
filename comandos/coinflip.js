const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'coinflip',
    alias: ['coinflip'],
    execute(message, MessageEmbed, args, client) {

    let coin = [
        '<:simpcoinfront:790711721651732491>',
        '<:simpcoinback:790711699866517545>'
    ]
  
    var aleatorio = Math.floor(Math.random()* (coin.length));
      const randomUsr = client.users.cache.random()
      const embed = new Discord.MessageEmbed()
      .setTitle('Lanzando moneda...')
      .setDescription('El lanzamiento a resultado en... ' + coin[aleatorio] +`\n\n<:simpcoinfront:790711721651732491> parte frontal\n<:simpcoinback:790711699866517545> parte trasera`)
      .setColor('GREEN')
      message.channel.send(embed)
      
    },
  };