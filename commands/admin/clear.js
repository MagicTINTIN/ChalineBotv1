const { Permissions } = require('discord.js');

module.exports = {
    name: 'clear',
    description: 'Envoie un long message vide',
    execute(message, args) {
        if (message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            message.channel.send(`${pxclear}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${pxclear}`)
        } else { message.channel.send('Tu n\'est pas modérateur !'); }
    }
}