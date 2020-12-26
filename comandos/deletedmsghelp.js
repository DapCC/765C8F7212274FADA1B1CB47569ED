const Discord = require('discord.js')
const {e_download, e_calendar, e_cmd } = require('../otros/emotes.json')
const db = require('quick.db')
const pagination = require('discord.js-pagination')

module.exports = {
    name: 'deletedmsghelp',
    alias: ['deletedmsghelp'],
    execute(message, MessageEmbed, args, client) {
      const { guild, channel } = message
      if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply('no tienes los permisos necesarios. <a:x_:789496851471794207>')
      const embed = new Discord.MessageEmbed()
      .setDescription('**Ayuda en mensajes borrados <:basurero:791098168619434024>**\n\n¿Sabias que puedes ver los mensajes borrados en discord?\nclaro que se puede aqui abajo tienes las instrucciones:\n\nprimero define el canal donde se enviaran los mensajes borrados; con el comando `setdchannel`, luego debes activar la funcion con: `enabledmsg`, y el bot empezara a enviar los mensajes borrados.')
      .setColor('GREEN')
      .setImage('https://cdn.discordapp.com/attachments/790729790218174525/791095604540342272/2020-12-22_21-10-10.gif')
      message.channel.send(embed)
    
    },
  };