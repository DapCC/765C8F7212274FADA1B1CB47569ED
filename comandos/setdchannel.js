const Discord = require('discord.js')
const {e_download, e_calendar, e_cmd, e_check } = require('../otros/emotes.json')
const db = require('quick.db')
const pagination = require('discord.js-pagination')

module.exports = {
    name: 'setdchannel',
    alias: ['setdchannel'],
    execute(message, MessageEmbed, args, client) {

      let channel = message.mentions.channels.first()
      if(!channel) return message.reply('¿y el canal?, menciona el canal.')
      const { guild, } = message
      if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply('no tienes los permisos necesarios. <a:x_:789496851471794207>')
      const embed = new Discord.MessageEmbed()
      .setDescription(`canal ${channel} definido **correctamente** ${e_check}`)
      .setColor('GREEN')
      message.channel.send(embed)
      db.set(`dch_${message.guild.id}`, channel.id)
      console.log(db.get(`}dch_${message.guild.id}`))

    },
  };