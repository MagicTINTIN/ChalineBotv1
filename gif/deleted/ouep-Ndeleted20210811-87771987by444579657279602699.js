module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "ouep",
    description: "Oui",
    execute(message) {
    const giflist = ["https://media.tenor.com/images/e0715d1e42e6e9894739918609b718c0/tenor.gif","https://media.tenor.co/images/d615fe03b23af8263f99467cd0d8c525/raw"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T11:13:42.976Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)