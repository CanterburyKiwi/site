import { Button } from "@/components/ui/button";
import { Video, Youtube, Camera } from "lucide-react";
import { TbDrone } from "react-icons/tb";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(27, 77, 62, 0.3), rgba(27, 77, 62, 0.3)), url(https://res.cloudinary.com/daouvggvv/image/upload/v1750828394/x9_1750671076474_vk1iri.jpg)`
        }}
      />
      
      <div className="relative container mx-auto px-6 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Canterbury<br />
                <span className="text-harvest">Kiwi</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-lg">
                Professional agricultural filmmaking services showcasing the heart of New Zealand's farming industry
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-harvest text-charcoal px-8 py-4 hover:bg-harvest/90 font-semibold text-lg"
              >
                Get In Touch
              </Button>
              <Button
                onClick={() => window.open('https://www.youtube.com/@CanterburyKiwi', '_blank')}
                variant="outline"
                className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-8 py-4 hover:bg-white/30 font-semibold text-lg"
              >
                <Youtube className="mr-2 h-5 w-5 text-red-500" />
                Check Out My Work
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold">Professional Services</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://res.cloudinary.com/daouvggvv/image/upload/v1750846479/ChatGPT_Image_Jun_25_2025_at_10_11_13_PM_oejmri.png" 
                    alt="Camera" 
                    className="w-5 h-5"
                    style={{ filter: 'brightness(0) saturate(100%) invert(58%) sepia(79%) saturate(2476%) hue-rotate(21deg) brightness(103%) contrast(101%)' }}
                  />
                  <span>Promotional Videos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://res.cloudinary.com/daouvggvv/image/upload/v1750828393/ChatGPT_Image_Jun_24_2025_03_29_46_PM_1750735810953_upt28v.png" 
                    alt="Tractor" 
                    className="w-5 h-5"
                    style={{ filter: 'brightness(0) saturate(100%) invert(58%) sepia(79%) saturate(2476%) hue-rotate(21deg) brightness(103%) contrast(101%)' }}
                  />
                  <span>Seasonal Videos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://res.cloudinary.com/daouvggvv/image/upload/v1750845326/ChatGPT_Image_Jun_25_2025_09_54_42_PM_uhvbmv.png" 
                    alt="Drone" 
                    className="w-5 h-5"
                    style={{ filter: 'brightness(0) saturate(100%) invert(58%) sepia(79%) saturate(2476%) hue-rotate(21deg) brightness(103%) contrast(101%)' }}
                  />
                  <span>Aerial Photography</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
