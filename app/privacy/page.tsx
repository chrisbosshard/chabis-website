import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzrichtlinien - Chabis",
  description: "Datenschutzrichtlinien für die Chabis App",
};

export default function PrivacyPage() {
  return (
    <div className="fixed inset-0 bg-stone-50 overflow-y-auto">
      <div className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-stone-800 mb-8">Datenschutzrichtlinien</h1>
          <p className="text-sm text-stone-500 mb-8">Zuletzt aktualisiert: 28. November 2025</p>

          <div className="prose prose-stone max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">1. Einleitung</h2>
              <p className="text-stone-600 leading-relaxed">
                Willkommen bei Chabis («wir», «uns», «unser»). Wir respektieren deine Privatsphäre und verpflichten uns, deine persönlichen Daten zu schützen.
                Diese Datenschutzrichtlinie erklärt, wie wir deine Daten erfassen, verwenden und schützen, wenn du unsere Koch-App nutzt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">2. Welche Daten wir erfassen</h2>
              <p className="text-stone-600 leading-relaxed mb-3">Wir erfassen folgende Daten:</p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>
                  <strong>Kontoinformationen:</strong> Bei der Anmeldung über Apple oder Google erhalten wir deinen Namen, deine E-Mail-Adresse und ein
                  Profilbild (falls vorhanden).
                </li>
                <li>
                  <strong>App-Daten:</strong> Rezepte, die du speicherst, Einkaufslisten und deine Favoriten.
                </li>
                <li>
                  <strong>Chat-Verläufe:</strong> Deine Konversationen mit dem AI-Assistenten werden temporär verarbeitet, um dir passende Rezepte zu
                  generieren.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">3. Wie wir deine Daten verwenden</h2>
              <p className="text-stone-600 leading-relaxed mb-3">Wir verwenden deine Daten für folgende Zwecke:</p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Bereitstellung und Verbesserung unserer Dienste</li>
                <li>Personalisierung deiner Rezeptvorschläge</li>
                <li>Synchronisierung deiner Daten über mehrere Geräte</li>
                <li>Technischer Support und Fehlerbehebung</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">4. Datenspeicherung</h2>
              <p className="text-stone-600 leading-relaxed">
                Deine Daten werden sicher in Firebase (Google Cloud) gespeichert. Die Server befinden sich in der EU und entsprechen den DSGVO-Anforderungen.
                Wir speichern deine Daten so lange, wie dein Konto aktiv ist. Bei Kontolöschung werden alle deine Daten innerhalb von 30 Tagen unwiderruflich
                gelöscht.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">5. Datenweitergabe</h2>
              <p className="text-stone-600 leading-relaxed mb-3">Wir verkaufen deine Daten nicht an Dritte. Wir teilen Daten nur mit folgenden Diensten:</p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>
                  <strong>Firebase/Google Cloud:</strong> Für Authentifizierung und Datenspeicherung
                </li>
                <li>
                  <strong>Google Gemini AI:</strong> Für die Generierung von Rezepten (nur Chat-Inhalte, keine persönlichen Daten)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">6. Deine Rechte</h2>
              <p className="text-stone-600 leading-relaxed mb-3">Du hast folgende Rechte:</p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>
                  <strong>Auskunftsrecht:</strong> Du kannst jederzeit eine Kopie deiner Daten anfordern.
                </li>
                <li>
                  <strong>Löschungsrecht:</strong> Du kannst dein Konto und alle Daten in den App-Einstellungen löschen.
                </li>
                <li>
                  <strong>Berichtigungsrecht:</strong> Du kannst deine Daten jederzeit aktualisieren.
                </li>
                <li>
                  <strong>Widerspruchsrecht:</strong> Du kannst der Datenverarbeitung jederzeit widersprechen.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">7. Sicherheit</h2>
              <p className="text-stone-600 leading-relaxed">
                Wir setzen branchenübliche Sicherheitsmassnahmen ein, um deine Daten zu schützen. Dazu gehören verschlüsselte Übertragungen (HTTPS/TLS), sichere
                Authentifizierung und regelmässige Sicherheitsüberprüfungen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">8. Kontakt</h2>
              <p className="text-stone-600 leading-relaxed">
                Bei Fragen zu diesen Datenschutzrichtlinien kontaktiere uns unter:{" "}
                <a href="mailto:privacy@chabis.ai" className="text-stone-800 underline hover:text-stone-600">
                  privacy@chabis.ai
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">9. Änderungen</h2>
              <p className="text-stone-600 leading-relaxed">
                Wir können diese Datenschutzrichtlinien von Zeit zu Zeit aktualisieren. Bei wesentlichen Änderungen werden wir dich in der App benachrichtigen.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-6 border-t border-stone-200">
            <Link href="/" className="text-stone-800 hover:underline text-sm">
              ← Zurück
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
