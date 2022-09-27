module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "aidezmoi",
    description: "Besoin d'aide ?",
    execute(message) {
    const giflist = ["https://media.tenor.co/images/ee9fc476a7e8c158a72997d3961f83b0/raw","https://media.giphy.com/media/l41YxbocKKocjada0/giphy.gif","http://i1221.photobucket.com/albums/dd464/ctpgif/Sarko-aidez-moi.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T22:02:05.770Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)