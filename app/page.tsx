import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ImageCarousel } from '@/components/image-carousel'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Wrench, Zap, Droplet, Factory, Star, CheckCircle, Clock, Shield, BadgeCheck, Building2, BriefcaseBusiness, Medal, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-32 md:py-48 overflow-hidden min-h-screen flex items-center">
          {/* Background Carousel */}
          <div className="absolute inset-0 z-0">
            <ImageCarousel 
              images={[
                { src: '/mep-installation.jpg', alt: 'MEP Installation' },
                { src: '/fabrication.jpg', alt: 'Fabrication Work' },
                { src: '/hvac-system.jpg', alt: 'HVAC System' },
                { src: '/industrial-facility.jpg', alt: 'Industrial Facility' },
              ]}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-primary/60"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 opacity-10 z-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-secondary/50 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance animate-slideInLeft">
                Engineering Excellence in MEP Solutions
              </h1>
              <p className="text-lg md:text-xl opacity-95 mb-10 leading-relaxed animate-slideInLeft delay-100">
                Over 12 years of expertise delivering precision-engineered MEP (Mechanical, Electrical, Plumbing) and custom fabrication solutions for projects of any scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slideInLeft delay-200">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get a Quote
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground px-8 py-4 rounded-lg font-bold hover:bg-primary-foreground/20 hover:shadow-lg transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-amber-50 via-orange-50/80 to-sky-50/90">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fadeInUp">Our Core Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fadeInUp delay-100">
                Comprehensive MEP and fabrication solutions tailored to your project requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Wrench,
                  title: 'Mechanical Engineering',
                  description: 'HVAC systems, equipment installation, and mechanical project management',
                  image: '/hvac-system.jpg'
                },
                {
                  icon: Zap,
                  title: 'Electrical Systems',
                  description: 'Power distribution, lighting design, and electrical installation expertise',
                  image: '/electrical-system.jpg'
                },
                {
                  icon: Droplet,
                  title: 'Plumbing Solutions',
                  description: 'Water supply, drainage, and sanitary system design and execution',
                  image: '/plumbing-system.jpg'
                },
                {
                  icon: Factory,
                  title: 'Custom Fabrication',
                  description: 'Precision custom fabrication for specialized industrial applications',
                  image: '/fabrication.jpg'
                },
              ].map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white via-card to-amber-50/60 border-2 border-amber-300/80 shadow-[0_18px_50px_rgba(148,163,184,0.12)] rounded-xl overflow-hidden hover:border-orange-400 transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-200/45 via-orange-100/30 to-sky-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <div className="absolute -inset-8 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.18),transparent_45%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    
                    {/* Image Background */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-6 z-20">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 via-amber-100 to-primary/15 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} className="text-secondary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">{service.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-16">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-secondary font-bold text-lg hover:gap-4 hover:text-primary transition-all duration-300 group"
              >
                View All Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-[#9a6b2f] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/building-interior.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.92),rgba(30,41,59,0.84),rgba(154,107,47,0.58))]"></div>
            <div className="absolute -top-32 -left-20 w-72 h-72 bg-secondary/35 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 right-0 w-96 h-96 bg-sky-300/15 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_1.6fr] gap-10 xl:gap-12 items-start">
              <div className="animate-slideInLeft xl:-mt-10">
                <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 mb-5 backdrop-blur-sm">
                  Trusted Engineering Partner
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Why Choose Pitambra?</h2>
                <div className="space-y-5">
                  {[
                    { title: '12+ Years Experience', desc: 'Proven track record in MEP and fabrication projects', icon: Medal },
                    { title: 'Expert Leadership', desc: 'Led by Director Gajendra Pal with professional engineering degrees', icon: BriefcaseBusiness },
                    { title: 'Quality & Precision', desc: 'Commitment to highest standards and timeline adherence', icon: Shield },
                    { title: 'Cost-Effective Solutions', desc: 'Efficient project execution delivering maximum value', icon: TrendingUp },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-5 md:p-6 rounded-[28px] border border-white/12 bg-slate-900/35 shadow-[0_18px_45px_rgba(2,6,23,0.18)] backdrop-blur-sm hover:border-amber-300/40 hover:bg-slate-900/45 transition-all duration-300 group cursor-pointer">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 via-amber-500 to-yellow-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_18px_35px_rgba(245,158,11,0.35)]">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-amber-200 transition-colors duration-300">{item.title}</h4>
                        <p className="text-slate-200/85 text-lg leading-relaxed group-hover:text-white transition-colors duration-300 max-w-md">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-slideInRight space-y-8 md:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  {[
                    { src: '/industrial-facility.jpg', alt: 'Industrial MEP plant room' },
                    { src: '/electrical-system.jpg', alt: 'Electrical control systems' },
                    { src: '/hvac-system.jpg', alt: 'HVAC ducting system' },
                    { src: '/fabrication.jpg', alt: 'Structural fabrication work' },
                  ].map((image, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-[24px] border border-white/20 bg-white/10 shadow-[0_22px_55px_rgba(2,6,23,0.28)] min-h-[220px] md:min-h-[280px] group"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-white/10" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-y-4 gap-x-4 border border-white/12 bg-slate-950/30 backdrop-blur-sm rounded-[28px] px-5 md:px-6 py-5">
                  {[
                    { icon: Shield, title: 'Safety First' },
                    { icon: BadgeCheck, title: 'Quality Assurance' },
                    { icon: Clock, title: 'On-Time Delivery' },
                    { icon: BriefcaseBusiness, title: 'Client Satisfaction' },
                    { icon: Factory, title: 'Innovative Solutions' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-white min-w-0 2xl:justify-center 2xl:border-l 2xl:border-white/20 first:2xl:border-l-0 2xl:pl-4 first:2xl:pl-0"
                    >
                      <item.icon className="w-9 h-9 text-amber-300 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide leading-snug">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-100 via-white to-cyan-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-sky-300/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 left-0 w-80 h-80 bg-cyan-200/45 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fadeInUp">Our Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fadeInUp delay-100">
                From concept to completion, we follow a structured approach ensuring quality at every stage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  description: 'We understand your project requirements, challenges, and goals through detailed discussion',
                  icon: Clock,
                  image: '/team-working.jpg'
                },
                {
                  step: '02',
                  title: 'Design & Planning',
                  description: 'Our engineers create comprehensive design plans and project timelines tailored to your needs',
                  icon: CheckCircle,
                  image: '/mep-installation.jpg'
                },
                {
                  step: '03',
                  title: 'Execution',
                  description: 'Skilled teams execute the project with precision, quality control, and regular progress updates',
                  icon: Wrench,
                  image: '/fabrication.jpg'
                },
                {
                  step: '04',
                  title: 'Delivery & Support',
                  description: 'Project completion with handover documentation and ongoing support for any requirements',
                  icon: Shield,
                  image: '/project-completion.jpg'
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group relative animate-fadeInUp cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,248,255,0.96))] border-2 border-cyan-500 shadow-[0_0_0_1px_rgba(6,182,212,0.25),0_22px_55px_rgba(15,23,42,0.08)] rounded-[28px] overflow-hidden transition-all duration-500 hover:border-sky-600 hover:shadow-[0_0_0_1px_rgba(2,132,199,0.35),0_26px_65px_rgba(14,165,233,0.16)] hover:-translate-y-2 h-full flex flex-col">
                      <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/70 to-cyan-300/0"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/40 via-transparent to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/10 to-transparent"></div>
                        <div className="absolute top-5 left-5 rounded-full border border-white/60 bg-white/90 px-3 py-1 text-sm font-bold tracking-[0.2em] text-primary shadow-lg">
                          {item.step}
                        </div>
                      </div>
                      
                      <div className="relative p-6 pt-7 flex flex-col flex-grow z-20">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-600 text-[15px] leading-8 group-hover:text-slate-800 transition-colors duration-300 flex-grow">{item.description}</p>
                      </div>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2">
                        <ArrowRight size={22} className="text-cyan-300/80" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-sky-50/80 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <div className="absolute -top-20 right-12 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-10 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fadeInUp">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fadeInUp delay-100">
                Trusted by industry leaders and growing businesses for exceptional MEP and fabrication solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Rajesh Kumar',
                  title: 'Project Manager, Construction Co.',
                  content: 'Pitambra Fab Tech delivered exceptional quality and completed our complex MEP project on schedule. Their team&apos;s expertise was invaluable.',
                  rating: 5,
                  image: '/team-working.jpg'
                },
                {
                  name: 'Priya Sharma',
                  title: 'Facility Director, Tech Park',
                  content: 'Outstanding custom fabrication work! The precision and attention to detail exceeded our expectations. Highly recommended.',
                  rating: 5,
                  image: '/industrial-facility.jpg'
                },
                {
                  name: 'Amit Patel',
                  title: 'Site Engineer, Infrastructure',
                  content: 'Professional team with deep technical knowledge. They solved our challenging MEP integration issues efficiently and cost-effectively.',
                  rating: 5,
                  image: '/project-completion.jpg'
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white via-card to-sky-50/40 border-2 border-sky-200/80 shadow-[0_18px_50px_rgba(15,23,42,0.08)] rounded-xl overflow-hidden hover:border-sky-400 transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 to-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 opacity-10">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="relative p-8 z-10">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 italic font-medium">&quot;{testimonial.content}&quot;</p>
                    <div className="pt-6 border-t border-border/30 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-secondary">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-secondary font-semibold">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Strength */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-amber-50/60 relative overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <div className="absolute -top-24 left-6 h-72 w-72 rounded-full bg-amber-200/35 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-200/25 blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-semibold text-amber-700 mb-5 shadow-sm backdrop-blur-sm">
                Built For Confident Project Delivery
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why industrial and commercial teams choose Pitambra.</h2>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
                We combine turnkey execution, compliant operations, technical manpower, and reliable site coordination to keep projects moving smoothly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
              <div className="rounded-[32px] border border-slate-200/80 bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(248,250,252,0.96))] p-8 md:p-10 shadow-[0_24px_60px_rgba(15,23,42,0.08)] flex items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full my-auto">
                  {[
                    { icon: BriefcaseBusiness, title: 'Turnkey Delivery', desc: 'MEP, civil, fabrication, and utility support from one execution team.' },
                    { icon: Shield, title: 'Safety & Quality', desc: 'Execution aligned with statutory, safety, and quality requirements.' },
                    { icon: BadgeCheck, title: 'Technical Manpower', desc: 'Skilled and certified teams with maintenance and shutdown support.' },
                    { icon: Building2, title: 'Compliant Workforce', desc: 'ESI, PF, EPF coverage with labor-compliant operating practices.' },
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="group rounded-[24px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_14px_32px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:border-amber-300/80 hover:shadow-[0_18px_40px_rgba(245,158,11,0.10)] transition-all duration-300">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-50 group-hover:scale-110 transition-transform duration-300">
                          <Icon size={22} className="text-secondary" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-sm leading-7 text-slate-600">{item.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[32px] border border-slate-200/80 bg-gradient-to-br from-slate-900 via-primary to-slate-900 p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                  <h3 className="text-2xl font-bold mb-6">At a glance</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: '12+', label: 'Years Active' },
                      { value: '100+', label: 'Projects Completed' },
                      { value: '50+', label: 'Team Strength' },
                      { value: 'Rs 2.3 Cr', label: 'Last FY Turnover' },
                    ].map((item, index) => (
                      <div key={index} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-5">
                        <p className="text-2xl md:text-3xl font-bold text-white mb-2">{item.value}</p>
                        <p className="text-sm text-slate-200/80">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[32px] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-orange-50/70 p-8 shadow-[0_18px_45px_rgba(245,158,11,0.10)]">
                  <h3 className="text-2xl font-bold text-slate-900 mb-5">Business credentials</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      'PAN: AAOCP4707G',
                      'GST: 24AAOCP4707G1ZD',
                      'MSME: GJ-17-0002706',
                      'Industrial execution support',
                    ].map((item, index) => (
                      <div key={index} className="rounded-full border border-amber-200 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    Detailed contact and factory information stays on the contact page, while home keeps the focus on trust, capability, and delivery strength.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner Section */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/industrial-facility.jpg"
              alt="Background"
              fill
              className="object-cover mix-blend-overlay"
            />
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-secondary rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { stat: '12+', label: 'Years in Business', icon: Clock },
                { stat: '100+', label: 'Successful Projects', icon: CheckCircle },
                { stat: '50+', label: 'Expert Team Members', icon: Shield },
                { stat: 'Rs 2.3 Cr', label: 'Last FY Turnover', icon: Star },
              ].map((item, index) => (
                <div
                  key={index}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl md:text-6xl font-bold mb-2 animate-float" style={{ animationDelay: `${index * 150}ms` }}>
                    {item.stat}
                  </div>
                  <p className="text-lg opacity-90 font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 text-foreground overflow-hidden border-t border-amber-100">
          <div className="absolute inset-0 opacity-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_32%)]"></div>
            <div className="absolute top-8 left-10 w-72 h-72 bg-amber-300/25 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center rounded-full border border-amber-200 bg-white/70 px-4 py-2 text-sm font-semibold text-amber-700 mb-5 backdrop-blur-sm animate-fadeInUp">
              Let&apos;s Build Something Better
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp text-slate-900">Ready to Start Your Project?</h2>
            <p className="text-lg text-slate-700 mb-12 animate-fadeInUp delay-100 leading-relaxed">
              Contact us today for a consultation and let our team of experts guide your MEP and fabrication needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-4 rounded-lg font-bold shadow-[0_20px_40px_rgba(245,158,11,0.3)] hover:shadow-[0_24px_48px_rgba(249,115,22,0.35)] hover:scale-105 transition-all duration-300 animate-fadeInUp delay-200"
            >
              Request a Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
