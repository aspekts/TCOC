const Discord = require("discord.js")
module.exports = {
  name:'ping',
  description:'see the ping of the bot',
  execute(client, message, args) {
const pingbed = new Discord.MessageEmbed().setColor("#CACAC9").setAuthor("Ping Result").setDescription(`**Latency is ${Date.now() - message.createdTimestamp}ms. The API Latency is ${client.ws.ping}ms.**`).setTimestamp()

    message.channel.send({embeds:[pingbed]})
}
}