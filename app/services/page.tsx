import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import { getServices } from '@/lib/cosmic'

export const metadata = {
  title: 'Services | RSJ Trading',
  description: 'Explore the professional services offered by RSJ Trading.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="container-page py-16">
      <SectionHeading
        eyebrow="What We Do"
        title="Our Services"
        description="Comprehensive professional services designed to help your business grow and succeed."
      />
      {services.length === 0 ? (
        <p className="text-gray-500">No services available at this time.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  )
}