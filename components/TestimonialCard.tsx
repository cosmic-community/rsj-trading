import { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const client = getMetafieldValue(testimonial.metadata?.client_name) || testimonial.title
  const company = getMetafieldValue(testimonial.metadata?.company)
  const role = getMetafieldValue(testimonial.metadata?.role)
  const photo = testimonial.metadata?.photo
  const rating = typeof testimonial.metadata?.rating === 'number' ? testimonial.metadata.rating : 5

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <StarRating rating={rating} />
      {quote && (
        <blockquote className="mt-4 text-gray-700 leading-relaxed flex-1">
          “{quote}”
        </blockquote>
      )}
      <div className="mt-6 flex items-center gap-4">
        {photo && (
          <img
            src={`${photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={client}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-gray-900">{client}</p>
          {(role || company) && (
            <p className="text-sm text-gray-500">
              {role}
              {role && company ? ', ' : ''}
              {company}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}