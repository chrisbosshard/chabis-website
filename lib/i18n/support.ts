export interface SupportTranslations {
  title: string;
  lastUpdated: string;
  contactTitle: string;
  contactEmail: string;
  contactResponse: string;
  faqTitle: string;
  sections: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  }[];
  privacyLegal: string;
  privacyLink: string;
  termsLink: string;
  appVersionTitle: string;
  appVersionText: string;
}

export const supportDe: SupportTranslations = {
  title: "Support",
  lastUpdated: "Zuletzt aktualisiert: 14. Dezember 2024",
  contactTitle: "Kontaktiere uns",
  contactEmail: "Bei Fragen oder Problemen schreibe uns an: **support@chabis.ai**",
  contactResponse: "Wir antworten normalerweise innerhalb von 24-48 Stunden.",
  faqTitle: "Häufig gestellte Fragen",
  sections: [
    {
      title: "Konto & Login",
      items: [
        {
          question: "Wie erstelle ich ein Konto?",
          answer: 'Tippe auf "Mit Apple anmelden" auf dem Login-Bildschirm. Dein Konto wird automatisch mit deiner Apple ID erstellt.',
        },
        {
          question: "Wie lösche ich mein Konto?",
          answer:
            'Gehe zu Einstellungen (Zahnrad-Symbol) → scrolle nach unten → tippe auf "Konto löschen". Dies entfernt dauerhaft alle deine Daten, einschliesslich Rezepte, Einkaufslisten und Präferenzen.',
        },
        {
          question: "Ich kann mich nicht einloggen. Was soll ich tun?",
          answer:
            "Stelle sicher, dass du dieselbe Apple ID verwendest, mit der du dich ursprünglich registriert hast. Falls die Probleme bestehen bleiben, kontaktiere uns unter support@chabis.ai.",
        },
      ],
    },
    {
      title: "Abonnement & Premium",
      items: [
        {
          question: "Was ist in Premium enthalten?",
          answer:
            "• Unbegrenzte Rezeptgenerierung\n• KI-generierte Rezeptbilder\n• Detaillierte Nährwertanalyse (Vitamine, Mineralstoffe, Makros)\n• Prioritäts-Support",
        },
        {
          question: "Wie abonniere ich?",
          answer:
            "Tippe auf das Kronen-Symbol in der App oder gehe zur Paywall, wenn du dazu aufgefordert wirst. Wähle zwischen monatlicher oder jährlicher Abrechnung.",
        },
        {
          question: "Wie kündige ich mein Abonnement?",
          answer:
            '1. Öffne die iPhone Einstellungen\n2. Tippe oben auf deinen Namen\n3. Tippe auf "Abonnements"\n4. Finde "Chabis" und tippe auf "Abonnement kündigen"\n\nOder besuche: https://apps.apple.com/account/subscriptions',
        },
        {
          question: "Wie stelle ich meinen Kauf wieder her?",
          answer: 'Öffne die Paywall in der App und tippe unten auf "Käufe wiederherstellen".',
        },
        {
          question: "Ich wurde belastet, habe aber keinen Premium-Zugang.",
          answer:
            "Versuche zuerst, deine Käufe wiederherzustellen. Falls das nicht funktioniert, kontaktiere uns mit deiner Apple ID E-Mail und wir helfen dir bei der Lösung.",
        },
      ],
    },
    {
      title: "Rezepte & Funktionen",
      items: [
        {
          question: "Wie generiere ich ein Rezept?",
          answer: 'Tippe im Chat ein, was du kochen möchtest (z.B. "Etwas mit Poulet und Reis") und Chabis erstellt ein personalisiertes Rezept.',
        },
        {
          question: "Kann ich Rezepte speichern?",
          answer: "Ja! Alle generierten Rezepte werden automatisch in deinem Kochbuch gespeichert (Buch-Symbol).",
        },
        {
          question: "Wie funktioniert die Einkaufsliste?",
          answer:
            'Wenn du ein Rezept ansiehst, tippe auf "Zur Einkaufsliste hinzufügen", um die Zutaten hinzuzufügen. Greife über das Warenkorb-Symbol auf deine Liste zu.',
        },
        {
          question: "Die Nährwertinformationen fehlen.",
          answer: "Die detaillierte Nährwertanalyse ist eine Premium-Funktion. Gratis-Nutzer sehen nur grundlegende Rezeptinformationen.",
        },
      ],
    },
    {
      title: "Technische Probleme",
      items: [
        {
          question: "Die App stürzt ab.",
          answer:
            "Versuche, die App zu schliessen und wieder zu öffnen. Falls die Probleme bestehen bleiben, installiere die App aus dem App Store neu (deine Daten sind in deinem Konto gespeichert).",
        },
        {
          question: "Rezepte werden nicht geladen.",
          answer: "Überprüfe deine Internetverbindung. Chabis benötigt eine aktive Verbindung, um Rezepte zu generieren.",
        },
        {
          question: "Push-Benachrichtigungen funktionieren nicht.",
          answer: "Gehe zu iPhone Einstellungen → Chabis → Mitteilungen und stelle sicher, dass sie aktiviert sind.",
        },
      ],
    },
  ],
  privacyLegal: "Datenschutz & Rechtliches",
  privacyLink: "Datenschutzerklärung",
  termsLink: "Nutzungsbedingungen",
  appVersionTitle: "App-Version",
  appVersionText: "Um deine App-Version zu finden: Einstellungen → scrolle nach unten, um die Versionsnummer zu sehen.",
};

export const supportEn: SupportTranslations = {
  title: "Support",
  lastUpdated: "Last updated: December 14, 2024",
  contactTitle: "Contact Us",
  contactEmail: "For questions or issues, email us at: **support@chabis.ai**",
  contactResponse: "We typically respond within 24-48 hours.",
  faqTitle: "Frequently Asked Questions",
  sections: [
    {
      title: "Account & Login",
      items: [
        {
          question: "How do I create an account?",
          answer: 'Tap "Sign in with Apple" on the login screen. Your account is created automatically using your Apple ID.',
        },
        {
          question: "How do I delete my account?",
          answer:
            'Go to Settings (gear icon) → scroll to the bottom → tap "Delete Account". This permanently removes all your data including recipes, shopping lists, and preferences.',
        },
        {
          question: "I can't log in. What should I do?",
          answer: "Make sure you're using the same Apple ID you originally signed up with. If issues persist, contact us at support@chabis.ai.",
        },
      ],
    },
    {
      title: "Subscription & Premium",
      items: [
        {
          question: "What's included in Premium?",
          answer: "• Unlimited recipe generation\n• AI-generated recipe images\n• Detailed nutrition analysis (vitamins, minerals, macros)\n• Priority support",
        },
        {
          question: "How do I subscribe?",
          answer: "Tap the crown icon in the app or go to the paywall when prompted. Choose monthly or annual billing.",
        },
        {
          question: "How do I cancel my subscription?",
          answer:
            '1. Open iPhone Settings\n2. Tap your name at the top\n3. Tap "Subscriptions"\n4. Find "Chabis" and tap "Cancel Subscription"\n\nOr visit: https://apps.apple.com/account/subscriptions',
        },
        {
          question: "How do I restore my purchase?",
          answer: 'Open the paywall in the app and tap "Restore Purchases" at the bottom.',
        },
        {
          question: "I was charged but don't have Premium access.",
          answer: "Try restoring purchases first. If that doesn't work, contact us with your Apple ID email and we'll help resolve it.",
        },
      ],
    },
    {
      title: "Recipes & Features",
      items: [
        {
          question: "How do I generate a recipe?",
          answer: 'Type what you want to cook in the chat (e.g., "Something with chicken and rice") and Chabis will create a personalized recipe.',
        },
        {
          question: "Can I save recipes?",
          answer: "Yes! All generated recipes are automatically saved in your Cookbook (book icon).",
        },
        {
          question: "How does the shopping list work?",
          answer: 'When viewing a recipe, tap "Add to Shopping List" to add ingredients. Access your list via the cart icon.',
        },
        {
          question: "The nutrition info is missing.",
          answer: "Detailed nutrition analysis is a Premium feature. Free users see basic recipe info only.",
        },
      ],
    },
    {
      title: "Technical Issues",
      items: [
        {
          question: "The app is crashing.",
          answer: "Try closing and reopening the app. If issues persist, reinstall the app from the App Store (your data is saved to your account).",
        },
        {
          question: "Recipes aren't loading.",
          answer: "Check your internet connection. Chabis requires an active connection to generate recipes.",
        },
        {
          question: "Push notifications aren't working.",
          answer: "Go to iPhone Settings → Chabis → Notifications and make sure they're enabled.",
        },
      ],
    },
  ],
  privacyLegal: "Privacy & Legal",
  privacyLink: "Privacy Policy",
  termsLink: "Terms of Service",
  appVersionTitle: "App Version",
  appVersionText: "To find your app version: Settings → scroll to the bottom to see the version number.",
};

export const supportFr: SupportTranslations = {
  title: "Support",
  lastUpdated: "Dernière mise à jour: 14 décembre 2024",
  contactTitle: "Contactez-nous",
  contactEmail: "Pour toute question ou problème, écrivez-nous à: **support@chabis.ai**",
  contactResponse: "Nous répondons généralement dans les 24 à 48 heures.",
  faqTitle: "Questions fréquemment posées",
  sections: [
    {
      title: "Compte & Connexion",
      items: [
        {
          question: "Comment créer un compte?",
          answer: 'Appuyez sur "Se connecter avec Apple" sur l\'écran de connexion. Votre compte est créé automatiquement avec votre Apple ID.',
        },
        {
          question: "Comment supprimer mon compte?",
          answer:
            'Allez dans Paramètres (icône engrenage) → faites défiler vers le bas → appuyez sur "Supprimer le compte". Cela supprime définitivement toutes vos données, y compris les recettes, listes de courses et préférences.',
        },
        {
          question: "Je ne peux pas me connecter. Que dois-je faire?",
          answer:
            "Assurez-vous d'utiliser le même Apple ID avec lequel vous vous êtes initialement inscrit. Si les problèmes persistent, contactez-nous à support@chabis.ai.",
        },
      ],
    },
    {
      title: "Abonnement & Premium",
      items: [
        {
          question: "Qu'est-ce qui est inclus dans Premium?",
          answer:
            "• Génération de recettes illimitée\n• Images de recettes générées par IA\n• Analyse nutritionnelle détaillée (vitamines, minéraux, macros)\n• Support prioritaire",
        },
        {
          question: "Comment m'abonner?",
          answer: "Appuyez sur l'icône couronne dans l'app ou accédez au paywall lorsque vous y êtes invité. Choisissez une facturation mensuelle ou annuelle.",
        },
        {
          question: "Comment annuler mon abonnement?",
          answer:
            '1. Ouvrez les Paramètres iPhone\n2. Appuyez sur votre nom en haut\n3. Appuyez sur "Abonnements"\n4. Trouvez "Chabis" et appuyez sur "Annuler l\'abonnement"\n\nOu visitez: https://apps.apple.com/account/subscriptions',
        },
        {
          question: "Comment restaurer mon achat?",
          answer: 'Ouvrez le paywall dans l\'app et appuyez sur "Restaurer les achats" en bas.',
        },
        {
          question: "J'ai été débité mais je n'ai pas accès à Premium.",
          answer:
            "Essayez d'abord de restaurer vos achats. Si cela ne fonctionne pas, contactez-nous avec votre email Apple ID et nous vous aiderons à résoudre le problème.",
        },
      ],
    },
    {
      title: "Recettes & Fonctionnalités",
      items: [
        {
          question: "Comment générer une recette?",
          answer: 'Tapez ce que vous voulez cuisiner dans le chat (ex: "Quelque chose avec du poulet et du riz") et Chabis créera une recette personnalisée.',
        },
        {
          question: "Puis-je sauvegarder des recettes?",
          answer: "Oui! Toutes les recettes générées sont automatiquement sauvegardées dans votre Livre de recettes (icône livre).",
        },
        {
          question: "Comment fonctionne la liste de courses?",
          answer:
            'Lorsque vous consultez une recette, appuyez sur "Ajouter à la liste de courses" pour ajouter les ingrédients. Accédez à votre liste via l\'icône panier.',
        },
        {
          question: "Les informations nutritionnelles manquent.",
          answer:
            "L'analyse nutritionnelle détaillée est une fonctionnalité Premium. Les utilisateurs gratuits ne voient que les informations de base de la recette.",
        },
      ],
    },
    {
      title: "Problèmes techniques",
      items: [
        {
          question: "L'app plante.",
          answer:
            "Essayez de fermer et de rouvrir l'app. Si les problèmes persistent, réinstallez l'app depuis l'App Store (vos données sont sauvegardées dans votre compte).",
        },
        {
          question: "Les recettes ne se chargent pas.",
          answer: "Vérifiez votre connexion internet. Chabis nécessite une connexion active pour générer des recettes.",
        },
        {
          question: "Les notifications push ne fonctionnent pas.",
          answer: "Allez dans Paramètres iPhone → Chabis → Notifications et assurez-vous qu'elles sont activées.",
        },
      ],
    },
  ],
  privacyLegal: "Confidentialité & Mentions légales",
  privacyLink: "Politique de confidentialité",
  termsLink: "Conditions d'utilisation",
  appVersionTitle: "Version de l'app",
  appVersionText: "Pour trouver la version de votre app: Paramètres → faites défiler vers le bas pour voir le numéro de version.",
};

export const supportIt: SupportTranslations = {
  title: "Supporto",
  lastUpdated: "Ultimo aggiornamento: 14 dicembre 2024",
  contactTitle: "Contattaci",
  contactEmail: "Per domande o problemi, scrivici a: **support@chabis.ai**",
  contactResponse: "Rispondiamo generalmente entro 24-48 ore.",
  faqTitle: "Domande frequenti",
  sections: [
    {
      title: "Account & Login",
      items: [
        {
          question: "Come creo un account?",
          answer: 'Tocca "Accedi con Apple" nella schermata di login. Il tuo account viene creato automaticamente con il tuo Apple ID.',
        },
        {
          question: "Come elimino il mio account?",
          answer:
            'Vai su Impostazioni (icona ingranaggio) → scorri verso il basso → tocca "Elimina account". Questo rimuove permanentemente tutti i tuoi dati, incluse ricette, liste della spesa e preferenze.',
        },
        {
          question: "Non riesco ad accedere. Cosa devo fare?",
          answer: "Assicurati di usare lo stesso Apple ID con cui ti sei registrato inizialmente. Se i problemi persistono, contattaci a support@chabis.ai.",
        },
      ],
    },
    {
      title: "Abbonamento & Premium",
      items: [
        {
          question: "Cosa è incluso in Premium?",
          answer:
            "• Generazione di ricette illimitata\n• Immagini di ricette generate da IA\n• Analisi nutrizionale dettagliata (vitamine, minerali, macro)\n• Supporto prioritario",
        },
        {
          question: "Come mi abbono?",
          answer: "Tocca l'icona corona nell'app o vai al paywall quando richiesto. Scegli la fatturazione mensile o annuale.",
        },
        {
          question: "Come annullo il mio abbonamento?",
          answer:
            '1. Apri le Impostazioni iPhone\n2. Tocca il tuo nome in alto\n3. Tocca "Abbonamenti"\n4. Trova "Chabis" e tocca "Annulla abbonamento"\n\nOppure visita: https://apps.apple.com/account/subscriptions',
        },
        {
          question: "Come ripristino il mio acquisto?",
          answer: 'Apri il paywall nell\'app e tocca "Ripristina acquisti" in basso.',
        },
        {
          question: "Mi è stato addebitato ma non ho accesso a Premium.",
          answer: "Prova prima a ripristinare gli acquisti. Se non funziona, contattaci con la tua email Apple ID e ti aiuteremo a risolvere.",
        },
      ],
    },
    {
      title: "Ricette & Funzionalità",
      items: [
        {
          question: "Come genero una ricetta?",
          answer: 'Scrivi nella chat cosa vuoi cucinare (es. "Qualcosa con pollo e riso") e Chabis creerà una ricetta personalizzata.',
        },
        {
          question: "Posso salvare le ricette?",
          answer: "Sì! Tutte le ricette generate vengono salvate automaticamente nel tuo Libro di ricette (icona libro).",
        },
        {
          question: "Come funziona la lista della spesa?",
          answer:
            'Quando visualizzi una ricetta, tocca "Aggiungi alla lista della spesa" per aggiungere gli ingredienti. Accedi alla tua lista tramite l\'icona carrello.',
        },
        {
          question: "Mancano le informazioni nutrizionali.",
          answer: "L'analisi nutrizionale dettagliata è una funzionalità Premium. Gli utenti gratuiti vedono solo le informazioni di base della ricetta.",
        },
      ],
    },
    {
      title: "Problemi tecnici",
      items: [
        {
          question: "L'app si blocca.",
          answer: "Prova a chiudere e riaprire l'app. Se i problemi persistono, reinstalla l'app dall'App Store (i tuoi dati sono salvati nel tuo account).",
        },
        {
          question: "Le ricette non si caricano.",
          answer: "Controlla la tua connessione internet. Chabis richiede una connessione attiva per generare ricette.",
        },
        {
          question: "Le notifiche push non funzionano.",
          answer: "Vai su Impostazioni iPhone → Chabis → Notifiche e assicurati che siano attivate.",
        },
      ],
    },
  ],
  privacyLegal: "Privacy & Legale",
  privacyLink: "Informativa sulla privacy",
  termsLink: "Termini di servizio",
  appVersionTitle: "Versione app",
  appVersionText: "Per trovare la versione della tua app: Impostazioni → scorri verso il basso per vedere il numero di versione.",
};

export function getSupportTranslations(locale: string): SupportTranslations {
  switch (locale) {
    case "en":
      return supportEn;
    case "fr":
      return supportFr;
    case "it":
      return supportIt;
    default:
      return supportDe;
  }
}
