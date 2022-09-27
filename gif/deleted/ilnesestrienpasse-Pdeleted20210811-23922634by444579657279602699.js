module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "ilnesestrienpasse",
    description: "Non non, vraiment rien !",
    execute(message) {
    const giflist = ["https://media.tenor.co/images/a2ba6c6292ebaaa4c6c7f01480cbef02/raw"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T10:41:13.846Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)