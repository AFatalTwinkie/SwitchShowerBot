module.exports = {
    name: 'kick',
    description: "says kick!",
    execute(message, args){
        
        
        const member = message.mentions.members.first();
        
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send ('You do not have permission to use this command.')
            
            if(!member) return message.channel.send ('You need to specify a member to kick.')
            member.kick()
            message.channel.send(`Succesfully kicked ${member.user.tag}`)
    }
}