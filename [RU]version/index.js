const Discord = require("discord.js"); //Библиотека
const client = new Discord.Client(); //Создание клиента
const config = require("./config.json"); //Загрузка конфига

//===========================================================
client.on('ready', () => { //Бот запущен
    console.log(`✅ Запущен от имени бота: ${client.user.tag}!`)
});
//===========================================================

client.on('guildMemberAdd', function(member) {
    if(member.user.bot) return; //Игнориркем, если бот

    //Создаём Embed сообщение, с приветствием нового члена
    const Embed = new Discord.MessageEmbed()
    .setColor('#e28a0f')
    .setTitle('🎊**[Добро пожаловать на сервер]**🎊')
    .setDescription('<@!' + member + '>');

    //Отправляем то, что только что создали
    return client.channels.cache.get(config.WELCOME_CHANNEL).send(Embed);
});

//===========================================================

client.login(config.BOT_TOKEN); //Подключение к боту