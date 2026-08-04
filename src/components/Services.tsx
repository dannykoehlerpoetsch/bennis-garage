import Image from 'next/image';

const services = [
  {
    heading: 'Inspektion und Wartung',
    service:
      'Regelmäßige Wartungsarbeiten nach Herstellervorgaben für den zuverlässigen und sicheren Betrieb Ihres Fahrzeugs.',
    image: '/inspektion.jpg',
  },
  {
    heading: 'Reparaturen',
    service: 'Fachgerechte Reparaturen an mechanischen und elektrischen Fahrzeugkomponenten.',
    image: '/reparatur.jpg',
  },
  {
    heading: 'Fahrzeugdiagnose',
    service:
      'Auslesen des Fehlerspeichers und gezielte Prüfung bei Warnleuchten, ungewöhnlichen Geräuschen oder technischen Problemen.',
    image: '/diagnose.jpg',
  },
  {
    heading: 'Bremsenservice',
    service:
      'Kontrolle und Austausch von Bremsbelägen, Bremsscheiben und weiteren Komponenten der Bremsanlage.',
    image: '/bremsen.jpg',
  },
  {
    heading: 'Ölwechsel',
    service: 'Öl- und Filterwechsel passend zu den Anforderungen Ihres Fahrzeugs.',
    image: '/oelwechsel.jpg',
  },
  {
    heading: 'Reifenservice',
    service: 'Reifenwechsel, Prüfung des Reifenzustands und Kontrolle des Luftdrucks.',
    image: '/reifen.jpg',
  },
  {
    heading: 'Hauptuntersuchung',
    service:
      'Vorbereitung Ihres Fahrzeugs auf die Hauptuntersuchung und Durchführung notwendiger Reparaturen nach vorheriger Absprache.',
    image: '/hauptuntersuchung.jpg',
  },
  {
    heading: 'Weitere Arbeiten',
    service:
      'Sie benötigen eine andere Reparatur oder sind sich nicht sicher, welcher Service erforderlich ist? Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir klären gemeinsam, wie wir Ihnen weiterhelfen können.',
    image: '/beratung.jpg',
  },
];

export default function Services() {
  return (
    <article className="grid gap-4 md:grid-cols-2">
      {services.map(({ heading, service, image }, index) => (
        <div
          key={heading}
          className="relative rounded-lg overflow-hidden min-h-50 flex items-end justify-center"
        >
          <Image
            src={image}
            alt={heading}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
            quality={100}
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative m-4 p-4 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white w-3/4 transition-transform duration-300 ease-out hover:scale-[1.15] origin-bottom">
            <h3 className="text-lg font-semibold mb-2 drop-shadow-md">{heading}</h3>
            <p className="text-sm leading-relaxed drop-shadow">{service}</p>
          </div>
        </div>
      ))}
    </article>
  );
}
