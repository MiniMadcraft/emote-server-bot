module.exports = {
  name: 'kick',
  description: 'Kicked!',
  execute(message, args, Discord, client) {
    if (!message.member.roles.cache.some(role => role.name === 'emote guy')) return
    
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('They were bad!')
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  
    if (!message.member.roles.cache.some(role => role.name === 'smh')) return
          message.reply('You do not have permission to kick users')
        }
}
