import SectionHeading from '@/components/SectionHeading'
import CaseStudyCard from '@/components/CaseStudyCard'
import { getCaseStudies } from '@/lib/cosmic'

export const metadata = {
  title: 'Case Studies | RSJ Trading',
  description: 'Discover real-world results from RSJ Trading client projects.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="container-page py-16">
      <SectionHeading
        eyebrow="Our Work"
        title="Case Studies"
        description="See how we've delivered measurable outcomes for businesses like yours."
      />
      {caseStudies.length === 0 ? (
        <p className="text-gray-500">No case studies available at this time.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} caseStudy={cs} />
          ))}
        </div>
      )}
    </div>
  )
}