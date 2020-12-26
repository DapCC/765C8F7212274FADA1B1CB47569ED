const Discord = require('discord.js')

module.exports = {
    name: 'help',
    alias: ['help'],
    execute(message, MessageEmbed, args, client) {
      const embed = new Discord.MessageEmbed()
      .setTitle('Panel Help')
      .setDescription('Hola soy Neon Bot, estoy preparado para servirte, aqui tienes todos mis comandos.')
      .addFields({
            name:"Comandos Admin/Moderación <:alert:789497448413921322>",
            value:"`ban` `kick` `nuke` `fakeban` `fakekick` ",
            inline: false
        }, {
            name:"Comandos de Configuración <:CMD:790341286195757057>",
            value:"`help welcome` `help leave`",
            inline: false
        }, {
            name: "Comandos Divertidos <:cloud:790342261393195029>",
            value: "`archivement` `8ball`  `coinflip` `say`",
            inline: false
        }, {
            name: "Comandos Informativos <:info:790345065905127424>",
            value: "`botinfo` `serverinfo` `userinfo <user>` `serverstats` `updates`",
            inline: false
        }, {
            name: "Utilidades <:tabs:790346845599563776>",
            value: "`botinvite` `jumbo` `randomuser` `servericon` `userinfo`"
        })
      .setColor('GREEN')
      message.author.send(embed)
      const embed2 = new Discord.MessageEmbed()
      .setDescription(`**Ve tus mensajes directos <@!${message.author.id}>**`)
      .setColor('GREEN')
      message.channel.send(embed2)
    },
  };