import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Youtube, Facebook, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-charcoal">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to share your agricultural story? Get in touch for a consultation and quote.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="flex items-start space-x-4">
              <div className="bg-forest text-white p-3 rounded-lg">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold text-charcoal mb-1">Location</h3>
                <p className="text-gray-600">Canterbury, New Zealand</p>
                <p className="text-sm text-gray-500">Serving all of South Island</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-forest text-white p-3 rounded-lg">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-charcoal mb-1">Phone</h3>
                <p className="text-gray-600">+64 27 262 0660</p>

              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-forest text-white p-3 rounded-lg">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold text-charcoal mb-1">Email</h3>
                <p className="text-gray-600">canterburykiwi1@gmail.com</p>
                <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
              </div>
            </div>
            
            <Card className="bg-warm-gray">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-charcoal mb-4">Follow My Work</h3>
                <div className="flex justify-center space-x-6">
                  <Button
                    onClick={() => window.open('https://www.youtube.com/@CanterburyKiwi', '_blank')}
                    className="bg-red-600 text-white hover:bg-red-700 w-14 h-14"
                    size="icon"
                  >
                    <Youtube size={32} />
                  </Button>
                  <Button
                    onClick={() => window.open('https://www.facebook.com/profile.php?id=61570505278895', '_blank')}
                    className="bg-blue-600 text-white hover:bg-blue-700 w-14 h-14"
                    size="icon"
                  >
                    <Facebook size={32} />
                  </Button>
                  <Button
                    onClick={() => window.open('https://www.instagram.com/canterbury_kiwi/', '_blank')}
                    className="bg-pink-600 text-white hover:bg-pink-700 w-14 h-14"
                    size="icon"
                  >
                    <Instagram size={32} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 bg-forest text-white">
              <h3 className="text-xl font-bold">Detailed Project Form</h3>
              <p className="text-sm opacity-90 mt-2">Fill out this form for a comprehensive project quote</p>
            </div>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSe39LenFfAc4AvELFrvFbQ7vpCnxLDbEIcCuZpq2HmrxoaqzA/viewform?embedded=true" 
              width="100%" 
              height="1000" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              loading="lazy"
              title="Canterbury Kiwi Project Inquiry Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}