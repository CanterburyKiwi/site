import { Card, CardContent } from "@/components/ui/card";
import { Video, Home, Check } from "lucide-react";
import { TbDrone } from "react-icons/tb";

const services = [
  {
    icon: Video,
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
    icon: Home,
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
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => window.open(service.videoUrl, '_blank')}>
              <CardContent className="p-8">
                <div className="text-forest text-4xl mb-6">
                  <service.icon size={48} />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-forest mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
