'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="bg-[#F2F2F2] flex items-center justify-center p-4 sm:p-6 lg:p-8 pt-8 sm:pt-12 lg:pt-16">
      {/* Main Container with rounded corners */}
      <div className="relative w-full max-w-6xl">
        {/* Video Container with rounded corners */}
        <div className="relative bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
          {/* Video Background */}
          <video
            ref={videoRef}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Subtle overlay for better visual effect */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Email input positioned in the center */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
              {/* Mobile: Stacked layout */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 space-y-3 sm:hidden">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#474747] focus:border-transparent text-sm"
                />
                <button className="w-full bg-[#474747] text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200 text-sm">
                  Join the waitlist
                </button>
              </div>
              
              {/* Desktop: Inline layout */}
              <div className="hidden sm:flex bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-2 items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-sm"
                />
                <button className="bg-[#474747] text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 text-sm">
                  Join the waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
