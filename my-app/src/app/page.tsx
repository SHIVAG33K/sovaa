import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-4 bg-black">
        <div className="text-white font-bold">NAME</div>
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-red-500">START</a>
          <a href="#happy-hour" className="text-white hover:text-red-500">HAPPY HOUR</a>
          <a href="#about" className="text-white hover:text-red-500">ABOUT</a>
          <a href="#flavors" className="text-white hover:text-red-500">MENU</a>
          <a href="#gallery" className="text-white hover:text-red-500">GALLERY</a>
          <a href="#contact" className="text-white hover:text-red-500">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section with Logo */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-80 z-0">
          {/* This would be the smoke background image */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
        </div>
        <div className="z-10 text-center">
          <div className="relative w-64 h-64 mx-auto mb-4">
            {/* Replace with actual logo image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-40 h-40 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1 h-32 bg-red-500 rounded-full"></div>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2">HOOKAH</h1>
          <p className="text-xl">LOUNGE</p>
        </div>
      </div>

      {/* Happy Hour Section */}
      <section id="happy-hour" className="py-16 relative">
        <div className="absolute inset-0 bg-black opacity-80 z-0">
          {/* Dark background with smoke effect */}
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-80 w-full">
                {/* Person smoking image would go here */}
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left md:pl-8">
              <h2 className="text-3xl font-bold mb-2">HAPPY</h2>
              <h3 className="text-2xl text-red-500 italic mb-4">HOUR</h3>
              <h4 className="text-lg mb-6">FRIDAY TO SATURDAY 5-7PM</h4>
              <div className="mb-4">
                <p className="text-lg">Classic Hookah</p>
                <p className="text-lg">Flavors</p>
                <p className="text-3xl font-bold text-red-500 mb-2">$5</p>
              </div>
              <div>
                <p className="text-lg">Special Hookah</p>
                <p className="text-lg">Flavors</p>
                <p className="text-3xl font-bold text-red-500">$7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Replaced with new content */}
      <section id="about" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-center animate-pulse transition-all duration-1000 ease-in-out hover:text-red-500">
            Da Nang's Ultimate Shisha Experience
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-8">
            Indulge in Indian & continental flavors, signature drinks, premium hookah (Indian & Russian hookah), and a vibrant bar scene in the heart of Da Nang
          </p>
          
          {/* Image Gallery Placeholder */}
          
          
          {/* Enhanced Scrolling Text Banner */}
          <div className="overflow-hidden py-6 bg-black border-y border-gray-800 mb-12">
            <div className="marquee-container">
              <div className="marquee-content text-2xl font-bold">
                <span className="mx-6 text-red-500">The ultimate lounge</span>
                <span className="mx-6">/</span>
                <span className="mx-6 text-red-500">bar vibes</span>
                <span className="mx-6">/</span>
                <span className="mx-6 text-red-500">hookah haven</span>
                <span className="mx-6">/</span>
                <span className="mx-6 text-red-500">The ultimate lounge</span>
                <span className="mx-6">/</span>
                <span className="mx-6 text-red-500">bar vibes</span>
                <span className="mx-6">/</span>
                <span className="mx-6 text-red-500">hookah haven</span>
                <span className="mx-6">/</span>
              </div>
            </div>
          </div>
          
          {/* Why Sova Section */}
          <h2 className="text-3xl font-bold mb-8 text-center">Why Sova?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Iconic Owl Theme</h3>
              <p>Immerse yourself in an enchanting and stylish atmosphere.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Exclusive VIP Spaces</h3>
              <p>Perfect for private parties and celebrations.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Open Hour</h3>
              <p>Open till late, offering unforgettable moments every night.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section (Replaced Flavors Section) */}
      <section id="flavors" className="py-16 bg-black relative">
        <div className="absolute inset-0 bg-black opacity-80 z-0">
          {/* Smoke background effect */}
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-bold mb-4 text-center">MENU</h2>
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-4xl">
              <Image 
                src="/images/menu.png" 
                alt="Menu" 
                width={1000} 
                height={800} 
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl text-red-500 italic mb-4">SHISHA PRICING</h3>
            <div className="flex justify-center space-x-12">
              <div>
                <p className="text-lg font-bold">STANDARD</p>
                <p className="text-2xl font-bold text-red-500">60K</p>
              </div>
              <div>
                <p className="text-lg font-bold">ONE SHOT</p>
                <p className="text-2xl font-bold text-red-500">34K</p>
              </div>
              <div>
                <p className="text-lg font-bold">CIGAR STANDARD</p>
                <p className="text-2xl font-bold text-red-500">70K</p>
              </div>
              <div>
                <p className="text-lg font-bold">CIGAR ONESHOT</p>
                <p className="text-2xl font-bold text-red-500">50K</p>
              </div>
              <div>
                <p className="text-lg font-bold">OVERPACK</p>
                <p className="text-2xl font-bold text-red-500">+10K</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">GALLERY</h2>
          <h3 className="text-xl text-red-500 italic mb-8 text-center">Hookah</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-64 bg-gray-800 relative overflow-hidden">
              {/* Gallery image 1 would go here */}
              {/* <Image 
                src="/images/menu.png" 
                alt="" 
                className="w-full object-contain"
              /> */}
            </div>
            <div className="h-64 bg-gray-800 relative overflow-hidden">
              {/* Gallery image 2 would go here */}
            </div>
            <div className="h-64 bg-gray-800 relative overflow-hidden">
              {/* Gallery image 3 would go here */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">GET IN TOUCH</h2>
          <h3 className="text-xl text-red-500 italic mb-8 text-center">Contact Us</h3>
          <div className="max-w-2xl mx-auto">
            <p className="text-center mb-8">
              Got questions, feedback, or just want to say hi? We'd love to hear from you! Whether it's about our menu, location, or anything else, don't hesitate to reach out.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4">Contacts</h4>
                <p className="mb-2">29 An Thượng 29, Bắc Mỹ Phú, Ngũ Hành Sơn,</p>
                <p className="mb-4">Đà Nẵng 550000, Vietnam</p>
                <p className="mb-4">+84 387 400 376</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Opening Hours</h4>
                <p className="mb-4">Open Daily: 6PM - 2AM</p>
                <h4 className="text-xl font-bold mb-4">Social</h4>
                <p className="mb-2">Instagram</p>
                <p>X (Twitter)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-white font-bold">NAME</div>
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-red-500">START</a>
            <a href="#happy-hour" className="text-white hover:text-red-500">HAPPY HOUR</a>
            <a href="#about" className="text-white hover:text-red-500">ABOUT</a>
            <a href="#flavors" className="text-white hover:text-red-500">MENU</a>
            <a href="#gallery" className="text-white hover:text-red-500">GALLERY</a>
            <a href="#contact" className="text-white hover:text-red-500">CONTACT</a>
          </div>
        </div>
      </footer>

      {/* Terms and Credits */}
      <div className="py-2 bg-black border-t border-gray-800 text-xs text-gray-500">
        <div className="container mx-auto px-4 flex justify-between">
          <div>® 2024 All Rights are reserved</div>

        </div>
      </div>
    </div>
  );
}
