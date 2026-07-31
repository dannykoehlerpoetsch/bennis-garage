import { SquareCheckBig } from 'lucide-react';

const USPs = [
  'Persönlicher Ansprechpartner',
  'Transparente Abstimmung vor der Reparatur',
  'Fachgerechte Arbeiten',
  'Hilfe bei Wartung, Reparatur und Fahrzeugproblemen',
];

export default function USP() {
  return (
    <ul className="flex flex-col items-start py-4 gap-3">
      {USPs.map((usp, index) => (
        <li key={index} className="flex items-center gap-2">
          <SquareCheckBig size={20} className="text-green-600 shrink-0" />
          {usp}
        </li>
      ))}
    </ul>
  );
}
