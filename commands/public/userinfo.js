module.exports = {
    name: 'userinfo',
    description: 'Afficher infos sur un utilisateur',
    execute(message) {
        if (!message.mentions.users.size) {
            userinfo = message.author;
            memberinfo = message.guild.members.cache.get(userinfo.id);
            if (!memberinfo.nickname) {
                const { Client, MessageEmbed, GuildMember } = require('discord.js');
                const embedinfo = new MessageEmbed()
                    .setColor(memberinfo.displayColor)
                    .setTitle(`A propos de ${userinfo.tag}`)
                    .setAuthor({ name: userinfo.tag, iconURL: userinfo.displayAvatarURL({ format: 'png' }) })
                    .setThumbnail(userinfo.displayAvatarURL({ format: 'png' }))
                    .addFields(
                        { name: 'Infos générales', value: `Compte à été créé le ${userinfo.createdAt}\nID : ${userinfo.id}` },
                        { name: '\u200B', value: '\u200B' },
                        { name: 'Serveur rejoint', value: '\u200B' + memberinfo.joinedAt, inline: true },
                        { name: 'Rôles', value: '\u200B' + memberinfo.roles.highest.name, inline: true },
                    )
                    .setTimestamp()
                    .setFooter({ text: `Infos demandées par ${message.author.username}`, iconURL: message.author.displayAvatarURL({ format: 'png' }) });
                message.channel.send({ embeds: [embedinfo] });
            } else {
                const { Client, MessageEmbed, GuildMember } = require('discord.js');
                const embedinfo = new MessageEmbed()
                    .setColor(memberinfo.displayColor)
                    .setTitle(`A propos de ${userinfo.tag} (${memberinfo.nickname})`)
                    .setAuthor({ name: userinfo.tag, iconURL: userinfo.displayAvatarURL({ format: 'png' }) })
                    .setThumbnail(userinfo.displayAvatarURL({ format: 'png' }))
                    .addFields(
                        { name: 'Infos générales', value: `Compte à été créé le ${userinfo.createdAt}\nID : ${userinfo.id}` },
                        { name: '\u200B', value: '\u200B' },
                        { name: 'Serveur rejoint', value: '\u200B' + memberinfo.joinedAt, inline: true },
                        { name: 'Rôles', value: '\u200B' + memberinfo.roles.highest.name, inline: true },
                    )
                    .setTimestamp()
                    .setFooter({ text: `Infos demandées par ${message.author.username}`, iconURL: message.author.displayAvatarURL({ format: 'png' }) });
                message.channel.send({ embeds: [embedinfo] });
            }
        }
        else {
            userinfo = message.mentions.users.first();
            memberinfo = message.guild.members.cache.get(userinfo.id);
            if (!memberinfo.nickname) {
                const { Client, MessageEmbed, GuildMember } = require('discord.js');
                const embedinfo = new MessageEmbed()
                    .setColor(memberinfo.displayColor)
                    .setTitle(`A propos de ${userinfo.tag}`)
                    .setAuthor({ name: userinfo.tag, iconURL: userinfo.displayAvatarURL({ format: 'png' }) })
                    .setThumbnail(userinfo.displayAvatarURL({ format: 'png' }))
                    .addFields(
                        { name: 'Infos générales', value: `Compte à été créé le ${userinfo.createdAt}\nID : ${userinfo.id}` },
                        { name: '\u200B', value: '\u200B' },
                        { name: 'Serveur rejoint', value: '\u200B' + memberinfo.joinedAt, inline: true },
                        { name: 'Rôles', value: '\u200B' + memberinfo.roles.highest.name, inline: true },
                    )
                    .setTimestamp()
                    .setFooter({ text: `Infos demandées par ${message.author.username}`, iconURL: message.author.displayAvatarURL({ format: 'png' }) });
                message.channel.send({ embeds: [embedinfo] });
            } else {
                const { Client, MessageEmbed, GuildMember } = require('discord.js');
                const embedinfo = new MessageEmbed()
                    .setColor(memberinfo.displayColor)
                    .setTitle(`A propos de ${userinfo.tag} (${memberinfo.nickname})`)
                    .setAuthor({ name: userinfo.tag, iconURL: userinfo.displayAvatarURL({ format: 'png' }) })
                    .setThumbnail(userinfo.displayAvatarURL({ format: 'png' }))
                    .addFields(
                        { name: 'Infos générales', value: `Compte à été créé le ${userinfo.createdAt}\nID : ${userinfo.id}` },
                        { name: '\u200B', value: '\u200B' },
                        { name: 'Serveur rejoint', value: '\u200B' + memberinfo.joinedAt, inline: true },
                        { name: 'Rôles', value: '\u200B' + memberinfo.roles.highest.name, inline: true },
                    )
                    .setTimestamp()
                    .setFooter({ text: `Infos demandées par ${message.author.username}`, iconURL: message.author.displayAvatarURL({ format: 'png' }) });
                message.channel.send({ embeds: [embedinfo] });
            }
        }
    }
}