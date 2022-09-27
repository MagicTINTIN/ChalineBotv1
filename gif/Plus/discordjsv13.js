module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "discordjsv13",
    description: "Joie...",
    execute(message) {
    const giflist = ["https://tenor.com/view/discord-gif-20623812"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2022-05-16T18:15:25.664Z depuis le channel testcmd(817527540154630144) sur le serveur Chaline(814097749603254303)