
import lightTheme  from './Colors'

const data = 
{
    nom_de_la_liste : "La CRYPT",
    lien_liste_insta : "https://www.instagram.com",
    lien_liste_facebook : "https://www.facebook.com",
    lien_liste_youtube : "https://www.youtube.com",
    catégories_missions : [ "Tout", "Livraison", "Ménage", "Jardinage"],

    description_mission_catégorie : 
    [
        "Toutes les missions",
        "Livraison de colis, de repas, de courses",
        "Ménage, nettoyage, rangement",
        "Jardinage, tonte de pelouse, taille de haie",
    ],

    lien_commande_mission : "https://www.google.com",
    missions : [
        { nom: "Mission 1", categorie: "Livraison", description: "Description de la mission 1" },
        { nom: "Mission 2", categorie: "Ménage", description: "Description de la mission 2" },
        { nom: "Mission 3", categorie: "Livraison", description: "Description de la mission 3" },
        { nom: "Mission 4", categorie: "Jardinage", description: "Description de la mission 4" },
        { nom: "Mission 5", categorie: "Ménage", description: "Description de la mission 5" },
    ],
    catégories_défis : ["Tout", "Sport", "Culture", "Cuisine"],
    date_fin_defi : '2025-01-25T00:00:00Z',
    defis : [
        { nom: "Défi 1", categorie: "Sport", description: "Description du défi 1", points : 2 },
        { nom: "Défi 2", categorie: "Culture", description: "Description du défi 2", points : 5 },
        { nom: "Défi 3", categorie: "Sport", description: "Description du défi 3", points : 1 },
        { nom: "Défi 4", categorie: "Cuisine", description: "Description du défi 4", points : 2 },
        { nom: "Défi 5", categorie: "Culture", description: "Description du défi 5", points : 3 },
    ],
    
    nom_mois : ["jan", "fev", "mar", "avr", "mai", "jun", "jul", "aout", "sep", "oct", "nov", "dec"],
    calendrier_data : [
        { nomJour: "1 sep", title: "Kfet ouverture",  description: "La soirée d'ouverture de la Kfet.",  textColor: "black", backgroundColor: lightTheme.lightGreen  },
        { nomJour: "2 sep",  title: "SOS",  description: "Une soirée conviviale pour tous les 2C.",  textColor: "black",  backgroundColor: lightTheme.brown  },
        { nomJour: "3 sep" },
        { nomJour: "4 sep", title: "Soirée Zik", description: "Une après-midi de sport.", textColor: "black", backgroundColor: lightTheme.lightGreen },
        { nomJour: "5 sep", title: "SOS", description: "La soirée des 8C.", textColor: "black", backgroundColor: lightTheme.lightGreen },
        { nomJour: "6 sep", title: "SOS", description: "La soirée des 9C.", textColor: "black", backgroundColor: lightTheme.brown },
        { nomJour: "7 sep", title: "Aprem BDA", description: "La soirée des 12C.", textColor: "black", backgroundColor: lightTheme.lightGreen },
        { nomJour: "8 sep" },
        { nomJour: "9 sep" },
        { nomJour: "10 sep", title: "WELm", description: "La soirée des 1C.", textColor: "black", backgroundColor: lightTheme.brown },
        { nomJour: "11 sep" },
        { nomJour: "12 sep" },
        { nomJour: "13 sep", title: "MINP", description: "La soirée des 3C.", textColor: "black", backgroundColor: lightTheme.lightGreen },
        { nomJour: "14 sep" },
        { nomJour: "15 sep" },
        { nomJour: "16 sep", title: "DD", description: "La soirée des 4C.", textColor: "black", backgroundColor: lightTheme.brown },
        { nomJour: "17 sep" },
        { nomJour: "18 sep" },
        { nomJour: "19 sep", title: "Event sport", description: "La soirée des 5C.", textColor: "black", backgroundColor: lightTheme.lightGreen },
        { nomJour: "20 sep" },
        { nomJour: "21 sep" },


        // { nomJour : "18 dec", title : "SOS", description : "La soirée de noel", textColor : "black", backgroundColor : lightTheme.lightGreen }
    ],

    titres_base : ["Info pratique", "Au programme", "Au menue"],

    SoireeBDE : 
    {
        info_pratique: [
            { type: "ligne", emoji: "🎉", titre: "Thème", description: "Jungle" },
            { type : "separation"},
            { type: "ligne", emoji: "📅", titre: "Date", description: "Mardi 3 septembre" },
            { type : "separation"},
            { type: "ligne", emoji: "🪩", titre: "Lieu", description: "2 colombes", lien: "https://www.google.com/maps" },
            { type : "separation"},
            { type: "ligne", emoji: "💸", titre: "Prix", description: "8 phelma, 10 exte" },
            { type : "separation"},
            { type: "paragraphe", emoji: "🚍", titre: "Transport aller", description: "Metro..... \nBus..... \nVelo..... \nVoiture....." },
            { type : "separation"},
            { type: "paragraphe", emoji: "🥱", titre: "Transport retour", description: "Navette \nVelo \nVoiture" },
          ],

        au_programme : 
        [
            { type : "liste", titre : "20h-minuit", emoji : "🪩",items : 
                [   { titre : "Groupe 1 :",description : "nom 1", lien_insta : "https://www.instagram.com" },
                    { titre : "Groupe 2 :",description : "nom 2", lien_insta : "https://www.instagram.com" },
                    { titre : "Groupe 3 :",description : "nom 3", lien_insta : "https://www.instagram.com" }]
            },
            { type : "separation"},
            { type : "liste", titre : "Showcase", emoji : "🎤", items :
                [   { titre : "Showcase 1 :",description : "nom 1", lien_insta : "https://www.instagram.com" },
                    { titre : "Showcase 2 :",description : "nom 2", lien_insta : "https://www.instagram.com" },
                    { titre : "Showcase 3 :",description : "nom 3", lien_insta : "https://www.instagram.com" }]
            },
            { type : "separation"},
            { type : "liste", titre : "After DJ",emoji : "📀", items :
                [   { titre : "DJ 1 :",description : "nom DJ 1", lien_insta : "https://www.instagram.com" },
                    { titre : "DJ 2 :",description : "nom DJ 2", lien_insta : "https://www.instagram.com" },
                    { titre : "DJ 3 :",description : "nom DJ 3", lien_insta : "https://www.instagram.com" }
                ]
            }
        ],
        
        au_menu : 
        [   
            {   type : "double",
                titre : "A manger",
                emoji : "🍽️",
                items : [
                { nom : "Salade césare chevre miel pignon...",  emoji : "🥗" },
                { nom : "Poulet braisé curry oignon ", emoji : "🍗" },
                { nom : "Tarte potimaron jsp quoi mettre", emoji : "🥧" },
            ]},
            { type : "separation"},
            {
                type : "double",
                titre : "A boire",
                emoji : "🍹",
                items :  [
                { nom : "Bière : chouffe, blonde, ...", emoji : "🍺" },
                { nom : "Cocktail spécial surprise", emoji : "🍷" },
                { nom : "Eau bénite", emoji : "💧" },
            ]},
        ]
    },
    
    SoireeZik : 
    {
        info_pratique: [
            { type: "ligne", emoji: "🎉", titre: "Thème", description: "troubadour carrement" },
            { type : "separation"},
            { type: "ligne", emoji: "📅", titre: "Date", description: "Jeudi 9 septembre" },
            { type : "separation"},
            { type: "ligne", emoji: "🪩", titre: "Lieu", description: "l'alpha", lien: "https://www.google.com/maps" },
            { type : "separation"},
            { type: "ligne", emoji: "💸", titre: "Prix", description: "10 phelma, 12 exte" },
            { type : "separation"},
            { type: "paragraphe", emoji: "🚍", titre: "Transport aller", description: "Metro..... \nBus..... \nVelo..... \nVoiture....." },
            { type : "separation"},
            { type: "paragraphe", emoji: "🥱", titre: "Transport retour", description: "Navette \nVelo \nVoiture" },
          ],

        au_programme : 
        [
            { type : "liste", titre : "20h-minuit", emoji : "🪩",items : 
                [   { titre : "Groupe 1 :",description : "nom 1", lien_insta : "https://www.instagram.com" },
                    { titre : "Groupe 2 :",description : "nom 2", lien_insta : "https://www.instagram.com" },
                    { titre : "Groupe 3 :",description : "nom 3", lien_insta : "https://www.instagram.com" }]
            },
            { type : "separation"},
            { type : "liste", titre : "Showcase", emoji : "🎤", items :
                [   { titre : "Showcase 1 :",description : "nom 1", lien_insta : "https://www.instagram.com" },
                    { titre : "Showcase 2 :",description : "nom 2", lien_insta : "https://www.instagram.com" },
                    { titre : "Showcase 3 :",description : "nom 3", lien_insta : "https://www.instagram.com" }]
            },
            { type : "separation"},
            { type : "liste", titre : "After DJ",emoji : "📀", items :
                [   { titre : "DJ 1 :",description : "nom DJ 1", lien_insta : "https://www.instagram.com" },
                    { titre : "DJ 2 :",description : "nom DJ 2", lien_insta : "https://www.instagram.com" },
                    { titre : "DJ 3 :",description : "nom DJ 3", lien_insta : "https://www.instagram.com" }
                ]
            }
        ],
       
        au_menu : 
        [   
            {   type : "double",
                titre : "A manger",
                emoji : "🍽️",
                items : [
                { nom : "Salade césare chevre miel pignon...",  emoji : "🥗" },
                { nom : "Poulet braisé curry oignon ", emoji : "🍗" },
                { nom : "Tarte potimaron jsp quoi mettre", emoji : "🥧" },
            ]},
            { type : "separation"},
            {
                type : "double",
                titre : "A boire",
                emoji : "🍹",
                items :  [
                { nom : "Bière : chouffe, blonde, ...", emoji : "🍺" },
                { nom : "Cocktail spécial surprise", emoji : "🍷" },
                { nom : "Eau bénite", emoji : "💧" },
            ]},
        ]
    },
    DD : 
    {
   info_pratique: [
       { type: "ligne", emoji: "🎉", titre: "Thème", description: "jsppp" },
       { type : "separation"},
       { type: "ligne", emoji: "📅", titre: "Date", description: "Jeudi 9 septembre" },
       { type : "separation"},
       { type: "ligne", emoji: "🪩", titre: "Lieu", description: "l'alpha", lien: "https://www.google.com/maps" },
       { type : "separation"},
       { type: "ligne", emoji: "💸", titre: "Prix", description: "10 phelma, 12 exte" },
     ],

   au_programme : 
   [
       { type : "liste", titre : "20h-minuit", emoji : "🪩",items : 
           [   { titre : "Groupe 1 :",description : "nom 1", lien_insta : "https://www.instagram.com" },
               { titre : "Groupe 2 :",description : "nom 2", lien_insta : "https://www.instagram.com" },
               { titre : "Groupe 3 :",description : "nom 3", lien_insta : "https://www.instagram.com" }]
       },
       { type : "separation"},
       { type : "liste", titre : "Showcase", emoji : "🎤", items :
           [   { titre : "Showcase 1 :",description : "nom 1", lien_insta : "https://www.instagram.com" },
               { titre : "Showcase 2 :",description : "nom 2", lien_insta : "https://www.instagram.com" },
               { titre : "Showcase 3 :",description : "nom 3", lien_insta : "https://www.instagram.com" }]
       },
       { type : "separation"},
       { type : "liste", titre : "After DJ",emoji : "📀", items :
           [   { titre : "DJ 1 :",description : "nom DJ 1", lien_insta : "https://www.instagram.com" },
               { titre : "DJ 2 :",description : "nom DJ 2", lien_insta : "https://www.instagram.com" },
               { titre : "DJ 3 :",description : "nom DJ 3", lien_insta : "https://www.instagram.com" }
           ]
       }
   ],
   
   au_menu : 
   [   
       {   type : "double",
           titre : "A manger",
           emoji : "🍽️",
           items : [
           { nom : "Salade césare chevre miel pignon...",  emoji : "🥗" },
           { nom : "Poulet braisé curry oignon ", emoji : "🍗" },
           { nom : "Tarte potimaron jsp quoi mettre", emoji : "🥧" },
       ]},
       { type : "separation"},
       {
           type : "double",
           titre : "A boire",
           emoji : "🍹",
           items :  [
           { nom : "Bière : chouffe, blonde, ...", emoji : "🍺" },
           { nom : "Cocktail spécial surprise", emoji : "🍷" },
           { nom : "Eau bénite", emoji : "💧" },
       ]},
   ]
},
    ApremBDA : 
    {
        info_pratique: [
            { type: "ligne", emoji: "🎲", titre: "Jeux de BDA en pleine air", description: "" },
            { type : "separation"},
            { type: "ligne", emoji: "📅", titre: "Date", description: "Jeudi 9 septembre" },
            { type : "separation"},
            { type: "ligne", emoji: "🎡", titre: "Lieu", description: "parc asterix", lien: "https://www.google.com/maps" },
            { type : "separation"},
            { type: "ligne", emoji: "💸", titre: "Prix", description: "5 phelma, 6 exte" },
            { type : "separation"},
            { type: "paragraphe", emoji: "🚍", titre: "Transport aller", description: "Metro..... \nBus..... \nVelo..... \nVoiture....." },
            { type : "separation"},
            { type: "paragraphe", emoji: "🥱", titre: "Transport retour", description: "Navette \nVelo \nVoiture" },
          ],

        au_programme : 
        [
            {   type : "double",
                titre : "Jeux de société",
                emoji : "🎲",
                items : [
                { nom : "Skyjo",  emoji : "🥂" },
                { nom : "Poulet braisé curry oignon ", emoji : "🃏" },
                { nom : "Un autre jeu", emoji : "🥧" },
            ]},
            { type : "separation"},
            {
                type : "double",
                titre : "Jeux en plein air",
                emoji : "🎡",
                items :  [
                { nom : "Boules", emoji : "🎳" },
                { nom : "Pétanque", emoji : "🎯" },
                { nom : "Chasse au trésor", emoji : "🔍" },
            ]},
            { type : "separation"},
            {
                type : "double",
                titre : "Jeux de réflexion",
                emoji : "🧩",
                items :  [
                { nom : "Escape game", emoji : "🔐" },
                { nom : "Puzzle", emoji : "🧩" },
                { nom : "Mots croisés", emoji : "📝" },
            ],
            }
        ],
        
        au_menu : 
        [   
            {   type : "double",
                titre : "A manger",
                emoji : "🍽️",
                items : [
                { nom : "Salade césare chevre miel pignon...",  emoji : "🥗" },
                { nom : "Poulet braisé curry oignon ", emoji : "🍗" },
                { nom : "Tarte potimaron jsp quoi mettre", emoji : "🥧" },
            ]},
            { type : "separation"},
            {
                type : "double",
                titre : "A boire",
                emoji : "🍹",
                items :  [
                { nom : "Bière : chouffe, blonde, ...", emoji : "🍺" },
                { nom : "Cocktail spécial surprise", emoji : "🍷" },
                { nom : "Eau bénite", emoji : "💧" },
            ]},
        ]
    },
    MINP : 
    {
        info_pratique: [
            { type: "ligne", emoji: "🕺", titre: "Theme", description: "Schrek" },
            { type : "separation"},
            { type: "ligne", emoji: "📅", titre: "Date", description: "Jeudi 9 septembre" },
            { type : "separation"},
            { type: "ligne", emoji: "🎡", titre: "Lieu", description: "MINP", lien: "https://www.google.com/maps" },
            { type : "separation"},
            { type: "ligne", emoji: "💸", titre: "Prix", description: "5 phelma, 6 exte" },
          ],

        au_programme : 
        [
            {   type : "double",
                titre : "Jeux sportifs",
                emoji : "🏐",
                items : [
                { nom : "Volley",  emoji : "🏐" },
                { nom : "Foot", emoji : "⚽" },
                { nom : "Basket", emoji : "🏀" }
                ,
            ]},
            { type : "separation"},
            {
                type : "double",
                titre : "Jeux à boire",
                emoji : "🍾",
                items :  [
                { nom : "Beer pong", emoji : "🍺" },
                { nom : "Flip cup", emoji : "🍻" },
                { nom : "Kings", emoji : "👑" },
            ]},
           
        ],
        
        au_menu : 
        [   
            {   type : "double",
                titre : "A manger",
                emoji : "🍽️",
                items : [
                { nom : "Salade césare chevre miel pignon...",  emoji : "🥗" },
                { nom : "Poulet braisé curry oignon ", emoji : "🍗" },
                { nom : "Tarte potimaron jsp quoi mettre", emoji : "🥧" },
            ]},
            { type : "separation"},
            {
                type : "double",
                titre : "A boire",
                emoji : "🍹",
                items :  [
                { nom : "Bière : chouffe, blonde, ...", emoji : "🍺" },
                { nom : "Cocktail spécial surprise", emoji : "🍷" },
                { nom : "Eau bénite", emoji : "💧" },
            ]},
        ]
    },

    EventSportif : 
    {
        info_pratique: [
            { type: "ligne", emoji: "🪂", titre: "Trampoline park", description: "" },
            { type : "separation"},
            { type: "ligne", emoji: "📅", titre: "Date", description: "Jeudi 9 septembre" },
            { type : "separation"},
            { type: "ligne", emoji: "🎡", titre: "Lieu", description: "Jump in park", lien: "https://www.google.com/maps" },
            { type : "separation"},
            { type: "ligne", emoji: "💸", titre: "Prix", description: "5 phelma, 6 exte" },
          ],

        au_programme : 
        [
            {   type : "double",
                titre : "Que du bonheur",
                emoji : "😇",
                items : [
                { nom : "Trampolines",  emoji : "🏐" },
                { nom : "Parkour Ninja", emoji : "⚽" },
                { nom : "Basket", emoji : "🏀" }
                ,
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
            {   type : "double",
                titre : "A manger",
                emoji : "🍽️",
                items : [
                { nom : "Salade césare chevre miel pignon...",  emoji : "🥗" },
                { nom : "Poulet braisé curry oignon ", emoji : "🍗" },
                { nom : "Tarte potimaron jsp quoi mettre", emoji : "🥧" },
            ]},
            { type : "separation"},
            {
                type : "double",
                titre : "A boire",
                emoji : "🍹",
                items :  [
                { nom : "Bière : chouffe, blonde, ...", emoji : "🍺" },
                { nom : "Cocktail spécial surprise", emoji : "🍷" },
                { nom : "Eau bénite", emoji : "💧" },
            ]},
        ]
    },

    WEL : 
    [
        { titre : 'Jour 1',

            items : 
            [
                {
                    titre : "Menu 1",
                    photo_principale : require('../assets/images/WEL/jour1/menu1.png'),
                    commander_lien : "tel:0781885377",
                    items : 
                    [ 
                        {   nom : "Burgerr", photo : require('../assets/images/WEL/jour1/menu1.png'),
                            prix : 5,
                            
                            ingredients : " Pain au graine, steak, tomate, salade, fromage, ketchup, moutarde, oignon, cornichon, frite",
                         },
                        {   nom : "Muffinoo", photo : require('../assets/images/WEL/jour1/menu1.png'),
                            prix : 2,
                            commander_lien : "https://www.google.com",
                            ingredients : "Farine, oeuf, sucre, lait, beurre, levure, chocolat",
                         },
                    ]
                },
                {
                    titre : "Shotgun",
                    photo_principale : require('../assets/images/WEL/jour1/menu1.png'),

                    items : 
                    [
                        {   nom : "Burger", photo : require('../assets/images/WEL/jour1/menu1.png'),
                            prix : 5,
                            commander_lien : "https://www.google.com",
                            ingredients : " Pain, steak, tomate, salade, fromage, ketchup, moutarde, oignon, cornichon, frite",
                         },
                        {   nom : "Muffinoo", photo : require('../assets/images/WEL/jour1/menu1.png'),
                            prix : 2,
                            commander_lien : "https://www.google.com",
                            ingredients : "Farine, oeuf, sucre, lait, beurre, levure, chocolat",
                         },
                    ]
                }

            ]

            
        },
        { titre : 'Jour 2'

            
        },
        { titre : 'Jour 3'

            
        },
       

    ],

    avantage_carte : 
    [
        { commerce : "🍹 Buble Tea", promotion :"1 acheté = 1 offert" },
        { commerce : "🥙 Kebab", promotion :"2 acheté = 1 offert" },
        { commerce : "🍟 McDo", promotion :"1 acheté = 1 offert" },
        

    ]


}

export default data;