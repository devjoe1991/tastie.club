import Image from 'next/image';

export default function ExperienceGallery() {
  const experiences = [
    {
      id: 1,
      title: "Teppanyaki Artistry",
      image: "/images/teppanyaki-flames.jpg",
      alt: "Chef preparing teppanyaki with dramatic flames"
    },
    {
      id: 2,
      title: "Molecular Gastronomy",
      image: "/images/molecular-cuisine.jpg",
      alt: "Modern molecular gastronomy presentation"
    },
    {
      id: 3,
      title: "Farm-to-Table",
      image: "/images/farm-to-table.jpg",
      alt: "Fresh farm-to-table dining experience"
    },
    {
      id: 4,
      title: "Wine Pairing",
      image: "/images/wine-pairing.jpg",
      alt: "Expert sommelier wine pairing experience"
    },
    {
      id: 5,
      title: "Open Kitchen",
      image: "/images/open-kitchen.jpg",
      alt: "Chefs working in an open kitchen environment"
    },
    {
      id: 6,
      title: "Chef's Table",
      image: "/images/chefs-table.jpg",
      alt: "Intimate chef's table dining experience"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#474747] mb-4">
            Unforgettable Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From theatrical teppanyaki flames to intimate chef's table encounters, 
            discover the artistry and passion behind exceptional cuisine.
          </p>
        </div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id}
              className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-[4/1] bg-gray-200">
                <Image
                  src={experience.image}
                  alt={experience.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Experience Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to embark on your culinary journey?
          </p>
          <button className="bg-[#474747] hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}
