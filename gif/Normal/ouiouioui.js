module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "ouiouioui",
    description: "Ah oui oui oui le 4 à la suite !",
    execute(message) {
    const giflist = ["https://tenor.com/view/lepers-oui-france3-gif-19085203"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2022-07-14T20:56:40.270Z depuis le channel 🗯-géné-admin-🗯(560512202776379403) sur le serveur ACDC ma gueule(460846845980049419)