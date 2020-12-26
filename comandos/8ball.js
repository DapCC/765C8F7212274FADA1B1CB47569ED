const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: '8ball',
    alias: ['8ball'],
    execute(message, MessageEmbed, args, client) {
    
    const {guild, channel} = message

    const randomUsr = guild.members.cache.random()
    let respuestas = [
        'Que se yo',
        'NO', 
        'Si...',
        'si',
        'preguntale a <@!' + randomUsr + '>',
        'Nop',
        '¿Quien sabe eso? ni Einstein sabe.'
    ]
  
    var aleatorio = Math.floor(Math.random()* (respuestas.length));
    message.channel.send(respuestas[aleatorio])
      
    },
  };