module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0 - version newgif)
    name: "ceciestuntest",
    description: "ajoutée par MagicTINTIN#4389",
    execute(message) {
    const giflist = ["çavamarcher","ounon","peutêtre"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2022-05-01T22:16:01.120Z depuis le channel channel(864162331113816074) sur le serveur Chaline(814097749603254303)