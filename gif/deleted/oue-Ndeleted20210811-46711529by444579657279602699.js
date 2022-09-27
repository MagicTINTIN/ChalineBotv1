module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "oue",
    description: "Ouais...",
    execute(message) {
    const giflist = ["https://media.tenor.co/images/0f6cca39fd7ca77a33e33b33052f676a/raw","https://media.tenor.co/images/5601ddbd8405f838cb98e8a84f5a8b1c/raw"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T11:11:59.844Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)