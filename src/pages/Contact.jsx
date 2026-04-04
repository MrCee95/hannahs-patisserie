import { useFormspree } from '../hooks/useFormspree';
import { trackFormSubmit } from '../hooks/useAnalytics';

const FORM_ENDPOINT = 'https://formspree.io/f/mjgpenbz';

export default function Contact() {
  const { formData, handleChange, handleSubmit, status, errorMsg } = useFormspree(
    FORM_ENDPOINT,
    () => trackFormSubmit('Contact Form')
  );

  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="contact">
      <h2 className="font-heading text-4xl text-rose-dark mb-12 text-center">Say Hello</h2>
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="bg-cream p-8 rounded-2xl shadow-inner">
          {status === 'success' ? (
            <div className="text-center py-12" role="status" aria-live="polite">
              <div className="text-5xl mb-4" aria-hidden="true">✨</div>
              <h3 className="text-2xl font-bold mb-2 text-charcoal">Message Received!</h3>
              <p className="text-gray-600">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1 text-charcoal">Name *</label>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required autoComplete="name" aria-required="true" className="w-full p-3 rounded-lg border border-rose/30 focus:outline-none focus:ring-2 focus:ring-rose transition bg-white" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-1 text-charcoal">Email *</label>
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" aria-required="true" className="w-full p-3 rounded-lg border border-rose/30 focus:outline-none focus:ring-2 focus:ring-rose transition bg-white" placeholder="email@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-1 text-charcoal">Phone (Optional)</label>
                <input id="phone" type="tel" name="phone" value={formData.phone || ''} onChange={handleChange} autoComplete="tel" className="w-full p-3 rounded-lg border border-rose/30 focus:outline-none focus:ring-2 focus:ring-rose transition bg-white" placeholder="+233 XX XXX XXXX" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-1 text-charcoal">Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" aria-required="true" className="w-full p-3 rounded-lg border border-rose/30 focus:outline-none focus:ring-2 focus:ring-rose transition resize-y bg-white" placeholder="How can we help?" />
              </div>
              {status === 'error' && <p className="text-red-500 text-sm flex items-center" role="alert" aria-live="assertive"><i className="fas fa-exclamation-circle mr-2" aria-hidden="true"></i>{errorMsg}</p>}
              <button type="submit" disabled={status === 'submitting'} className="w-full bg-rose-dark text-white py-3 rounded-lg font-bold hover:bg-rose transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-rose-dark flex items-center justify-center" aria-busy={status === 'submitting'}>
                {status === 'submitting' ? <><i className="fas fa-spinner fa-spin mr-2" aria-hidden="true"></i>Sending...</> : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        <div className="space-y-8">
          <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-md">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5!2d-0.41679!3d5.53449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Hannah's Patisserie location in Kasoa, Ghana" className="w-full h-full" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-heading text-xl text-rose-dark mb-2 underline decoration-rose/30">📍 Location</h4>
              <address className="text-gray-600 not-italic">Kasoa Second<br />Central Region, Ghana</address>
            </div>
            <div>
              <h4 className="font-heading text-xl text-rose-dark mb-2 underline decoration-rose/30">🕒 Hours</h4>
              <p className="text-gray-600"><strong>Mon-Sat:</strong> 7am - 6pm<br /><strong>Sun:</strong> 12pm - 7pm</p>
            </div>
          </div>
          <div className="pt-4 border-t border-rose/20">
            <p className="text-gray-600 mb-3"><strong>Prefer to call?</strong></p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+233547572955" className="inline-flex items-center text-rose-dark hover:text-rose font-semibold transition focus:outline-none focus:ring-2 focus:ring-rose rounded px-3 py-2" aria-label="Call +233 54 757 2955"><i className="fas fa-phone mr-2" aria-hidden="true"></i>+233 54 757 2955</a>
              <a href="tel:+233201959415" className="inline-flex items-center text-rose-dark hover:text-rose font-semibold transition focus:outline-none focus:ring-2 focus:ring-rose rounded px-3 py-2" aria-label="Call +233 20 195 9415"><i className="fas fa-phone mr-2" aria-hidden="true"></i>+233 20 195 9415</a>
            </div>
          </div>
          <div className="pt-2">
            <p className="text-gray-600 mb-3"><strong>Or message us:</strong></p>
            <div className="flex gap-4 text-xl">
              <a href="https://instagram.com/hannahs_patisserie_gh" target="_blank" rel="noopener noreferrer" className="text-rose-dark hover:text-rose transition focus:outline-none focus:ring-2 focus:ring-rose rounded p-2" aria-label="Follow us on Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
              <a href="https://facebook.com/hannahspatisseriegh" target="_blank" rel="noopener noreferrer" className="text-rose-dark hover:text-rose transition focus:outline-none focus:ring-2 focus:ring-rose rounded p-2" aria-label="Like us on Facebook"><i className="fab fa-facebook" aria-hidden="true"></i></a>
              <a href="mailto:hello@hannahspatisserie.com" className="text-rose-dark hover:text-rose transition focus:outline-none focus:ring-2 focus:ring-rose rounded p-2" aria-label="Email us"><i className="fas fa-envelope" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}