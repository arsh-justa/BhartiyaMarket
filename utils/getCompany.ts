// File: utils/getCompanyBySlug.ts
import companies from '@/data/companies.json';

export function getCompanyBySlug(slug: string) {
  return companies.find(c => c.slug === slug);
}