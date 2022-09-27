module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "ouais",
    description: "Ouais",
    execute(message) {
    const giflist = ["https://media.tenor.co/images/d1196b0c752e109bfaaa0aeba6e4d639/raw","https://giphy.com/gifs/les-snuls-poli-nico-snul-SWcUkW9waxdcHwda0n"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T11:10:01.178Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)