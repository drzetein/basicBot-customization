(function () {

    function extend() {
            if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        var bot = window.bot;

        bot.retrieveSettings();
        
        bot.commands.wootCommand = {
            command: 'adblock',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("Remova as propagandas dos vídeos e de muitos outros sites instalando o AdBlock: https://getadblock.com/, ou Adblock Plus: https://adblockplus.org/pt_BR/.");
                }
            }
        };

        bot.commands.cookieCommand.cookies =['deu-lhe um biscoito de chocolate!',
                    'quer te f*der até o talo!',
                    'deu-lhe um biscoito que está escrito: "Você é um viado. :trollface:"',
                    'deu-lhe um enorme biscoito que está escrito: "Quer casar comigo? :ring:"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Vou te dar um ban eterno de 30 dias."',
                    'deu-lhe um biscoito da sorte, tem escrito: "Cumprimente agora a pessoa que você ama."',
                    'deu-lhe um biscoito da sorte, tem escrito: "Saia desse computador agora!"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Não esqueça de comer os vegetais."',
                    'deu-lhe um biscoito da sorte, tem escrito: "Se você mecher o quadril, vão te achar sexy! :dancer:"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Eu te amo muitão!! :heart: :purple_heart: :green_heart: :yellow_heart: :blue_heart:"',
                    'deu-lhe um Oreo e um copo de leite.',
                    'deu-lhe um biscoito de arco-íris feito com amor. :heart:',
                    'deu-lhe um biscoito que fio esquecido na chuva... Eu não comeria. T_T',
                    'te trouxe biscoitos fresquinhos... Parecem deliciosos! :3'
                ];

        bot.loadChat();
    }

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "basicBot",
        language: "português",
        chatLink: "https://rawgit.com/diegodepira/basicBot/master/lang/pt.json",
        maximumAfk: 120,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 10,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
                ["tema", "A música não está de acordo com o tema da sala. "],
                ["op", "Essa música está na lista OP. "],
                ["historico", "A música ainda consta no Histórico de DJs (foi tocada recentemente). "],
                ["mix", "Você tocou um mix, o que é contra as regras. "],
                ["som", "A música que você tocou tinha má qualidade de som, ou nenhum som. "],
                ["nsfw", "A música que você tocou continha NSFW (conteúdo impróprio). "],
                ["indisponivel", "A música que você tocou estava indisponível. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Digite a mensagem temporária do dia após o comando, na mesma linha.",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: null,
        intervalMessages: [],
        messageInterval: 5,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/diegodepira/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/diegodepira/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/diegodepira/basicBot/master/basicBot.js', extend);

}).call(this);
