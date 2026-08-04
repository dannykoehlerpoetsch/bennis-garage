export default function Impressum() {
  return (
    <section className="flex flex-col items-start md:px-4 py-4 m-auto">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-1">Angaben gemäß § 5 TMG</h2>
        <p className="leading-relaxed">
          [Max Mustermann]
          <br />
          [Musterstraße 1]
          <br />
          [12345 Musterstadt]
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-1">Kontakt</h2>
        <p className="leading-relaxed">
          Telefon: [Telefonnummer]
          <br />
          E-Mail: [E-Mail-Adresse]
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-1">Umsatzsteuer-ID</h2>
        <p className="leading-relaxed">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          [USt-IdNr.]
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-1">
          Berufsbezeichnung und berufsrechtliche Regelungen
        </h2>
        <p className="leading-relaxed">
          Berufsbezeichnung: [Berufsbezeichnung]
          <br />
          Zuständige Kammer: [Kammer]
          <br />
          Verliehen in: [Staat]
          <br />
          Es gelten folgende berufsrechtliche Regelungen: [Regelungen]
          <br />
          Regelungen einsehbar unter: [URL]
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-1">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h2>
        <p className="leading-relaxed">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-1">Haftung für Inhalte</h2>
        <p className="leading-relaxed">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
          den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
          erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
          entfernen.
        </p>
      </section>
    </section>
  );
}
