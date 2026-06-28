import SectionHeading from '@/components/SectionHeading'
import TeamMemberCard from '@/components/TeamMemberCard'
import { getTeamMembers } from '@/lib/cosmic'

export const metadata = {
  title: 'Our Team | RSJ Trading',
  description: 'Meet the dedicated professionals behind RSJ Trading.',
}

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <div className="container-page py-16">
      <SectionHeading
        eyebrow="Who We Are"
        title="Meet Our Team"
        description="Talented professionals committed to delivering exceptional results for our clients."
      />
      {team.length === 0 ? (
        <p className="text-gray-500">No team members to display at this time.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </div>
  )
}