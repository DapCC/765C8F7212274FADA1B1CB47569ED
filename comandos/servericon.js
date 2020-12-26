const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'servericon',
    alias: ['servericon'],
    execute(message, MessageEmbed, args, client) {
      const randomUsr = client.users.cache.random()
      const embed = new Discord.MessageEmbed()
      .setTitle('Foto del servidor:')
      .setDescription(`[Link foto original](${message.guild.iconURL({format:'gif'})})`)
      .setImage(`${message.guild.iconURL( {size: 4096, dynamic:true})}`)
      .setColor('GREEN')
      message.channel.send(embed)
    },
  };