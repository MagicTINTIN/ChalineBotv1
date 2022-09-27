const logger = require("../../functions/logger.js");
const discordTTS = require('discord-tts-fr');
const { AudioPlayer, AudioPlayerStatus, createAudioPlayer, createAudioResource, StreamType, NoSubscriberBehavior, entersState, VoiceConnectionStatus, joinVoiceChannel } = require("@discordjs/voice");

module.exports = {
    name: 'say',
    description: 'TTS Français en vocal',
    async execute(message, args) {
        const { client, audioPlayer } = require("../../index.js");
        try {
            if (fullpower.includes(message.author.id)) {
                messagetospeech = message.content.slice(5)
                logger.all("Chaline a parlé : " + messagetospeech);

                const channel = message.member?.voice.channel;

                const player = createAudioPlayer();

                function playSong(messagetospeech) {
                    const resource = createAudioResource(discordTTS.getVoiceStream(messagetospeech), {
                        inputType: StreamType.Arbitrary,
                    });

                    player.play(resource);

                    return entersState(player, AudioPlayerStatus.Playing, 5e3);
                }

                async function connectToChannel(channel) {
                    const connection = joinVoiceChannel({
                        channelId: channel.id,
                        guildId: channel.guild.id,
                        adapterCreator: channel.guild.voiceAdapterCreator,
                    });
                    try {
                        await entersState(connection, VoiceConnectionStatus.Ready, 30_000);
                        return connection;
                    } catch (error) {
                        connection.destroy();
                        throw error;
                    }
                }

                try {
                    await playSong(messagetospeech);
                    logger.all('TTS ok');
                } catch (error) {
                    console.error(error);
                }


                if (channel) {
                    try {
                        const connection = await connectToChannel(channel);
                        connection.subscribe(player);
                    } catch (error) {
                        console.error(error);
                    }
                } else {
                    await message.channel.send("Hey merci d'aller dans le channel souhaité !");
                }
            }
        } catch (err) {
            console.error(err);
            message.channel.send(`Hey merci d'aller dans le channel souhaité !`)
        }
    }
}