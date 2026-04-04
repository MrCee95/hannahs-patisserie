import { useState } from 'react';
import { trackEvent } from '../hooks/useAnalytics';

const menuItems = [
  { name: 'Vanilla Bean Mille-Feuille', desc: 'Flaky puff pastry, organic vanilla cream', price: 'GHS6.50', category: 'pastries' },
  { name: 'Wildberry Lavender Scoop', desc: 'House-made jam, fresh lavender buds', price: 'GHS4.50', category: 'scoops' },
  { name: 'Apprentice Signature Pizza', desc: 'Hot honey, pepperoni, fresh basil', price: 'GHS14.00', category: 'savory' },
  { name: 'Matcha Croissant', desc: 'Buttery layers, premium Uji matcha', price: 'GHS5.00', category: 'pastries' },
  { name: 'Salted Caramel Gelato', desc: 'Creamy caramel, Madagascar vanilla', price: 'GHS4.00', category: 'scoops' },
  { name: 'Kasoa Spice Bun', desc: 'Nutmeg, cinnamon, brown sugar glaze', price: 'GHS3.50', category: 'pastries' },
];

export default function Menu() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="font-heading text-4xl text-rose-dark mb-4">Our Full Menu</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Every item is handmade daily by our apprentices under Master Pastry Chefs.</p>
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {['all', 'pastries', 'scoops', 'savory'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-bold transition capitalize ${
              filter === cat ? 'bg-rose text-white' : 'border border-rose text-rose hover:bg-rose/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-rose/20 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-lg">{item.name}</h4>
              <span className="font-heading text-rose-dark">{item.price}</span>
            </div>
            <p className="text-gray-500 italic text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



// In the menu item component:
const handleOrderClick = (itemName) => {
  trackEvent('Menu', 'Order Click', itemName, 1);
  // order logic here
};

// In JSX:
<button onClick={() => handleOrderClick(item.name)}>
  Order {item.name}
</button>