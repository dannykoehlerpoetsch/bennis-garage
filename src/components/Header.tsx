import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Bennis Garage</h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
