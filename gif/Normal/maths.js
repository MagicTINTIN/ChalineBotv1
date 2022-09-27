module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "maths",
    description: "maths",
    execute(message) {
    const giflist = ["https://tenor.com/view/doug-maclean-mac-kyper-kypreos-nick-kypreos-gif-22264825","https://tenor.com/view/maths-gif-24525141"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2022-06-06T15:02:06.887Z depuis le channel idées-gif(842833932067012658) sur le serveur Chaline(814097749603254303)