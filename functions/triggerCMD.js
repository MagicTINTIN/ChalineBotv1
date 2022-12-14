const logger = require("./logger.js");
const { prefix, gifix } = require('../config/config.json');
const { Permissions } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    // Check general properties of message
    gif: function (message) {
        const { client, botchannels } = require("../index.js");

        if (message.content.startsWith(gifix)) {
            const argif = message.content.slice(gifix.length).split(/ +/);
            const cmdgif = argif.shift().toLocaleLowerCase();

            try {
                if (cmdgif === "commandlistserver" && message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) && !blacklist.includes(message.author.id) && (message.member.roles.cache.some(role => `<@&${role.id}>` === configgifs) || configgifs === "e" || whitelist.includes(message.author.id))) { //--------------------------------------------------- SERVER CMD GIF LIST
                    const cmdgifFilesn = fs.readdirSync(`./gif/servers/${message.guild.id}/`).filter(file => file.endsWith('.js'));
                    message.channel.send("Voici la liste des commandes du serveur :\n")
                    for (const file of cmdgifFilesn) {
                        const cmdgifs = require(`./gif/servers/${message.guild.id}/${file}`);
                        if (!cmdgifs.description) { message.channel.send(`${cmdgifs.name}`); }
                        else { message.channel.send(`${cmdgifs.name} : *${cmdgifs.description}*`); }
                    }

                } else if (eval(`client.cmdgifss.s${message.guild.id}`) && eval(`client.cmdgifss.s${message.guild.id}.has(cmdgif)`) && !blacklist.includes(message.author.id) && (message.member.roles.cache.some(role => `<@&${role.id}>` === configgifs) || configgifs === "e" || whitelist.includes(message.author.id))) {//--------------------------------------------------------SERV GIF
                    try {
                        eval(`client.cmdgifss.s${message.guild.id}.get(cmdgif).execute(message, argif)`)
                        client.channels.cache.get(botchannels.gifUseChannel).send(`__${message.author.tag}__ a utilis?? \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}*(${message.channel.id}) dans la cat??grorie *${message.channel.parentID}*`);
                    } catch (error) {
                        console.error(error);
                        message.reply("Meow !\nIl y a un chat dans le pat??,\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`\nErreur : \`CMD-GIF-S-0-MAIN\`");
                    }
                }


                else {
                    // NORMAL GIF
                    if (client.cmdgifsn.has(cmdgif) && !blacklist.includes(message.author.id) && (message.member.roles.cache.some(role => `<@&${role.id}>` === configgifn) || configgifn === "e" || whitelist.includes(message.author.id))) {
                        if (cmdgif === "commandlistnormal" && message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
                            const cmdgifFilesn = fs.readdirSync('./gif/Normal').filter(file => file.endsWith('.js'));
                            message.channel.send("Voici la liste des commandes Normales :\n")
                            for (const file of cmdgifFilesn) {
                                const cmdgifn = require(`./gif/Normal/${file}`);
                                if (!cmdgifn.description) { message.channel.send(`${cmdgifn.name}`); }
                                else { message.channel.send(`${cmdgifn.name} : *${cmdgifn.description}*`); }
                            }
                        }
                        try {
                            client.cmdgifsn.get(cmdgif).execute(message, argif);
                            client.channels.cache.get(botchannels.gifUseChannel).send(`__${message.author.tag}__ a utilis?? \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}*(${message.channel.id}) dans la cat??grorie *${message.channel.parentID}*`);
                        } catch (error) {
                            console.error(error);
                            message.reply("Meow !\nIl y a un chat dans le pat??,\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`\nErreur : \`CMD-GIF-N-0-MAIN\`");
                        }
                    }

                    // PLUS GIF
                    if (client.cmdgifsp.has(cmdgif) && !blacklist.includes(message.author.id) && (message.member.roles.cache.some(role => `<@&${role.id}>` === configgifp) || configgifp === "e" || whitelist.includes(message.author.id))) {
                        if (cmdgif === "commandlistplus" && message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
                            const cmdgifFilesn = fs.readdirSync('./gif/Plus').filter(file => file.endsWith('.js'));
                            message.channel.send("Voici la liste des commandes Plus :\n")
                            for (const file of cmdgifFilesn) {
                                const cmdgifn = require(`./gif/Plus/${file}`);
                                if (!cmdgifn.description) { message.channel.send(`${cmdgifn.name}`); }
                                else { message.channel.send(`${cmdgifn.name} : *${cmdgifn.description}*`); }
                            }
                        }
                        try {
                            client.cmdgifsp.get(cmdgif).execute(message, argif);
                            client.channels.cache.get(botchannels.gifUseChannel).send(`__${message.author.tag}__ a utilis?? \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}*(${message.channel.id}) dans la cat??grorie *${message.channel.parentID}*`);
                        } catch (error) {
                            console.error(error);
                            message.reply("Meow !\nIl y a un chat dans le pat??,\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`\nErreur : \`CMD-GIF-P-0-MAIN\`");
                        }
                    }

                    // HARD GIF
                    if (client.cmdgifsh.has(cmdgif) && !blacklist.includes(message.author.id) && (message.member.roles.cache.some(role => `<@&${role.id}>` === configgifh) || configgifh === "e" || whitelist.includes(message.author.id))) {
                        if (cmdgif === "commandlisthard" && message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
                            const cmdgifFilesn = fs.readdirSync('./gif/Hard').filter(file => file.endsWith('.js'));
                            message.channel.send("Voici la liste des commandes Hard :\n")
                            for (const file of cmdgifFilesn) {
                                const cmdgifn = require(`./gif/Hard/${file}`);
                                if (!cmdgifn.description) { message.channel.send(`${cmdgifn.name}`); }
                                else { message.channel.send(`${cmdgifn.name} : *${cmdgifn.description}*`); }
                            }
                        }
                        try {
                            client.cmdgifsh.get(cmdgif).execute(message, argif);
                            client.channels.cache.get(botchannels.gifUseChannel).send(`__${message.author.tag}__ a utilis?? \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}*(${message.channel.id}) dans la cat??grorie *${message.channel.parentID}*`);
                        } catch (error) {
                            console.error(error);
                            message.reply("Meow !\nIl y a un chat dans le pat??,\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`\nErreur : \`CMD-GIF-H-0-MAIN\`");
                        }
                    }
                }
            } catch (err) { console.error(err); }
        }
    },

    // Classic commands
    classic: function (message) {
        const { client, botchannels } = require("../index.js");

        if (!message.content.startsWith(prefix) || blacklist.includes(message.author.id) || message.author.bot) return;

        if (message.member.roles.cache.some(role => `<@&${role.id}>` === configcommand) || configcommand === "e" || message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) || whitelist.includes(message.author.id)) {
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLocaleLowerCase();

            if (!client.commands.has(command)) return;

            try {
                // execute
                client.commands.get(command).execute(message, args);

                const serverlog = client.guilds.cache.get(botchannels.serverID);
                let serveridtolog = message.guild.id;
                const serverlogchannel = serverlog.channels.cache.find(ch => ch.name === `${serveridtolog}-log`);

                // log on local server
                if (configlog == "d" || configlog == "1") {
                    channellog = message.guild.channels.cache.find(ch => ch.name === 'chaline-log');
                    if (!channellog) {
                        message.guild.channels.create('chaline-log');
                        setTimeout(function () {
                            channellog = message.guild.channels.cache.find(ch => ch.name === 'chaline-log');
                            channellog.send(`(re)Bonjour <@!${message.guild.ownerID}>, j'ai cr???? ce channel pour y mettre mes logs, je vous conseille de le rendre accessible uniquement aux administrateurs ???????(et de le mettre en muet)\nVous pouvez d??cider de modifier le channel des logs ou de d??sactiver les logs en param??trant avec \`;config help\``);
                            channellog.send(`__${message.author.tag}__ a utilis?? \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}*(${message.channel.id})`);
                        }, 1000)
                    } else {
                        channellog.send(`__${message.author.tag}__ a utilis?? \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}*(${message.channel.id})`);
                    }
                }
                else if (configlog == "n" || configlog == "0") {
                    logger.all(message.guild.name + " n'a pas de channel de logs");
                }
                else {
                    channellogid = configlog.replace('<#', '').replace('>', '')
                    channellog = client.channels.cache.get(channellogid);
                    channellog.send(`__${message.author.tag}__ a utilis?? \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}*(${message.channel.id})`);
                }

                // log in server channel on log server
                if (!serverlogchannel) {
                    logger.all(serverlogchannel)
                    logger.all(serverlog.channels.cache.find(ch => ch.name === `${serveridtolog}-log`))
                    serverlog.channels.create(`${serveridtolog}-log`, { type: "GUILD_TEXT" });
                } else {
                    serverlogchannel.send(`__${message.author.tag}__ a utilis?? \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}*(${message.channel.id})`);
                }

                // classic log
                logger.all(`${message.author.tag} a utilis?? ${message.content} sur ${message.guild.name} dans #${message.channel.name}(${message.channel.id})`);

            } catch (error) {
                console.error(error);
                message.reply("Meow !\nIl y a un chat dans le pat??,\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`\nErreur : \`CMD-CLASSIC-1-0-MAIN\`");
            }
        }
    }
}