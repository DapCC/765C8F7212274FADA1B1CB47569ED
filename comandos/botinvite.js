const Discord = require('discord.js')

module.exports = {
    name: 'botinvite',
    alias: ['botinvite'],
    execute(message, MessageEmbed, args, client) {
      const embed = new Discord.MessageEmbed()
      .setTitle('Invitacion del bot:')
      .setDescription(`[Click Aqui para invitar el bot a tu servidor](https://discord.com/api/oauth2/authorize?client_id=790309784804261920&permissions=8&scope=bot)`)
      .setColor('GREEN')
      message.channel.send(embed)
    },
  };