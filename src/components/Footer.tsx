import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="footer-bg text-white py-4 px-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} Bennis Garage. All rights reserved.
        <br />
        <Link href="/impressum" scroll={true} className="hover:underline">
          Impressum
        </Link>
      </p>
    </footer>
  );
}
