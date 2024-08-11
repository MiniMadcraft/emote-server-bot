module.exports = {
  name: 'guessnumber',
  description: 'Guess the number!',
  execute(message, args, Discord, client) {
    message.channel.send("In this game, you guess a random number! Please type in the largest number you want to guess")
    let filter = m => m.author.id === message.author.id
    message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
    })
    .catch((errors) => {message.channel.send("You did not respond within the given time."),console.error("Something went wrong"),console.error(errors)})
    .then(message => {
      message = message.first()
      const amount = parseInt(message);
      const checkIfInteger = (message) => {
        var regExp = /^-?[0-9]+$/;
        return regExp.test(message);
      }
      if(checkIfInteger(message)) {
        let number = Math.floor((Math.random() * (message.content)) + 1);
        message.channel.send(`Your range of numbers is between 1 and ${message.content}, please input your guess!`)
        let message2 = message
        let filter2 = m => m.author.id === message.author.id
        message.channel.awaitMessages(filter2, {
          max: 1,
          time: 30000,
          errors: ['time']
        })
        .catch((errors) => {message.channel.send("You did not respond within the given time."),console.error("Something went wrong"),console.error(errors)})
        .then(message => {
          message = message.first()
          let userinput = message.content
          const amount2 = parseInt(userinput);
          message4 = parseInt(message2)
          message3 = parseInt(message)
          if(message.content.includes("-")) {
            if (isNaN(userinput)) {
              return message.reply('that doesn\'t seem to be a valid number, run the command again and input a whole number, or a number within the range.');
            }
            else if (Number.isInteger(amount2)) {
            const checkIfInteger2 = (message) => {
            var regExp2 = /^-?[0-9]+$/;
            return regExp2.test(message);  
            }
            if(checkIfInteger2(message)) {
            if (message3 > 1) {
              return message.reply("that doesn\'t seem to be a valid number, run the command again and input a whole number, or a number within the range.")
            }
            else if (message4 > message3) {
              return message.reply("that doesn\'t seem to be a valid number, run the command again and input a whole number, or a number within the range.")
            }
            else if (message3 == number) {
              message.channel.send(`You got it correct!`)
            }
            else if (message3 !== number){
              message.channel.send(`You got it wrong, the correct answer was ${number}`)
            }
            }
            else {
              return message.reply('that doesn\'t seem to be a valid number, run the command again and input a whole number, or a number within the range.')
            }}
            else {
              return message.reply('that doesn\'t seem to be a valid number, run the command again and input a whole number, or a number within the range.');
            }
          }
          else if (isNaN(amount2)) {
            return message.reply('that doesn\'t seem to be a valid input, run the command again and input a whole number, or a number within the range.');
          }
          else {
          const checkIfInteger2 = (message) => {
            var regExp2 = /^-?[0-9]+$/;
            return regExp2.test(message);  
          }
          if(checkIfInteger2(message)) {
            if (message3 == 0) {
              let message5 = message4.toString()
              if (message5.includes("-")) {
                if (message3 == number) {
                  message.channel.send("You got it correct!")
                }
                else {
                  message.channel.send(`You got it wrong, the correct answer was ${number}`)
                }
              }
              else {
                return message.reply("that doesn\'t seem to be a valid number, run the command again and input a whole number, or a number within the range.")
              }
            }
            else if (message3 < 1) {
              return message.reply("that doesn\'t seem to be a valid number, run the command again and input a whole number, or a number within the range.")
            }
            else if (message3 == "1") {
              if (message3 == number) {
                message.channel.send("You got it correct!")
              }
              else {
                message.channel.send(`You got it wrong, the correct answer was ${number}`)
              }
            }
            else if (message4 < message3) {
              return message.reply("that doesn\'t seem to be a valid number, run the command again and input a whole number, or a number within the range.")
            }
            else if (message3 == number) {
              message.channel.send(`You got it correct!`)
            }
            else if (message3 !== number){
              message.channel.send(`You got it wrong, the correct answer was ${number}`)
            }
            else {
              return message.reply('that doesn\'t seem to be a valid number, run the command again and input a whole number, or a number within the range.');
            }
            }
          
          else {
            return message.reply('that doesn\'t seem to be a valid number, run the command again and input a whole number, or a number within the range.');
          }}})}
      else if (isNaN(amount)) {
        return message.reply('that doesn\'t seem to be a valid number, run the command again and input a whole number, or a number within the range.');
      }
      else {
        return message.reply('that doesn\'t seem to be a valid number, run the command again and input a whole number, or a number within the range.');
      }
  })},
};