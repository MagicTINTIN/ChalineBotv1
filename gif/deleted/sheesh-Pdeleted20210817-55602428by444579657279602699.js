module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "sheesh",
    description: "sheeeeesh",
    execute(message) {
    const giflist = ["https://tenor.com/view/ronan-sheesh-sheesh-gif-21479305"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-17T07:45:28.771Z depuis le channel 💬-général-💬(684777805900546065) sur le serveur ACDC ma gueule(460846845980049419)