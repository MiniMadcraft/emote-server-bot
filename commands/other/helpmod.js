module.exports = {
    name: 'helpmod',
    description: 'Help!',
    execute(message, args, Discord, client) {
      const myEmbed = new Discord.MessageEmbed()
                  .setTitle("Help - Mod Commands")
                  .setThumbnail("https://cdn.discordapp.com/avatars/754062606876278914/28899e0343ab5a541435564d9872bb7f.png?size=128")
                  .addField("**:police_officer: Moderation commands**", `\u200B`)
                  .addField("!ban - Bans the user mentioned", `\u200B`)
                  .addField("!kick - Kicks the user mentioned", `\u200B`)
                  .setFooter("Emote Server Bot by Joshua")
              message.channel.send(myEmbed)
    },
  };