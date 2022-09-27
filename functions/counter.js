const { client } = require("../index.js");
const logger = require("./logger.js");

function setChannelName(channelID, newname, guildid, reason) {
    //console.log("Changing name");
    try {
        client.channels.cache.get(channelID).setName(newname)
    } catch (error) {
        logger.all("🤖 Erreur lors de la mise à jour du nom du channel : " + reason + " on guild " +guildid)
    }
}

function triggerTotalMembers(guild, confguild) {
    var memberCount = guild.memberCount
    if (memberCount > 1000) {
        memberCount = memberCount / 1000 + ""
        memberCount = memberCount.slice(0, 4) + "k"
        //console.log(memberCount);
    }
    var newname = confguild.counters.totalmembers.channelName.replace("$c", `${memberCount}`)
    if (newname.length > 99)
        newname = `${memberCount}`;
    setChannelName(confguild.counters.totalmembers.idchannel, newname, guild.id, "totalmember")
}



module.exports = {
    // commandes de test
    member: function (guild) {
        var countconfserv = client.cfgsrvs.get(guild.id + "counters")
        if (!countconfserv) {
            //console.log(guild.memberCount,"membres")
        } else {
            //console.log(countconfserv);
            if (countconfserv.counters.totalmembers && countconfserv.counters.totalmembers.visible == true)
                triggerTotalMembers(guild, countconfserv)
        }
    }
};