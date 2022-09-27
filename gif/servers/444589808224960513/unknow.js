module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0 - version newgif)
    name: "unknow",
    description: "ajouté par MagicTINTIN#4389",
    execute(message) {
    const giflist = ["leservuer"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-07T18:08:36.713Z depuis le channel cmd(817804525292224572) sur le serveur Unknow Server(444589808224960513)