import SectionHeading from '@/components/SectionHeading'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact | RSJ Trading',
  description: 'Get in touch with the RSJ Trading team.',
}

export default function ContactPage() {
  return (
    <div className="container-page py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Let's Work Together"
            description="Have a project in mind or a question? Send us a message and we'll get back to you soon."
          />
          <div className="space-y-6 text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p>hello@rsjtrading.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Office Hours</h4>
              <p>Monday – Friday, 9am – 6pm</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}