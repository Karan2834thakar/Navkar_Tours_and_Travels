import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  ArrowRight, Car, CheckCircle2, Clock3, MapPin, Phone,
  ShieldCheck, Sparkles, Star,
} from 'lucide-react';

import crysta from '../assets/tyuuhab_1655937.avif';
import xl6 from '../assets/XL6-Front-3_4th..webp';
import baleno from '../assets/baleno.png';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55 },
};

const features = [
  { icon: ShieldCheck, title: 'Verified drivers', copy: 'Experienced, courteous and background-checked.' },
  { icon: Clock3, title: 'Always on time', copy: 'Reliable pickups for local and outstation journeys.' },
  { icon: Sparkles, title: 'Clean vehicles', copy: 'Well-maintained cars prepared before every trip.' },
  { icon: Phone, title: '24/7 assistance', copy: 'Real support whenever your journey needs it.' },
];

const cars = [
  { image: crysta, name: 'Innova Crysta', seats: '7 seats', type: 'Family & premium trips' },
  { image: xl6, name: 'Nexa XL6', seats: '6–7 seats', type: 'Comfortable long drives' },
  { image: baleno, name: 'Maruti Baleno', seats: '5 seats', type: 'City travel' },
];

function Home() {
  return (
    <main className="overflow-hidden bg-[#f7f8fa] text-[#172033]">
      <Helmet>
        <title>Navkar Tours & Travels | Reliable Car Rental in Gujarat</title>
        <meta name="description" content="Safe, clean and reliable car rentals across Gujarat. Book your local or outstation ride with Navkar Tours & Travels." />
      </Helmet>

      <section className="hero-shell relative min-h-[760px] overflow-hidden bg-[#0b1f3a] pt-32 text-white lg:min-h-[820px] lg:pt-40">
        <div className="hero-grid absolute inset-0 opacity-30" />
        <div className="absolute -right-32 top-20 h-[480px] w-[480px] rounded-full bg-[#f59e0b]/20 blur-3xl" />
        <div className="page-container relative grid items-center gap-14 pb-28 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#fbbf24] backdrop-blur">
              <Star className="h-4 w-4" fill="currentColor" /> Rajkot's trusted travel partner
            </div>
            <h1 className="hero-title max-w-3xl text-5xl font-extrabold leading-[1.04] text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Every journey,<br /><span className="text-[#fbbf24]">comfortably yours.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
              Clean cars, professional drivers and dependable service for local, airport and outstation travel across Gujarat.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/cars" className="btn-primary group">
                Explore our fleet <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="tel:+917778952448" className="btn-secondary">
                <Phone className="h-5 w-5 text-[#fbbf24]" /> +91 77789 52448
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-slate-200">
              {['Transparent pricing', '24/7 support', 'Across Gujarat'].map((item) => (
                <span key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#fbbf24]" />{item}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-[650px] lg:mt-10">
            <div className="absolute inset-x-10 bottom-2 h-24 rounded-full bg-black/40 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-sm sm:p-8">
              <div className="overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-white to-slate-200">
                <img src={crysta} alt="Innova Crysta available from Navkar Tours" className="h-[300px] w-full object-cover sm:h-[390px]" />
              </div>
              <div className="absolute -bottom-6 left-8 right-8 flex items-center justify-between rounded-2xl bg-white p-4 text-[#172033] shadow-2xl sm:left-14 sm:right-14 sm:p-5">
                <div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#d97706]">Travel made easy</p><p className="mt-1 font-extrabold">Local • Airport • Outstation</p></div>
                <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-[#fff7e6] sm:flex"><Car className="text-[#d97706]" /></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 -mt-12 pb-20">
        <div className="page-container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,.08)]">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff7e6] text-[#d97706]"><Icon className="h-5 w-5" /></div>
              <h3 className="text-lg font-extrabold text-[#172033]">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space bg-white">
        <motion.div {...reveal} className="page-container">
          <div className="section-heading"><span>Our fleet</span><h2>Choose the right car for your journey</h2><p>From comfortable city rides to spacious family travel, every vehicle is kept clean and road-ready.</p></div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cars.map((car) => (
              <article key={car.name} className="fleet-card group">
                <div className="h-60 overflow-hidden bg-slate-100"><img src={car.image} alt={car.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div>
                <div className="p-6"><div className="flex items-start justify-between gap-3"><div><h3 className="text-2xl font-extrabold text-[#172033]">{car.name}</h3><p className="mt-1 text-sm text-slate-600">{car.type}</p></div><span className="rounded-full bg-[#fff7e6] px-3 py-1 text-xs font-bold text-[#b45309]">{car.seats}</span></div>
                  <Link to="/cars" className="mt-6 inline-flex items-center gap-2 font-bold text-[#b45309] hover:text-[#92400e]">View vehicle <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center"><Link to="/cars" className="btn-dark">View all vehicles <ArrowRight className="h-5 w-5" /></Link></div>
        </motion.div>
      </section>

      <section className="section-space bg-[#f1f5f9]">
        <motion.div {...reveal} className="page-container grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div><div className="section-heading text-left"><span>Simple booking</span><h2>Your ride in three easy steps</h2><p className="mx-0">No complicated forms. Choose a car, speak with us and travel with confidence.</p></div><a href="tel:+917778952448" className="btn-primary mt-8">Call to book <Phone className="h-5 w-5" /></a></div>
          <div className="space-y-4">
            {[['01', 'Pick your vehicle', 'Browse our fleet based on your group size and travel needs.'], ['02', 'Call and confirm', 'Share your route and schedule to receive clear booking details.'], ['03', 'Travel comfortably', 'Your driver arrives on time, ready for a safe journey.']].map(([n, title, text]) => (
              <div key={n} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0b1f3a] font-extrabold text-[#fbbf24]">{n}</span><div><h3 className="text-xl font-extrabold text-[#172033]">{title}</h3><p className="mt-1 leading-7 text-slate-600">{text}</p></div></div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-space bg-white">
        <motion.div {...reveal} className="page-container">
          <div className="section-heading"><span>Service area</span><h2>Across Gujarat, wherever you need us</h2><p>Local and outstation service from Rajkot to major destinations throughout the state.</p></div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {['Rajkot', 'Ahmedabad', 'Dwarka', 'Somnath', 'Jamnagar', 'Junagadh', 'Porbandar', 'Surat', 'Vadodara', 'Bhavnagar'].map(city => <span key={city} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#f8fafc] px-5 py-3 font-bold text-slate-700"><MapPin className="h-4 w-4 text-[#d97706]" />{city}</span>)}
          </div>
        </motion.div>
      </section>

      <section className="section-space bg-[#0b1f3a] text-white">
        <motion.div {...reveal} className="page-container">
          <div className="section-heading dark"><span>Why customers return</span><h2>Service that earns trust</h2></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              ['“Very professional drivers and clean vehicles. Our Dwarka trip was safe and comfortable.”', 'Neha Joshi'],
              ['“Timely pickup, friendly behaviour and a comfortable Innova for our family.”', 'Hiren Patel'],
              ['“Affordable pricing and excellent car condition. We will definitely book again.”', 'Amisha Shah'],
            ].map(([quote, name]) => <blockquote key={name} className="rounded-2xl border border-white/10 bg-white/[.07] p-7"><div className="mb-5 flex gap-1 text-[#fbbf24]">{[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4" fill="currentColor" />)}</div><p className="text-lg leading-8 text-slate-100">{quote}</p><footer className="mt-5 font-bold text-[#fbbf24]">— {name}</footer></blockquote>)}
          </div>
        </motion.div>
      </section>

      <section className="bg-[#fbbf24] py-14">
        <div className="page-container flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left"><div><p className="text-sm font-extrabold uppercase tracking-[.18em] text-[#78350f]">Ready when you are</p><h2 className="mt-2 text-3xl font-extrabold text-[#0b1f3a] sm:text-4xl">Let’s plan your next ride.</h2></div><div className="flex flex-col gap-3 sm:flex-row"><Link to="/cars" className="btn-dark">Browse fleet <Car className="h-5 w-5" /></Link><a href="tel:+917778952448" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#0b1f3a] px-6 py-3.5 font-extrabold text-[#0b1f3a] transition hover:bg-[#0b1f3a] hover:text-white"><Phone className="h-5 w-5" />Call now</a></div></div>
      </section>
    </main>
  );
}

export default Home;
