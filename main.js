const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const storeadapter = new FileSync('store.json');
const db = low(adapter);
const storedb = low(storeadapter);

db.defaults({ histoires: [], xp: []}).write()
var token = process.env.TOKEN
var bot = new Discord.Client();
var prefix = ("*");
var randnum = 0
var botenabled = true;
var storynumber = db.get('histoires').map('story_value').value();

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'Être dev par SCP_One_Zero_Six [*help]', type: 0}});
    console.log('Bot Ready !');
});

bot.login(token);

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue-aurevoir").send(`:hamburger: ${member.user.username} Viens de rejoindre le serveur ! T'as les règles tout ça tout ça ! Fait pas de la merde, ou j'te frappe !`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue-aurevoir").send(`:ski: ${member.user.username} Vient de ce barrer. Rip. Bof, au pire on s'en tape nan ?`)
})



bot.on('message', message => {
    
    var msgauthor = message.author.id;

    if(message.author.bot)return;

    if(!db.get("xp").find({user: msgauthor}).value()){
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb);
        var userxp = Object.values(userxpdb)
        console.log(userxp);
        console.log(`Nombre d'xp : ${userxp[1]}`)

        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();
    }

    if (message.content === "*ping"){
        message.reply("pong"); 
        console.log('ping pong');
    }
    if (message.content === "skip"){
        message.channel.send("!s"); 
        console.log('skip');
    }
    if (message.content === "*benladen"){
        message.channel.send("Et paf ! Plus de tours ! :airplane: https://www.nouvelordremondial.cc/wp-content/uploads/2016/05/wtc-911.jpg"); 
        console.log('Benladen');
    }
    
    if (message.content === "*Loueva"){
        message.channel.send("Fondatrice ! Cach- Ah ouai non, j'ai pas peur lolz"); 
        console.log('loueva');
    }
    if (message.content === "*Lara"){
        message.channel.send("T'as cru t'était chez ta mère ? Va te faire fister par un lama frisé (#private joke)."); 
        console.log('Lara');
    }
    if (message.content === "*Deymons"){
        message.channel.send("T'es un grooosss bébé https://i.skyrock.net/5008/17475008/pics/786843783_small.jpg"); 
        console.log('Deymons');
    }
    if (message.content === "*Yami"){
        message.channel.send("C'est un gars qui est gentil, mais il est méchant, du coup c'est un gentichant ?"); 
        console.log('Yami');
    }
    if (message.content === "*Pierre"){
        message.channel.send("Feuille ! J'ai gagné ! T'es nul ! Lol ! Ptdr ! Mdr ! xD xD xD **Part en courant** WOUPOUPOUPOUPOU (Note du dev: Si j'apprend que tu n'as pas ris, je te ban.)"); 
        console.log('Pierra');
    }
    if (message.content === "*Shimaru"){
        message.channel.send("Si vous dites sont pseudo rapidement, on dirais que vous dites Chie Marron (Note du dev : J'avais pas d'idée..)"); 
        console.log('Shimaru');
    }
    if (message.content === "*Tatsuyo"){
        message.channel.send("Il est là ? Ah non.. Comme d'hab.. Tant pis"); 
        console.log('Tatsuyo');
    }
    if (message.content === "*Kyru"){
        message.channel.send("Kyuruji Kyruyiju jumangi kiyujuru PUTAIN MAIS SON PSEUDO EST IMPRONONCABLE AUSSI !"); 
        console.log('Kyru');
    }
    if (message.content === "*John"){
        message.channel.send("AND HIS NAME IS John Seeds..."); 
        console.log('John');
    }
    if (message.content === "*ptdrtki"){
        message.channel.send("Un Bot développé par SCP_One_Zero_Six. En plus, j'suis beau. "); 
        console.log('ptdrtki');
    }
    if (message.content === "*Wesh"){
        message.channel.send("D'ou tu dit Wesh, vieux babtou fragile. Bouge ta race de là grosse merde."); 
        console.log('Wesh');
    }
    if (message.content === "*Couscous"){
        message.channel.send("WLH TU VIENS MANGER OU JE CHOPPE LA BABOUCHE ! EN PLUS JE ME SUIS FAIT CHIER POUR LA PRESENTATION ! RAMENNE TON GROS BOULE A TABLE ! https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fwww.2Ecuisineactuelle.2Efr.2Fvar.2Fcui.2Fstorage.2Fimages.2Frecettes-de-cuisine.2Ftype-de-plat.2Fplat-principal.2Fcouscous-tunisien.2F1138921-2-fre-FR.2Fcouscous-tunisien.2Ejpg/300x225/quality/80/crop-from/center/couscous-tunisien.jpeg"); 
        console.log('couscous');
    }
    if (message.content === "*Xoroth"){
        message.channel.send("Lache moi, je viole des gens... Bouge ou j'te viole aussi"); 
        console.log('Xoroth');
    }
    if (message.content === "Nani"){
        message.channel.send("omae wa mou shindeiru https://thumbs.gfycat.com/BlandOrnateGreatwhiteshark-size_restricted.gif");
        console.log('');
    }
    if (message.content === "*Matthieu"){
        message.channel.send("Ce mec est un chacal: https://www.dreuz.info/wp-content/uploads/2017/02/le-chacal-qui-eclate-theo-_photos1_10_94_935_93475_full.jpg");
        console.log('Matthieu');
    }
    if (message.content === "*Chris"){
        message.channel.send("Le péteur fou ! https://images-na.ssl-images-amazon.com/images/I/419oQ4l57sL.jpg");
        console.log('Chris');
    }
    if (message.content === "*Bite"){
        message.channel.send("Ne parles pas de choses que tu n'as pas... (Sauf mon dev d'amour, car il as la plus grosse! <3)");
        console.log('Bite');
    }
    if (message.content === "*allah"){
        message.channel.send("UAKBAR ! https://cdn.afrique-sur7.fr/545x350/articles/2017/03/Menace-terroriste-jpg.jpg");
        console.log('allah');
    }
    if (message.content === "*cpadrol"){
        message.channel.send("Rien à dire, juste a montrer.https://cdn.discordapp.com/attachments/435418476283166728/435480960620953611/2Q.png");
        console.log('cpadrol');
    }
    if (message.content === "*triche"){
        message.channel.send("TRICHEUR ! TU TRICHE ! FCKIN CHEATER ! https://cf.girlsaskguys.com/a48842/9d1aee5d-7587-408d-9511-52547049bb60.jpg");
        console.log('triche');
    }
    if (message.content === "*cparp"){
        message.channel.send("C PA RP ! https://i.ytimg.com/vi/aSqwf3CN12U/maxresdefault.jpg");
        console.log('cparp');
    }
    if (message.content === "*Bou"){
        message.channel.send("CHAT EN MANQUE DE CROQUETTES SAUVAGE APPARAIT !https://cdn.discordapp.com/attachments/431453273459916810/436182294814916617/chat-mitraillette-6cp_imagesia-com_nlxu.gif");
        console.log('bou');
    }
    if (message.content === "*Lonely"){
        message.channel.send("Je suis seul(e)... Lonely..I am so lonely..https://media.giphy.com/media/VfyC5j7sR4cso/giphy.gif");
        console.log('Lonely');
    }
    if (message.content === "*lamafriser"){
        message.channel.send("jeu cé écrir quar leu franssé cé mons paut.");
        console.log('lamafriser');
    }
    if (message.content === "*Neko"){
        message.channel.send("Prend moi par les fesses !!!! FAIT MOI MAL !!! https://78.media.tumblr.com/5a2579d462090286c62217828b4c7b57/tumblr_p0bhxaSFJ71vpe4noo1_540.gif");
        console.log('Neko');
    }    
    if (message.content === "*Neko1"){
        message.channel.send("C'est meuuugggnooonnn https://cdn.discordapp.com/attachments/428932127258705940/436651068349480981/ab48fba1d34aac63d9dc8946a340c840aaa06ef4_00.jpg");
        console.log('Neko1');
    }
    if (message.content === "*Neko2"){
        message.channel.send("Range ta bite ! Gros dégueulasse ! https://cdn.discordapp.com/attachments/428932127258705940/436650918272958464/1900c64c40b429db54a9c4f033f1fc39_480.jpg");
        console.log('Neko2');
    }
    if (message.content === "*Neko3"){
        message.channel.send("N'y pense même pas.. NE MET PAS TON CHIBRE DEDANS SA BOUCHE ! https://cdn.discordapp.com/attachments/428932127258705940/436650892222005248/84ccc78213e310fed3d587b9c6abd79f--beautiful-drawings-furry.jpg");
        console.log('Neko3');
    }
    if (message.content === "*Neko4"){
        message.channel.send("Si tu as baissé la tête pour voir sous sa jupe, t'est bizarre https://cdn.discordapp.com/attachments/428932127258705940/436650577322049568/images_5.jpg");
        console.log('Neko4');
    }
    if (message.content === "*Neko5"){
        message.channel.send("Miaouuu https://cdn.discordapp.com/attachments/428932127258705940/436650585907920907/images_11.jpg");
        console.log('Neko5');
    }
    if (message.content === "*Neko6"){
        message.channel.send("Bon, t'as fini ? Le mouchoir est plein ! Ca déborde ! t'en fout partout ! https://cdn.discordapp.com/attachments/428932127258705940/436650802669682689/telecharge_2.jpg");
        console.log('Neko6');
    }
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#5A01F4')
            .setThumbnail("https://cdn.discordapp.com/attachments/428932127258705940/435937828036149249/800eadaee2225360f59441cfed424f43b1a1f3aa_hq.jpg")
            .setImage("https://media.giphy.com/media/phJ6eMRFYI6CQ/giphy.gif")
            .addField("Commandes du bot ! Tout fonctionne avec le préfix *", " -help: Affiche les commandes du bot")
            .addField("Commandes XP (En cours de dev)", " -xpstat affiche l'xp accumulée sur le serv !")
            .addField("Interactions", "-ping : Commande pour le lolz, le bot répond pong")
            .addField("Commandes staffs. (Toujours mentionner la personne que vous souhaitez sanctionner.)", "-Ban\n-Kick")
            .setFooter("D'autres commandes sont à venir, soit patient jeune Padawan")
        message.channel.sendEmbed(help_embed);
            //message.channel.sendMessage("Voici les commandes du bot :\n -*help pour afficher les commandes")
        console.log("Commande help demandée !")
    }
    
    if(message.content === prefix + "xpstat"){
        var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
        var xpfinal = Object.values(xp);
        var xp_embed = new Discord.RichEmbed()
            .setColor('#F72BB0')
            .setTitle(`Xp de ${message.author.username}`)
            .setDescription("Voilà toute l'xp accumulée !")
            .addField("XP :", `${xpfinal[1]} xp`)
        message.channel.send({embed: xp_embed});
    
    
    }
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0].toLowerCase()){

        case "newstory":
        var value = message.content.substr(10);
        var author = message.author.toString();
        var number = db.get('histoires').map('id').value();
        //var storyid = number + 1;
        console.log(value);
        message.reply("Ajout de l'histoire à la base de données")

        db.get('histoires')
            .push({ id: number + 1, story_value: value, story_author: author})
            .write();
        
        break;

        case "tellstory":
        
        story_random();
        console.log(randnum);

        var story = db.get(`histoires[${randnum}].story_value`).toString().value();
        var author_story = db.get(`histoires[${randnum}].story_author`).toString().value();
        console.log(story);
        
        message.channel.send(`Voici l'histoire : ${story} (Histoire de ${author_story})`)
        
        break;
        
        case "fonda2":
        var yami = new Discord.RichEmbed()
            .setTitle("Ouverture du fichier: Yami Fondateur.")
            .setColor("#FF00A6")
            .setImage("https://cdn.discordapp.com/attachments/361946268425125898/436309161521709056/maxresdefault_2.jpg")
            .setThumbnail("https://cdn.discordapp.com/attachments/419486976346030081/435801009802051584/JPEG_20180318_121156.jpg")
            .setDescription("Accès autorisé.")
            .addField("Caractère", "Impulsif  , Blagueur , con sur les bord (Note du dev: Un peut au millieu)")
            .addField("Rôle(s) sur le serv", "Fondateur, Gérant fiche, Gérant Races.")
            .addField("Sanction(s) préférée(s)", "Le kick et le mute, tout dépend l'ordre, mais les deux finissent par tomber")

        message.channel.send({embed: yami});
        
        break;
                
        case "fonda1":
        var loueva = new Discord.RichEmbed()
            .setTitle("Ouverture du fichier: Loueva Fondatrice.")
            .setColor("#FF00A6")
            .setImage("https://cdn.discordapp.com/attachments/434389840579264542/436308973855965204/10f5efb4c6e5b8a7508e5bae39e8600f.jpg")
            .setThumbnail("https://cdn.discordapp.com/attachments/434389840579264542/436309021364977674/image_1.jpg")
            .setDescription("Accès autorisé.")
            .addField("Caractère", "Douce, Calme, Gentille, Fofole, Perverse, Bi :kissing_smiling_eyes:")
            .addField("Rôle(s) sur le serv", "👑 Fondatrice 👑 Donc elle fout pas grand chose.")
            .addField("Sanction(s) préférée(s)", "!mute ou explosion des Tours Jumelles.")

        message.channel.send({embed: loueva});
        
        break;
        
        case "admin":
        var john = new Discord.RichEmbed()
            .setTitle("Ouverture du fichier: John Seeds Admin.")
            .setColor("#FF00A6")
            .setImage("https://cdn.discordapp.com/attachments/434389840579264542/436479598654390272/knight_by_soft_h-d9bfr95.jpg")
            .setThumbnail("https://cdn.discordapp.com/attachments/434389840579264542/436479888590110723/Solona_sans_armure..jpg")
            .setDescription("Accès autorisé.")
            .addField("Caractère", "Flemmard, gentil, à l'écoute (ptdr), perfectionniste, et pas mâture du tout x)")
            .addField("Rôle(s) sur le serv", "Dormir ? Nah ? Bah euh...J'm'occupe des p'tits cons qui s'amusent à spam dans le gen', ou, les idiots qui s'amusent à insulter les autres. Enfin, quand j'suis la.")
            .addField("Sanction(s) préférée(s)", "L'ban, c'est cool, c'est drôle, c'est pratique, et en plus, ça laisse pas d'traces. Cool nah ?")

        message.channel.send({embed: john});
        
        break;
        
        case "admin2":
        var shimaru = new Discord.RichEmbed()
            .setTitle("Ouverture du fichier: Shimaru Admin.")
            .setColor("#FF00A6")
            .setImage("https://cdn.discordapp.com/attachments/434389840579264542/436507125129412608/816174e9f14eb89352ac74788cefdb3c.jpg")
            .setThumbnail("https://cdn.discordapp.com/attachments/434389840579264542/436507057819090945/Tiger_Brute.png")
            .setDescription("Accès autorisé.")
            .addField("Caractère", "Trop Gentil, Psycologue, Calme, M'enfoutisme ultime. ")
            .addField("Rôle(s) sur le serv", "Admin ou Espion du serveur il est la est espionne tout les moindre petit geste des joueurs pour surveiller qu'il n'y ai pas d'infractions et donne des chips au joueurs gentil c'est un dealer de chips mais chut ***(Note du dev: On s'en branle qu'il deale des chips nan ?)***")
            .addField("Sanction(s) préférée(s)", "Le pistolet-ban clique sur ban aussi vite que son ombre")

        message.channel.send({embed: shimaru});
        
        break;
                        
        case "fonda3":
        var deymons = new Discord.RichEmbed()
            .setTitle("Ouverture du fichier: Deymons Fondateur.")
            .setColor("#FF00A6")
            .setImage("https://cdn.discordapp.com/attachments/434389840579264542/436309510341263361/2Q.png")
            .setThumbnail("https://cdn.discordapp.com/attachments/389150353993629708/433501693724983297/image.jpg")
            .setDescription("Accès autorisé.")
            .addField("Caractère", "Calme, Répond aux attaques d'autrui , Déchiré à partir de 3 heures du matin")
            .addField("Rôle(s) sur le serv", "Je m'occupe des fiches et des candidatures staffs , Je m'occupe aussi des problèmes qu'on trouve dans le rp")
            .addField("Sanction(s) préférée(s)", "Le Mute et le kick mais surtout ... Le terrorisme")

        message.channel.send({embed: deymons});
        
        break;
        
        case "dev":
        var lara = new Discord.RichEmbed()
            .setTitle("Ouverture du fichier: Lara Développeur.")
            .setColor("#D8B90A")
            .setImage("http://www.slate.fr/sites/default/files/styles/1060x523/public/code_3.jpg")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/b/b7/Html-source-code.png")
            .setDescription("Accès autorisé.")
            .addField("Caractère", "Calme, patient, tétu, casses-burnes sur les bords (Au millieu aussi).")
            .addField("Rôle(s) sur le serv", "Développeur, gérant staffs. J'me charge de taper sur les pitits admins qui font de la merde, mais j'hésiterais pas a taper sur les autres aussi.")
            .addField("Sanction(s) préférée(s)", "C'est le bon gros ban des familles, mais t'auras pas le temps de le savoir si tu y fait face.")

        message.channel.send({embed: lara});
        
        break;
                
        case "admin3":
        var kyru = new Discord.RichEmbed()
            .setTitle("Ouverture du fichier: Kyru Admin (~~Cancer~~).")
            .setColor("#D8B90A")
            .setImage("http://www.confesercenti.it/wp-content/uploads/2017/07/Algoritmo.jpg")
            .setThumbnail("https://cdn.discordapp.com/attachments/434389840579264542/436311322624262144/telechargement_1.jpeg")
            .setDescription("Accès autorisé.")
            .addField("Caractère", "Raciste, Homophobe, Rousiste et Impulif (Note du dev: C'es un cancer en gros.)")
            .addField("Rôle(s) sur le serv", "Admin, en gros c'est une victime et il obéis au fondas.")
            .addField("Sanction(s) préférée(s)", "Le bruit du marteau appellé ban. Car ce bruit c'est la vie.")

        message.channel.send({embed: kyru});
        
        break;
        
    
        case "hidden2":
        var hidden2 = new Discord.RichEmbed()
            .setTitle("Ouverture du fichier: Caleçon de mon dev")
            .setColor("#FF00B9")
            .setImage("http://static2.7sur7.be/static/photo/2012/12/0/7/20120827173706/media_xl_5113957.jpg")
            .setDescription("Accès autorisé.")
            .addField("Objet:", "Caleçon de mon dev, faut pas lui dire ^^ (En vrai, je me suis auto dev pour vous présenter ça, car la franchement faut faire quelque chose)")
            .addField("Déscription:", "A la base, il était tout blanc.. J'ai envie de vomir.. Help me")
            .addField("Tu le veux ?", "Prend le, même pas j'le touche avec un baton..")
            .addField("Note du dev:", "#TracesDeFreinages RPZ !")

        message.channel.send({embed: hidden2});
        
        break;
        
        case "serveur":
        var serveur = new Discord.RichEmbed()
            .setTitle("Serveur de cassos")
            .setColor("#FF00A6")
            .setThumbnail("https://cdn.discordapp.com/attachments/275999957667020801/436146685534666752/14474510.jpg")
            .setImage("http://aws-cf.imdoc.fr/prod/photos/3/8/9/11112389/24911336/img-249113367a0.jpg?v=1")
            .setDescription("Wallay bismillay")
            .addField("Membres", "Chris, Matthieu, Yoann, Jules, Le gros random de Relien, Le gros naze d'Ethan, Et vous les randoms")
            .addField("Jeux", "League of Legend, World of tank, et tout les Battle Royale")
            .addField("Tu veux jouer avec nous ?", "Bah non, t'es un random de merde !")
            .addField("Note du dev:", "Si t'es pas content, j'te baise.")

        message.channel.send({embed: serveur});
        
        break;

        case "présentation":
        var serveur2 = new Discord.RichEmbed()
            .setTitle("Serveur de Lamafriser & Zokysun")
            .setColor("#73064D")
            .setThumbnail("https://cdn.discordapp.com/attachments/404014751899713546/436168928767770636/images.jpg")
            .setImage("https://media.giphy.com/media/ZLDLZ59r7NbDq/giphy.gif")
            .setDescription("Un petit serveur RP")
            .addField("Staffs", "Lamafriser, Zokysun, Tokarina, Roucool, Shitzuuu")
            .addField("But du serv", "Soyez RP, et tout va bien ce passer")
            .addField("Un problème ?", "Contacte un staff.")
            .addField("Note du dev:", "Je suis encore en développement. Me faites pas chier. (Dev: SCP_One_Zero_Six)")

        message.channel.send({embed: serveur2});
        
        break;

        case "kick":

        if (!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS")){
            message.reply("Wesh ! t'as cru tu pouvais kick ? t'es un gangster toi ! https://media1.tenor.com/images/6a3308e1dc31e5e846608ee80b382968/tenor.gif?itemid=5960585")
        }else{
            var member = message.mentions.members.first();
            if(!member){
                message.reply("Y'as pas de gars avec ce nom là sur le serv t'es con ou quoi ?");
            }else{
                message.channel.send(`${member.displayName} à été kick ! Dans sa gueule ! GET KICKED !!!!!!! https://media.giphy.com/media/s2p6iXjWv1CHm/giphy.gif`);
                member.kick().then((member) => {
            }).catch(() => {
                message.channel.send("Wesh ! t'as cru tu pouvais kick ? t'es un gangster toi ! https://media1.tenor.com/images/6a3308e1dc31e5e846608ee80b382968/tenor.gif?itemid=5960585")
            })
        } 
        }

        break;
        
        case "ban":

        if (!message.channel.permissionsFor(message.member).hasPermission("BAN_MEMBERS")){
            message.reply("De 1, j'ai la flèmme, de 2 t'as pas les perms et de 3 t'es un fdp à vouloir ban https://media.tenor.com/images/af630f8d408127ba0a0e96a62bfb4e4c/tenor.gif")
        }else{
            var banmember = message.mentions.members.first();
            if(!banmember){
                message.reply("Y'as pas de gars avec ce nom là sur le serv t'es con ou quoi ?");
            }else{
                message.channel.send(`${member.displayName} à été ban ! En même temps, il était pas trés utile.. https://i.imgur.com/O3DHIA5.gif`);
                banmember.ban().then((member) => {
            }).catch(() => {
                message.channel.send("De 1, j'ai la flèmme, de 2 t'as pas les perms et de 3 t'es un fdp à vouloir ban https://media.tenor.com/images/af630f8d408127ba0a0e96a62bfb4e4c/tenor.gif ")
            })
        }
        }
            

}



})
