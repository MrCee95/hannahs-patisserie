import OptimizedImage from '../components/ui/OptimizedImage';

const graduates = [
  {
    id: 1,
    name: 'Graduate 1',
    year: "Class of '24",
    photo: '/images/Grad1.jpg', // ← Points to public/images/Grad1.jpg
    testimonial: '"Hannah\'s gave me the confidence to open my own pop-up doughnut shop last summer!"',
  },
  {
    id: 2,
    name: 'Graduate 2',
    year: "Class of '25",
    photo: '/images/Grad2.jpg',
    testimonial: '"Now working as a Junior Pastry Chef at a Grand Hotel. Forever grateful for the mentorship."',
  },
  {
    id: 3,
    name: 'Graduate 3',
    year: "Class of '25",
    photo: '/images/Grad3.jpg',
    testimonial: '"Learned the business side of baking. I\'m now the Head of Inventory for a regional bakery chain."',
  },
];

export default function Graduates() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl text-rose-dark">Our Rising Stars</h2>
          <p className="text-gray-600 mt-4">See where our graduates have taken their skills.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {graduates.map((grad) => (
            <article key={grad.id} className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-square mb-4">
                {/* ✅ OptimizedImage replaces <img> */}
                <OptimizedImage
                  src={grad.photo}
                  alt={grad.testimonial.replace(/"/g, '')} // Clean alt text
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-500"
                  priority={false}
                />
              </div>
              <h4 className="font-bold text-xl">{grad.name}</h4>
              <p className="text-rose font-semibold text-sm mb-2">{grad.year}</p>
              <p className="text-gray-600 text-sm">{grad.testimonial}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}