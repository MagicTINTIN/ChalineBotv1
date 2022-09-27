const { Permissions } = require('discord.js');

module.exports = {
    name: 'adminmeow',
    description: 'Lister les commandes admin disponibles',
    execute(message) {
        if (message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            const { Client, MessageEmbed } = require('discord.js');
            const embedmeow = new MessageEmbed()
                .setTitle('Liste des commandes admin')
                .setColor(0xffa1a1)
                .setDescription(`Voici la liste des commandes pour les admins
\n> \`;del X\` supprime une quantité de messages
\n> \`;config help\` pour configurer Chaline sur votre serveur
\n> \`;counter help\` pour configurer un channel compteur
\n> \`;welcome help\` pour configurer la bienvenue sur votre serveur
\n> \`;boost help\` pour configurer le message de boost
\nPour plus d\'infos tapez \`;about\`.
\nPour être guidé pas à pas (de velour) dans l'utilisation des commandes faites \`/cmd\``);
            message.channel.send({ embeds: [embedmeow] });
        } else { message.channel.send('Tu n\'est pas modérateur !'); }
    }
}



