const { Permissions } = require('discord.js');

module.exports = {
    name: 'del',
    description: 'Supprimer des messages',
    execute(message, args) {
        if (message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            const amount = parseInt(args[0]) + 1;
            if (isNaN(amount)) {
                return message.channel.send('Ce n\'est pas un nombre valide !');
            }
            else if (amount <= 1 || amount > 100) {
                return message.channel.send('Ce n\'est pas un nombre valide ! (entre 1 et 99)');
            }
            message.channel.bulkDelete(amount)
                .then(messages => {
                    console.log(`${messages.size - 1} messages supprimés par ${message.author.username} sur ${message.guild.name} dans ${message.channel.name}`);
                });
        } else { message.channel.send('Tu n\'est pas modérateur !'); }
    }
}