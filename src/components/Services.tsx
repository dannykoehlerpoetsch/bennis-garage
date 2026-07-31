const services = [
  {
    heading: 'Inspektion und Wartung',
    service:
      'Regelmäßige Wartungsarbeiten nach Herstellervorgaben für den zuverlässigen und sicheren Betrieb Ihres Fahrzeugs.',
  },
  {
    heading: 'Reparaturen',
    service: 'Fachgerechte Reparaturen an mechanischen und elektrischen Fahrzeugkomponenten.',
  },
  {
    heading: 'Fahrzeugdiagnose',
    service:
      'Auslesen des Fehlerspeichers und gezielte Prüfung bei Warnleuchten, ungewöhnlichen Geräuschen oder technischen Problemen.',
  },
  {
    heading: 'Bremsenservice',
    service:
      'Kontrolle und Austausch von Bremsbelägen, Bremsscheiben und weiteren Komponenten der Bremsanlage.',
  },
  {
    heading: 'Ölwechsel',
    service: 'Öl- und Filterwechsel passend zu den Anforderungen Ihres Fahrzeugs.',
  },
  {
    heading: 'Reifenservice',
    service: 'Reifenwechsel, Prüfung des Reifenzustands und Kontrolle des Luftdrucks.',
  },
  {
    heading: 'Hauptuntersuchung',
    service:
      'Vorbereitung Ihres Fahrzeugs auf die Hauptuntersuchung und Durchführung notwendiger Reparaturen nach vorheriger Absprache.',
  },
  {
    heading: 'Weitere Arbeiten',
    service:
      'Sie benötigen eine andere Reparatur oder sind sich nicht sicher, welcher Service erforderlich ist? Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir klären gemeinsam, wie wir Ihnen weiterhelfen können.',
  },
];

export default function Services() {
  return (
    <article className="grid gap-4 md:grid-cols-2">
      {services.map(({ heading, service }) => (
        <div key={heading} className="p-4 rounded-lg bg-gray-50 border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">{heading}</h3>
          <p className="text-sm leading-relaxed">{service}</p>
        </div>
      ))}
    </article>
  );
}
