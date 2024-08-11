module.exports = {
  name: 'bomb',
  description: 'Banned!',
  execute(message, args, Discord, client) {
    let winner = message.guild.members.cache.random().user;
      if (!message.member.roles.cache.some(role => role.name === 'emote guy')) return
      message.channel.send(`Congratulations ${winner}! You get bombed and banned from the server!`);
      message.channel.send(`https://gifimage.net/wp-content/uploads/2017/11/explosion-gif-animado-10.gif`)
      const member = message.guild.member(winner);
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            message.reply(`Successfully banned ${member}`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
  }
}