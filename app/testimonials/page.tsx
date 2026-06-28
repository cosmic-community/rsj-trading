import SectionHeading from '@/components/SectionHeading'
import TestimonialCard from '@/components/TestimonialCard'
import { getTestimonials } from '@/lib/cosmic'

export const metadata = {
  title: 'Testimonials | RSJ Trading',
  description: 'Read what our clients have to say about working with RSJ Trading.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="container-page py-16">
      <SectionHeading
        eyebrow="Testimonials"
        title="What Our Clients Say"
        description="Trusted by businesses who value results, quality, and partnership."
        centered
      />
      {testimonials.length === 0 ? (
        <p className="text-gray-500 text-center">No testimonials to display at this time.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      )}
    </div>
  )
}