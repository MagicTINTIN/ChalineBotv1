module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "tagueule",
    description: "ta gueule",
    execute(message) {
    const giflist = ["https://media.tenor.co/images/886551a8c0558a284db1d806e19f2290/raw","https://giphy.com/gifs/un-dans-ta-gueule-9eiJ2v4EhnDPO","https://tenor.com/view/ta-gueule-toi-tg-toi-tg-ta-gueule-gif-20110771"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-10T09:04:51.875Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)