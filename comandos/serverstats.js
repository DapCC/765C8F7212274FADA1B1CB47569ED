const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'serverstats',
    alias: ['serverstats'],
    execute(message, MessageEmbed, args, client) {
      const { guild, channel } = message
      const randomUsr = guild.members.cache.random()
      const embed = new Discord.MessageEmbed()
      .setTitle('Estadisticas del servidor: <:users:790702607663628358>')
      .addFields({
          name: 'Usuarios del servidor:',
          value: `<:online:790706709214789672> **${guild.members.cache.size}**`,
          inline: true
      }, {
          name: 'Usuarios Bots:',
          value: `${guild.members.cache.filter(u => u.user.bot).size}`,
          inline: true
      }, {
          name: 'Canales:',
          value: `${guild.channels.cache.size}`,
          inline: true
      })
      .setColor('GREEN')
      message.channel.send(embed)
    },
  };