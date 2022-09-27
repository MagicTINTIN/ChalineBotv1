module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "antivax",
    description: "C'est Bill Gates qui veut nous controller !",
    execute(message) {
    const giflist = ["http://images5.aplus.com/uc-up/48568b2e-d95c-4e87-87b9-c30e136bdc95/48568b2e-d95c-4e87-87b9-c30e136bdc95.inline_yes"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T10:46:44.415Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)