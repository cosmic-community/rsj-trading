import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import TestimonialCard from '@/components/TestimonialCard'
import { getServices, getCaseStudies, getTestimonials } from '@/lib/cosmic'

export default async function HomePage() {
  const [services, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getCaseStudies(),
    getTestimonials(),
  ])

  const featuredServices = services.slice(0, 3)
  const featuredCaseStudies = caseStudies.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <>
      <Hero />

      {featuredServices.length > 0 && (
        <section className="container-page py-20">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Services"
            description="Comprehensive solutions tailored to help your business succeed."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center font-semibold text-brand-600 hover:text-brand-700">
              View all services →
            </Link>
          </div>
        </section>
      )}

      {featuredCaseStudies.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="container-page">
            <SectionHeading
              eyebrow="Our Work"
              title="Case Studies"
              description="See how we've helped our clients achieve measurable results."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCaseStudies.map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/case-studies" className="inline-flex items-center font-semibold text-brand-600 hover:text-brand-700">
                View all case studies →
              </Link>
            </div>
          </div>
        </section>
      )}

      {featuredTestimonials.length > 0 && (
        <section className="container-page py-20">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            description="Trusted by businesses who value results and partnership."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </section>
      )}

      <section className="bg-brand-700 text-white">
        <div className="container-page py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to get started?</h2>
          <p className="text-lg text-brand-50 mb-8 max-w-xl mx-auto">
            Let's discuss how RSJ Trading can help your business grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 rounded-lg bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}