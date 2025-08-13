import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#F2F2F2] py-8 pt-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
              <Image 
                src="/images/logo.tastie.club.png" 
                alt="tastie.club logo" 
                width={120} 
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Tagline in the middle */}
          <div className="hidden md:flex items-center">
            <p className="text-lg font-medium bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">taste the unforgettable</p>
          </div>

          {/* Question mark button on the right */}
          <div className="flex items-center">
            <button className="w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors duration-200 shadow-sm">
              <span className="text-gray-600 font-semibold text-lg">?</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
