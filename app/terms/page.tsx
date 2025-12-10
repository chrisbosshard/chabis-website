import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen - Chabis",
  description: "Nutzungsbedingungen für die Chabis App",
};

export default function TermsPage() {
  return (
    <div className="fixed inset-0 bg-stone-50 overflow-y-auto">
      <div className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-stone-800 mb-8">Nutzungsbedingungen</h1>
          <p className="text-sm text-stone-500 mb-8">Zuletzt aktualisiert: 28. November 2025</p>

          <div className="prose prose-stone max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">1. Akzeptanz der Bedingungen</h2>
              <p className="text-stone-600 leading-relaxed">
                Durch die Nutzung der Chabis App («App», «Dienst») erklärst du dich mit diesen Nutzungsbedingungen einverstanden. Wenn du nicht einverstanden
                bist, nutze die App bitte nicht.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">2. Beschreibung des Dienstes</h2>
              <p className="text-stone-600 leading-relaxed">
                Chabis ist eine Koch-App, die künstliche Intelligenz nutzt, um personalisierte Schweizer und internationale Rezepte zu generieren. Die App
                bietet Funktionen wie Rezeptspeicherung, Einkaufslisten und einen Koch-Modus.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">3. Benutzerkonto</h2>
              <p className="text-stone-600 leading-relaxed mb-3">
                Um die App vollständig nutzen zu können, musst du ein Konto erstellen. Du bist verantwortlich für:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Die Sicherheit deines Kontos</li>
                <li>Alle Aktivitäten, die unter deinem Konto stattfinden</li>
                <li>Die Richtigkeit deiner Kontoinformationen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">4. Akzeptable Nutzung</h2>
              <p className="text-stone-600 leading-relaxed mb-3">Du erklärst dich damit einverstanden, die App nicht zu nutzen für:</p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Illegale Zwecke oder Aktivitäten</li>
                <li>Das Hochladen von schädlichen, beleidigenden oder unangemessenen Inhalten</li>
                <li>Versuche, die App oder ihre Infrastruktur zu stören oder zu beschädigen</li>
                <li>Das Umgehen von Sicherheitsmassnahmen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">5. KI-generierte Inhalte</h2>
              <p className="text-stone-600 leading-relaxed mb-3">Die Rezepte werden von künstlicher Intelligenz generiert. Bitte beachte:</p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>
                  <strong>Keine Garantie:</strong> Wir übernehmen keine Garantie für die Richtigkeit, Vollständigkeit oder Eignung der generierten Rezepte.
                </li>
                <li>
                  <strong>Allergien:</strong> Überprüfe immer die Zutaten auf Allergene. Die AI-Vorschläge sind keine medizinische Beratung.
                </li>
                <li>
                  <strong>Nährwertangaben:</strong> Die angegebenen Nährwerte sind Schätzungen und können abweichen.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">6. Geistiges Eigentum</h2>
              <p className="text-stone-600 leading-relaxed">
                Die App, ihr Design, Logo und alle zugehörigen Materialien sind unser geistiges Eigentum. Die von dir erstellten und gespeicherten Inhalte (z.B.
                Notizen zu Rezepten) bleiben dein Eigentum.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">7. Haftungsbeschränkung</h2>
              <p className="text-stone-600 leading-relaxed">
                Die App wird «wie besehen» bereitgestellt. Wir haften nicht für direkte, indirekte oder Folgeschäden, die aus der Nutzung der App entstehen.
                Dies umfasst, ist aber nicht beschränkt auf, Gesundheitsprobleme durch falsche Zubereitung oder allergische Reaktionen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">8. Verfügbarkeit</h2>
              <p className="text-stone-600 leading-relaxed">
                Wir bemühen uns, die App jederzeit verfügbar zu halten, können aber keine 100%ige Verfügbarkeit garantieren. Wir behalten uns das Recht vor, die
                App für Wartungsarbeiten vorübergehend einzuschränken.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">9. Kündigung</h2>
              <p className="text-stone-600 leading-relaxed">
                Du kannst dein Konto jederzeit in den App-Einstellungen löschen. Wir behalten uns das Recht vor, Konten zu sperren oder zu löschen, die gegen
                diese Nutzungsbedingungen verstossen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">10. Änderungen</h2>
              <p className="text-stone-600 leading-relaxed">
                Wir können diese Nutzungsbedingungen jederzeit ändern. Bei wesentlichen Änderungen werden wir dich benachrichtigen. Die fortgesetzte Nutzung der
                App nach solchen Änderungen gilt als Zustimmung.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">11. Anwendbares Recht</h2>
              <p className="text-stone-600 leading-relaxed">Diese Nutzungsbedingungen unterliegen schweizerischem Recht. Gerichtsstand ist Zürich, Schweiz.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-stone-800 mb-3">12. Kontakt</h2>
              <p className="text-stone-600 leading-relaxed">
                Bei Fragen zu diesen Nutzungsbedingungen kontaktiere uns unter:{" "}
                <a href="mailto:support@chabis.ai" className="text-stone-800 underline hover:text-stone-600">
                  support@chabis.ai
                </a>
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
