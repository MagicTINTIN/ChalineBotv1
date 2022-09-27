module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "linux",
    description: "Linux",
    execute(message) {
    const giflist = ["https://tenor.com/view/linux-gnu-kernel-kernellinux-linuxkernel-gif-25835995","https://tenor.com/view/linux-penguin-gif-19799664"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[0]);
    }
} //Généré le 2022-09-21T17:05:30.396Z depuis le channel testcmd(817527540154630144) sur le serveur Chaline(814097749603254303)
