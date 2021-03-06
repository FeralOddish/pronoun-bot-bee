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
  return permissibleRoles.some(thisRole => thisRole === roleName);
}

bot.on('message', msg => {
  if (msg.content.search("!iam")>=0) {
    message = msg.content;
    mt = message.match(/!iam ([\w/ ]+)/);
    roleName=mt[1];
    if (permissibleRoles.some(thisRole => (thisRole===roleName))) {
      var member_roles = msg.member.roles.cache;
      member_roles.forEach(function (role) {
        if (isPermissibleRole(role.name)) {
          msg.member.roles.remove(role);
        } 
      });
      var roles = msg.guild.roles;
      var role_to_add = msg.guild.roles.cache.find(role_to_add => role_to_add.name === roleName);
      if (role_to_add) msg.member.roles.add(role_to_add);
    }
  }
});
