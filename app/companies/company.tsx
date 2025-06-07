// File: app/company/[slug]/page.tsx
import { getCompanyBySlug } from '@/utils/getCompanyBySlug';
import Link from 'next/link';

export default function CompanyPage({ params }) {
  const company = getCompanyBySlug(params.slug);
  if (!company) return <p>Company not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{company.name}</h1>
      <p>{company.description}</p>
      <Link href={`/leader/${company.leaderSlug}`} className="text-blue-600 underline">
        View Leader
      </Link>
    </div>
  );
}