require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

permissibleRoles = ["they/them", "she/her", "he/him", "just ask"] 


function isPermissibleRole(roleName) {
  var found=false
  // for (var i=0; i<permissibleRoles.length; i++ ) {
  //   var thisrole = permissibleRoles[i]
  //   found=(thisrole.equals(roleName))
  //   if (found) break;
  // }
  // var i=0;
  // while (!found && i<permissibleRoles.length) {
  //   var thisrole = permissibleRoles[i];
  //   found=(thisrole.equals(roleName));
  //   i++;
  // }
  // return found
  return permissibleRoles.some(thisRole => thisRole.equals(roleName));
}

bot.on('message', msg => {
  if (msg.content.search("!iam")>=0) {
    message = msg.content;
    mt = message.match(/!iam ([\w/]+)/);
    roleName=mt[1];
    if (permissibleRoles.some(thisRole => (thisRole===roleName))) {
      var roles = msg.guild.roles;
      var role = msg.guild.roles.find(role => role.name === roleName);
      if (role) msg.member.addRole(role);
    }
  }
});
