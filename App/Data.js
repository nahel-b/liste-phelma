
import lightTheme  from './Colors'
import SoireeBDE from './Pages/SoireeBDE';

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
        info_pratique :{
            theme : "Jungle",
            jour : "mardi 3 septembre",
            horraire : " 19h-3h",
            lieu : "2 colombes",
            prix : "8 phelma, 10 exte",
            lien_lieu_google : "https://www.google.com/maps",
            transport_aller : "Metro..... \nBus..... \nVelo..... \nVoiture.....",
            transport_retour : "Navette \nVelo \nVoiture",},

        au_programme : 
        [
            {titre : "20h-minuit", emoji : "🪩",items : 
                [   { titre : "Groupe 1 :",description : "nom 1", lien_insta : "https://www.instagram.com" },
                    { titre : "Groupe 2 :",description : "nom 2", lien_insta : "https://www.instagram.com" },
                    { titre : "Groupe 3 :",description : "nom 3", lien_insta : "https://www.instagram.com" }]
            },
            {
                titre : "Showcase", emoji : "🎤", items :
                [   { titre : "Showcase 1 :",description : "nom 1", lien_insta : "https://www.instagram.com" },
                    { titre : "Showcase 2 :",description : "nom 2", lien_insta : "https://www.instagram.com" },
                    { titre : "Showcase 3 :",description : "nom 3", lien_insta : "https://www.instagram.com" }]
            },
            {
                titre : "After DJ",emoji : "📀", items :
                [   { titre : "DJ 1 :",description : "nom DJ 1", lien_insta : "https://www.instagram.com" },
                    { titre : "DJ 2 :",description : "nom DJ 2", lien_insta : "https://www.instagram.com" },
                    { titre : "DJ 3 :",description : "nom DJ 3", lien_insta : "https://www.instagram.com" }
                ]
            }
        ],
        
        au_menu : 
        {
            manger : [
                { nom : "Salade césare chevre miel pignon...",  emoji : "🥗" },
                { nom : "Poulet braisé curry oignon ", emoji : "🍗" },
                { nom : "Tarte potimaron jsp quoi mettre", emoji : "🥧" },
            ],
            boire : [
                { nom : "Bière : chouffe, blonde, ...", emoji : "🍺" },
                { nom : "Cocktail spécial surprise", emoji : "🍷" },
                { nom : "Eau bénite", emoji : "💧" },
            ],
        }
    }



}

export default data;