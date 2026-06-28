// app/case-studies/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCaseStudy, getCaseStudies, getMetafieldValue } from '@/lib/cosmic'
import { Service } from '@/types'

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies()
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const title = getMetafieldValue(caseStudy.metadata?.title) || caseStudy.title
  const client = getMetafieldValue(caseStudy.metadata?.client_name)
  const summary = getMetafieldValue(caseStudy.metadata?.summary)
  const content = getMetafieldValue(caseStudy.metadata?.content)
  const results = getMetafieldValue(caseStudy.metadata?.results)
  const image = caseStudy.metadata?.featured_image
  const relatedServices = caseStudy.metadata?.related_services as Service[] | undefined

  return (
    <article>
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container-page py-12">
          <Link href="/case-studies" className="text-sm font-medium text-brand-600 hover:text-brand-700">
            ← Back to case studies
          </Link>
          {client && (
            <span className="block mt-6 text-sm font-semibold uppercase tracking-wide text-brand-600">
              {client}
            </span>
          )}
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-gray-900">{title}</h1>
          {summary && <p className="mt-4 text-lg text-gray-600 max-w-2xl">{summary}</p>}
        </div>
      </div>

      {image && (
        <div className="container-page py-12">
          <img
            src={`${image.imgix_url}?w=2000&h=900&fit=crop&auto=format,compress`}
            alt={title}
            width={1000}
            height={450}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      )}

      <div className="container-page pb-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {content && (
            <div
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>

        <aside className="space-y-8">
          {results && (
            <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Results</h3>
              <div
                className="prose prose-sm text-gray-700"
                dangerouslySetInnerHTML={{ __html: results }}
              />
            </div>
          )}

          {relatedServices && relatedServices.length > 0 && (
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Related Services</h3>
              <ul className="space-y-2">
                {relatedServices.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-brand-600 hover:text-brand-700 font-medium"
                    >
                      {getMetafieldValue(service.metadata?.name) || service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </article>
  )
}