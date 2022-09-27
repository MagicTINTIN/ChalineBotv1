module.exports = {
    name: 'serverinfo',
    description: 'Affiche des infos sur le serveur',
    execute(message) {
        guildinfo = message.guild;
        memberCountinfo = guildinfo.members.cache.filter(member => !member.user.bot).size;
        botCountinfo = guildinfo.memberCount - memberCountinfo;
        nbChannels = guildinfo.channels.cache.size;
        nbRoles = guildinfo.roles.cache.size;
        serverOwner = guildinfo.members.cache.find(user => user.id === guildinfo.ownerID);
        const { Client, MessageEmbed, GuildMember } = require('discord.js');
        const embedinfo = new MessageEmbed()


            .setColor(0xfbfbfb)
            .setTitle(`Infos sur ${guildinfo.name}`)
            .setAuthor({ name: guildinfo.name, iconURL: guildinfo.iconURL() })
            .setThumbnail(guildinfo.iconURL())
            .addFields(
                { name: 'Infos générales', value: `Compte à été créé le ${guildinfo.createdAt} par ${guildinfo.ownerId}\nID : ${guildinfo.id}\nChannels : ${nbChannels}` },
                { name: '\u200B', value: '\u200B' },
                { name: 'Membres', value: '\u200B' + guildinfo.memberCount, inline: true },
                { name: 'Rôles ', value: '\u200B' + nbRoles, inline: true },
            )
            .setTimestamp()
            .setFooter({ text: `Infos demandées par ${message.author.username}`, iconURL: message.author.displayAvatarURL({ format: 'png' }) });
        message.channel.send({ embeds: [embedinfo] });
    }
}