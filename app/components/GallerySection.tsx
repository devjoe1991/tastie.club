'use client';

import Image from 'next/image';

export default function GallerySection() {
  return (
    <div className="bg-[#F2F2F2] flex items-center justify-center p-4 sm:p-6 lg:p-8 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
      {/* Main Container with rounded corners */}
      <div className="relative w-full max-w-6xl">
        {/* Content Container with rounded corners */}
        <div className="relative bg-[#474747] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-12">
          
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Coming Soon to Biter.club
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              A taste of what awaits — a curated visual feast from our partner restaurants.
            </p>
          </div>

          {/* Food Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Row 1 */}
            <div className="aspect-[3/2] overflow-hidden shadow-lg relative">
              <Image
                src="/images/steak.jpg"
                alt="Premium steak dish"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[3/2] overflow-hidden shadow-lg relative">
              <Image
                src="/images/brownies.jpg"
                alt="Gourmet brownies"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[3/2] overflow-hidden shadow-lg relative">
              <Image
                src="/images/truffles.jpg"
                alt="Artisan truffles"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Row 2 */}
            <div className="aspect-[3/2] overflow-hidden shadow-lg relative">
              <Image
                src="/images/cocktails.jpg"
                alt="Craft cocktails"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[3/2] overflow-hidden shadow-lg relative">
              <Image
                src="/images/oysters.jpg"
                alt="Fresh oysters"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[3/2] overflow-hidden shadow-lg relative">
              <Image
                src="/images/italian.jpg"
                alt="Italian cuisine"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Coming Soon Badge */}
          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white font-medium text-sm sm:text-base">
                ✨ More culinary experiences coming soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
