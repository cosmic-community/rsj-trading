import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container-page py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-xl text-white mb-4">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-600 text-white text-base">
              R
            </span>
            RSJ Trading
          </div>
          <p className="text-sm text-gray-400 max-w-xs">
            Professional services and solutions built to help your business grow with confidence.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
            <li><Link href="/team" className="hover:text-white">Team</Link></li>
            <li><Link href="/testimonials" className="hover:text-white">Testimonials</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/" className="hover:text-white">Home</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Get Started</h4>
          <p className="text-sm text-gray-400 mb-4">
            Ready to work together? Let's talk about your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-page py-6 text-sm text-gray-500">
          © {year} RSJ Trading. All rights reserved.
        </div>
      </div>
    </footer>
  )
}