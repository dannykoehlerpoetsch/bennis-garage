import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center">
        <div className="relative w-full max-w-[70vw] h-[30vh] mx-auto mt-8">
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
        <h1 className="text-4xl font-bold mb-4 text-center">Willkommen bei Bennis Autoservice</h1>
      </section>
    </>
  );
}
