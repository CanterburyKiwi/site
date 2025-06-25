import { Camera } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-warm-gray">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-charcoal">My Work</h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                Based in the heart of New Zealand's agricultural region, Canterbury Kiwi specializes in professional filmmaking services for farms and agricultural businesses.
              </p>
              <p>
                With over 5 year's experience, 30+ paid projects, and over 1.5 million YouTube views, I understand the best way to get your product advertised on the market. I have both technical expertise as well as rural knowledge from working on farms. This combination allows us to achieve the best shots and editing outcomes to make your promotional material successful.
              </p>
              <p>
                From promotional videos for machinery dealerships to aerial footage that captures the scale of your farming operation, I'm committed to delivering content that drives results for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-forest">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest">30+</div>
                <div className="text-sm text-gray-600">Paid Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest">1.5M+</div>
                <div className="text-sm text-gray-600">YouTube Views</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://res.cloudinary.com/daouvggvv/image/upload/v1750828394/Fendt_planting_maize_1750671941414_ogk1qj.jpg"
              alt="Canterbury Kiwi filmmaker at work"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center">
                  <Camera className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-bold text-charcoal">Professional</div>
                  <div className="text-sm text-gray-600">Equipment & Expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
