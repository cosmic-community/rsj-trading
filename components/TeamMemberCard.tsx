import { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const name = getMetafieldValue(member.metadata?.name) || member.title
  const role = getMetafieldValue(member.metadata?.role)
  const bio = getMetafieldValue(member.metadata?.bio)
  const email = getMetafieldValue(member.metadata?.email)
  const photo = member.metadata?.photo

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      {photo && (
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        {role && <p className="text-sm font-medium text-brand-600 mb-3">{role}</p>}
        {bio && <p className="text-sm text-gray-600 line-clamp-4">{bio}</p>}
        {email && (
          <a
            href={`mailto:${email}`}
            className="inline-block mt-4 text-sm font-medium text-gray-500 hover:text-brand-600"
          >
            {email}
          </a>
        )}
      </div>
    </div>
  )
}