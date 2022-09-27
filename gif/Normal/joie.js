module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "joie",
    description: "Une joie un peu ironique",
    execute(message) {
    const giflist = ["https://tenor.com/view/yaaay-saturday-night-live-sarcastic-yay-sarcastic-celebration-sarcasm-gif-18838328","https://tenor.com/view/bill-nye-party-horn-confetti-sarcastic-like-child-gif-5499505","https://tenor.com/view/minion-minions-yay-yippie-sarcastic-gif-13844543"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2022-05-15T16:14:40.360Z depuis le channel test(931568232127680562) sur le serveur Chaline(814097749603254303)