'use client';

export default function GallerySection() {
  return (
    <div className="bg-[#F2F2F2] flex items-center justify-center p-4 sm:p-6 lg:p-8 pt-8 sm:pt-12 lg:pt-16">
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
            <div className="aspect-square bg-gradient-to-br from-red-900 to-red-700 rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-white/20 text-4xl">
                🥩
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-orange-900 to-orange-700 rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-white/20 text-4xl">
                🍰
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-white/20 text-4xl">
                🍫
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="aspect-square bg-gradient-to-br from-amber-900 to-amber-700 rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-white/20 text-4xl">
                🍸
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-red-800 to-red-900 rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-white/20 text-4xl">
                🦪
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-yellow-800 to-yellow-900 rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-white/20 text-4xl">
                🍝
              </div>
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
