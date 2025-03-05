import lightTheme  from './Colors'


let data =
{
   nom_de_la_liste : "La CRYPT",
   lien_liste_insta : "https://www.instagram.com/crypt_la_liste/",
   lien_liste_facebook : "https://www.facebook.com/crypt_la_liste",
   lien_liste_youtube : "https://www.youtube.com/@Crypt_la_liste",
   catégories_missions : ["Tout", "Corvées", "Bien être", "Divertissements", "Packs" ],
       
   debloque_wel_debut : false,
   debloque_wel: false,

   liens_telephones_wel : 
    [
        //zone bleu :
        "tel:0783546041",

        //zone grise :
        "tel:0629498980",

        // zone verte :
        "tel:0767583283",

        //zone orange :
        "tel:0783606873",
    ],

    liens_telephones_sos : 
    [
        //zone bleu :
        "tel:0619288079",

        //zone grise :
        "tel:0766331083",

        // zone verte :
        "tel:0629498980",

        //zone orange :
        "tel:0777440118",
    ],
      
   description_mission_catégorie :
   [
       "Toutes les missions",
       "Livraison de colis, de repas, de courses",
       "Ménage, nettoyage, rangement",
       "Jardinage, tonte de pelouse, taille de haie",
   ],
   missions : [
       { nom: "Nettoyage de mousson", categorie: "Corvées", description: "on assure vaisselle, ménage, rangement…" },
       { nom: "Mission sauuuce", categorie: "Corvées", description: "Un aventurier vient te faire à manger chez toi" },
       { nom: "Jeep Deluxe", categorie: "Corvées", description: "La flemme de pédaler pour te déplacer ? Un aventurier intrépide te châle où tu veux bravant la jungle et son humidité tropicale" },
       { nom: "Drive de la jungle ", categorie: "Corvées", description: "Livraison de courses à domicile" },
       { nom: "Clopin clopant ", categorie: "Corvées", description: "Livraison de clopes à domicile" },
       { nom: "Coupe de cheveux", categorie: "Bien être", description: "Un aventurier vient dompter ta crinière sauvage" },
       { nom: "Camouflage", categorie: "Bien être", description: "Tu as toujours rêvé d’une coloration verte pour te cacher des dangereux animaux de la jungle ? Ce SOS est exactement ce qu’il te faut !" },
       { nom: "Détente tropicale", categorie: "Bien être", description: "On vient te faire un massage pour te détendre après toutes tes aventures de. la journée" },
       { nom: "Griffes félines", categorie: "Bien être", description: "On te fait une manucure aux petits oignons" },
       { nom: "Coach Love", categorie: "Bien être", description: "On vient te donner des conseils pour trouver (enfin) liane à ton pied !" },
       { nom: "Talkie vert", categorie: "Bien être", description: "On t’offre un safari sensuel plein de frissons au téléphone (Grrrr)" },
       { nom: "Spa", categorie: "Bien être", description: "Soin du visage exotique" },
       { nom: "Soin au choix", categorie: "Bien être", description: "Hésite pas à nous faire part de tes désirs les plus fous !" },
       { nom: "Hugo déCRYPT", categorie: "Divertissements", description: "On vient parler potins avec toi et te mettre à la page de tous les dramas du moment" },
       { nom: "Le venin", categorie: "Divertissements", description: "Dégustation de sauces épicées plus hot que la chaleur des tropiques " },
       { nom: "Temple run Bastille", categorie: "Divertissements", description: "Run avec toi à la bastille : pulvérisation de RP garantie" },
       { nom: "As de la jungle", categorie: "Divertissements", description: "On vient faire des jeux de cartes avec toi pour chasser ton ennui comme on chasse le tigre" },
       { nom: "Marsupilattaque", categorie: "Divertissements", description: "Un véritable marsupilami vient jouer à la bagarre avec toi. Offre limitée : un seul marsupilami est disponible !" },
       { nom: "Symphonie de la jungle", categorie: "Divertissements", description: "Un orchestre vient te ravir tes petites oreilles d’aventurier" },
       { nom: "Projection film", categorie: "Divertissements", description: "On se fera un plaisir de regarder avec toi nos films préférés comme indiana Jones; Tarzan ou Madagascar mais on est ouvert à tes propositions ! Offre (très) limitée ! " },
       { nom: "Au choix", categorie: "Divertissements", description: "Hésite pas à nous faire part de tes désirs les plus fous" },
       { nom: "P’tit dej après une soirée tropicale humide 3€", categorie: "Packs", description: "une boisson chaude (café ou chocolat), une viennoiserie, 2 crêpes et une boisson (jus de fruit ou red bull) t’attendent pour seulement 3€ ! " },
       { nom: "Goûter 2€", categorie: "Packs", description :  "Une part de brookie, un chocolat chaud et 2 crêpes (nutella ou sucre)" },
       { nom: "Apéro 12€ pour 4", categorie: "Packs", description: "Chips, tortillas, guacamole, cacahuètes et bière de la Crypt !" },
       { nom: "Chocotropic 10€ pour 10", categorie: "Packs", description: "Fontaine de chocolat avec pommes, bananes, clémentines, raisins" },
       { nom: "Anniversaire", categorie: "Packs", description: "On vient fêter ton anniversaire !" },
       { nom: "Cookie tisane 3€", categorie: "Packs", description: "Pour un goûter détente" },
       { nom: "Chicha", categorie: "Divertissements", description: "Appelez nous pour en savoir plus" }
   ],
   catégories_défis : ["Tout", "DD", "Crypt", "Membres de la Crypt", "Bob Marliste",  "Hard Core"],
   date_fin_defi : '2025-02-17T00:00:00Z',
   defis : [
       { nom: "Fumer tue", categorie: "DD", description: "Fais une campagne de prévention à un fumeur", points : 20 },
       { nom: "Montre au chef que t'es végé", categorie: "DD", description: "Prendre une assiette végé à la cantine en regardant le chef droit dans les yeux en lui disant \"je mange végétarien pour sauver la planète\"", points : 20 },
       { nom: "C'est pas Versailles ici", categorie: "DD", description: "Éteindre la lumière en cours pour sauver la planète (de préférence quand il n'y a pas assez de lumière dans la pièce) en disant \"C'est pas Versailles ici\"", points : 20 },
       { nom: "La main verte", categorie: "DD", description: "Planter une plante/pisser dessus pour favoriser sa croissance", points : 10 },
       { nom: "Shot végé", categorie: "DD", description: "Demander un shot végé au pharaon", points : 15 },
       { nom: "Event DD", categorie: "DD", description: "Aller à l'event DD", points : 20 },
       { nom: "Dessert vegan", categorie: "DD", description: "faire un dessert végan", points : 2 },
       { nom: "Harmoniser avec la nature", categorie: "DD", description: "Faire un câlin à un arbre pour harmoniser avec la nature", points : 10 },
       { nom: "L'As du volant", categorie: "DD", description: "Chaler qqun sans les mains", points : 20 },
       { nom: "L’As de la jungle", categorie: "Crypt", description: "Faire un générique des as de la jungle ", points : 15 },
       { nom: "Au lasso", categorie: "Crypt", description: "Attrape quelqu'un au lasso au chalet ", points : 10 },
       { nom: "Jungle Speed", categorie: "Crypt", description: "Faire un jungle Speed en amphi", points : 15 },
       { nom: "Temple Run", categorie: "Crypt", description: "Gagner 3000 pièces au Temple Run ", points : 10 },
       { nom: "Outfit d'aventurier", categorie: "Crypt", description: "Venir en cours avec une chemise d'aventurier, un short et un chapeau d'aventurier ", points : 15  },
       { nom: "Trouver un trésor", categorie: "Crypt", description: "Trouver un trésor insolite au ski / en montagne", points : 10 },
       { nom: "Temple Run IRL", categorie: "Crypt", description: "Faire un Temple Run en réel dans les couloirs de Phelma", points : 15 },
       { nom: "Il en faut peu pour être heureux", categorie: "Crypt", description: "Refaire la musique \"il en faut peu pour être heureux\" acapella et par groupe (refaire les instruments avec la voix)", points : 10 },
       { nom: "Danseur pro", categorie: "Crypt", description: "Faire la danse de la liste", points : 15 },
       { nom: "Chanteur pro", categorie: "Crypt", description: "Chanter le refrain de la liste ", points : 15 },
       { nom: "Merci pour la force", categorie: "Crypt", description: "Partager le compte insta en story", points : 15 },
       { nom: "L'instant parfait", categorie: "Crypt", description: "Prendre une photo avec un goodies de la liste ", points : 15 },
       { nom: "Stickers", categorie: "Crypt", description: "Coller nos stickers dans un endroit improbable", points : "5/Stickers" },
       { nom: "Tableau Crypt", categorie: "Crypt", description: "Ecrire Crypt sur le plus de tableau dans Phelma ", points : "5/Tableau" },
       { nom: "Bandeur de Crypt", categorie: "Crypt", description: "Avoir le mot Crypt dans son nom FB pendant les campagnes ", points : 25 },
       { nom: "Fan de Crypt", categorie: "Crypt", description: "Avoir la photo de profil Crypt pendant les campagnes", points : 25 },
       { nom: "Réveille le King Julian qui sommeille en toi", categorie: "Crypt", description: "Venir déguisé en king Julian à un event de la crypt", points : 40 },
       { nom: "Petit Gourmand ", categorie: "Membres de la Crypt", description: "Donne ton dessert à Emili2/Respoubelle de table", points : "5/dessert" },
       { nom: "Brawler", categorie: "Membres de la Crypt", description: "Faire une partie Brawl Stars avec Jeff/Resplot ou le claqueur de joue/Respo Daronne", points : 15 },
       { nom: "Putaiiing", categorie: "Membres de la Crypt", description: "Tenir une conversation avec Gossip Man XOXO ou Emiliano/Trez Ruiné en forçant excessivement l'accent toulousain", points : 15 },
       { nom: "Gotaga ", categorie: "Membres de la Crypt", description: "Full box en réalité Kinstaar/Respo Fortnite ", points : 15 },
       { nom: "BTP", categorie: "Membres de la Crypt", description: "Donner une truelle au portugais sexy/respo truelle", points :15},
       { nom: "Star ", categorie: "Membres de la Crypt", description: "Prendre une photo avec les 3 Prez de la Crypt en même temps", points : 20 },
       { nom: "FanBase", categorie: "Membres de la Crypt", description: "Faire une photo avec des membres de la crypt ", points : "5/personne" },
       { nom: "Neymar Prime ", categorie: "Membres de la Crypt", description: "Metre un ptit pont a lisaaaaaaaaaa et ilanninho ", points :20 },
       { nom: "Razmo ", categorie: "Membres de la Crypt", description: "Gratter une clope aux ratz ", points :15 },
       { nom: "Rp schomacher/Tout schuss", categorie: "Membres de la Crypt", description: "Battre le respo ski sur la descente d'une piste ", points :20 },
       { nom: "La queu tremblante ", categorie: "Membres de la Crypt", description: "Jouer et gagner contre jeff et claqueur de joue au billard ", points :10 },
       { nom: "Dieu de la danse ", categorie: "Membres de la Crypt", description: "Danser la chorée avec ella en apnée chorégraphique preuve video ", points :25 },
       { nom: "Grande star ", categorie: "Membres de la Crypt", description: "Faire un tapis de Cannes devant le tapis/rapido", points : 20 },
       { nom: "Essaye pour voir ", categorie: "Membres de la Crypt", description: "Boire un pichet plus vite que le respieds ", points : 25 },
       { nom: "Violence gratuite ", categorie: "Membres de la Crypt", description: "Taper la respOB sur la tête avec une bouteille (vide) ", points : 10 },
       { nom: "Rp squatteur ", categorie: "Membres de la Crypt", description: "Dormir sur le canapé de la prez ", points :30 },
       { nom: "Aigri de fou ", categorie: "Membres de la Crypt", description: "Faire rire le prez BDAigri ", points :15 },
       { nom: "Pas volé celle là ", categorie: "Membres de la Crypt", description: "Tacler (littéralement) la prez BDéesse ", points : 30 },
       { nom: "Masterclass Lou ", categorie: "Membres de la Crypt", description: "Féliciter Lou pour son logo", points : 10 },
       { nom: "Monstre ", categorie: "Membres de la Crypt", description: "Bench le respoDéfis", points : 15 },
       { nom: "Bougie Bomb ", categorie: "Membres de la Crypt", description: "Bougie des membres de la crypt ", points :"5/membre" },
       { nom: "Sacré Bob ", categorie: "Bob Marliste", description: "Jouer et chanter en même temps \"One love\" de Bob Marley dans le hall ", points : 15 },
       { nom: "Danse reggae ", categorie: "Bob Marliste", description: "Faire une danse reggae dans le hall de Phelma ", points : 15 },
       { nom: "Lover ", categorie: "Bob Marliste", description: "Faire un câlin aux membres de la crypt en disant \"peace and love\"", points : "5/personne" },
       { nom: "Ricard reggae lover ", categorie: "Bob Marliste", description: "Jouer et chanter en même temps \"One love\" de Bob Marley dans le hall ", points : 15 },
       { nom: "Stickers Bob Marliste ", categorie: "Bob Marliste", description: "Coller des stickers bob Marliste", points : "5/stickers" },
         { nom: "Ça rapproche", categorie: "Hard Core", description: "Chanter du Bob Marley à un inconnu", points : 25 },
       { nom: "Concert ", categorie: "Hard Core", description: "Faire un concert de Reggae à un inconnu", points : 25 },
       { nom: "Gros bg des pistes va ", categorie: "Hard Core", description: "Faire du ski habillé en Tarzan (slip léopard)", points : 25 },
       { nom: "Marsu Marsu", categorie: "Hard Core", description: "Viens en cours en Marsupilami", points : 25 },
       { nom: "Animal ", categorie: "Hard Core", description: "Faire le crie de Tarzan au châlet debout sur une table ", points : 25 },
       { nom: "Event addict ", categorie: "Hard Core", description: "Faire tous les évènements de La Crypt", points : 50 },
],
   defis_cache : [
       { nom: "As des As", categorie: "Défis Cachés", description: "Dire en face d'un prof : \"Je fais partie des As de la jungle\"", points : 20 },
       { nom: "Acrobate du chalet ", categorie: "Défis Cachés", description: "Faire le poirier au châlet en criant \"jungle\"", points : 20 },
       { nom: "L’after au R37", categorie: "Défis Cachés", description: "Pécho quelqu'un du r37 ", points : 20 },
       { nom: "Banane présidentielle ", categorie: "Défis Cachés", description: "Offrir une banane aux trois prez", points : 20 },
       { nom: "Grand fan ", categorie: "Défis Cachés", description: "Demander l'autographe d'un aventurier célèbre ", points : 20 },
       { nom: "En mode chasse", categorie: "Défis Cachés", description: "Voler la queue du marsupilami ", points : 20 },
       { nom: "Chasseur chassé ", categorie: "Défis Cachés", description: "Partir à la chasse du chasseur de la liste ", points : 20 },
       //{ nom: "1v1 Régis", categorie: " Hard Core", description: "serrer la main de régis plus fort que lui ne la sert ", points : 75 },
      // { nom: "C'est juste un daron chill", categorie: " Hard Core", description: "Fumé un gros teh avec Régis ", points : 75 },
   ],
  
   nom_mois : ["jan", "fev", "mar", "avr", "mai", "jun", "jul", "aout", "sep", "oct", "nov", "dec"],
   calendrier_data : [
       { nomJour: "27 jan" },
       { nomJour: "28 jan" },
       { nomJour: "29 jan" },
      
        { nomJour: "30 jan", title: "Dévoilement", description: "Bienvenue à la Crypt !", textColor: "black", backgroundColor: lightTheme.brown},
       { nomJour: "31 jan",  title: "SOS",  description: "La Crypt pour te servir ! Va voir tous nos services sur l’appli puis appelle-nous !",  textColor: "black",  backgroundColor: lightTheme.brown  },
       { nomJour: "1 fev", title: "Soirée BDE + SOS",  description: "La soirée à ne pas manquer ! (21 - 3h45h) \n La Crypt pour te servir ! Va voir tous nos services sur l’appli puis appelle-nous !",  textColor: "black", backgroundColor: lightTheme.lightGreen  },
       { nomJour: "2 fev",  title: "SOS",  description: "La Crypt pour te servir ! Va voir tous nos services sur l’appli puis appelle-nous !",  textColor: "black",  backgroundColor: lightTheme.brown  },
       { nomJour: "3 fev", title: "Kfet",  description: "Deviens un fauve déchaîné avec nos pichets !",  textColor: "black", backgroundColor: lightTheme.lightGreen  },
       { nomJour: "4 fev" },
       { nomJour: "5 fev", title: "Goûter Campus", description: "Viens prendre des forces avec un goûter de folie au campus !", textColor: "black", backgroundColor: lightTheme.lightGreen },
       { nomJour: "6 fev", title: "WEL", description: "Livraison express dans la jungle ! Va voir nos plats sur l’appli puis appelle-nous !", textColor: "black", backgroundColor: lightTheme.brown },
       { nomJour: "7 fev", title: "Soirée Zik", description: "Viens t’ambiancer avec tous les groupes qui ont préparé des pépites d’or ! Le programme de la soirée est sur l’appli ! ", textColor: "black", backgroundColor: lightTheme.lightGreen },
       { nomJour: "8 fev", title: "WEL", description: "Livraison express dans la jungle ! Va voir nos plats sur l’appli puis appelle-nous !", textColor: "black", backgroundColor: lightTheme.brown },
       { nomJour: "9 fev", title: "WEL", description: "Livraison express dans la jungle ! Va voir nos plats sur l’appli puis appelle-nous !", textColor: "black", backgroundColor: lightTheme.brown },
       { nomJour: "10 fev", title: "Goûter Minatec", description: "Viens prendre des forces avec un goûter de folie à Minatec !", textColor: "black", backgroundColor: lightTheme.lightGreen },
       { nomJour: "11 fev" },
       { nomJour: "12 fev" },
       { nomJour: "13 fev", title: "Event DD", description: "Viens respirer l’atmosphère tropicale de la jungle…", textColor: "black", backgroundColor: lightTheme.lightGreen },
       { nomJour: "14 fev" },
       { nomJour: "15 fev", title: "Aprem BDA", description: "Un trésor t’attend à Grenoble… Viens le trouver lors de notre Jungle Quest !", textColor: "black", backgroundColor: lightTheme.lightGreen },
       { nomJour: "16 fev", title: "Event Sport", description: "Un après-midi féroce et coloré t’attend …", textColor: "black", backgroundColor: lightTheme.lightGreen },
       // { nomJour : "18 dec", title : "SOS", description : "La soirée de noel", textColor : "black", backgroundColor : lightTheme.lightGreen }
   ],
   titres_base : ["Info pratique", "Au programme", "Au menu"],
   SoireeBDE :
   {
       info_pratique: [
           { type: "ligne", emoji: "🎉", titre: "Thème", description: "Jungle" },
           { type : "separation"},
           { type: "ligne", emoji: "📅", titre: "Date", description: "Samedi 1er février" },
           { type : "separation"},
           { type: "ligne", emoji: "📅", titre: "Horaires", description: "21h - 3h45" },
           { type : "separation"},
           { type: "ligne", emoji: "🪩", titre: "Lieu", description: "2 Colombes", lien: "https://www.google.com/maps/place/Location+de+salle+Aux+Deux+Colombes,+Saint-Egreve,+Grenoble/@45.2100144,5.6867142,13.05z/data=!4m6!3m5!1s0x478af3c97f8e2801:0x3501763697b1e98!8m2!3d45.217288!4d5.679727!16s%2Fg%2F1tdn2_30?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D" },
           { type : "separation"},
           { type: "ligne", emoji: "💸", titre: "Prix", description: "11€ Phelma, 13€ Extérieur" },
           { type : "separation"},
           { type: "paragraphe", emoji: "🚍", titre: "Transport aller", description: "Tram ligne E - arrêt Fiancey Prédieu" },
           { type : "separation"},
           { type: "paragraphe", emoji: "🥱", titre: "Transport retour", description: "Bus navette à partir de 1h " },
         ],
       au_programme :
       [
               { type : "ligne",emoji : "⚡️" , titre : "Surprises éclair pour nos aventuriers toutes les heures de 22h30 à 0h30 ",description:"" },
           { type : "separation"},
           { type : "ligne",emoji : "🌿" , titre : "La Crypt vous a préparé de nombreuses surprises, venez pour toutes les découvrir !",description:"" },
           ],
       
               
                  
      
       au_menu :
       [  
           {   type : "double",
               titre : "A manger",
               emoji : "🍽️",
               items : [
               { nom : "Du salé et du sucré, de quoi se régaler pour toute la soirée !" ,  emoji : "🥪" },
           ]},
           { type : "separation"},
           {
               type : "double",
               titre : "A boire",
               emoji : "🍹",
               items :  [
               { nom : "De nombreux cocktails et stands disponibles !", emoji : "🍷" },
            
                   ]},
       ]
   },
  
   SoireeZik :
   {
       info_pratique: [
           { type: "ligne", emoji: "🎉", titre: "Thème", description: "La jungle, pour être original" },
           { type : "separation"},
           { type: "ligne", emoji: "📅", titre: "Date", description: "Vendredi 7 février" },
           { type : "separation"},
           { type: "ligne", emoji: "📅", titre: "Horaires", description: "20h - 2h" },
           { type : "separation"},
           { type: "ligne", emoji: "🪩", titre: "Lieu", description: "Le Bronx Grenoble", lien: "https://www.google.com/maps/place/Le+Bronx+Grenoble/@45.1912789,5.717131,17z/data=!4m6!3m5!1s0x478af538a613e31d:0x9c10dddc1c2a76!8m2!3d45.1912751!4d5.7197059!16s%2Fg%2F11y919n5_8?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D" },
           { type : "separation"},
           { type: "ligne", emoji: "💸", titre: "Prix", description: "5€" },
           { type : "separation"},
           { type: "paragraphe", emoji: "🚍", titre: "Transport aller", description: "Tram ligne B - arrêt Alsace Lorraine \n\nBus C1 - arrêt Félix Viallet \n\nVélo - Parking à vélo en face \n\nVoiture - Place gratuite"},
         ],
       au_programme :
       [
           { type : "liste", titre : "20h-minuit", emoji : "🪩",items :
               [   { titre : "Groupe 1 :",description : "Groupe Mystère"},
                   { titre : "Groupe 2 :",description : "Bocchi the rock", },
                   { titre : "Groupe 3 :",description : "Banger" },
          { titre : "Groupe 4 :",description : "EKLATE"},
          { titre : "Groupe 5 :",description : "Ensirvana"},
]
           },
           { type : "separation"},
           { type : "liste", titre : "Showcases", emoji : "🎤", items :
               [   { titre : "Showcase 1 :",description : "IAE"},
                   { titre : "Showcase 2 :",description : "E3"},
                   { titre : "Showcase 3 :",description : "Groupe Mystère"},
                   { titre : "Showcase 4 :",description : "La Bobmarliste"},
          { titre : "Showcase 5 :",description : "La Crypt"},
]
           },
           { type : "separation"},
           { type : "ligne", emoji : "📀",
                 titre : "DJ mystère :",description : "La Crypt te prépare un DJ set de folie ! ", },
                                 
          
       ],
     
       au_menu :
       [  
           {   type : "double",
               titre : "A manger",
               emoji : "🍽️",
               items : [
               { nom : "croque monsieur",  emoji : "🥪" },
                          ]},
           { type : "separation"},
           {
               type : "ligne",emoji : "🍹",
              titre : "A boire", description : "Venez pour découvrir ce que le Bronx et la Crypt vous ont préparé !"
                                                              },
       ]
   },
   DD :
   {
  info_pratique: [
      { type: "ligne", emoji: "🎉", titre: "Thème", description : "DD et social"},
      { type : "separation"},
      { type: "ligne", emoji: "📅", titre: "Date", description: "Jeudi 13 février" },
      { type : "separation"},
      { type: "ligne", emoji: "🪩", titre: "Lieu", description: "Minatec"},
      { type : "separation"},
      { type: "ligne", emoji: "💸", titre: "Prix", description: "gratuit" },
      { type : "separation"},
      { type : "ligne", emoji : "🪴" , titre : "Plusieurs stands t’attendent, viens à l’évent pour tous les découvrir !",description: ""   },

    ],
  au_programme :
  [

      { type : "ligne", emoji : "🪴" , titre : "Plusieurs stands t’attendent, viens à l’évent pour tous les découvrir !"   },
        ],
 
    
},
ApremBDA :
{
   info_pratique: [
       { type: "paragraphe", emoji: "🎲", titre: "Jungle Quest", description: "Pars à la chasse au trésor dans la jungle de Grenoble remplie de fauves déchaînés !" },
       { type : "separation"},
       { type: "ligne", emoji: "📅", titre: "Date", description: "Samedi 15 février" },
       { type : "separation"},
       { type: "ligne", emoji: "🎡", titre: "Lieu", description: "Les chemins sinueux de Grenoble "},
       { type : "separation"},
       { type: "ligne", emoji: "💸", titre: "Prix", description: "3€" },
       { type : "separation"},
       { type: "paragraphe", emoji: "🚍", titre: "Transports", description: "Juste tes jambes et tes pieds avec de bonnes chaussures." },
     ],
   au_programme :
   [
       {   type : "paragraphe",
           titre : "Chasse au Trésor",
           emoji : "🎲",
           description: "Avec votre équipe d'aventuriers intrépides (7 personnes), partez à la conquête de la jungle mystérieuse de Grenoble pour découvrir la légendaire crypte inca de l'Empereur Pachacutec.\n\nTout au long de votre aventure, vous devrez surmonter des épreuves originales, parfois artistiques, souvent culturelles... et dangereusement arrosées ! \n\nEt après l’effort, un goûter convivial viendra couronner les plus courageux (et les plus assoiffés) d’entre vous ! \n\nFous rires, surprises et esprit d’équipe seront vos meilleurs alliés pour briller dans cette aventure ! \nRécompense à la clef !"
       }       
   ],
//     au_programme :
//    [
//        { type : "liste", titre : "20h-minuit", emoji : "🪩",items :
//            [   { titre : "Groupe 1 :",description : "nom 1", lien_insta : "https://www.instagram.com" },
//                { titre : "Groupe 2 :",description : "nom 2", lien_insta : "https://www.instagram.com" },
//                { titre : "Groupe 3 :",description : "nom 3", lien_insta : "https://www.instagram.com" }]
//        },
//     ],
  
   au_menu :
   [  
       {   type : "double",
           titre : "A manger",
           emoji : "🍽️",
           items : [
           { nom : "Goûter Surprise !",  emoji : "🥗" },
       ]},
       { type : "separation"},
       {
           type : "double",
           titre : "A boire",
           emoji : "🍹",
           items :  [
           { nom : "Bière Surprise !", emoji : "🍺" },
           { nom : "Shot Surprise", emoji : "💧" },
       ]},
   ]
},
   MINP :
   {
       info_pratique: [
           { type: "ligne", emoji: "🕺", titre: "Theme", description: "Crypt" },
           { type : "separation"},
           { type: "ligne", emoji: "📅", titre: "Date", description: "3 Février " },
           { type : "separation"},
           { type: "ligne", emoji: "🎡", titre: "Lieu", description: "MINP", lien: "https://maps.app.goo.gl/huD8uVGKTr9CFRH1A" },
           { type : "separation"},
           { type: "ligne", emoji: "💸", titre: "Prix", description: "6€" },
       ],
       au_programme :
       [
           {   type : "double",
               titre : "activité crypt/jungle ",
               emoji : "🐒",
               items : [
               { nom : "stand déguisement ",  emoji : "🎨" },
               ]}],
       au_menu :
       [  
           {   type : "double",
               titre : "A manger",
               emoji : "🍽️",
               items : [
               { nom : "Panini mozza tomates pesto",  emoji : "🥪" },
                       ]},
           { type : "separation"},
           {
               type : "double",
               titre : "A boire",
               emoji : "🍹",
               items :  [
               { nom : "Bière .", emoji : "🍺" },
               { nom : "Sangria", emoji : "🍷" },
               { nom : "Vin blanc ", emoji : " "},
           ]},
       ]
   },
  
   EventSportif :
   {
       info_pratique: [
           { type: "ligne", emoji: "🎨🎯🔫", titre: "PaintBall", description: "" },
           { type : "separation"},
           { type: "ligne", emoji: "📅", titre: "Date", description: "16 Février " },
           { type : "separation"},
           { type: "ligne", emoji: "🎡", titre: "Lieu", description: "28 rue Barnave 38400 Saint Martin d’Hères", lien: "https://maps.app.goo.gl/SC2PZugRtNxJosYbA" },
           { type : "separation"},
           { type: "ligne", emoji: "💸", titre: "Prix", description: "4€" },
          // { type : "separation"},
        //    {
        //     type : "paragraphe",
        //     titre : "A boire",
        //     emoji : "💧",
        //     description : "   Softs et eau" },
        
         ],
       au_programme :
       [
           {   type : "double",
               titre : "Que du bonheur",
               emoji : "😇",
               items : [
               { nom : "Paintball",  emoji : "🔫" },
              
           ]},
           { type : "separation"},
           {
               type : "double",
               titre : "Places à gagner",
               emoji : "🍾",
               items :  [
               { nom : "En gagnant le plus de défi", emoji : "🍺" },
           ]},
         
       ],
      
       au_menu :
       [  
           {   type : "ligne",
               titre : "Soft et eau",
               emoji : "🍹",
               description : ""
           }
       ]
   },
   WEL :
   [
       { titre : 'Jeudi',
           date_debut : '2025-02-06T00:00:00Z',
           items :
           [
               {
                   titre : "Plats",
                   //photo_principale : require('../assets/images/WEL/jour1/menu1.png'),
                   commander_lien : "tel:0781885377",
                   items :
                   [
                       {   nom : "Curry des tropiques végé", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 1,
                           vege : true,
                           ingredients : "Riz, lait de coco, curry, patates, courgettes, carottes, oignons, ail",
                        },
                       {   nom : "Poulet curry des tropiques", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 2,
                           commander_lien : "https://www.google.com",
                           ingredients : "Poulet, Riz, lait de coco, curry, patates, courgettes, carottes, oignons, ail; ce plat est en sg referez vous au compte insta de la crypt !",
                        },
                        {   nom : "Pizzamazonienne raclette", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 1.5 ,
                           vege : true,
                           commander_lien : "https://www.google.com",
                           ingredients : "pate à pizza, fromage à raclette, crème, mozza, patates (lait, blé); ce plat est en sg referez vous au compte insta de la crypt !",
                        },
                        {   nom : "Pizzamazonienne chèvre miel", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 1.5 ,
                           vege : true,
                           commander_lien : "https://www.google.com",
                           ingredients : "pates à pizza, chèvre, miel, sauce tomate, mozza (lait,blé); ce plat est en sg referez vous au compte insta de la crypt !",
                        },
                   ]
               },
               {
                   titre : "Desserts",
                   photo_principale : require('../assets/images/WEL/jour1/menu1.png'),
                   items :
                   [
                       {   nom : "Le délice de la panthère", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 1.5,
                           commander_lien : "https://www.google.com",
                           ingredients : " Une creme chocolat qui plaira aux plus grands fans de chocolat !",
                        },
                       {   nom : "Le Jones aux pommes", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 2,
                           commander_lien : "https://www.google.com",
                           ingredients : "Un gateau au yaourt avec un coeur de pommes",
                        },
                   ]
               }
           ]
          
       },
       { titre : 'Samedi',
        date_debut : '2025-02-08T00:00:00Z',
        items :
           [
               {
                   titre : "Plats",
                   //photo_principale : require('../assets/images/WEL/jour1/menu1.png'),
                   commander_lien : "tel:0781885377",
                   items :
                   [
                       {   nom : "Burger Poulet du Tigre", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 3,
          
                           commander_lien : "https://www.google.com",
                           ingredients : "pain a burger, poulet pané, oignons confits, sauce big mac, tomates, salade, fromage",
                        },
                               {   nom : "Burger végé du Tigre", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 3,
                           vege : true,
                           commander_lien : "https://www.google.com",
                           ingredients : "pain a burger, galette de pdt, oignons confits, sauce big mac, tomates, salade, fromage",
                        },
                       {   nom : "Méli-mélo tropical", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 0.75 ,
                           vege : true,
                           ingredients : "Mélange de frites de carottes, de patate douce et de pomme de terre",
                        },
                      
                      
                        {   nom : "Anneaux du serpent", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 0.75 ,
                           vege : true,
                           commander_lien : "https://www.google.com",
                           ingredients : "oignons rings avec sauce burger",
                        },
                   ]
               },
               {
                   titre : "Desserts",
                   photo_principale : require('../assets/images/WEL/jour1/menu1.png'),
                   items :
                   [
                       {   nom : "Muffins mystiques", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 0.5,
                           commander_lien : "https://www.google.com",
                           ingredients : " muffins coeur coulant chocolat ou muffins framboises et choclat blanc (oeuf,lait)",
                        },
                       {   nom : "Festin du capucin", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 1.25,
                           commander_lien : "https://www.google.com",
                           ingredients : "Salade de fruits composée de clementines, kiwis, pommes, poires et jus de citron",
                        },
                   ]
               }
           ]
          
       },
       { titre : 'Dimanche',
        date_debut : '2025-02-09T00:00:00Z',
        items :
           [
               {
                   titre : "Plats",
                   //photo_principale : require('../assets/images/WEL/jour1/menu1.png'),
                   commander_lien : "tel:0781885377",
                   items :
                   [
                       {   nom : "Jungle gratinée", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 3,
                           vege : true,
                           ingredients : "Croziflette composée de crozets, creme, oignons, fromage (lait,blé)",
                        },
                       {   nom : "Delice des Dunes", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 2.5,
                           vege : true,
                           commander_lien : "https://www.google.com",
                           ingredients : "Un couscous végé qui vous rappelera vos aventures dans les deserts du monde",
                        },
                       
                   ]
               },
               {
                   titre : "Desserts",
                   photo_principale : require('../assets/images/WEL/jour1/menu1.png'),
                   items :
                   [
                       {   nom : "Tresor de la jungle", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 0.75,
                           commander_lien : "https://www.google.com",
                           ingredients : " Un excellent crumble aux pommes pour bien finir ce WEL (blé,lait)",
                        },
                      
                   ]
               }
           ]
          
       },
       {
           titre : 'Packs',
           date_debut : '2025-02-06T00:00:00Z',
           items :
                   [
                       {   nom : "Éveil \nsauvage", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 2,
                           vege : true,
                           commander_lien : "https://www.google.com",
                           ingredients : "5 langues de chat, café, croissant et 2 pancakes (blé,lait)",
                        },
                       {   nom : "Balou", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : 2.5,
                           vege : true,
                           commander_lien : "https://www.google.com",
                           ingredients : "torsade de pesto, bière de la Crypt, croissant boursin/pesto/chèvre et kiri",
                        },
                        {   nom : "Bob Marliste", photo : require('../assets/images/WEL/jour1/menu1.png'),
                           prix : "?",
                           vege : false,
                           commander_lien : "https://www.google.com",
                           ingredients : "cigarettes à prix exotique, appelle nous pour connaître ce prix !",
                        },
                   ]
       }
     
   ],
   avantage_carte :
   [
       { commerce : "🧋Tea and Bubble", promotion :"50 centimes de réduction sur toute la carte" },
       { commerce : "🎭 Fêt à fête", promotion :"-15% sur tout le magasin" },
       { commerce : "🍺 La Girafe", promotion :"-10% sur toute la carte" },
       { commerce : "🌯 Fresh Burritos", promotion :"Tarif étudiant pour le menu burritos + nachos + boisson" },
       { commerce : "🍔 Les burgers de papa", promotion :"supplément fromage offert (Bleu, Cheddar ou Raclette)" },
       { commerce : "🥃 Le Pharaon", promotion :"Tout à -1€" },
       { commerce : "👙 A Fleur de Peau", promotion :"-10% sur la lingerie" },
      
   ]
}
export default data;






