import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import balingImage1 from "@assets/2x case tractors baling-1_1750671941413.jpg";
import balingImage2 from "@assets/2x case tractors baling_1750671941414.jpg";
import harvestImage from "@assets/3x lexions_1750671941414.jpg";
import quadtracImage from "@assets/Case ih quadtrac_1750671941414.jpg";
import plantingImage from "@assets/Fendt planting maize_1750671941414.jpg";
import carrotHarvestImage from "@assets/carrot harvest_1750673841911.jpg";
import grassSeedImage from "@assets/x9 grass seed_1750673841913.jpg";
import nhCombinesImage from "@assets/NH combines_1750674060749.jpg";
import johnDeereMaizeImage from "@assets/John Deere chopping maize_1750701840307.jpg";

const portfolioItems = [
  {
    title: "John Deere 9600i Chopping Maize",
    description: "Watch the powerful John Deere 9600i in action as it efficiently chops maize for silage production.",
    image: johnDeereMaizeImage,
    videoUrl: "https://youtu.be/aqBUuc44DoE"
  },
  {
    title: "Case IH Tractors Baling Barley",
    description: "Experience the precision of Case IH tractors as they work through the barley harvest with modern baling equipment.",
    image: balingImage2,
    videoUrl: "https://youtu.be/4awJ2wzTuMM"
  },
  {
    title: "Claas Lexion Combines Harvesting Carrot Seed",
    description: "Follow the specialized process of harvesting carrot seed with Claas Lexion combines in Canterbury fields.",
    image: harvestImage,
    videoUrl: "https://youtu.be/jl4OvJfOJUY"
  },
  {
    title: "Harvesting Carrots w/ Dewulf RA 3060",
    description: "See the impressive Dewulf RA 3060 harvester in action as it efficiently processes the carrot harvest.",
    image: carrotHarvestImage,
    videoUrl: "https://youtu.be/Zbl-Gn9_bNU"
  },
  {
    title: "John Deere X9 Harvesting Grass Seed",
    description: "Experience the cutting-edge John Deere X9 combine as it harvests grass seed with precision and efficiency.",
    image: grassSeedImage,
    videoUrl: "https://youtu.be/AMmkeUvRtnk"
  },
  {
    title: "New Holland Combines Harvesting Wheat",
    description: "Watch New Holland combines work in perfect coordination as they harvest wheat across expansive Canterbury fields.",
    image: nhCombinesImage,
    videoUrl: "https://youtu.be/JojIj7LVyiI"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-charcoal">Previous Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my agricultural filmmaking projects across Canterbury and beyond
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                 onClick={() => window.open(item.videoUrl, '_blank')}>
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
