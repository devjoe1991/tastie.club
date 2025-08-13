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
            controls={false}
            preload="metadata"
            style={{
              objectFit: 'cover'
            } as React.CSSProperties}
          >
            <source src="/background.mp4" type="video/mp4" />
            <source src="/background.webm" type="video/webm" />
            <source src="/background.ogv" type="video/ogg" />
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <p className="text-gray-600">Your browser does not support video playback.</p>
            </div>
          </video>

          {/* Subtle overlay for better visual effect */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Email input positioned in the center */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
              {/* Mobile: Stacked layout */}
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-4 space-y-3 sm:hidden">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-sm font-medium"
                />
                <button className="w-full bg-[#474747] text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200 text-sm">
                  Join the waitlist
                </button>
              </div>
              
              {/* Desktop: Inline layout */}
              <div className="hidden sm:flex bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-xl p-2 items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 bg-transparent text-gray-900 placeholder-gray-700 focus:outline-none text-sm font-medium placeholder:font-normal"
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
