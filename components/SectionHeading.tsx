export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}>
      {eyebrow && (
        <span className="inline-block text-sm font-semibold uppercase tracking-wide text-brand-600 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{title}</h2>
      {description && <p className="mt-4 text-lg text-gray-600">{description}</p>}
    </div>
  )
}