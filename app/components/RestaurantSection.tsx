'use client';

import { useState } from 'react';

export default function RestaurantSection() {
  const [formData, setFormData] = useState({
    restaurantName: '',
    contactEmail: '',
    location: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Supabase to store restaurant waitlist data
    console.log('Restaurant waitlist submission:', formData);
    // Reset form after submission
    setFormData({ restaurantName: '', contactEmail: '', location: '' });
  };

  return (
    <div className="bg-[#F2F2F2] flex items-center justify-center p-4 sm:p-6 lg:p-8 pt-8 sm:pt-12 lg:pt-16">
      {/* Main Container with rounded corners */}
      <div className="relative w-full max-w-6xl">
        {/* Content Container with rounded corners */}
        <div className="relative bg-gradient-to-br from-gray-50 via-green-50 to-green-100 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-12">
          
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Partner with tastie.club
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Fill your off-peak hours with passionate food enthusiasts. Showcase your culinary artistry 
              through curated tasting experiences and build a loyal customer base.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#474747] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🍽️</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Fill Empty Tables</h3>
              <p className="text-gray-600 text-xs sm:text-sm px-2 sm:px-0">Turn off-peak hours into revenue opportunities with guaranteed bookings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#474747] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">New Customers</h3>
              <p className="text-gray-600 text-xs sm:text-sm px-2 sm:px-0">Reach food enthusiasts actively seeking unique dining experiences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#474747] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Showcase Excellence</h3>
              <p className="text-gray-600 text-xs sm:text-sm px-2 sm:px-0">Present your signature dishes to an appreciative, engaged audience</p>
            </div>
          </div>

          {/* Waitlist Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-4 sm:mb-6">
                Join Our Restaurant Partner Waitlist
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700 mb-2">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    id="restaurantName"
                    name="restaurantName"
                    value={formData.restaurantName}
                    onChange={handleInputChange}
                    placeholder="Your restaurant's name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    placeholder="your.email@restaurant.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, Area or Postcode"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 sm:py-4 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200 text-base sm:text-lg shadow-lg"
                >
                  Join Partner Waitlist
                </button>
              </form>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-6 sm:mt-8">
            <p className="text-gray-500 text-xs sm:text-sm px-2 sm:px-0">
              We'll be in touch soon to discuss partnership opportunities and onboarding details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
