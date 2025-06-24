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
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM</p>
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
          </div>
          
          <Card className="bg-warm-gray mx-auto max-w-md">
            <CardContent className="p-6 text-center">
              <h3 className="font-bold text-charcoal mb-4">Follow My Work</h3>
              <div className="flex justify-center space-x-4">
                <Button
                  onClick={() => window.open('https://www.youtube.com/@CanterburyKiwi', '_blank')}
                  className="bg-red-600 text-white hover:bg-red-700"
                  size="icon"
                >
                  <Youtube size={20} />
                </Button>
                <Button
                  onClick={() => window.open('https://www.facebook.com/profile.php?id=61570505278895', '_blank')}
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  size="icon"
                >
                  <Facebook size={20} />
                </Button>
                <Button
                  onClick={() => window.open('https://www.instagram.com/canterbury_kiwi/', '_blank')}
                  className="bg-pink-600 text-white hover:bg-pink-700"
                  size="icon"
                >
                  <Instagram size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}