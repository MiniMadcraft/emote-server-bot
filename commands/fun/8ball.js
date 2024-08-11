module.exports = {
  name: '8ball',
  description: '8ball!',
  execute(message, args, Discord, client) {
    let list4  = [
      "yes",
      "no",
      "maybe",
      "it's a possibility",
      "absolutely not",
      "STRAIGHT UP NO",
      "of course",
      "ask issam",
      "ask again",
      "ask thomas",
      "ask tom",
      "i don't know to be honest",
    ]
    let answers2 = list4[Math.floor(Math.random() * list4.length)]
    question = args.slice(0).join(" ");
    if (question != "") {
    const myEmbed = new Discord.MessageEmbed()
    .setTitle("Question:")
    .addField(`\u200B`, question)
    .setThumbnail("https://cdn.discordapp.com/avatars/754062606876278914/28899e0343ab5a541435564d9872bb7f.png?size=128")
    .addField("Answer:", `${answers2}`)
    .setFooter("Emote Server Bot by Joshua")

    message.channel.send(myEmbed);
  }
  else {
    message.channel.send("You need to include a question!")
  }},
};