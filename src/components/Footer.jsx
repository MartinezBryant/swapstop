import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#2E2D1D] text-white py-8 mt-12">
      <div className="container  mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SwapStop</h3>
            <p className="text-gray-300">
              The sustainable way to find and swap items you love.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#how" className="text-gray-300 hover:text-white">How It Works</a></li>
              <li><a href="#safety" className="text-gray-300 hover:text-white">Swap Safety</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#blog" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-white">Swap Events</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#facebook" className="text-gray-300 hover:text-white">Facebook</a>
              <a href="#instagram" className="text-gray-300 hover:text-white">Instagram</a>
              <a href="#twitter" className="text-gray-300 hover:text-white">Twitter</a>
            </div>
            <p className="text-gray-300">
              Sign up for our newsletter to get updates on new items and swap events.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400">&copy; 2025 SwapStop. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#terms" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#cookies" className="text-gray-400 hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;