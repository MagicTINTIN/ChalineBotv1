const fs = require('fs');
const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const path = require('path');

module.exports = {
    name: 'counter',
    description: 'Configurez les channels compteurs de votre serveur',
    execute(message, args) {
        if (message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
            const { client } = require("../../index.js");

            const guildcfg = message.guild;
            guildid = guildcfg.id

            if (args[0] == "help" || !args[0]) {
                return message.channel.send(`Tape \`;counter read\` pour lire la config des compteurs de ton serveur
Tape \`;counter add/rem type id Nom+du+channel+:+$c\`
ad pour ajouter ou rem pour supprimer un compteur
type est le type de compteur, pour l'instant uniquement \`totalmembers\` est disponible
// Les 2 arguments suivants ne sont nécessaires que si la commande est "add"
id est l'id du channel vocal
Le Nom+du+channel+:+$c sera transformé en Nom du channel : X, X étant le nombre d'éléments du type choisi`);
            }
            else if ((args[0] == "rem" && !args[1]) || (!args[3] && args[0] == "add")) {
                return message.channel.send(`Erreur il manque des informations pour correctement exécuter la commande, tapez ;counter help pour obtenir de l'aide`);
            }
            else if (args[0] == "read") {
                try {
                    let rawcfgread = fs.readFileSync(path.resolve(`./servers/${guildcfg.id}counters.json`));
                    let cfgread = JSON.stringify(JSON.parse(rawcfgread));
                    cfgread = cfgread.split('","').join('",\n"');
                    console.log(cfgread);
                    setTimeout(function () { message.channel.send(`Voici la config des compteurs actuelle :\n\`\`\`json\n ${cfgread}\`\`\``) }, 2000);
                }
                catch (err) {
                    message.channel.send("Configuration introuvable ou illisible, merci de créer une configuration avant de vouloir la lire.")
                }
            }
            else if (args[0] == "add" || args[0] == "rem") {
                // activate in config
                previousconfig = false;
                try { // Loading previous
                    previousconfig = JSON.parse(fs.readFileSync(path.resolve(`./servers/${guildid}counters.json`)));
                    console.log("Configuration précédente rechargée")
                } catch (err) { console.log("pas de configuration précédente à recharger"); }
                setTimeout(function () {
                    if (!previousconfig && (args[0] == "add" || args[0] == "rem")) {

                        if (args[0] == "add") {
                            message.channel.send("Aucun compteur n'a été trouvé. Création d'une configuration en cours...");
                            if (args[1] == "totalmembers")
                                cfgserverjson = {
                                    serverid: guildcfg.id,
                                    counters: {
                                        totalmembers: {
                                            visible: true,
                                            idchannel: args[2],
                                            channelName: args[3].replace("+", " ")
                                        }
                                    }
                                }
                        }
                        else if (args[0] == "rem") {
                            return message.channel.send("Vous n'avez déjà aucun compteur, je trouve rien à supprimer moi...")
                        }
                        const jsonStringcfg = JSON.stringify(cfgserverjson);
                        fs.writeFile(`./servers/${guildcfg.id}counters.json`, jsonStringcfg, err => {
                            if (err) {
                                console.log(`Error writing counters config of ${guildcfg.id}(${guildcfg.name})`, err)
                            } else {
                                console.log(`Successfully wrote counters config of ${guildcfg.id}(${guildcfg.name})`)
                            }
                        });
                        client.cfgsrvs.set(guildid + "counters", cfgserverjson);
                        message.channel.send(`Configuration des compteurs mise à jour !\nVous pouvez consulter votre configuration en tapant \`;counter read\``);
                    }
                    // old config found
                    else if (args[0] == "add" || args[0] == "rem") {
                        

                        if (args[0] == "add") {
                            message.channel.send("La configuration des compteurs précédente a bien été rechargée. Modification en cours.");
                            if (args[1] == "totalmembers")
                                previousconfig.counters.totalmembers = {
                                    visible: true,
                                    idchannel: args[2],
                                    channelName: args[3].replace("+", " ")
                                }
                        }
                        else if (args[0] == "rem") {
                            message.channel.send("Suppression en cours du compteur " + args[1]);
                            if (args[1] == "totalmembers")
                                previousconfig.counters.totalmembers.visible = false;
                        }
                        //console.log(previousconfig);
                        const jsonStringcfg = JSON.stringify(previousconfig);
                        fs.writeFile(`./servers/${guildcfg.id}counters.json`, jsonStringcfg, err => {
                            if (err) {
                                console.log(`Error writing counters config of ${guildcfg.id}(${guildcfg.name})`, err)
                            } else {
                                console.log(`Successfully wrote counters config of ${guildcfg.id}(${guildcfg.name})`)
                            }
                        })
                        client.cfgsrvs.set(guildid + "counters", previousconfig);
                        message.channel.send(`Configuration mise à jour !\nVous pouvez consulter votre configuration en tapant \`;counter read\``);
                    }
                    else {
                        message.channel.send("Le 2e argument doit être soit add ou rem, tapez ;counter help pour obtenir de l'aide.")
                    }
                }, 2000);
            }
        }
    }
}
