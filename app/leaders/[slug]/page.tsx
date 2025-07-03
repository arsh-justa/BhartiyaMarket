
// File: app/leader/[slug]/page.tsx
import { getLeaderBySlug } from '@/utils/getLeader';

export default function LeaderPage({ params }) {
  const leader = getLeaderBySlug(params.slug);
  if (!leader) return <p>Leader not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{leader.name}</h1>
      <p className="text-sm text-gray-500">{leader.position} at {leader.company}</p>
      <p className="mt-4">{leader.bio}</p>
    </div>
  );
}