const { token, appID } = require('../config/credentials.json');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');
const logger = require('./logger');
const { Client, MessageEmbed } = require('discord.js');
const cmd = require('../commands/universal/cmd');

module.exports = {
    // load slash commands
    loadslash: function () {
        commandslash = []
        const rest = new REST({ version: '9' }).setToken(token);

        // public commands
        // about
        commandslash.push(new SlashCommandBuilder()
            .setName("about")
            .setDescription("Plus d'infos sur le bot Chaline"));
        // help
        commandslash.push(new SlashCommandBuilder()
            .setName("help")
            .setDescription("Comment utiliser chaline"));
        // meow
        commandslash.push(new SlashCommandBuilder()
            .setName("meow")
            .setDescription("🐱"));

        // cmd soon
        commandslash.push(new SlashCommandBuilder()
            .setName("cmd")
            .setDescription("La commande universelle (un véritable couteau suisse)"));

        commandslashjson = commandslash.map(command => command.toJSON());
        console.log('Refreshing (/) commands.');

        rest.put(Routes.applicationCommands(appID), { body: commandslashjson })
            .then(() => console.log('Les commandes (/) ont été rechargées.'))
            .catch(console.error);
    },
    triggered: function (interaction) {

        const { client, botchannels } = require("../index.js");
        const serverlog = client.guilds.cache.get(botchannels.serverID);
        let serveridtolog = interaction.guild.id;
        const serverlogchannel = serverlog.channels.cache.find(ch => ch.name === `${serveridtolog}-log`);

        // log in server channel on log server
        if (!serverlogchannel) {
            logger.all(serverlogchannel)
            logger.all(serverlog.channels.cache.find(ch => ch.name === `${serveridtolog}-log`))
            serverlog.channels.create(`${serveridtolog}-log`, { type: "GUILD_TEXT" });
        } else {
            serverlogchannel.send(`__${interaction.user.tag}__ a utilisé \`/${interaction.commandName}\` sur **${interaction.guild.name}** dans *#${interaction.channel.name}*(${interaction.channel.id})`);
        }

        logger.all(`${interaction.user.tag} a utilisé /${interaction.commandName} sur ${interaction.guild.name} dans #${interaction.channel.name}(${interaction.channelId})`);
        if (interaction.commandName === 'about') {
            const embedmeow = new MessageEmbed()
                .setTitle('Plus d\'infos sur le bot Chaline')
                .setColor(0xffffff)
                .setURL('https://github.com/ALC-ProduXion/chaline-discordbot')
                .setImage('https://repository-images.githubusercontent.com/341698258/a72f3d00-76d3-11eb-8bb2-46391454be08')
                .setDescription('Pour plus d\'infos sur moi, vous pouvez visiter notre serveur : https://discord.gg/jfUqQcP88K\nVous y trouverez notamment la liste des gif disponnibles que je propose ainsi que les liens pour pouvoir m\'installer sur votre serveur.\nEn cas de problème ou pour des suggestions, n\'hésitez pas à contacter mon développeur **MagicTINTIN#4389**, ou mes principaux contributeurs **clem6528#7666** et **Paria12#1246**\n\n*Pensez à mettre le serveur en muet quand vous arrivez ;)*');
            interaction.reply({ embeds: [embedmeow] });
        }
        else if (interaction.commandName === 'cmd') {
            cmd.tirggered(interaction)
        }
        else if (interaction.commandName === 'meow') {
            interaction.reply({ content: `Qui m'a appelé ? Si vous avez besoin de quelque chose, faites moi signe \`;meow\``, ephemeral: true });
        }
        else if (interaction.commandName === 'help') {
            const embedmeow = new MessageEmbed()
                .setTitle('Comment utiliser Chaline ?')
                .setColor(0xffffff)
                .setDescription(`Nous avons fait le choix de ne pas utiliser les commandes (/) mises en place par Discord pour diverses raisons telles que le manque de flexibilité et le faible gain de simplicité par rapport aux commandes traditionnelles
\nPour utiliser le bot, c'est très simple : tapez \`;meow\` ou \`;adminmeow\` pour les commandes dédiées aux admins. Suivez les aides liées à l'utilisation des différentes commandes et le tour est joué.
Lors d'une prochaine mise à jour, ce système sera amélioré, vous permettant d'avoir une interface graphique avec des boutons cliquables pour executer vous commandes plus facilement.`);
            interaction.reply({ embeds: [embedmeow] });
        }
    }
}