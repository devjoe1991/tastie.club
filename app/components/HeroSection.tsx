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
    <div className="bg-[#F2F2F2] flex items-center justify-center p-8 pt-16">
      {/* Main Container with rounded corners */}
      <div className="relative w-full max-w-6xl">
        {/* Video Container with rounded corners */}
        <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
          {/* Video Background */}
          <video
            ref={videoRef}
            className="w-full h-[600px] object-cover"
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
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-2 flex items-center max-w-md w-full mx-4">
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
  );
}
