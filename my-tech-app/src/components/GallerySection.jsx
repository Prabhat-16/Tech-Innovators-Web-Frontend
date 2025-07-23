import { ImageWithFallback } from "../figma/ImageWithFallback.jsx";     

export function GallerySection() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
      alt: "Students working on coding projects"
    },
    {
      src: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
      alt: "Tech workshop in progress"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      alt: "Team collaboration session"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      alt: "Innovation showcase event"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      alt: "AI and robotics project"
    },
    {
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
      alt: "Hackathon competition"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent-foreground/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary border border-primary/20 mb-4">
            Gallery
          </div>
          <h2 className="text-3xl lg:text-4xl text-primary">Club Activities</h2>
          <p className="text-xl text-muted-foreground">
            Get a glimpse of our innovative projects, workshops, and community events
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 border border-border/50">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}