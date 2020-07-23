require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content.search("!iam")>=0) {
    message = msg.content;
    mt = message.match(/!iam ([\w/]+)/);
    rolename=mt[1];
    var role= member.guild.roles.cache.find(role => role.name === rolename);
    member.roles.add(role);
  }
});
