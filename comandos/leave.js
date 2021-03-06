const Discord = require('discord.js')
const {e_download, e_calendar, e_cmd } = require('../otros/emotes.json')
const db = require('quick.db')
const pagination = require('discord.js-pagination')

module.exports = {
    name: 'leave',
    alias: ['leave'],
    execute(message, MessageEmbed, args, client) {
      const { guild, channel } = message
      if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply('no tienes los permisos necesarios. <a:x_:789496851471794207>')
      const embed = new Discord.MessageEmbed()
      .setAuthor('Ayuda en despedidas')
      .setDescription(`primero debes definir el canal de despedidas, esto puedes hacerlo con el comando: ` + "`es!setlchannel`" + `con este puedes definir el canal donde se dara la despedida.\n\n--> **siguiente pagina ejemplo**`)
      .setColor('GREEN')

      const embed2 = new Discord.MessageEmbed()
      .setAuthor('Ayuda en despedidas')
      .setImage('https://cdn.discordapp.com/attachments/764873874272813079/790737691271495680/unknown.png')
      .setColor('GREEN')

      const embed3 = new Discord.MessageEmbed()
      .setAuthor('Ayuda de despedidas')
      .setDescription('ahora las despedidas estaran activadas, la descripcion la puede cambiar el dueño del bot.\n\n**ejemplo:**')
      .setImage('https://cdn.discordapp.com/attachments/789628236840697910/790732180706820106/unknown.png')
      .setColor('GREEN')

      paginas = [
        embed,
        embed2,
        embed3

      ]
      const emojiList = ['⏪', '⏩'] //Definición de Emojis para pasar las páginas.
      const tiempo = '30000';

      pagination(message, paginas, emojiList, tiempo);
    },
  };