import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://imgix.cosmicjs.com/0d676ed0-72dc-11f1-a87f-d72293b1048a-autopilot-photo-1454165804606-c3d57bc86b40-1782642486836.jpeg?w=2000&h=1000&fit=crop&auto=format,compress"
          alt="RSJ Trading"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative container-page py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-sm font-medium mb-6">
            Professional Services & Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Grow your business with RSJ Trading
          </h1>
          <p className="text-lg md:text-xl text-brand-50 mb-8 max-w-xl">
            Expert services, proven results, and a dedicated team committed to delivering exceptional outcomes for your business.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center px-7 py-3.5 rounded-lg bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 rounded-lg bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}