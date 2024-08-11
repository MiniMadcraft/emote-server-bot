module.exports = {
  name: 'avatar',
  description: 'Your avatar!',
  execute(message, args, Discord, client) {
    const myEmbed = new Discord.MessageEmbed()
    .setTitle("Your avatar")
    .setImage(message.author.displayAvatarURL())
    .setFooter("Emote Server Bot by Joshua")

    message.channel.send(myEmbed);
  },
};