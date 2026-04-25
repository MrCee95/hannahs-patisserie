import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import OptimizedImage from '../components/ui/OptimizedImage';
import { trackEvent } from '../hooks/useAnalytics';
import { graduates } from '../data/graduates';

const trainingPrograms = [
  { icon: '🛡️', title: 'Food Safety Certification', desc: 'Mastering the fundamentals of kitchen hygiene and safety standards.' },
  { icon: '🥐', title: 'Artisan Baking Techniques', desc: 'From sourdough fermentation to intricate pastry laminations.' },
  { icon: '😊', title: 'Customer Service', desc: 'Learning the art of hospitality and connecting with our community.' },
  { icon: '📊', title: 'Business Skills', desc: 'Understanding inventory, costing, and daily shop operations.' },
];

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function About() {
  const handleApplyClick = () => trackEvent('Training', 'Apply Click', 'Apprenticeship Application', 1);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 space-y-24">
      <div id="mission" className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-auto md:h-96">
          <OptimizedImage src="/images/mentor.jpg" alt="Master pastry chef mentoring a young apprentice in a bright kitchen" width={800} height={600} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover w-full h-full" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="font-heading text-4xl text-rose-dark mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">Hannah's Patisserie is a dedicated training kitchen where passion meets purpose. We provide a supportive environment for young people to gain hands-on experience in the culinary world, turning a love for baking into a professional career path.</p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">Our mission is to empower the next generation with the confidence and skills they need to thrive in the hospitality industry—while serving the community with delicious, artisan treats.</p>
          <Link to="/contact" onClick={() => trackEvent('Mission', 'Support Click', 'Contact Form', 1)} className="inline-flex items-center text-rose-dark font-bold border-b-2 border-rose hover:text-rose transition pb-1 focus:outline-none focus:ring-2 focus:ring-rose rounded">
            Support Our Mission <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
          </Link>
        </motion.div>
      </div>

      <div id="training" className="bg-rose/10 p-10 rounded-3xl">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="font-heading text-3xl text-rose-dark mb-8 text-center">Learn with Us</motion.h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {trainingPrograms.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-3" aria-hidden="true">{program.icon}</div>
              <h4 className="font-bold text-charcoal mb-2">{program.title}</h4>
              <p className="text-sm text-gray-600">{program.desc}</p>
            </div>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
          <button onClick={handleApplyClick} className="bg-rose-dark text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-rose transition focus:outline-none focus:ring-2 focus:ring-rose-dark">Apply for 2026 Cohort</button>
          <p className="text-sm text-gray-500 mt-3">Applications close September 30, 2026</p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div id="visit" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-rose/20 shadow-sm">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-rose/10 rounded-full flex items-center justify-center text-rose mr-4" aria-hidden="true"><i className="fas fa-coffee text-xl"></i></div>
            <h3 className="font-heading text-2xl text-rose-dark">🏪 Walk-In Experience</h3>
          </div>
          <p className="text-gray-600 mb-6">Join us in our sun-drenched training kitchen. Watch our apprentices at work while you enjoy your treats at our communal wooden tables.</p>
          <ul className="space-y-3 mb-6 text-sm">
            <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2" aria-hidden="true"></i>See our daily "Apprentice Specials"</li>
            <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2" aria-hidden="true"></i>Indoor & Outdoor Seating</li>
            <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2" aria-hidden="true"></i>Live baking demonstrations (weekends)</li>
          </ul>
          <Link to="/contact" className="text-rose-dark font-semibold hover:text-rose transition focus:outline-none focus:ring-2 focus:ring-rose rounded">Plan Your Visit →</Link>
        </motion.div>

        <motion.div id="takeout" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-rose-dark text-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white mr-4" aria-hidden="true"><i className="fas fa-bolt text-xl"></i></div>
            <h3 className="font-heading text-2xl">⚡ Quick Take-Out</h3>
          </div>
          <p className="opacity-90 mb-6">In a rush? Grab your favorites at our dedicated express window. All packaging is 100% compostable.</p>
          <div className="bg-white/10 p-4 rounded-xl mb-6">
            <p className="text-xs uppercase tracking-widest font-bold mb-2">Current Wait Time</p>
            <p className="text-2xl font-heading">~ 8 Minutes</p>
          </div>
          <Link to="/menu" onClick={() => trackEvent('Take-out', 'Browse Click', 'Menu Page', 1)} className="block w-full bg-white text-rose-dark text-center py-3 rounded-xl font-bold hover:bg-cream transition focus:outline-none focus:ring-2 focus:ring-white">Browse Take-out Menu</Link>
        </motion.div>
      </div>

      <div id="graduates" className="pt-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
          <h2 className="font-heading text-4xl text-rose-dark">Our Rising Stars</h2>
          <p className="text-gray-600 mt-4">See where our graduates have taken their skills.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid md:grid-cols-3 gap-10">
          {graduates.map((grad) => (
            <article key={grad.id} className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-square mb-4 bg-gray-100">
                <OptimizedImage src={grad.photo} alt={`${grad.name}, ${grad.year} graduate`} width={400} height={400} sizes="(max-width: 768px) 100vw, 25vw" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-500" />
              </div>
              <h4 className="font-bold text-xl text-charcoal">{grad.name}</h4>
              <p className="text-rose font-semibold text-sm mb-2">{grad.year}</p>
              <p className="text-gray-600 text-sm mb-3 italic">"{grad.testimonial}"</p>
              <p className="text-xs text-gray-500 font-medium">{grad.currentRole}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}