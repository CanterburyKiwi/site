export default function GoogleFormSection() {
  return (
    <section className="py-20 bg-warm-gray">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-charcoal">Project Inquiry Form</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out this detailed form to help us understand your project requirements
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfmuW8zcV6s4QG1FwSA/viewform?embedded=true" 
              width="100%" 
              height="800" 
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