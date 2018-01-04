const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.author.bot) return;
  if (msg.content === '!givemescriptsbitch') {
    msg.reply('https://mega.nz/#!ypUS1QpA!1MvNrCcoelvpigKPmz5an3obIfIDUA9odPLsSSaDW5o');
  }
  else {

      msg.reply('command not fucking found bitch');  
  }
});

client.login(process.env.BOT_TOKEN);
        
