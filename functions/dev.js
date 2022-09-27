const { client } = require("../index.js");
const devfct = require("./devfct.js");
const counter = require("./counter.js");

module.exports = {
    // commandes de test
    testbot: function (message) {
        if (fullpower.includes(message.author.id)) {
            if (message.content.toLowerCase().startsWith(";boostmsg")) {

                if (!message.mentions.users.size) {
                    userinfo = message.author;
                    memberinfo = message.guild.members.cache.get(userinfo.id);
                }
                else {
                    usrmention = message.mentions.users.first();
                    memberinfo = message.guild.members.resolve(usrmention);
                }

                devfct.boost(memberinfo);
            }
            else if (message.content.toLowerCase().startsWith(";welcomemsg")) {

                if (!message.mentions.users.size) {
                    userinfo = message.author;
                    memberinfo = message.guild.members.cache.get(userinfo.id);
                }
                else {
                    usrmention = message.mentions.users.first();
                    memberinfo = message.guild.members.resolve(usrmention);
                }

                devfct.welcome(memberinfo);
            }
            else if (message.content.toLowerCase().startsWith(";mcount")) {
                counter.member(message.guild)
            }
        }
    }
};