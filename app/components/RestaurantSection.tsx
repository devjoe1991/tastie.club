'use client';

import { useState } from 'react';
import { BorderBeam } from '@/components/magicui/border-beam';

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
    <div className="bg-[#F2F2F2] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 pt-8 sm:pt-12 lg:pt-16">
      {/* Header Section - Outside Container */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12 w-full max-w-6xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
          Partner with tastie.club
        </h2>
        <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-6 sm:px-4 lg:px-0">
          <p className="leading-relaxed mb-2 sm:mb-3">
            Create bums on seats during quiet hours with real foodies.
          </p>
          <p className="leading-relaxed">
            Test your dishes in bitesize form - get real customer approval.
          </p>
        </div>
      </div>

      {/* Waitlist Form */}
      <div className="w-full max-w-lg mx-auto">
        <div className="relative bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <BorderBeam 
            size={120}
            duration={12}
            colorFrom="#16a34a"
            colorTo="#15803d"
            borderWidth={2}
          />
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
        
        {/* Footer Text */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-gray-500 text-xs sm:text-sm px-2 sm:px-0">
            We'll be in touch soon to discuss partnership opportunities and onboarding details.
          </p>
        </div>
      </div>
    </div>
  );
}
