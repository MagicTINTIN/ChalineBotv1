const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Afficher des avatars',
    execute(message) {
        if (!message.mentions.users.size) {
            userinfo = message.author;
            memberinfo = message.guild.members.cache.get(userinfo.id);

            const photo = new MessageEmbed()
                .setColor(memberinfo.displayColor)
                .setTitle("Votre avatar est :")
                .setAuthor({ name: userinfo.tag, iconURL: userinfo.displayAvatarURL({ format: 'png' }) })
                .setImage(message.author.displayAvatarURL({ format: 'png' }))
            message.channel.send({ embeds: [photo] });
        }
        else {
            const avatarList = message.mentions.users.map(user => {
                memberinfo = message.guild.members.cache.get(user.id);

                const photo = new MessageEmbed()
                    .setColor(memberinfo.displayColor)
                    .setTitle(`L'avatar de ${user.username} est :`)
                    .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL({ format: 'png' }) })
                    .setImage(user.displayAvatarURL({ format: 'png' }))
                message.channel.send({ embeds: [photo] });
            });
        }
    }
}