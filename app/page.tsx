// File: app/page.tsx
import Link from 'next/link';
import companies from '@/data/companies.json';

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Company Directory</h1>
      <ul className="space-y-4">
        {companies.map((company) => (
          <li key={company.slug} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{company.name}</h2>
            <p>{company.description}</p>
            <Link href={`/company/${company.slug}`} className="text-blue-600 underline">
              View Company
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}