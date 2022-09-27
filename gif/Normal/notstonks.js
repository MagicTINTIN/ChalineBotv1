module.exports = {
    name: "notstonks", 
    description: "not stonks", 
    execute(message) {
        const giflist = [ 
            "https://cdn.discordapp.com/attachments/704725540170367036/816719347561136188/notstonks2.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}