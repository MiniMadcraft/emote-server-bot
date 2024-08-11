module.exports = {
    name: 'helpother',
    description: 'Help!',
    execute(message, args, Discord, client) {
      let member = `<@!180385064557871104>`
      const myEmbed = new Discord.MessageEmbed()
                  .setTitle("Help section")
                  .setThumbnail("https://cdn.discordapp.com/avatars/754062606876278914/28899e0343ab5a541435564d9872bb7f.png?size=128")
                  .addField("**:question: Other commands**", `\u200B`)
                  .addField("!avatar - Sends your avatar", `\u200B`)
                  .addField("!botinfo - Sends you bot information", `\u200B`)
                  .addField("!ping - Shows you the ping of the bot", `\u200B`)
                  .addField("!help - Shows you help", `\u200B`)
                  .addField("!say - Says your message (Or you can chain it!)", `\u200B`)
                  .addField(`!die - Kills the bot`, `Only usable by ${member}`)
                  .addField(`!bomb - Bans a random person from the server`, `Only usable by ${member}`)
                  .setFooter("Emote Server Bot by Joshua")
              message.channel.send(myEmbed)
    },
  };