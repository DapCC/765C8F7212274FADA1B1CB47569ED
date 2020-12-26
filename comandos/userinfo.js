const Discord = require('discord.js')
const {e_download, e_calendar, e_cmd } = require('../otros/emotes.json')
const db = require('quick.db')

module.exports = {
    name: 'userinfo',
    alias: ['userinfo'],
    execute(message, MessageEmbed, args, client) {
      const { guild, channel } = message

      let nombres = [
          '¿Para que quieres saber?',
          'Ya lo pusiste tu',
          'Que mal amigo eres, ¿como no te sabes su nombre?',
          'no te lo quiero decir.'
      ]

      var aleatory = Math.floor(Math.random()* (nombres.length));

      let user = message.mentions.users.first()
      

      if(!user) return message.channel.send('Debes **mencionar** a alguien primero. ' + e_cmd)
      const member = guild.members.cache.get(user.id)
      const embed = new Discord.MessageEmbed()
      .setTitle('Robando datos')
      .setDescription(`${e_cmd} Te han **vulnerado** <@!${user.id}>`)
      .addFields({
          name: 'Nombre el usuario',
          value: `**${nombres[aleatory]}**`,
          inline: true
      },{
          name: 'ID del usuario',
          value: '`' + user.id + '`',
          inline: true
      },{
          name: 'Link foto de perfil',
          value: `[Link de la foto](${user.displayAvatarURL({format:'gif'})})`,
          inline: true
      }, {
          name: 'Se unio al servidor:',
          value: `${e_calendar} **` + new Date(member.joinedTimestamp).toLocaleDateString() + '**',
          inline: true
      }, {
          name: 'Se unio a Discord',
          value: `${e_calendar} **` + new Date(member.createdTimestamp).toLocaleDateString() + '**',
          inline: true
      })
      .setThumbnail(user.displayAvatarURL({format:'gif'}))
      .setColor('GREEN')

      message.channel.send(embed)
    },
  };