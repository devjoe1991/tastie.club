export default function HowItWorksSection() {
  return (
    <div className="bg-[#F2F2F2] flex flex-col items-center justify-center p-8 pt-16">
      {/* Main Container aligned with hero section */}
      <div className="relative w-full max-w-6xl">
        {/* Title and Subheading outside the container */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#474747] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A brilliant win-win where restaurants fill their quiet tables during off-peak hours 
            whilst proper foodies discover cracking dining experiences without breaking the bank.
          </p>
        </div>

        {/* Content Container - 1/3 shorter than hero section */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg p-12">          
          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* For Members Section */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-[#474747] mb-6">
                For Members
              </h3>
              <div className="space-y-4">
                <div className="flex items-start text-left">
                  <div className="w-8 h-8 bg-[#474747] text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-700">
                    Subscribe for a monthly fee and gain access to exclusive chef-curated tasting menus
                  </p>
                </div>
                <div className="flex items-start text-left">
                  <div className="w-8 h-8 bg-[#474747] text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-700">
                    Browse partner restaurants and book complimentary tasting experiences during off-peak hours
                  </p>
                </div>
                <div className="flex items-start text-left">
                  <div className="w-8 h-8 bg-[#474747] text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-700">
                    Discover new dining experiences and enjoy premium cuisine at no additional cost
                  </p>
                </div>
              </div>
            </div>

            {/* For Restaurants Section */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-[#474747] mb-6">
                For Restaurants
              </h3>
              <div className="space-y-4">
                <div className="flex items-start text-left">
                  <div className="w-8 h-8 bg-[#474747] text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-700">
                    Partner with tastie.club to fill empty tables during off-peak hours
                  </p>
                </div>
                <div className="flex items-start text-left">
                  <div className="w-8 h-8 bg-[#474747] text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-700">
                    Showcase your culinary specialties with curated tasting menus to new audiences
                  </p>
                </div>
                <div className="flex items-start text-left">
                  <div className="w-8 h-8 bg-[#474747] text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1 flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-700">
                    Build a base of loyal customers and generate potential for repeat business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
