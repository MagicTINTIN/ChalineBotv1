module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "calme",
    description: "c'est calme",
    execute(message) {
    const giflist = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uniontlm.fr%2Fwp-content%2Fuploads%2F2020%2F05%2Fcalme.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:22:59.205Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)