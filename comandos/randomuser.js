const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'randomuser',
    alias: ['randomuser'],
    execute(message, MessageEmbed, args, client) {
      const { guild, channel } = message
      const randomUsr = guild.members.cache.random()
      const embed = new Discord.MessageEmbed()
      .setAuthor('Calculando usuario... 📐')
      .setDescription('Aqui esta 👉 <@!' + randomUsr + '> 👈')
      .setColor('GREEN')
      .setFooter('⚙ pedido por: ' + message.author.username)
      message.channel.send(embed)
    },
  };