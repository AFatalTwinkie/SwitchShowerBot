const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'NzMyNTY2NDc0NTA1NDUzNjQ2.Xw2dsQ.PIhBgGTR1U3aTOdveJLsTFUBDJc';

const PREFIX = '%';

const ms = require('ms');

const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith ('.js'));
for(const file of commandFiles){
    const command = require(`./Commands/${file}`);

    bot.commands.set(command.name, command);
}


bot.on('ready', () =>{
    console.log('This Bot is Online!');
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "announcements🌻");
    if(!channel) return;
    
    channel.send(`Welcome to the Shower! ${member}`);

});

bot.on('message', message => {
    if(message.content === 'hi') {
    message.channel.send('Hello!')
    }
  })

  bot.on('message', message => {
    if(message.content === 'Hi') {
    message.channel.send('Hello!')
    }
  })

  bot.on('message', message => {
    if(message.content === 'im sad') {
    message.channel.send('I am sorry to hear that. Here is a cookie 🍪')
    }
  })

  bot.on('message', message => {
    if(message.content === 'I am sad') {
    message.channel.send('I am sorry to hear that. Here is a cookie 🍪')
    }
  })

  bot.on('message', message => {
    if(message.content === "I'm sad") {
    message.channel.send('I am sorry to hear that. Here is a cookie 🍪')
    }
  })

  bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'kick':  
        bot.commands.get('kick').execute(message, args);
     
        break;

        case 'ban':
        bot.commands.get('ban').execute(message, args);

        break;

        case 'invite':
        bot.commands.get('invite').execute(message);

        break;

        case 'mute': 
        bot.commands.get('mute').execute(message, args);

        break;

        case 'creator': 
        bot.commands.get('creator').execute(message);

        break;

    }

        


});

   

   
bot.login(token);