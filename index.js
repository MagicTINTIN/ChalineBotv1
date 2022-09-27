console.log("DÉMARRAGE DE Chaline")
console.log("-----------------------------------INITIALISATION--------------------------------------------");

// --- INTIALIZING BOT ---

// Import main infos
const { token } = require('./config/credentials.json');

// Import librairies
const { Client, Intents } = require('discord.js');
const { AudioPlayer } = require("@discordjs/voice");
audioPlayer = new AudioPlayer();
exports.audioPlayer = audioPlayer;
// Client creation and export
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ],
    partials: [
        'CHANNEL', // Required to receive DMs
    ]
});
exports.client = client;


// Import functions
const logger = require("./functions/logger.js");
const loader = require("./functions/loader.js");
const init = require("./functions/init.js");
const afk = require("./functions/afk.js");
const counter = require("./functions/counter.js");
const serverfct = require("./functions/serverfct.js");
const messageCheck = require("./functions/messageCheck.js");
const triggerCMD = require("./functions/triggerCMD.js");
const imaGen = require("./functions/imaGen.js");
const dev = require("./functions/dev.js");
const slashcmd = require("./functions/slashcmd.js");

// Init commands
const botchannels = init.ChannelListLoader()
exports.botchannels = botchannels;
exports.dataJSON = init.configList();
const mp = require("./commands/mpcommand.js");
loader.loadcommands();
init.gifLoading();


// Init afk
afk.initafk();

// Init Config servers
init.servCfgLoading();


// Prevents bot from crash
process.on('uncaughtException', function(err) {
    console.error(err);

    logger.all("📌 Un chat m'a coupé la route, mais je suis indemne");

    try {
        errorwide = err.stack
        messerror = errorwide.match(/(.{1,1800})/g);
        for (const msgparterror of messerror) {
            logger.channel("```diff\n-> " + msgparterror + "\n```");
        }
    } catch (err) {
        console.error(err);
    }
});


// when Chaline logged in Discord
client.once('ready', () => {
    init.activityMessage();
    init.loaderPostReady();
});


// Triggered when messages sent
client.on('messageCreate', message => {
    // Triggered when message is private
    if (!message.guildId && !message.author.bot) {
        try {
            mp.onMessage(message);
        } catch (error) {
            message.reply("Une erreur s'est produite. Si l'erreur ne vient pas de vous signalez l'erreur en indiquant ce que vous souhaitiez faire `;error l'erreur`\nErreur : `MSG-MP-0-0-MPCMD");
        }
        return;
    }

    if (mutedservers.includes(message.guildId)) return;
    // Then if not private and the server is not muted
    const guildcfg = message.guild
    const guildid = message.guildId;

    try {
        // dev function
        dev.testbot(message);

        // Is this message mentionning afk people ?
        afk.checkafk(message);

        // Check if the server has a config
        serverfct.checkSrvCfg(guildid);

        // message is examinated
        messageCheck.reactChaline(message);
        messageCheck.general(message);

        // trigger command if it is
        triggerCMD.gif(message);
        triggerCMD.classic(message);

    } catch (error) {
        console.error(error);
        client.channels.cache.get(botchannels.errorChannel).send(`${message.author.tag}(id:${message.author.id}) a généré une erreur depuis le serveur ${message.guild.name} (channel : ${message.channel.id}) :\n\n ${message.content}`);
    }
});

// triggered when a slash command is executed
client.on('interactionCreate', interaction => {
    if (mutedservers.includes(interaction.guild.id) || !interaction.isCommand()) return;
    slashcmd.triggered(interaction)
});

// triggered when a member join the server
client.on('guildMemberAdd', async member => {
    if (mutedservers.includes(member.guild.id)) return;
    // Then if server is not muted
    imaGen.welcome(member);
    counter.member(member.guild)
});


// triggered when a member left the server
client.on('guildMemberRemove', async member => {
    if (mutedservers.includes(member.guild.id)) return;
    // Then if server is not muted
    counter.member(member.guild)
});


// triggered when there is a member update
client.on('guildMemberUpdate', (oldMember, newMember) => {
    if (mutedservers.includes(newMember.guild.id)) return;
    // when a member boost a server not muted
    if (newMember.premiumSinceTimestamp > 0 && oldMember.premiumSince != newMember.premiumSince)
        imaGen.boost(newMember)
});


client.login(process.env.TOKEN);