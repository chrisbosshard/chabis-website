import type { Translations } from "./de";

export const fr: Translations = {
  // Metadata
  meta: {
    title: "Chabis - Votre Chef IA Suisse | Recettes Personnalisées",
    description:
      "Découvrez Chabis, l'application de cuisine IA suisse. Générez des recettes personnalisées basées sur votre réfrigérateur, régime et allergies. Gratuit pour iOS.",
  },

  // Navbar
  nav: {
    features: "Fonctionnalités",
    support: "Support",
    faq: "FAQ",
  },

  // Hero
  hero: {
    title1: "Votre ",
    titleHighlight: "Chef IA",
    title2: " dans votre poche",
    subtitle: "Votre chef IA personnel comprend vos besoins et crée des recettes qui correspondent parfaitement à votre style de vie",
    appStoreAlt: "Télécharger sur l'App Store",
    ratingText: "Note de 4.8 sur l'Apple App Store",
    phoneMockup: "/phone_mockup_cook_DE.png",
    phoneMockupMobile: "/phone_mockup_DE.png",
    appStoreBadge: "/Download_on_the_App_Store_Badge_FR_RGB_blk_100517.svg",
  },

  // Features Section
  features: {
    title1: "Cuisinez ce qui vous ",
    titleHighlight: "convient",
    title2: "",
    subtitle:
      "Que ce soit des régimes complexes, des intolérances strictes ou un réfrigérateur plein: Chabis vous offre non seulement des recettes, mais des solutions sur mesure",
  },

  // Pain Solution Cards
  painSolution: {
    items: [
      {
        image: "/actions/prep.svg",
        title: "Régime strict? Pas de problème",
        description: "Que ce soit Keto, Végan ou Pescétarien. Chabis connaît vos règles et ne les enfreint jamais.",
      },
      {
        image: "/actions/mix.svg",
        title: "Allergies sous contrôle",
        description: "Lactose? Gluten? Noix? Le chef IA filtre automatiquement les ingrédients dangereux.",
      },
      {
        image: "/actions/chill.svg",
        title: "Plus jamais de gaspillage",
        description: "Dites à Chabis ce qu'il y a dans votre frigo, et il créera une recette avec.",
      },
    ],
  },

  // Lifestyle Section
  lifestyle: {
    title1: "La recette parfaite pour chaque ",
    titleHighlight: "style de vie",
    title2: "",
    subtitle: "Que vous soyez débutant ou pro, fan de fitness ou parent – Chabis s'adapte à votre style de cuisine.",
    items: [
      {
        image: "/beginner_cook.png",
        label: "Cuisiner efficacement",
        description: "Je veux cuisiner avec ce que j'ai à la maison et découvrir de nouvelles recettes.",
      },
      {
        image: "/teacher_cook.png",
        label: "Apprendre à cuisiner",
        description: "J'apprends à cuisiner et j'ai besoin de recettes simples avec des instructions étape par étape.",
      },
      {
        image: "/coach_cook.png",
        label: "Développer les muscles",
        description: "J'optimise mon alimentation pour l'entraînement, le développement musculaire et les performances sportives.",
      },
      {
        image: "/health_cook.png",
        label: "Manger sainement",
        description: "Je fais attention aux valeurs nutritionnelles et je veux cuisiner des repas équilibrés et sains.",
      },
      {
        image: "/expert_cook.png",
        label: "Trouver l'inspiration",
        description: "J'adore cuisiner et je cherche une inspiration créative pour de nouveaux plats.",
      },
    ],
  },

  // Feature Showcase
  featureShowcase: [
    {
      label: "Personnalisé",
      title: "Parfaitement adapté à vous",
      description: "Chaque recette est automatiquement adaptée à votre régime, allergies et préférences. Plus besoin d'échanger manuellement les ingrédients.",
      features: [
        "Régimes: Keto, Végan, Low-Carb et plus",
        "Adapté à vos objectifs",
        "Filtrage automatique des allergènes",
        "Ajustement des portions",
        "Mémorisation des préférences gustatives",
      ],
      image1: "/images/onboarding1_DE.png",
      image2: "/images/onboarding2_DE.png",
    },
    {
      label: "Générer des recettes",
      title: "Générez de nouvelles recettes en quelques secondes",
      description:
        "Dites simplement à Chabis ce que vous voulez cuisiner ou quels ingrédients vous avez. Notre chef IA génère la recette parfaite en quelques secondes.",
      features: [
        "Recettes générées par IA en secondes",
        "Basées sur vos préférences",
        "Optimisées pour votre quotidien",
        "Variations illimitées possibles",
        "Liste de courses automatique toujours disponible",
      ],
      image1: "/images/chat_DE.png",
      image2: "/images/cover_DE.png",
    },
    {
      label: "Nutrition",
      title: "Analyse nutritionnelle complète",
      description:
        "Obtenez des informations détaillées sur toutes les valeurs nutritionnelles, macros et micronutriments. Parfait pour une alimentation consciente.",
      features: [
        "Profil macro complet (Protéines, Lipides, Glucides)",
        "Aperçu détaillé des acides aminés",
        "Vitamines et minéraux",
        "Allergènes et intolérances marqués",
      ],
      image1: "/images/nutrients_DE.png",
      image2: "/images/ingredients_DE.png",
    },
    {
      label: "Cuisine",
      title: "Étape par étape vers le succès",
      description: "Suivez des instructions claires avec minuteries, conversions et conseils utiles. Cuisiner n'a jamais été aussi facile.",
      features: [
        "Instructions claires étape par étape",
        "Parfaitement adapté à votre niveau de cuisine",
        "Conversion automatique des quantités",
        "Conseils de pro du chef IA à tout moment",
      ],
      image1: "/images/cooking_DE.png",
      image2: "/images/ask_DE.png",
    },
    {
      label: "Sauvegarder",
      title: "Vos recettes préférées toujours avec vous",
      description: "Sauvegardez vos recettes générées et accédez-y à tout moment. Organisez-les en catégories et partagez-les avec votre famille.",
      features: ["Marquer et organiser les favoris", "Grouper en collections", "Partager avec famille et amis", "Synchronisation cloud sur tous les appareils"],
      image1: "/mockup-others.png",
      image2: "/mockup-others-2.png",
    },
  ],

  // Social Proof / Testimonials
  socialProof: {
    title1: "Ce que disent nos ",
    titleHighlight: "Chefs",
    title2: "",
    subtitle: "Des milliers de cuisiniers amateurs utilisent Chabis quotidiennement pour des recettes parfaites.",
    testimonials: [
      {
        name: "Sarah M.",
        role: "Cuisinière amateur",
        avatar: "👩‍🍳",
        rating: 5,
        text: "Enfin une app qui comprend que je ne peux pas manger de gluten! Chaque recette est parfaitement adaptée à mes besoins.",
      },
      {
        name: "Marco L.",
        role: "Passionné de fitness",
        avatar: "🧑‍🍳",
        rating: 5,
        text: "Le calcul des macros est génial. J'entre mon objectif de protéines et j'obtiens des recettes correspondantes. Game changer pour mon meal prep!",
      },
      {
        name: "Elena K.",
        role: "Mère de 3 enfants",
        avatar: "👨‍🍳",
        rating: 5,
        text: "Avec 3 enfants et des préférences différentes, cuisiner était un cauchemar. Chabis trouve des recettes que tout le monde aime!",
      },
      {
        name: "Thomas B.",
        role: "Adepte du Keto",
        avatar: "🧑‍🍳",
        rating: 5,
        text: "Le régime keto strict n'a jamais été aussi facile. L'app connaît mes règles et livre toujours des options low-carb.",
      },
      {
        name: "Julia S.",
        role: "Cuisinière végane",
        avatar: "👩‍🍳",
        rating: 5,
        text: "En tant que végane, je trouve enfin des recettes créatives sans chercher pendant des heures. L'IA comprend vraiment ce que signifie végan!",
      },
    ],
  },

  // FAQ
  faq: {
    title1: "Questions ",
    titleHighlight: "fréquentes",
    contactText: "Vous avez encore des questions?",
    contactLink: "Contactez-nous",
    items: [
      {
        question: "Combien coûte Chabis?",
        answer:
          "Chabis est fondamentalement gratuit. Pour commencer, nous vous offrons 5 recettes premium gratuites (y compris images IA et valeurs nutritionnelles détaillées) puis 2 de plus chaque semaine. Si vous en voulez plus, vous pouvez passer à Chabis Premium pour une génération illimitée et le mode IA le plus intelligent. La fonction de recette standard reste gratuite pour toujours.",
      },
      {
        question: "Chabis fonctionne-t-il hors ligne?",
        answer:
          "Oui et non. Comme notre IA calcule les recettes en direct pour vous, vous avez besoin d'une connexion internet pour la génération. Mais: Toutes les recettes sont stockées dans votre historique et peuvent être sauvegardées dans votre livre de recettes. Celles-ci sont ensuite également disponibles hors ligne, pour que vous puissiez cuisiner sans problème au supermarché ou dans les zones sans signal.",
      },
      {
        question: "Quels régimes sont supportés?",
        answer:
          "Presque tous. Chabis comprend les formes alimentaires complexes comme Végan, Végétarien, Pescétarien, Keto, Low Carb et Paléo. La particularité: L'IA combine automatiquement cela avec vos allergies (ex: Gluten, Lactose, Noix) et vos aversions personnelles (ex: 'Pas de coriandre').",
      },
      {
        question: "Mes données sont-elles sécurisées?",
        answer:
          "Absolument. En tant qu'application suisse, la protection des données est notre priorité absolue. Vos données de santé, allergies et préférences sont cryptées de manière sécurisée et jamais vendues à des partenaires publicitaires. Nous utilisons ces données exclusivement pour adapter parfaitement les recettes à vos besoins.",
      },
      {
        question: "Sur quels appareils Chabis fonctionne-t-il?",
        answer:
          "Chabis est actuellement exclusivement optimisé pour iPhone (iOS) et disponible sur l'Apple App Store. Nous nous concentrons sur la meilleure expérience pour iOS avant de nous étendre à d'autres plateformes.",
      },
    ],
  },

  // Footer
  footer: {
    tagline: "Votre chef IA pour des recettes personnalisées. Parfaitement adapté à votre régime, allergies et ingrédients.",
    support: "Support",
    legal: "Mentions légales",
    faq: "FAQ",
    contact: "Contact",
    supportPage: "Support",
    privacy: "Confidentialité",
    terms: "Conditions",
    appStoreBadge: "/Download_on_the_App_Store_Badge_FR_RGB_wht_100517.svg",
  },
};
