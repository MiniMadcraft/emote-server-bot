module.exports = {
    name: 'ping',
    description: 'Pong!',
    execute(message, args, Discord, client) {
      const myEmbed = new Discord.MessageEmbed()
      .setTitle("Ping")
      .setThumbnail("https://cdn.discordapp.com/avatars/754062606876278914/28899e0343ab5a541435564d9872bb7f.png?size=128")
      .addField(`${Date.now() - message.createdTimestamp}ms`, `\u200B`)
      .setFooter("Emote Server Bot by Joshua")
    
    message.channel.send(myEmbed);
  },
};