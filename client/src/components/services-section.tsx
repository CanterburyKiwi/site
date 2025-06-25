import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Check, Play } from "lucide-react";
import { TbDrone } from "react-icons/tb";

const services = [
  {
    icon: "camera",
    title: "Promotional Videos",
    description: "Compelling promotional content that showcases your machinery, farm and more to attract valuable customers",
    features: [
      "Product showcases",
      "Sponsored videos", 
      "Online Advertising"
    ],
    videoUrl: "https://www.youtube.com/watch?v=Nly9rFrOoqk"
  },
  {
    icon: "tractor",
    title: "Seasonal Videos",
    description: "Footage from a year-round farming cycle, seamlessly edited to display all the different work that is carried out on your farm",
    features: [
      "Year-round on-farm filming",
      "Variety of footage",
      "Staff videos"
    ],
    videoUrl: "https://youtu.be/N5HwOD6uwzc?si=k2D0hA_53To2Ya8S"
  },
  {
    icon: TbDrone,
    title: "Aerial Photography",
    description: "Stunning aerial footage and photography that captures the scale and progression of agricultural operations.",
    features: [
      "Drone cinematography",
      "Landscape photography",
      "Overtime progression and development"
    ],
    videoUrl: "https://youtu.be/Yguqb5Iy3jw?si=YzVoJ6G6YFGRMSVO"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-warm-gray">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-charcoal">My Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional filmmaking services tailored for the agricultural industry
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-forest text-4xl mb-6">
                  {service.icon === "tractor" ? (
                    <img 
                      src="https://res.cloudinary.com/daouvggvv/image/upload/v1750828393/ChatGPT_Image_Jun_24_2025_03_29_46_PM_1750735810953_upt28v.png" 
                      alt="Tractor" 
                      className="w-12 h-12"
                      style={{ filter: 'brightness(0) saturate(100%) invert(25%) sepia(45%) saturate(1500%) hue-rotate(135deg) brightness(80%) contrast(90%)' }}
                    />
                  ) : service.icon === "camera" ? (
                    <img 
                      src="https://res.cloudinary.com/daouvggvv/image/upload/v1750878471/Untitled_design-removebg-preview_lmvabu.png" 
                      alt="Camera" 
                      className="w-12 h-12"
                      style={{ filter: 'brightness(0) saturate(100%) invert(25%) sepia(45%) saturate(1500%) hue-rotate(135deg) brightness(80%) contrast(90%)' }}
                    />
                  ) : (
                    <service.icon size={48} />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-600 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-forest mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Button 
                    onClick={() => window.open(service.videoUrl, '_blank')}
                    className="w-full bg-forest hover:bg-forest/90 text-white"
                    variant="default"
                  >
                    <Play className="mr-2" size={16} />
                    Preview Example
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
