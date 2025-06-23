import { Camera } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-warm-gray">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-charcoal">About Canterbury Kiwi</h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                Based in the heart of New Zealand's agricultural region, Canterbury Kiwi specializes in professional filmmaking services for the farming and rural industries.
              </p>
              <p>
                With years of experience in agricultural storytelling, we understand the unique challenges and opportunities within the farming sector. Our team combines technical expertise with a deep appreciation for rural life.
              </p>
              <p>
                From promotional videos that showcase your farm's story to aerial footage that captures the scale of your operation, we're committed to delivering content that drives results for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-forest">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
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
