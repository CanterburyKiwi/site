import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Youtube, Facebook, Instagram } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertContactInquirySchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactFormSchema = insertContactInquirySchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-charcoal">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to share your agricultural story? Get in touch for a consultation and quote.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
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
                  <p className="text-gray-600">+64 27 123 4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-forest text-white p-3 rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-1">Email</h3>
                  <p className="text-gray-600">canterburykiwi@gmail.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-warm-gray">
              <CardContent className="p-6">
                <h3 className="font-bold text-charcoal mb-4">Follow Our Work</h3>
                <div className="flex space-x-4">
                  <Button
                    onClick={() => window.open('https://www.youtube.com/@CanterburyKiwi', '_blank')}
                    className="bg-red-600 text-white hover:bg-red-700"
                    size="icon"
                  >
                    <Youtube size={20} />
                  </Button>
                  <Button
                    onClick={() => window.open('https://www.facebook.com/CanterburyKiwiYT', '_blank')}
                    className="bg-blue-600 text-white hover:bg-blue-700"
                    size="icon"
                  >
                    <Facebook size={20} />
                  </Button>
                  <Button
                    onClick={() => window.open('https://www.instagram.com/canterburykiwiyt', '_blank')}
                    className="bg-blue-400 text-white hover:bg-blue-500"
                    size="icon"
                  >
                    <Instagram size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-charcoal">Full Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Name" 
                          className="focus:ring-2 focus:ring-forest focus:border-transparent"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-charcoal">Email *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your@email.com" 
                          className="focus:ring-2 focus:ring-forest focus:border-transparent"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-charcoal">Phone</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel"
                          placeholder="+64 27 123 4567" 
                          className="focus:ring-2 focus:ring-forest focus:border-transparent"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-charcoal">Service Needed</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-2 focus:ring-forest focus:border-transparent">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="promotional">Promotional Videos</SelectItem>
                          <SelectItem value="property">Property Showcases</SelectItem>
                          <SelectItem value="aerial">Aerial Photography</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-charcoal">Project Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        rows={6}
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        className="focus:ring-2 focus:ring-forest focus:border-transparent"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-forest text-white py-4 hover:bg-forest/90 font-semibold"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
