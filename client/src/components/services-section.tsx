import { Card, CardContent } from "@/components/ui/card";
import { Video, Home, Plane, Check } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Promotional Videos",
    description: "Compelling promotional content that showcases your farm, products, and story to attract customers and investment.",
    features: [
      "Brand storytelling",
      "Product showcases", 
      "Farm tours"
    ]
  },
  {
    icon: Home,
    title: "Property Showcases",
    description: "Professional property videos for real estate marketing, showcasing land, buildings, and agricultural potential.",
    features: [
      "Real estate marketing",
      "Land evaluation videos",
      "Investment presentations"
    ]
  },
  {
    icon: Plane,
    title: "Aerial Photography",
    description: "Stunning aerial footage and photography that captures the scale and beauty of agricultural operations.",
    features: [
      "Drone cinematography",
      "Property mapping",
      "Landscape photography"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-warm-gray">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-charcoal">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional filmmaking services tailored for the agricultural industry
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all">
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
