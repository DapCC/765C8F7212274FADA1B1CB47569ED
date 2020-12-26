const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'kick',
    alias: ['kick'],
    execute(message, MessageEmbed, args, client) {
      const { guild, channel } = message


      const target = message.mentions.users.first()
      console.log(target)

      if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('no tienes los permisos necesarios. <a:x_:789496851471794207>')
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply('No tengo permisos para kickear usuarios.') 
      
      if(!target){return message.channel.send('Porfavor, menciona a alguien para kickear >:D')}
      if(target.id == message.author.id){return message.channel.send('¿Qué? no puedes kickearte a ti mismo.. jamas te haria daño.... ¿O quizás si?')}

      if(target.id == client.user.id){return message.channel.send('¿Porque quieres kickearme?... :(')}

      message.react('🛠️')
      const embed = new Discord.MessageEmbed()
      .setDescription('**Kickead@! <:denied:791681737776300052>**\n\neste usuario incumplio la ley!\n**Nombre: **' + target.username + `\n**Tag:** #${target.discriminator}\n**ID:** ${target.id}`)
      .setThumbnail(target.displayAvatarURL())
      .setColor('GREEN')

      message.channel.send(embed)
      message.mentions.members.first().kick()

    },
  };