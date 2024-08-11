module.exports = {
    name: 'helpfun',
    description: 'Help!',
    execute(message, args, Discord, client) {
      const myEmbed = new Discord.MessageEmbed()
                  .setTitle("Help - Fun Commands")
                  .setThumbnail("https://cdn.discordapp.com/avatars/754062606876278914/28899e0343ab5a541435564d9872bb7f.png?size=128")
                  .addField("**:laughing: Fun commands**", `\u200B`)
                  .addField("!8ball - Answers your question", `\u200B`)
                  .addField("!bruh - Bruh", `\u200B`)
                  .addField("!dog - Cute dog pictures!", `\u200B`)
                  .addField("!hug - Hug another user!", `\u200B`)
                  .addField("!josh - Josh", `\u200B`)
                  .addField("!noob - Tells you how much of a noob you are", `\u200B`)
                  .addField("!meme - Sends a random meme from reddit!", `\u200B`)
                  .addField("!guessnumber - Guess a random number!", `\u200B`)
                  .addField("!rps - Play rock, paper, scissors!", `\u200B`)
                  .setFooter("Emote Server Bot by Joshua")
              message.channel.send(myEmbed)
    },
  };