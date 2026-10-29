    const { Client, GatewayIntentBits } = require('discord.js');
    const client = new Client({
      intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
    });

    client.on('ready', () => console.log('ONLINE'));

    client.on('guildMemberAdd', m => {
      const ch = m.guild.systemChannel;
      if(ch) ch.send(`Bienvenido ${m} 🎉`);
    });

    client.on('messageCreate', msg => {
      if(msg.content === '!ping') msg.reply('pong 🏓');
      if(msg.content.startsWith('!ban')){
        if(!msg.member.permissions.has('BanMembers')) return;
        const user = msg.mentions.members.first();
        if(user) { user.ban(); msg.reply(`${user} baneado`); }
      }
    });

    client.login(process.env.TOKEN);