module.exports = {
    name: 'hug',
    description: 'Free hugs!',
    execute(message, args, Discord, client) {
      let bottag = "<@!754062606876278914>"
        if (message.content.startsWith('!hug')) {
            if(message.mentions.members.size == 1) {
                let member = message.mentions.members.first()
                message.channel.send(`${message.author} gave ${member} a hug!`)
                message.channel.send(`https://media.giphy.com/media/CZpro4AZHs436/giphy.gif`)
  }
  else {
    message.channel.send(`You need to mention someone to hug, e.g !hug ${bottag}`)
  }}
}};
