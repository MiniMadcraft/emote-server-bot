module.exports = {
  name: 'noob',
  description: 'Noob!',
  execute(message, args, Discord, client) {
    let list3 = [
      "100%",
      "50%",
      "63%",
      "20%",
      "30%",
      "15%",
      "8%",
      "1%",
      "not a",
      "67%",
      "54%",
      "56%",
      "16%",
      "44%",
      "literally just a",
      "probably a",
    ]
    let answers3 = list3[Math.floor(Math.random() * list3.length)]
  
    let list2 = [
      "thomas",
      "tom",
      "vldv",
      "josh",
      "david",
      "jamie",
      "chris",
      "matt",
      "samuel",
      "budokan",
      "issam",
      "savage",
      "flaming",
      "george",
    ]
    let answers4 = list2[Math.floor(Math.random() * list2.length)]
  
    if (!message.guild) return;
    
    if (message.content.startsWith('!noob'))
    if(message.author.bot) return;
    else;
    message.channel.send(`${message.author} is ${answers3} noob. Hello ${answers4} :weary:`)
  },
};