module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "roucoule",
    description: "Rourou",
    execute(message) {
    const giflist = ["https://media.tenor.co/videos/186d5f8cacb35829b1ae03158ea5ba48/mp4"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2022-01-24T08:52:58.393Z depuis le channel channel(864162331113816074) sur le serveur Chaline(814097749603254303)