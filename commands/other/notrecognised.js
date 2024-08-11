module.exports = {
    name: 'notrecognised',
    description: 'notrecognised',
    execute(message, args, Discord, client) {
      message.channel.send("This command isn't recognised, try running !help to see a list of commands.")
  },
};