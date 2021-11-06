const Discord = require("discord.js"); //Library
const client = new Discord.Client(); //Client creation
const config = require("./config.json"); //Config loading

//===========================================================
client.on('ready', () => { //Bot launched
    console.log(`✅ Launched as a bot: ${client.user.tag}!`)
});
//===========================================================

client.on('guildMemberAdd', function(member) {
    if(member.user.bot) return; //Ignore if the bot
    //Create an Embed message to welcome a new member
    const Embed = new Discord.MessageEmbed()
    .setColor('#e28a0f')
    .setTitle('🎊**[Welcome to the server]**🎊')
    .setDescription('<@!' + member + '>');

    //Sending what we just created
    return client.channels.cache.get(config.WELCOME_CHANNEL).send(Embed);
});

//===========================================================

client.login(config.BOT_TOKEN); //Connect to the bot