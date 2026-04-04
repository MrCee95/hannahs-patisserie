import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import OptimizedImage from '../components/ui/OptimizedImage';
import { trackEvent } from '../hooks/useAnalytics';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const featuredItems = [
  { id: 'vanilla-millefeuille', name: 'Vanilla Bean Mille-Feuille', desc: 'Flaky puff pastry, organic vanilla cream', price: 'GHS6.50', image: '/images/menu/vanilla-millefeuille.jpg' },
  { id: 'wildberry-lavender', name: 'Wildberry Lavender Scoop', desc: 'House-made jam, fresh lavender buds', price: 'GHS4.50', image: '/images/menu/wildberry-lavender.jpg' },
  { id: 'apprentice-pizza', name: 'Apprentice Signature Pizza', desc: 'Hot honey, pepperoni, fresh basil', price: 'GHS14.00', image: '/images/menu/apprentice-pizza.jpg' }
];

export default function Home() {
  const handleCTAClick = (label) => trackEvent('CTA', 'Click', label, 1);

  return (
    <>
      <section id="home" className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden" aria-label="Welcome to Hannah's Patisserie">
        <div className="absolute inset-0 z-0">
          <OptimizedImage src="/images/hero-bg.jpg" alt="Fresh artisan pastries on a wooden table with morning light" width={1920} height={1080} sizes="100vw" priority={true} className="brightness-[0.55]" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/30" />
        </div>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10 text-white max-w-3xl pt-16">
          <motion.h1 variants={fadeInUp} className="font-heading text-5xl md:text-7xl mb-4 drop-shadow-lg">Sweet Treats, Serious Skills</motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 font-light drop-shadow">Artisan ice cream & pastries, crafted by the next generation.</motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/about#visit" onClick={() => handleCTAClick('Visit Café')} className="bg-white text-rose-dark hover:bg-cream px-8 py-4 rounded-full text-lg font-bold transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white">
              <i className="fas fa-store mr-2" aria-hidden="true"></i>Visit Our Café
            </Link>
            <Link to="/menu" onClick={() => handleCTAClick('Order Take-out')} className="bg-rose hover:bg-rose-dark text-white px-8 py-4 rounded-full text-lg font-bold transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white">
              <i className="fas fa-shopping-bag mr-2" aria-hidden="true"></i>Order Take-out
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
          <h2 className="font-heading text-4xl text-rose-dark mb-4">Today's Favorites</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Handcrafted daily by our apprentices under Master Pastry Chefs.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item) => (
            <motion.article key={item.id} variants={fadeInUp} whileHover={{ y: -5 }} className="group bg-white p-6 rounded-2xl border border-rose/20 shadow-sm hover:shadow-md transition cursor-pointer" onClick={() => trackEvent('Menu Preview', 'Click', item.name, 1)}>
              <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100">
                <OptimizedImage src={item.image} alt={item.name} width={400} height={400} sizes="(max-width: 768px) 100vw, 33vw" className="object-cover w-full h-full group-hover:scale-105 transition duration-500" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-charcoal">{item.name}</h3>
                <span className="font-heading text-rose-dark">{item.price}</span>
              </div>
              <p className="text-gray-500 italic text-sm">{item.desc}</p>
            </motion.article>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
          <Link to="/menu" onClick={() => handleCTAClick('View Full Menu')} className="inline-block bg-rose-dark text-white px-8 py-3 rounded-full font-bold hover:bg-rose transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-rose-dark">
            View Full Menu <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
          </Link>
        </motion.div>
      </section>

      <section className="py-20 bg-white px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl text-rose-dark mb-6">More Than Just Desserts</h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-8">Hannah's Patisserie is a dedicated training kitchen where passion meets purpose. We empower the next generation with hands-on culinary experience, turning a love for baking into a professional career path.</p>
          <Link to="/about" onClick={() => handleCTAClick('Learn About Mission')} className="inline-flex items-center text-rose-dark font-bold border-b-2 border-rose hover:text-rose transition pb-1 focus:outline-none focus:ring-2 focus:ring-rose rounded">
            Learn About Our Mission <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
          </Link>
        </motion.div>
      </section>

      <section className="py-16 bg-rose/10 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mx-auto text-center bg-white p-10 rounded-3xl shadow-lg border border-rose/20">
          <h3 className="font-heading text-3xl text-rose-dark mb-4">Ready to Start Your Career?</h3>
          <p className="text-gray-600 mb-8">Applications for the 2026 Apprentice Cohort are now open!</p>
          <Link to="/about#training" onClick={() => handleCTAClick('Apply for Training')} className="inline-block bg-rose-dark text-white px-10 py-4 rounded-full font-bold hover:bg-rose transition shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-rose-dark">
            Apply Now <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
          </Link>
        </motion.div>
      </section>
    </>
  );
}