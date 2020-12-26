const Discord = require('discord.js')
const db = require('quick.db')
const {e_check} = require('../otros/emotes.json')

module.exports = {
    name: 'fkick',
    alias: ['fkick'],
    execute(message, MessageEmbed, args, client) {

        console.log('fkick')
      message.delete();
      let razones = [
          'Golpear a otro usuario',
          'Insultar al dev',
          'Bailar sin permiso de un admin',
          'Comerse los pasteles del Owner',
          'no respetar al bot',
          'ser muy facha'
      ]

      var aleatory = Math.floor(Math.random()* (razones.length));

      const { guild, channel } = message
      let user = message.mentions.users.first()

      if(!user){return message.reply('¿Y el user?')} else {
        const embed1 = new Discord.MessageEmbed()
        .setDescription('**FakeKick** enviado **correctamente** ' + e_check)
        .setColor('GREEN')
        const server = message.guild.name
        message.channel.send(embed1).then(msg => msg.delete({timeout: 2000}))

        const embed2 = new Discord.MessageEmbed()
        .setDescription('**Has sido kickeado** <:denied:791681737776300052>\n' + `Has sido kickeado del servidor ${server}.\n\n**Razón:**\n${razones[aleatory]}`)
        .setColor('GREEN')

        user.send(embed2)
      }
      
    },
  };