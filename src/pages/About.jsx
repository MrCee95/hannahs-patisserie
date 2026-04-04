import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 space-y-24">
      {/* Mission */}
      <div id="mission" className="grid md:grid-cols-2 gap-12 items-center">
        <img 
          src="/images/Hero2.jpg?auto=format&fit=crop&q=80&w=800" 
          alt="Chef mentoring apprentice" 
          className="rounded-2xl shadow-xl w-full h-80 object-cover"
        />
        <div>
          <h2 className="font-heading text-4xl text-rose-dark mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We provide a supportive environment for young people to gain hands-on experience in the culinary world, turning a love for baking into a professional career path.
          </p>
          <Link to="/contact" className="text-rose-dark font-bold hover:underline">Support Our Work →</Link>
        </div>
      </div>

      {/* Training */}
      <div id="training" className="bg-rose/10 p-10 rounded-3xl">
        <h2 className="font-heading text-3xl text-rose-dark mb-8 text-center">Learn with Us</h2>
        <img 
          src="/images/hannah_patisserie_gh-20260404-0019.jpg?auto=format&fit=crop&q=80&w=800" 
          alt="Chef mentoring apprentice" 
          className="rounded-2xl shadow-xl w-full h-80 object-cover"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Food Safety', icon: '🛡️' },
            { title: 'Artisan Baking', icon: '🥐' },
            { title: 'Customer Service', icon: '😊' },
            { title: 'Business Skills', icon: '📊' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-charcoal">{item.title}</h4>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-rose-dark text-white px-8 py-3 rounded-full font-bold hover:bg-rose transition">Apply for 2026 Cohort</button>
        </div>
      </div>

      {/* Service Options */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-rose/20">
          <h3 className="font-heading text-2xl text-rose-dark mb-4">🏪 Walk-In Experience</h3>
          <p className="text-gray-600 mb-4">Join us in our sun-drenched kitchen. Watch apprentices at work while enjoying treats at communal tables.</p>
          <ul className="text-sm space-y-2">
            <li>✅ Daily Apprentice Specials</li>
            <li>✅ Indoor & Outdoor Seating</li>
          </ul>
        </div>
        <div className="bg-rose-dark text-white p-8 rounded-2xl">
          <h3 className="font-heading text-2xl mb-4">⚡ Quick Take-Out</h3>
          <p className="opacity-90 mb-4">In a rush? Grab favorites at our express window. 100% compostable packaging.</p>
          <div className="bg-white/10 p-3 rounded-lg mb-4">
            <p className="text-xs uppercase tracking-widest font-bold">Wait Time</p>
            <p className="text-xl font-heading">~ 8 Minutes</p>
          </div>
          <Link to="/menu" className="block w-full bg-white text-rose-dark text-center py-3 rounded-xl font-bold hover:bg-cream transition">Browse Menu</Link>
        </div>
      </div>
    </section>
  );
}