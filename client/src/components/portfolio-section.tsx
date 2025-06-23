import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    title: "Greenfield Dairy Farm",
    description: "Promotional video showcasing sustainable farming practices",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Heritage Vineyard",
    description: "Aerial showcase for premium wine estate marketing",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "High Country Station",
    description: "Property showcase for rural real estate sale",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Canterbury Greens",
    description: "Sustainable horticulture promotional campaign",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Blossom Orchards",
    description: "Seasonal documentation and marketing content",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "AgriTech Solutions",
    description: "Technology integration documentary",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-charcoal">Our Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of our agricultural filmmaking projects across Canterbury and beyond
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all">
                  <Play size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            onClick={() => window.open('https://www.youtube.com/@CanterburyKiwi', '_blank')}
            className="bg-forest text-white px-8 py-4 hover:bg-forest/90 font-semibold inline-flex items-center space-x-2"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
