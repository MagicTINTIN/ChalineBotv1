const logger = require("../../functions/logger.js");

module.exports = {
    name: 'mp',
    description: 'Envoyer un mp avec le bot',
    execute(message, args) {
        const { client } = require("../../index.js");
        if (fullpower.includes(message.author.id)) {
            try {
                useridmp = args[0]
                args.shift()
                let msgtosend = args.join(' ');
                client.users.cache.get(useridmp).send(msgtosend).catch(reason => message.channel.send('Je ne peux envoyer de message à cette personne'));
            } catch (error) {
                console.error(error);
                message.channel.send('ERROR : Je ne peux envoyer de message à cette personne');
            }
        }
    }
}