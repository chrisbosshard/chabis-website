import type { Translations } from "./de";

export const it: Translations = {
  // Metadata
  meta: {
    title: "Chabis - Il tuo Chef IA Svizzero | Ricette Personalizzate",
    description: "Scopri Chabis, l'app di cucina IA svizzera. Genera ricette personalizzate basate sul tuo frigorifero, dieta e allergie. Gratis per iOS.",
  },

  // Navbar
  nav: {
    features: "Funzionalità",
    testimonials: "Testimonianze",
    faq: "FAQ",
  },

  // Hero
  hero: {
    title1: "Il tuo ",
    titleHighlight: "Chef IA",
    title2: " in tasca",
    subtitle: "Il tuo chef IA personale capisce le tue esigenze e crea ricette che si adattano perfettamente al tuo stile di vita",
    appStoreAlt: "Scarica sull'App Store",
    ratingText: "Valutazione 4.8 sull'Apple App Store",
    phoneMockup: "/phone_mockup_cook_DE.png",
    phoneMockupMobile: "/phone_mockup_DE.png",
    appStoreBadge: "/Download_on_the_App_Store_Badge_IT_RGB_blk_100517.svg",
  },

  // Features Section
  features: {
    title1: "Cucina ciò che fa per ",
    titleHighlight: "te",
    title2: "",
    subtitle:
      "Che si tratti di piani dietetici complessi, intolleranze rigide o un frigorifero pieno: Chabis ti offre non solo ricette, ma soluzioni su misura",
  },

  // Pain Solution Cards
  painSolution: {
    items: [
      {
        image: "/actions/prep.svg",
        title: "Dieta rigorosa? Nessun problema",
        description: "Che sia Keto, Vegano o Pescetariano. Chabis conosce le tue regole e non le infrange mai.",
      },
      {
        image: "/actions/mix.svg",
        title: "Allergie sotto controllo",
        description: "Lattosio? Glutine? Noci? Lo chef IA filtra automaticamente gli ingredienti pericolosi.",
      },
      {
        image: "/actions/chill.svg",
        title: "Mai più sprechi",
        description: "Dì a Chabis cosa c'è nel tuo frigorifero, e creerà una ricetta con quello.",
      },
    ],
  },

  // Lifestyle Section
  lifestyle: {
    title1: "La ricetta perfetta per ogni ",
    titleHighlight: "stile di vita",
    title2: "",
    subtitle: "Che tu sia principiante o professionista, appassionato di fitness o genitore – Chabis si adatta al tuo stile di cucina.",
    items: [
      {
        image: "/beginner_cook.png",
        label: "Cucinare efficientemente",
        description: "Voglio cucinare con quello che ho a casa e scoprire nuove ricette.",
      },
      {
        image: "/teacher_cook.png",
        label: "Imparare a cucinare",
        description: "Sto imparando a cucinare e ho bisogno di ricette semplici con istruzioni passo-passo.",
      },
      {
        image: "/coach_cook.png",
        label: "Costruire muscoli",
        description: "Sto ottimizzando la mia alimentazione per allenamento, costruzione muscolare e prestazioni sportive.",
      },
      {
        image: "/health_cook.png",
        label: "Mangiare sano",
        description: "Presto attenzione ai valori nutrizionali e voglio cucinare pasti equilibrati e sani.",
      },
      {
        image: "/expert_cook.png",
        label: "Trovare ispirazione",
        description: "Amo cucinare e cerco ispirazione creativa per nuovi piatti.",
      },
    ],
  },

  // Feature Showcase
  featureShowcase: [
    {
      label: "Personalizzato",
      title: "Perfettamente su misura per te",
      description: "Ogni ricetta viene automaticamente adattata alla tua dieta, allergie e preferenze. Niente più scambi manuali di ingredienti.",
      features: [
        "Diete: Keto, Vegano, Low-Carb e altro",
        "Adattato ai tuoi obiettivi",
        "Filtro automatico degli allergeni",
        "Regolazione delle porzioni",
        "Memorizzazione delle preferenze di gusto",
      ],
      image1: "/images/onboarding1_DE.png",
      image2: "/images/onboarding2_DE.png",
    },
    {
      label: "Genera ricette",
      title: "Genera nuove ricette in pochi secondi",
      description: "Dì semplicemente a Chabis cosa vuoi cucinare o quali ingredienti hai. Il nostro chef IA genera la ricetta perfetta in pochi secondi.",
      features: [
        "Ricette generate da IA in secondi",
        "Basate sulle tue preferenze",
        "Ottimizzate per la tua vita quotidiana",
        "Variazioni illimitate possibili",
        "Lista della spesa automatica sempre disponibile",
      ],
      image1: "/images/chat_DE.png",
      image2: "/images/cover_DE.png",
    },
    {
      label: "Nutrizione",
      title: "Analisi nutrizionale completa",
      description: "Ottieni informazioni dettagliate su tutti i valori nutrizionali, macro e micronutrienti. Perfetto per un'alimentazione consapevole.",
      features: [
        "Profilo macro completo (Proteine, Grassi, Carboidrati)",
        "Panoramica dettagliata degli amminoacidi",
        "Vitamine e minerali",
        "Allergeni e intolleranze segnalati",
      ],
      image1: "/images/nutrients_DE.png",
      image2: "/images/ingredients_DE.png",
    },
    {
      label: "Cucina",
      title: "Passo dopo passo verso il successo",
      description: "Segui istruzioni chiare con timer, conversioni e consigli utili. Cucinare non è mai stato così facile.",
      features: [
        "Istruzioni chiare passo-passo",
        "Perfettamente adattato al tuo livello di cucina",
        "Conversione automatica delle quantità",
        "Consigli da pro dello chef IA in ogni momento",
      ],
      image1: "/images/cooking_DE.png",
      image2: "/images/ask_DE.png",
    },
    {
      label: "Salva",
      title: "Le tue ricette preferite sempre con te",
      description: "Salva le tue ricette generate e accedi in qualsiasi momento. Organizzale in categorie e condividile con la famiglia.",
      features: ["Segna e organizza i preferiti", "Raggruppa in collezioni", "Condividi con famiglia e amici", "Sincronizzazione cloud su tutti i dispositivi"],
      image1: "/mockup-others.png",
      image2: "/mockup-others-2.png",
    },
  ],

  // Social Proof / Testimonials
  socialProof: {
    title1: "Cosa dicono i nostri ",
    titleHighlight: "Chef",
    title2: "",
    subtitle: "Migliaia di cuochi amatoriali usano Chabis ogni giorno per ricette perfette.",
    testimonials: [
      {
        name: "Sarah M.",
        role: "Cuoca amatoriale",
        avatar: "👩‍🍳",
        rating: 5,
        text: "Finalmente un'app che capisce che non posso mangiare glutine! Ogni ricetta è perfettamente adattata alle mie esigenze.",
      },
      {
        name: "Marco L.",
        role: "Appassionato di fitness",
        avatar: "🧑‍🍳",
        rating: 5,
        text: "Il calcolo dei macro è geniale. Inserisco il mio obiettivo proteico e ottengo ricette corrispondenti. Game changer per il mio meal prep!",
      },
      {
        name: "Elena K.",
        role: "Madre di 3",
        avatar: "👨‍🍳",
        rating: 5,
        text: "Con 3 figli e preferenze diverse, cucinare era un incubo. Chabis trova ricette che piacciono a tutti!",
      },
      {
        name: "Thomas B.",
        role: "Seguace Keto",
        avatar: "🧑‍🍳",
        rating: 5,
        text: "La dieta keto rigorosa non è mai stata così facile. L'app conosce le mie regole e fornisce sempre opzioni low-carb.",
      },
      {
        name: "Julia S.",
        role: "Cuoca vegana",
        avatar: "👩‍🍳",
        rating: 5,
        text: "Come vegana, finalmente trovo ricette creative senza cercare per ore. L'IA capisce davvero cosa significa vegano!",
      },
    ],
  },

  // FAQ
  faq: {
    title1: "Domande ",
    titleHighlight: "frequenti",
    contactText: "Hai ancora domande?",
    contactLink: "Contattaci",
    items: [
      {
        question: "Quanto costa Chabis?",
        answer:
          "Chabis è fondamentalmente gratuito. Per iniziare, ti regaliamo 5 ricette premium gratuite (incluse immagini IA e valori nutrizionali dettagliati) e poi 2 in più ogni settimana. Se ne vuoi di più, puoi passare a Chabis Premium per generazione illimitata e la modalità IA più intelligente. La funzione ricetta standard rimane gratuita per sempre.",
      },
      {
        question: "Chabis funziona offline?",
        answer:
          "Sì e no. Poiché la nostra IA calcola le ricette in tempo reale per te, hai bisogno di una connessione internet per la generazione. Ma: Tutte le ricette vengono salvate nella cronologia e possono essere aggiunte al tuo libro di ricette. Queste sono poi disponibili anche offline, così puoi cucinare senza problemi al supermercato o nelle zone senza segnale.",
      },
      {
        question: "Quali diete sono supportate?",
        answer:
          "Quasi tutte. Chabis comprende forme alimentari complesse come Vegano, Vegetariano, Pescetariano, Keto, Low Carb e Paleo. La particolarità: L'IA combina automaticamente questo con le tue allergie (es. Glutine, Lattosio, Noci) e le tue avversioni personali (es. 'Niente coriandolo').",
      },
      {
        question: "I miei dati sono al sicuro?",
        answer:
          "Assolutamente. Come app svizzera, la protezione dei dati è la nostra massima priorità. I tuoi dati sulla salute, allergie e preferenze sono crittografati in modo sicuro e mai venduti a partner pubblicitari. Utilizziamo questi dati esclusivamente per adattare perfettamente le ricette a te.",
      },
      {
        question: "Su quali dispositivi funziona Chabis?",
        answer:
          "Chabis è attualmente ottimizzato esclusivamente per iPhone (iOS) ed è disponibile sull'Apple App Store. Ci concentriamo nel fornire la migliore esperienza per iOS prima di espanderci ad altre piattaforme.",
      },
    ],
  },

  // Footer
  footer: {
    tagline: "Il tuo chef IA per ricette personalizzate. Perfettamente adattato alla tua dieta, allergie e ingredienti.",
    support: "Supporto",
    legal: "Legale",
    faq: "FAQ",
    contact: "Contatto",
    privacy: "Privacy",
    terms: "Termini",
    appStoreBadge: "/Download_on_the_App_Store_Badge_IT_RGB_wht_100517.svg",
  },
};
