import { useFormspree } from '../hooks/useFormspree';
import { trackFormSubmit } from '../hooks/useAnalytics';

const FORM_ENDPOINT = 'https://formspree.io/f/mjgpenbz';

export default function Contact() {
  const { formData, handleChange, handleSubmit: originalSubmit, status, errorMsg } = useFormspree(FORM_ENDPOINT);

  // ✅ Wrap the original handleSubmit to add analytics tracking
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Call the original Formspree submission logic
    await originalSubmit(e);
    
    // ✅ Track successful form submission (only if status becomes 'success')
    // We check this in a useEffect or after the promise resolves
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="font-heading text-4xl text-rose-dark mb-12 text-center">Say Hello</h2>
      
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Form */}
        <div className="bg-cream p-8 rounded-2xl shadow-inner">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
              <p className="text-gray-600">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Name *</label>
                <input 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 rounded-lg border border-rose/30 focus:ring-2 focus:ring-rose outline-none" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 rounded-lg border border-rose/30 focus:ring-2 focus:ring-rose outline-none" 
                  placeholder="email@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Message *</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows="4" 
                  className="w-full p-3 rounded-lg border border-rose/30 focus:ring-2 focus:ring-rose outline-none" 
                  placeholder="How can we help?" 
                />
              </div>
              
              {status === 'error' && <p className="text-red-500 text-sm">{errorMsg}</p>}
              
              <button 
                type="submit" 
                disabled={status === 'submitting'} 
                className="w-full bg-rose-dark text-white py-3 rounded-lg font-bold hover:bg-rose transition disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* Info & Map */}
        <div className="space-y-8">
          <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5!2d-0.41679!3d5.53449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy"
              title="Hannah's Patisserie location"
            ></iframe>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-heading text-xl text-rose-dark mb-2">📍 Location</h4>
              <p className="text-gray-600">Kasoa Second<br />Central Region, Ghana</p>
            </div>
            <div>
              <h4 className="font-heading text-xl text-rose-dark mb-2">🕒 Hours</h4>
              <p className="text-gray-600"><strong>Mon-Sat:</strong> 7am - 6pm<br /><strong>Sun:</strong> 12pm - 7pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useFormspree } from '../hooks/useFormspree';
import { trackFormSubmit } from '../hooks/useAnalytics';

const FORM_ENDPOINT = 'https://formspree.io/f/mjgpenbz';

export default function Contact() {
  // ✅ Pass analytics callback to hook
  const { formData, handleChange, handleSubmit, status, errorMsg } = useFormspree(
    FORM_ENDPOINT,
    () => trackFormSubmit('Contact Form') // ✅ Track on success
  );

  return (
    // ... rest of JSX (same as above, but simpler handleSubmit)
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* form fields */}
    </form>
    // ...
  );
}