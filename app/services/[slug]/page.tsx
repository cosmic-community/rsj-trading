// app/services/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getService, getServices, getMetafieldValue } from '@/lib/cosmic'

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((s) => ({ slug: s.slug }))
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.name) || service.title
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const fullDesc = getMetafieldValue(service.metadata?.full_description)
  const icon = getMetafieldValue(service.metadata?.icon)
  const price = getMetafieldValue(service.metadata?.starting_price)
  const image = service.metadata?.featured_image

  return (
    <article>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container-page py-12">
          <Link href="/services" className="text-sm font-medium text-brand-600 hover:text-brand-700">
            ← Back to services
          </Link>
          <div className="flex items-center gap-4 mt-6">
            {icon && <span className="text-4xl">{icon}</span>}
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">{name}</h1>
          </div>
          {shortDesc && <p className="mt-4 text-lg text-gray-600 max-w-2xl">{shortDesc}</p>}
          {price && (
            <p className="mt-6 inline-block px-5 py-2.5 rounded-lg bg-brand-600 text-white font-semibold">
              Starting at {price}
            </p>
          )}
        </div>
      </div>

      {image && (
        <div className="container-page py-12">
          <img
            src={`${image.imgix_url}?w=2000&h=900&fit=crop&auto=format,compress`}
            alt={name}
            width={1000}
            height={450}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      )}

      {fullDesc && (
        <div className="container-page pb-16">
          <div
            className="prose prose-lg max-w-3xl text-gray-700"
            dangerouslySetInnerHTML={{ __html: fullDesc }}
          />
        </div>
      )}

      <div className="bg-brand-700 text-white">
        <div className="container-page py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Interested in this service?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3 rounded-lg bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </article>
  )
}