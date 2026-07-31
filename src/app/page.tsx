import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';
import Services from '@/components/Services';
import USP from '@/components/USP';
import Map from '@/components/Map';

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-start m-auto md:items-center" id="home">
        <div className="relative w-full md:max-w-[70vw] h-[15vh] md:h-[25vh] mx-auto md:mt-8">
          <Image
            src="/Heroimage.png"
            alt="Bennis Garage"
            fill
            className="object-cover"
            sizes="60vw"
            priority
            unoptimized
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 md:text-center">
          Willkommen bei Bennis Autoservice
        </h1>
        <h2 className="text-2xl font-bold mb-4 md:text-center">
          Ihre Kfz-Werkstatt in Leipzig Plagwitz
        </h2>
        <p className="mb-2">
          Wartung, Reparatur und persönlicher Service rund um Ihr Fahrzeug – zuverlässig und direkt
          vor Ort.
        </p>
        <p className="flex items-center gap-2 mb-2 self-center">
          <MapPin size={20} />
          Naumburger Straße 10, 04229 Leipzig
        </p>
        <a
          href="tel:015254646668"
          className="text-sm px-3 py-1 gap-2 rounded-md bg-brand text-white hover:bg-brand/90 transition-colors flex items-center gap-2 self-center"
        >
          {' '}
          <Phone size={20} />
          Jetzt anrufen
        </a>
      </section>

      <section className="flex flex-col items-start md:px-4 py-4 mx-auto md:mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Warum Bennis Autoservice?</h2>
        <p>
          Bei Bennis Autoservice stehen eine persönliche Beratung, nachvollziehbare Absprachen und
          eine sorgfältige Ausführung der Arbeiten im Mittelpunkt.
        </p>
        <USP />
      </section>

      <section className="flex flex-col items-start md:px-4 py-4 m-auto md:mt-10" id="services">
        <h2 className="text-2xl font-bold mb-4 text-center">Service und Dienstleistungen</h2>
        <h3 className="text-lg font-semibold mb-2">Unser Service für Ihr Fahrzeug</h3>
        <p className="mb-6 max-w-2xl md:max-w-4xl">
          Ob regelmäßige Wartung, notwendige Reparatur oder die Suche nach der Ursache eines
          Problems: <br /> Wir kümmern uns fachgerecht um Ihr Fahrzeug und stimmen die
          erforderlichen Arbeiten transparent mit Ihnen ab.
        </p>
        <Services />
      </section>

      <section className="flex flex-col items-start md:px-4 py-4 mx-auto md:mt-10" id="anfahrt">
        <h2 className="text-2xl font-bold mb-4 text-center">So finden Sie uns</h2>
        <Map />
      </section>
    </>
  );
}
