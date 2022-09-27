module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "loadiscrash",
    description: "Try to load but crash",
    execute(message) {
    const giflist = ["https://cdn.discordapp.com/attachments/704725540170367036/912042016404308010/loadiscrashgif.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-11-21T18:12:45.570Z depuis le channel testcmd(817527540154630144) sur le serveur Chaline(814097749603254303)