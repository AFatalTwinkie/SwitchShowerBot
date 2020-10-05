module.exports = {
    name: 'ban',
    description: "says ban!",
    execute(message, args){
        
        
        const member = message.mentions.members.first();
        
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send ('You do not have permission to use this command.')
            
            if(!member) return message.channel.send ('You need to specify a member to ban.')
            member.ban()
            message.channel.send(`Succesfully banned ${member.user.tag}`)
    }
}