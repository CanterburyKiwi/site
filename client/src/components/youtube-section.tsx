import { Button } from "@/components/ui/button";
import { Youtube, ExternalLink } from "lucide-react";

export default function YoutubeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-charcoal">Featured on YouTube</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest agricultural films and get inspired by the stories we tell
          </p>
          <Button
            onClick={() => window.open('https://www.youtube.com/@CanterburyKiwi', '_blank')}
            className="bg-red-600 text-white px-8 py-4 hover:bg-red-700 font-semibold text-lg inline-flex items-center space-x-3"
          >
            <Youtube size={24} />
            <span>Visit Canterbury Kiwi Channel</span>
            <ExternalLink size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
