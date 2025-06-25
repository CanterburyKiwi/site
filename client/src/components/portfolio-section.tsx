import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    title: "John Deere 9600i Chopping Maize",
    description: "Watch the John Deere 9600i in action as it chops maize for silage production.",
    image: "https://res.cloudinary.com/daouvggvv/image/upload/v1750828396/John_Deere_chopping_maize_1750701840307_ij3gx9.jpg",
    videoUrl: "https://youtu.be/aqBUuc44DoE"
  },
  {
    title: "Case IH Tractors Baling Barley",
    description: "Experience Case IH tractors as they bale barley straw after the harvest",
    image: "https://res.cloudinary.com/daouvggvv/image/upload/v1750828741/2x_case_tractors_baling-2_zi9tdm.jpg",
    videoUrl: "https://youtu.be/4awJ2wzTuMM"
  },
  {
    title: "Claas Lexion Combines Harvesting Carrot Seed",
    description: "Follow the specialized process of harvesting carrot seed with Claas Lexion combines in Canterbury fields.",
    image: "https://res.cloudinary.com/daouvggvv/image/upload/v1750828394/3x_lexions_1750671941414_nmwdod.jpg",
    videoUrl: "https://youtu.be/jl4OvJfOJUY"
  },
  {
    title: "Harvesting Carrots w/ Dewulf RA 3060",
    description: "See the impressive Dewulf RA 3060 harvester in action as it efficiently processes the carrot harvest.",
    image: "https://res.cloudinary.com/daouvggvv/image/upload/v1750828395/carrot_harvest_1750673841911_mushmz.jpg",
    videoUrl: "https://youtu.be/Zbl-Gn9_bNU"
  },
  {
    title: "John Deere X9 Harvesting Grass Seed",
    description: "Experience the John Deere X9 combine as it harvests grass seed with efficiency.",
    image: "https://res.cloudinary.com/daouvggvv/image/upload/v1750828740/x9_grass_seed-2_c5vcq5.jpg",
    videoUrl: "https://youtu.be/AMmkeUvRtnk"
  },
  {
    title: "New Holland Combines Harvesting Wheat",
    description: "Watch New Holland combines work in perfect coordination as they harvest wheat across expansive Canterbury fields.",
    image: "https://res.cloudinary.com/daouvggvv/image/upload/v1750828395/NH_combines_1750674060749_t9qugf.jpg",
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
