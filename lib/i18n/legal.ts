export interface LegalTranslations {
  privacy: {
    title: string;
    lastUpdated: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
  terms: {
    title: string;
    lastUpdated: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
}

export const legalDe: LegalTranslations = {
  privacy: {
    title: "Datenschutzerklärung",
    lastUpdated: "Zuletzt aktualisiert: 14. Dezember 2024",
    sections: [
      {
        title: "1. Einleitung",
        content:
          "Willkommen bei Chabis. Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Diese Datenschutzerklärung erläutert, welche Daten wir erheben, wie wir sie verwenden und welche Rechte Sie haben.",
      },
      {
        title: "2. Verantwortlicher",
        content:
          "Verantwortlich für die Datenverarbeitung ist Chabis, mit Sitz in der Schweiz. Bei Fragen zum Datenschutz erreichen Sie uns unter support@chabis.app.",
      },
      {
        title: "3. Erhobene Daten",
        content:
          "Wir erheben folgende Daten: Kontoinformationen (E-Mail-Adresse), Nutzungsdaten (erstellte Rezepte, Präferenzen), Gesundheitsbezogene Daten (Allergien, Diäten) – nur wenn Sie diese freiwillig angeben, sowie technische Daten (Gerätetyp, App-Version).",
      },
      {
        title: "4. Verwendung der Daten",
        content:
          "Ihre Daten verwenden wir ausschliesslich für: Die Personalisierung Ihrer Rezepte, die Verbesserung unserer App und Services, den Kundensupport und die Kommunikation mit Ihnen (nur mit Ihrer Einwilligung).",
      },
      {
        title: "5. Datenweitergabe",
        content:
          "Wir verkaufen Ihre Daten niemals an Dritte. Eine Weitergabe erfolgt nur an technische Dienstleister (z.B. Cloud-Hosting) unter strengen Datenschutzvereinbarungen oder wenn gesetzlich vorgeschrieben.",
      },
      {
        title: "6. Datensicherheit",
        content:
          "Wir setzen modernste Verschlüsselungstechnologien ein, um Ihre Daten zu schützen. Alle Daten werden auf Servern in der Schweiz oder der EU gespeichert.",
      },
      {
        title: "7. Ihre Rechte",
        content:
          "Sie haben das Recht auf: Auskunft über Ihre gespeicherten Daten, Berichtigung falscher Daten, Löschung Ihrer Daten, Datenübertragbarkeit und Widerspruch gegen die Datenverarbeitung. Kontaktieren Sie uns unter support@chabis.app.",
      },
      {
        title: "8. Cookies und Tracking",
        content: "Unsere App verwendet keine Tracking-Cookies. Wir setzen nur technisch notwendige Cookies für die Funktionalität der Website ein.",
      },
      {
        title: "9. Änderungen",
        content: "Wir können diese Datenschutzerklärung gelegentlich aktualisieren. Wesentliche Änderungen werden wir Ihnen mitteilen.",
      },
      {
        title: "10. Kontakt",
        content: "Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter support@chabis.app.",
      },
    ],
  },
  terms: {
    title: "Allgemeine Geschäftsbedingungen",
    lastUpdated: "Zuletzt aktualisiert: 14. Dezember 2024",
    sections: [
      {
        title: "1. Geltungsbereich",
        content: "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der Chabis-App und aller damit verbundenen Dienste.",
      },
      {
        title: "2. Leistungsbeschreibung",
        content:
          "Chabis ist eine KI-gestützte Koch-App, die personalisierte Rezepte basierend auf Ihren Präferenzen, Diäten und verfügbaren Zutaten generiert.",
      },
      {
        title: "3. Registrierung und Konto",
        content: "Für die Nutzung bestimmter Funktionen ist eine Registrierung erforderlich. Sie sind für die Geheimhaltung Ihrer Zugangsdaten verantwortlich.",
      },
      {
        title: "4. Kostenlose und Premium-Dienste",
        content:
          "Die Grundfunktionen von Chabis sind kostenlos. Premium-Funktionen können über ein Abonnement freigeschaltet werden. Die aktuellen Preise finden Sie in der App.",
      },
      {
        title: "5. Nutzungsrechte",
        content:
          "Sie erhalten ein nicht-exklusives, nicht übertragbares Recht zur persönlichen Nutzung der App. Die kommerzielle Nutzung der generierten Inhalte ist ohne schriftliche Genehmigung untersagt.",
      },
      {
        title: "6. Haftungsausschluss",
        content:
          "Die Rezepte und Nährwertangaben dienen nur zu Informationszwecken. Bei Allergien oder gesundheitlichen Bedenken konsultieren Sie bitte einen Arzt. Wir übernehmen keine Haftung für gesundheitliche Folgen.",
      },
      {
        title: "7. Geistiges Eigentum",
        content:
          "Alle Rechte an der App, dem Design und den Inhalten liegen bei Chabis. Die von der KI generierten Rezepte können Sie für den persönlichen Gebrauch verwenden.",
      },
      {
        title: "8. Kündigung",
        content: "Sie können Ihr Konto jederzeit kündigen. Premium-Abonnements können gemäss den Bedingungen des App Stores gekündigt werden.",
      },
      {
        title: "9. Änderungen der AGB",
        content:
          "Wir behalten uns vor, diese AGB zu ändern. Wesentliche Änderungen werden wir Ihnen mitteilen. Die weitere Nutzung nach Änderungen gilt als Zustimmung.",
      },
      {
        title: "10. Anwendbares Recht",
        content: "Es gilt schweizerisches Recht. Gerichtsstand ist Zürich, Schweiz.",
      },
      {
        title: "11. Kontakt",
        content: "Bei Fragen zu diesen AGB kontaktieren Sie uns unter support@chabis.app.",
      },
    ],
  },
};

export const legalEn: LegalTranslations = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: December 14, 2024",
    sections: [
      {
        title: "1. Introduction",
        content:
          "Welcome to Chabis. Protecting your personal data is very important to us. This privacy policy explains what data we collect, how we use it, and what rights you have.",
      },
      {
        title: "2. Data Controller",
        content: "The data controller is Chabis, based in Switzerland. For privacy questions, you can reach us at support@chabis.app.",
      },
      {
        title: "3. Data Collected",
        content:
          "We collect the following data: Account information (email address), Usage data (created recipes, preferences), Health-related data (allergies, diets) – only if you voluntarily provide it, and Technical data (device type, app version).",
      },
      {
        title: "4. Use of Data",
        content:
          "We use your data exclusively for: Personalizing your recipes, Improving our app and services, Customer support, and Communication with you (only with your consent).",
      },
      {
        title: "5. Data Sharing",
        content:
          "We never sell your data to third parties. Data is only shared with technical service providers (e.g., cloud hosting) under strict data protection agreements, or when legally required.",
      },
      {
        title: "6. Data Security",
        content: "We use state-of-the-art encryption technologies to protect your data. All data is stored on servers in Switzerland or the EU.",
      },
      {
        title: "7. Your Rights",
        content:
          "You have the right to: Access your stored data, Correct inaccurate data, Delete your data, Data portability, and Object to data processing. Contact us at support@chabis.app.",
      },
      {
        title: "8. Cookies and Tracking",
        content: "Our app does not use tracking cookies. We only use technically necessary cookies for website functionality.",
      },
      {
        title: "9. Changes",
        content: "We may occasionally update this privacy policy. We will notify you of significant changes.",
      },
      {
        title: "10. Contact",
        content: "For privacy questions, please contact us at support@chabis.app.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "Last updated: December 14, 2024",
    sections: [
      {
        title: "1. Scope",
        content: "These Terms of Service apply to the use of the Chabis app and all related services.",
      },
      {
        title: "2. Service Description",
        content: "Chabis is an AI-powered cooking app that generates personalized recipes based on your preferences, diets, and available ingredients.",
      },
      {
        title: "3. Registration and Account",
        content: "Registration is required for certain features. You are responsible for keeping your login credentials confidential.",
      },
      {
        title: "4. Free and Premium Services",
        content: "Basic Chabis features are free. Premium features can be unlocked through a subscription. Current prices can be found in the app.",
      },
      {
        title: "5. Usage Rights",
        content:
          "You receive a non-exclusive, non-transferable right for personal use of the app. Commercial use of generated content is prohibited without written permission.",
      },
      {
        title: "6. Disclaimer",
        content:
          "Recipes and nutritional information are for informational purposes only. For allergies or health concerns, please consult a doctor. We assume no liability for health consequences.",
      },
      {
        title: "7. Intellectual Property",
        content: "All rights to the app, design, and content belong to Chabis. You may use AI-generated recipes for personal use.",
      },
      {
        title: "8. Termination",
        content: "You can cancel your account at any time. Premium subscriptions can be cancelled according to App Store terms.",
      },
      {
        title: "9. Changes to Terms",
        content: "We reserve the right to modify these terms. We will notify you of significant changes. Continued use after changes constitutes acceptance.",
      },
      {
        title: "10. Applicable Law",
        content: "Swiss law applies. The place of jurisdiction is Zurich, Switzerland.",
      },
      {
        title: "11. Contact",
        content: "For questions about these terms, contact us at support@chabis.app.",
      },
    ],
  },
};

export const legalFr: LegalTranslations = {
  privacy: {
    title: "Politique de confidentialité",
    lastUpdated: "Dernière mise à jour: 14 décembre 2024",
    sections: [
      {
        title: "1. Introduction",
        content:
          "Bienvenue chez Chabis. La protection de vos données personnelles est très importante pour nous. Cette politique de confidentialité explique quelles données nous collectons, comment nous les utilisons et quels sont vos droits.",
      },
      {
        title: "2. Responsable du traitement",
        content:
          "Le responsable du traitement des données est Chabis, basé en Suisse. Pour toute question relative à la confidentialité, vous pouvez nous contacter à support@chabis.app.",
      },
      {
        title: "3. Données collectées",
        content:
          "Nous collectons les données suivantes: Informations de compte (adresse e-mail), Données d'utilisation (recettes créées, préférences), Données de santé (allergies, régimes) – uniquement si vous les fournissez volontairement, et Données techniques (type d'appareil, version de l'app).",
      },
      {
        title: "4. Utilisation des données",
        content:
          "Nous utilisons vos données exclusivement pour: Personnaliser vos recettes, Améliorer notre application et nos services, Le support client, et La communication avec vous (uniquement avec votre consentement).",
      },
      {
        title: "5. Partage des données",
        content:
          "Nous ne vendons jamais vos données à des tiers. Les données ne sont partagées qu'avec des prestataires techniques (ex: hébergement cloud) sous des accords stricts de protection des données, ou lorsque la loi l'exige.",
      },
      {
        title: "6. Sécurité des données",
        content:
          "Nous utilisons des technologies de cryptage de pointe pour protéger vos données. Toutes les données sont stockées sur des serveurs en Suisse ou dans l'UE.",
      },
      {
        title: "7. Vos droits",
        content:
          "Vous avez le droit de: Accéder à vos données stockées, Corriger les données inexactes, Supprimer vos données, Portabilité des données, et Vous opposer au traitement des données. Contactez-nous à support@chabis.app.",
      },
      {
        title: "8. Cookies et suivi",
        content:
          "Notre application n'utilise pas de cookies de suivi. Nous n'utilisons que des cookies techniquement nécessaires pour le fonctionnement du site web.",
      },
      {
        title: "9. Modifications",
        content: "Nous pouvons occasionnellement mettre à jour cette politique de confidentialité. Nous vous informerons des changements importants.",
      },
      {
        title: "10. Contact",
        content: "Pour toute question relative à la confidentialité, veuillez nous contacter à support@chabis.app.",
      },
    ],
  },
  terms: {
    title: "Conditions générales",
    lastUpdated: "Dernière mise à jour: 14 décembre 2024",
    sections: [
      {
        title: "1. Champ d'application",
        content: "Ces conditions générales s'appliquent à l'utilisation de l'application Chabis et de tous les services associés.",
      },
      {
        title: "2. Description du service",
        content:
          "Chabis est une application de cuisine alimentée par l'IA qui génère des recettes personnalisées basées sur vos préférences, régimes et ingrédients disponibles.",
      },
      {
        title: "3. Inscription et compte",
        content: "L'inscription est requise pour certaines fonctionnalités. Vous êtes responsable de la confidentialité de vos identifiants de connexion.",
      },
      {
        title: "4. Services gratuits et Premium",
        content:
          "Les fonctionnalités de base de Chabis sont gratuites. Les fonctionnalités Premium peuvent être débloquées via un abonnement. Les prix actuels sont disponibles dans l'application.",
      },
      {
        title: "5. Droits d'utilisation",
        content:
          "Vous recevez un droit non-exclusif et non-transférable pour l'utilisation personnelle de l'application. L'utilisation commerciale du contenu généré est interdite sans autorisation écrite.",
      },
      {
        title: "6. Clause de non-responsabilité",
        content:
          "Les recettes et informations nutritionnelles sont fournies à titre informatif uniquement. Pour les allergies ou problèmes de santé, veuillez consulter un médecin. Nous déclinons toute responsabilité pour les conséquences sur la santé.",
      },
      {
        title: "7. Propriété intellectuelle",
        content:
          "Tous les droits sur l'application, le design et le contenu appartiennent à Chabis. Vous pouvez utiliser les recettes générées par l'IA pour un usage personnel.",
      },
      {
        title: "8. Résiliation",
        content: "Vous pouvez résilier votre compte à tout moment. Les abonnements Premium peuvent être résiliés selon les conditions de l'App Store.",
      },
      {
        title: "9. Modifications des conditions",
        content:
          "Nous nous réservons le droit de modifier ces conditions. Nous vous informerons des changements importants. L'utilisation continue après les modifications vaut acceptation.",
      },
      {
        title: "10. Droit applicable",
        content: "Le droit suisse s'applique. Le for juridique est Zurich, Suisse.",
      },
      {
        title: "11. Contact",
        content: "Pour toute question concernant ces conditions, contactez-nous à support@chabis.app.",
      },
    ],
  },
};

export const legalIt: LegalTranslations = {
  privacy: {
    title: "Informativa sulla privacy",
    lastUpdated: "Ultimo aggiornamento: 14 dicembre 2024",
    sections: [
      {
        title: "1. Introduzione",
        content:
          "Benvenuto su Chabis. La protezione dei tuoi dati personali è molto importante per noi. Questa informativa sulla privacy spiega quali dati raccogliamo, come li utilizziamo e quali sono i tuoi diritti.",
      },
      {
        title: "2. Titolare del trattamento",
        content: "Il titolare del trattamento dei dati è Chabis, con sede in Svizzera. Per domande sulla privacy, puoi contattarci a support@chabis.app.",
      },
      {
        title: "3. Dati raccolti",
        content:
          "Raccogliamo i seguenti dati: Informazioni sull'account (indirizzo e-mail), Dati di utilizzo (ricette create, preferenze), Dati relativi alla salute (allergie, diete) – solo se li fornisci volontariamente, e Dati tecnici (tipo di dispositivo, versione dell'app).",
      },
      {
        title: "4. Utilizzo dei dati",
        content:
          "Utilizziamo i tuoi dati esclusivamente per: Personalizzare le tue ricette, Migliorare la nostra app e i nostri servizi, Assistenza clienti, e Comunicazione con te (solo con il tuo consenso).",
      },
      {
        title: "5. Condivisione dei dati",
        content:
          "Non vendiamo mai i tuoi dati a terzi. I dati vengono condivisi solo con fornitori di servizi tecnici (es. hosting cloud) sotto rigorosi accordi di protezione dei dati, o quando richiesto dalla legge.",
      },
      {
        title: "6. Sicurezza dei dati",
        content:
          "Utilizziamo tecnologie di crittografia all'avanguardia per proteggere i tuoi dati. Tutti i dati sono archiviati su server in Svizzera o nell'UE.",
      },
      {
        title: "7. I tuoi diritti",
        content:
          "Hai il diritto di: Accedere ai tuoi dati memorizzati, Correggere dati inesatti, Cancellare i tuoi dati, Portabilità dei dati, e Opporti al trattamento dei dati. Contattaci a support@chabis.app.",
      },
      {
        title: "8. Cookie e tracciamento",
        content: "La nostra app non utilizza cookie di tracciamento. Utilizziamo solo cookie tecnicamente necessari per la funzionalità del sito web.",
      },
      {
        title: "9. Modifiche",
        content: "Potremmo occasionalmente aggiornare questa informativa sulla privacy. Ti informeremo di eventuali modifiche significative.",
      },
      {
        title: "10. Contatto",
        content: "Per domande sulla privacy, contattaci a support@chabis.app.",
      },
    ],
  },
  terms: {
    title: "Termini di servizio",
    lastUpdated: "Ultimo aggiornamento: 14 dicembre 2024",
    sections: [
      {
        title: "1. Ambito di applicazione",
        content: "Questi Termini di servizio si applicano all'utilizzo dell'app Chabis e di tutti i servizi correlati.",
      },
      {
        title: "2. Descrizione del servizio",
        content: "Chabis è un'app di cucina basata sull'IA che genera ricette personalizzate in base alle tue preferenze, diete e ingredienti disponibili.",
      },
      {
        title: "3. Registrazione e account",
        content: "La registrazione è necessaria per alcune funzionalità. Sei responsabile della riservatezza delle tue credenziali di accesso.",
      },
      {
        title: "4. Servizi gratuiti e Premium",
        content:
          "Le funzionalità base di Chabis sono gratuite. Le funzionalità Premium possono essere sbloccate tramite abbonamento. I prezzi attuali sono disponibili nell'app.",
      },
      {
        title: "5. Diritti di utilizzo",
        content:
          "Ricevi un diritto non esclusivo e non trasferibile per l'uso personale dell'app. L'uso commerciale dei contenuti generati è vietato senza autorizzazione scritta.",
      },
      {
        title: "6. Esclusione di responsabilità",
        content:
          "Le ricette e le informazioni nutrizionali sono fornite solo a scopo informativo. Per allergie o problemi di salute, consultare un medico. Non ci assumiamo alcuna responsabilità per conseguenze sulla salute.",
      },
      {
        title: "7. Proprietà intellettuale",
        content: "Tutti i diritti sull'app, il design e i contenuti appartengono a Chabis. Puoi utilizzare le ricette generate dall'IA per uso personale.",
      },
      {
        title: "8. Risoluzione",
        content: "Puoi cancellare il tuo account in qualsiasi momento. Gli abbonamenti Premium possono essere cancellati secondo i termini dell'App Store.",
      },
      {
        title: "9. Modifiche ai termini",
        content:
          "Ci riserviamo il diritto di modificare questi termini. Ti informeremo di eventuali modifiche significative. L'uso continuato dopo le modifiche costituisce accettazione.",
      },
      {
        title: "10. Legge applicabile",
        content: "Si applica il diritto svizzero. Il foro competente è Zurigo, Svizzera.",
      },
      {
        title: "11. Contatto",
        content: "Per domande su questi termini, contattaci a support@chabis.app.",
      },
    ],
  },
};

export function getLegalTranslations(locale: string): LegalTranslations {
  switch (locale) {
    case "en":
      return legalEn;
    case "fr":
      return legalFr;
    case "it":
      return legalIt;
    default:
      return legalDe;
  }
}
