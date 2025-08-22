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
          <a href="#flavors" className="text-white hover:text-red-500">FLAVORS</a>
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

      {/* About Section */}
      <section id="about" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">ABOUT</h2>
          <p className="text-center max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      {/* Flavors Section */}
      <section id="flavors" className="py-16 bg-black relative">
        <div className="absolute inset-0 bg-black opacity-80 z-0">
          {/* Smoke background effect */}
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">FLAVORS</h2>
              <h3 className="text-xl text-red-500 italic mb-6">Classic</h3>
              <ul className="space-y-2">
                <li>Strawberry</li>
                <li>Blueberry</li>
                <li>Mint</li>
                <li>Apple</li>
                <li>Grape</li>
                <li>Cherry</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">FLAVORS</h2>
              <h3 className="text-xl text-red-500 italic mb-6">Classic</h3>
              <ul className="space-y-2">
                <li>Strawberry</li>
                <li>Blueberry</li>
                <li>Mint</li>
                <li>Apple</li>
                <li>Grape</li>
                <li>Cherry</li>
              </ul>
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
          <h2 className="text-3xl font-bold mb-2 text-center">CONTACT &</h2>
          <h3 className="text-xl text-red-500 italic mb-8 text-center">Hours</h3>
          <div className="max-w-md mx-auto">
            <div className="mb-4">
              <p>Tuesday-Thursday: 5:00pm - 12:00 am</p>
              <p>Friday-Sunday: 5:00pm - 2:00 am</p>
            </div>
            <div className="mb-4">
              <p>Street Rd City</p>
            </div>
            <div className="mb-4">
              <p>info@site.com</p>
            </div>
            <div>
              <p>Instagram</p>
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
            <a href="#flavors" className="text-white hover:text-red-500">FLAVORS</a>
            <a href="#gallery" className="text-white hover:text-red-500">GALLERY</a>
            <a href="#contact" className="text-white hover:text-red-500">CONTACT</a>
          </div>
        </div>
      </footer>

      {/* Terms and Credits */}
      <div className="py-2 bg-black border-t border-gray-800 text-xs text-gray-500">
        <div className="container mx-auto px-4 flex justify-between">
          <div>Terms & Support</div>
          <div>Designed with Canva</div>
        </div>
      </div>
    </div>
  );
}
