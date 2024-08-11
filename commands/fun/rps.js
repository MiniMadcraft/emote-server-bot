module.exports = {
  name: 'rps',
  description: 'Rock, paper, scissors!',
  execute(message, args, Discord, client) {
    message.channel.send("In this game, you play rock, paper, scissors against me! Please input rock, paper or scissors!")
    let filter = m => m.author.id === message.author.id
    message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
    })
    .catch((errors) => {message.channel.send("You did not respond within the given time."),console.error("Something went wrong"),console.error(errors)})
    .then(message => {
      message = message.first()
      if (message.content == "scissors") {
        let number = Math.floor((Math.random() * 3) + 1);
        let userguess = "scissors"
        if (number == "3") {
          message.channel.send(`You picked ${userguess}, I picked scissors, we drew!`)
        }
        else if (number == "1") {
          message.channel.send(`You picked ${userguess}, I picked paper, you won!`)
        }
        else if (number == "2") {
          message.channel.send(`You picked ${userguess}, I picked rock, I won!`)
        }
      }
      else if (message.content == "rock") {
        let userguess = "rock"
        let number = Math.floor((Math.random() * 3) + 1);
        if (number == "1") {
          message.channel.send(`You picked ${userguess}, I picked paper, I won!`)
        }
        else if (number == "3") {
          message.channel.send(`You picked ${userguess}, I picked scissors, you won!`)
        }
        else if (number == "2") {
          message.channel.send(`You picked ${userguess}, I picked rock, we drew!`)
        }
      }

      else if (message.content == "paper") {
        let userguess = "paper"
        let number = Math.floor((Math.random() * 3) + 1);
        if (number == "3") {
          message.channel.send(`You picked ${userguess}, I picked scissors, I won!`)
        }
        else if (number == "2") {
          message.channel.send(`You picked ${userguess}, I picked rock, you won!`)
        }
        else if (number == "1") {
        message.channel.send(`You picked ${userguess}, I picked paper, we drew!`)
      }
      }
      else {
        return message.reply('that doesn\'t seem to be a valid guess, run the command again and input rock, paper or scissors.');
      }
})}}