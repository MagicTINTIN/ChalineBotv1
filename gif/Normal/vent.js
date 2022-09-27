module.exports = {
    name: "vent", 
    description: "", 
    execute(message) {
        const giflist = [ 
            "https://tenor.com/view/silence-nobody-cares-wind-gone-gone-with-the-wind-gif-12318325",
            "https://www.ge-rh.expert/wp-content/uploads/2019/05/tumblr_nn2a7xip9U1rb2l1co1_400.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}