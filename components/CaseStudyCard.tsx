import Link from 'next/link'
import { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const title = getMetafieldValue(caseStudy.metadata?.title) || caseStudy.title
  const client = getMetafieldValue(caseStudy.metadata?.client_name)
  const summary = getMetafieldValue(caseStudy.metadata?.summary)
  const image = caseStudy.metadata?.featured_image

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {image && (
        <div className="aspect-[16/9] overflow-hidden bg-gray-100">
          <img
            src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {client && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-brand-600 mb-2">
            {client}
          </span>
        )}
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">
          {title}
        </h3>
        {summary && <p className="text-sm text-gray-600 line-clamp-3">{summary}</p>}
      </div>
    </Link>
  )
}