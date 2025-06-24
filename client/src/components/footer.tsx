export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CK</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Canterbury Kiwi</h3>
                <p className="text-gray-400 text-sm">Agricultural Film Services</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Professional filmmaking services for New Zealand's agricultural industry.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Promotional Videos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Property Showcases
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Aerial Photography
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="hover:text-white transition-colors text-left"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open('https://www.youtube.com/@CanterburyKiwi', '_blank')}
                  className="hover:text-white transition-colors text-left"
                >
                  YouTube Channel
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Canterbury Kiwi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
