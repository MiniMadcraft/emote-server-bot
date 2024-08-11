module.exports = {
    name: 'botinfo',
    description: 'Bot information!',
    execute(message, args, Discord, client) {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let member = `<@!180385064557871104>`
    
        const myEmbed = new Discord.MessageEmbed()
                  .setTitle("Bot Information")
                  .addField(`Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`, `\u200B`)
                  .setDescription("Version 0.8.7")
                  .addField(`Created on the 11th of September 2020`, `\u200B`)
                  .addField(`Changelog:`, `<#808820407410753626>`)
                  .setThumbnail("https://cdn.discordapp.com/avatars/754062606876278914/28899e0343ab5a541435564d9872bb7f.png?size=128")
                  .addField(`Author:`, member)
                  .setFooter("Emote Server Bot by Joshua")
      
              message.channel.send(myEmbed);
  },
};