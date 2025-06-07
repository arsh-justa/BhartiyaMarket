// File: utils/getLeaderBySlug.ts
import leaders from '@/data/leaders.json';
export function getLeaderBySlug(slug: string) {
  return leaders.find(l => l.slug === slug);
}
