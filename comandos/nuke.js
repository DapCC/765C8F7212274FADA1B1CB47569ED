const Discord = require('discord.js')
const {e_download, e_calendar, e_cmd, e_check } = require('../otros/emotes.json')
const db = require('quick.db')
const pagination = require('discord.js-pagination')

module.exports = {
    name: 'nuke',
    alias: ['nuke'],
    execute(message, MessageEmbed, args, client) {

      let channel1 = message.channel
      const channel2 = client.channels.cache.find(channel => channel.name === channel1.name)


      if(!message.member.hasPermission("MANAGE_CHANNELS")){return message.channel.send('no tienes los permisos suficientes, lo siento.').then(msg => msg.delete({timeout:3000}))}
      if(!message.guild.me.hasPermission("MANAGE_CHANNELS")){return message.channel.send('No cuento con los permisos necesarios.').then(msg => msg.delete({timeout:3000}))}
      if(!channel1.deletable){return message.channel.send('este canal no se puede borrar, ¡es indestructible!... 💥').then(msg => msg.delete({timeout:3000}))}
      
      
      channel1.clone().then((canal) => {
        channel1.delete();
        setTimeout(() => {
        canal.send(embed)
      }, 800)
      }).catch(err => console.log(err));

      const embed = new Discord.MessageEmbed()
      .setAuthor('Este canal ha hecho... ¡KABOOM!')
      .setImage('https://i.pinimg.com/originals/c4/3e/f1/c43ef1eed9bbb73d800e6d1a6d50b208.gif')
      .setColor('GREEN')
      
      
      const msg = channel2

    },
  };