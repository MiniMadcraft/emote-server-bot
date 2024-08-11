module.exports = {
    name: 'x',
    description: 'x',
    execute(message, args, Discord, client, dayjs) {
      if (message.channel.id == 852253831798063104) {
        const dayjs = require('dayjs')
        dayjs().format()
        var isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
        dayjs.extend(isSameOrAfter)
        if (dayjs().isSameOrAfter(dayjs('YYYY-MM-DD'))) (
          setInterval(() => {
           message.channel.send(`Happy birthday <@X> !`).then(() => count++);
          }, 1000)
        );
        else (
          message.channel.send("It's not X's birthday yet!")
        )
      }
      else (
        message.channel.send("You can only use <#852253831798063104> !")
      )
  },
};