const logger = require("../../functions/logger.js");
const { joinVoiceChannel } = require('@discordjs/voice');
const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
    name: 'stopsay',
    description: 'Quitte le salon vocal actif',
    execute(message, args) {
        const { client } = require("../../index.js");
        try {
            if (fullpower.includes(message.author.id)) {
                const connection = getVoiceConnection(message.guild.id)

                if (!connection) return message.channel.send("Je ne suis pas connecté dans un channel de ce serveur")

                connection.destroy()

                console.log('Je me suis déco');
            }
        } catch (err) {
            console.error(err);
            message.channel.send(`Hey merci d'aller dans le channel souhaité !`)
        }
    }
}