const fs = require('fs');
const path = require('path');
const { client } = require("../index.js");
const logger = require("./logger.js");

const badwords = JSON.parse(fs.readFileSync(path.resolve(`./config/badwords.json`)));


function checkBadwords(msg) {
    badwordlist = badwords.filter(word => msg.content.toLowerCase().includes(word));
    return badwordlist;
}


module.exports = {
    // Check general properties of message
    general: function (message) {
        // Check if the message is safe for community
        suspiciousWords = checkBadwords(message);
        if (suspiciousWords.length > 0 && !message.author.bot) {
            logger.all(`${message.author.tag} a dit ${suspiciousWords.toString()} dans ${message.channel.name}`);
        }
    },
    reactChaline: async function (message) {
        if (configreact === '1') {
            if (message.content.startsWith('Chaline') && !message.author.bot) { message.reply('Non mais ça va pas de me réveiller comme ça là !'); }
            else if (message.content.toLowerCase().startsWith('que pense chaline de la v13 de discordjs') && !message.author.bot) { message.reply("Franchement, c'est pas fou..."); }
            else if (message.content.startsWith('Vive Chaline') && !message.author.bot) { message.reply('Donne moi des croquettes au lieu de parler'); }
            else if (message.content.startsWith('!tgmee6') && !message.author.bot) { message.channel.send('Oue j\'avoue femre bien ta gueule le bot !'); }
            else if (message.content.startsWith('Coucou Chaline') && message.author.bot) { message.reply('Casse toi le bot !'); }
            if (message.author.bot) return;
            // Catistics
            else if (message.content.includes("829996421846925352") || message.content.includes("Big Cata#0292")) {
                message.reply("Ce chat ne fait que dormir et faire des maths avec ses données... Une vraie cata.")
            }
            // Catistics
            else if (message.content.includes("836716125336764476") || message.content.includes("Catistics#5383")) {
                message.reply("Ce chat est assez mystérieux... je l'ai jamais entendu parler.")
            }
            // Catzino
            else if (message.content.includes("959556052469309440") || message.content.includes("Catzino#6578")) {
                message.reply("Chat qui vient pour jouer avec nous occasionnellement...")
            }
            // Chaline Counter
            else if (message.content.includes("815337853055008819") || message.content.includes("Chaline Counter#0315")) {
                message.reply("Alors faut pas faire attention à lui il fait que compter mais on sait pas pourquoi")
            }
            // Chalini
            else if (message.content.includes("816727136286146570") || message.content.includes("Chalini#4051")) {
                message.reply("Chalini ? c'est mon petit cousin, bon il est pas super malin mais bon il accepte de tester avant moi donc il est sympa")
            }
            // Chalink
            else if (message.content.includes("906507599082573845") || message.content.includes("Chalink#0927")) {
                message.reply("T'habites dans la creuse ? Ce chat pourrait te permettre de ne plus être coupé du monde et d'accéder à internet par sms.\nBon le seul problème c'est que lui aussi est dans la creuse... donc il a pas de connexion non plus.")
            }
            // Chat Gaming
            else if (message.content.includes("830493367954571264") || message.content.includes("Chat Gaming#6872")) {
                message.reply("Ce chat apportait des jeux avant mais ça fait longtemps qu'il est pas venu jouer. *snif*")
            }
            // Enzoline
            else if (message.content.includes("829746887082508379") || message.content.includes("Enzoline#2510")) {
                message.reply("Il s'appelle Enzo.")
            }
            // GogoleTrad
            else if (message.content.includes("899754024373461022") || message.content.includes("GogoleTrad#3424")) {
                message.reply("Un traducteur très pratique pour parler avec les humains (surtout les utilisateurs de twitter)")
            }
            // GuardCat#3650
            else if (message.content.includes("927916809267576843") || message.content.includes("GuardCat#3650")) {
                message.reply("Ne cherches pas à le déranger. Ce chat est une brute, et il peut être très méchant si on le dérange.\nMoi une fois pendant que je mangeais mes croquettes il est venu me piquer ma gamelle sous prétexte que je faisais trop de bruit.\n'l est po gentil.")
            }
            // HorlogeInutile
            else if (message.content.includes("900481503081943140") || message.content.includes("HorlogeInutile#9718")) {
                message.reply("Cette horloge est un peu inutile... m'enfin on le savait au moment où on l'a créée. Après c'est con qu'elle ait pas d'aiguilles pour la lire mais je vous jure qu'elle est à l'heure")
            }
            // JustChaline
            else if (message.content.includes("864933058247655484") || message.content.includes("JustChaline#0061")) {
                message.reply("rip mon ptit frère. Il a essayé d'apprendre le langage humain et ça l'a rendu dépressif.")
            }
            // Metallicat
            else if (message.content.includes("905568589346635828") || message.content.includes("Metallicat#5449")) {
                message.reply("Il a de très bon goûts musicaux, je dis pas hein... mais s'il pouvait baisser le son des fois... 142 décibels en pleine nuit quoi ! Y en a marre.\nEst-ce que j'embête tout le monde moi quand j'écoute Chatka Ponk ou Gojirat ?? non, et bah voilà")
            }
            else if (message.content.includes("995063229002825829") || message.content.includes("PartyChat#9490")) {
                message.reply("Ah lui il est trop sympa ! toujours des conneries a faire et en plus il donne des croquettes des fois")
            }

            // rm rf lol
            else if (message.content.toLowerCase().startsWith(";rm -rf")) {
                sentdeleted = await message.reply("Suppression du bot en cours")
                setTimeout(() => {
                    sentdeleted.edit("Suppression du bot en cours.")
                    setTimeout(() => {
                        sentdeleted.edit("Suppression du bot en cours..")
                        setTimeout(() => {
                            sentdeleted.edit("Suppression du bot en cours...")
                            setTimeout(() => {
                                sentdeleted.edit("*Ce message a été supprimé*")
                                oldnickname = message.guild.me.nickname;
                                message.guild.me.setNickname("Deleted Bot");
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);

                setTimeout(function () {
                    sentdeleted.edit("En fait non !")
                    message.guild.me.setNickname(oldnickname);
                }, 12000);
            }

            else if (((message.content.toLowerCase().includes('chaline') && !message.content.toLowerCase().startsWith(".chaline")) || message.content.includes('<@!813744876214550538>')) && !message.author.bot) { message.channel.send('Coucou ^^'); }
            for (var i in badCat) { //-----------------------------------------------------BAD WORDS--------------------------------------------------------------------
                for (var j in reactchaline) {
                    if (message.content.toLowerCase().includes(reactchaline[j]) && message.content.toLowerCase().includes(badCat[i]) && !message.author.bot) {
                        message.react("😾");
                        return;
                    }
                }
            }
            for (var i in goodCat) { //----------------------------------------------------GOOD WORDS-------------------------------------------------------------------------
                for (var j in reactchaline) {
                    if (message.content.toLowerCase().includes(reactchaline[j]) && message.content.toLowerCase().includes(goodCat[i]) && !message.author.bot) {
                        message.react("😺");
                        return;
                    }
                }
            }
            
        }
    }
}
