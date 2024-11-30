
import lightTheme  from './Colors'
import SoireeBDE from './Pages/BDE';

const data = 
{
    catégories_missions : ["Tout", "Livraison", "Ménage", "Jardinage"],
    missions : [
        { nom_mission: "Mission 1", type_mission: "Livraison", description: "Description de la mission 1" },
        { nom_mission: "Mission 2", type_mission: "Ménage", description: "Description de la mission 2" },
        { nom_mission: "Mission 3", type_mission: "Livraison", description: "Description de la mission 3" },
        { nom_mission: "Mission 4", type_mission: "Jardinage", description: "Description de la mission 4" },
        { nom_mission: "Mission 5", type_mission: "Ménage", description: "Description de la mission 5" },
    ],
    calendrier_data : [
        { nomJour: "1 sep", title: "Kfet ouverture",  description: "La soirée d'ouverture de la Kfet.",  textColor: "black", backgroundColor: lightTheme.lightGreen  },
        { nomJour: "2 sep",  title: "Soirée 2c",  description: "Une soirée conviviale pour tous les 2C.",  textColor: "black",  backgroundColor: lightTheme.brown  },
        { nomJour: "3 sep" },
        { nomJour: "4 sep", title: "Aprem Sportive", description: "Une après-midi de sport.", textColor: "black", backgroundColor: lightTheme.lightGreen },
        { nomJour: "5 sep", title: "Soirée 8c", description: "La soirée des 8C.", textColor: "black", backgroundColor: lightTheme.lightGreen },
        { nomJour: "6 sep", title: "Soirée 9c", description: "La soirée des 9C.", textColor: "black", backgroundColor: lightTheme.brown },
        { nomJour: "7 sep", title: "Soirée 12c", description: "La soirée des 12C.", textColor: "black", backgroundColor: lightTheme.lightGreen },
        { nomJour: "8 sep" },
        { nomJour: "9 sep" },
        { nomJour: "10 sep", title: "Soirée 1c", description: "La soirée des 1C.", textColor: "black", backgroundColor: lightTheme.brown },
        { nomJour: "11 sep" },
        { nomJour: "12 sep" },
        { nomJour: "13 sep", title: "Soirée 3c", description: "La soirée des 3C.", textColor: "black", backgroundColor: lightTheme.lightGreen },
        { nomJour: "14 sep" },
        { nomJour: "15 sep" },
        { nomJour: "16 sep", title: "Soirée 4c", description: "La soirée des 4C.", textColor: "black", backgroundColor: lightTheme.brown },
        { nomJour: "17 sep" },
        { nomJour: "18 sep" },
        { nomJour: "19 sep", title: "Soirée 5c", description: "La soirée des 5C.", textColor: "black", backgroundColor: lightTheme.lightGreen },
        { nomJour: "20 sep" },
        { nomJour: "21 sep" },
    ],

    titres_base : ["Info pratique", "Au programme", "Au menue"],

    SoireeBDE : 
    {
        info_pratique: [
            { type: "ligne", emoji: "🎉", titre: "Thème", description: "Jungle" },
            { type: "ligne", emoji: "📅", titre: "Date", description: "Mardi 3 septembre" },
            { type: "ligne", emoji: "🪩", titre: "Lieu", description: "2 colombes", lien: "https://www.google.com/maps" },
            { type: "ligne", emoji: "💸", titre: "Prix", description: "8 phelma, 10 exte" },
            { type: "paragraphe", emoji: "🚍", titre: "Transport aller", description: "Metro..... \nBus..... \nVelo..... \nVoiture....." },
            { type: "paragraphe", emoji: "🥱", titre: "Transport retour", description: "Navette \nVelo \nVoiture" },
          ],

        au_programme : 
        [
            { type : "liste", titre : "20h-minuit", emoji : "🪩",items : 
                [   { titre : "Groupe 1 :",description : "nom 1", lien_insta : "https://www.instagram.com" },
                    { titre : "Groupe 2 :",description : "nom 2", lien_insta : "https://www.instagram.com" },
                    { titre : "Groupe 3 :",description : "nom 3", lien_insta : "https://www.instagram.com" }]
            },
            { type : "liste", titre : "Showcase", emoji : "🎤", items :
                [   { titre : "Showcase 1 :",description : "nom 1", lien_insta : "https://www.instagram.com" },
                    { titre : "Showcase 2 :",description : "nom 2", lien_insta : "https://www.instagram.com" },
                    { titre : "Showcase 3 :",description : "nom 3", lien_insta : "https://www.instagram.com" }]
            },
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
            { type: "ligne", emoji: "📅", titre: "Date", description: "Jeudi 9 septembre" },
            { type: "ligne", emoji: "🪩", titre: "Lieu", description: "l'alpha", lien: "https://www.google.com/maps" },
            { type: "ligne", emoji: "💸", titre: "Prix", description: "10 phelma, 12 exte" },
            { type: "paragraphe", emoji: "🚍", titre: "Transport aller", description: "Metro..... \nBus..... \nVelo..... \nVoiture....." },
            { type: "paragraphe", emoji: "🥱", titre: "Transport retour", description: "Navette \nVelo \nVoiture" },
          ],

        au_programme : 
        [
            { type : "liste", titre : "20h-minuit", emoji : "🪩",items : 
                [   { titre : "Groupe 1 :",description : "nom 1", lien_insta : "https://www.instagram.com" },
                    { titre : "Groupe 2 :",description : "nom 2", lien_insta : "https://www.instagram.com" },
                    { titre : "Groupe 3 :",description : "nom 3", lien_insta : "https://www.instagram.com" }]
            },
            { type : "liste", titre : "Showcase", emoji : "🎤", items :
                [   { titre : "Showcase 1 :",description : "nom 1", lien_insta : "https://www.instagram.com" },
                    { titre : "Showcase 2 :",description : "nom 2", lien_insta : "https://www.instagram.com" },
                    { titre : "Showcase 3 :",description : "nom 3", lien_insta : "https://www.instagram.com" }]
            },
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
            { type: "ligne", emoji: "📅", titre: "Date", description: "Jeudi 9 septembre" },
            { type: "ligne", emoji: "🎡", titre: "Lieu", description: "parc asterix", lien: "https://www.google.com/maps" },
            { type: "ligne", emoji: "💸", titre: "Prix", description: "5 phelma, 6 exte" },
            { type: "paragraphe", emoji: "🚍", titre: "Transport aller", description: "Metro..... \nBus..... \nVelo..... \nVoiture....." },
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
            {
                type : "double",
                titre : "Jeux en plein air",
                emoji : "🎡",
                items :  [
                { nom : "Boules", emoji : "🎳" },
                { nom : "Pétanque", emoji : "🎯" },
                { nom : "Chasse au trésor", emoji : "🔍" },
            ]},
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
            { type: "ligne", emoji: "📅", titre: "Date", description: "Jeudi 9 septembre" },
            { type: "ligne", emoji: "🎡", titre: "Lieu", description: "MINP", lien: "https://www.google.com/maps" },
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
            { type: "ligne", emoji: "📅", titre: "Date", description: "Jeudi 9 septembre" },
            { type: "ligne", emoji: "🎡", titre: "Lieu", description: "Jump in park", lien: "https://www.google.com/maps" },
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




}

export default data;