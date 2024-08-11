module.exports = {
  name: 'help',
  description: 'Help!',
  execute(message, args, Discord, client) {
    const myEmbed = new Discord.MessageEmbed()
                .setTitle("Help section")
                .setThumbnail("https://cdn.discordapp.com/avatars/754062606876278914/28899e0343ab5a541435564d9872bb7f.png?size=128")
                .addField("**:laughing: Fun commands**", `\u200B`)
                .addField("!helpfun", `\u200B`)
                .addField("**:police_officer: Moderation commands**", `\u200B`)
                .addField("!helpmod", `\u200B`)
                .addField("**:question: Other commands**", `\u200B`)
                .addField("!helpother", `\u200B`)
                .setFooter("Emote Server Bot by Joshua")
            message.channel.send(myEmbed)
  },
};