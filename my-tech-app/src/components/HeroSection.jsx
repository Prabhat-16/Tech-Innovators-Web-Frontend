import { Button } from "./ui/button";
import { env } from "@/lib/env";
import logoImage from "@/assets/logo.png"; // Correct path to your local logo

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-accent/10 to-primary/10 py-20 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary border border-primary/20">
                🚀 Innovation • Technology • Community
              </div>

              {/*
               from-cyan-200 to-sky-500 
              from-violet-50 to-fuchsia-400
              */}
              <h1 className="text-4xl lg:text-6xl tracking-tight bg-gradient-to-r from-cyan-200 to-sky-500  bg-clip-text text-transparent">
                {env.APP_NAME}
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Fostering innovation, creativity, and technological excellence among MIT students through collaborative projects and cutting-edge research.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 text-black bg-gradient-to-l from-primary to-accent-foreground hover:from-primary/90 hover:to-accent-foreground/90">
                Join Our Community
              </Button>
              <Button variant="outline" size="lg" className="px-8 border-primary/20 hover:bg-primary/5">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-foreground/20 rounded-lg blur-xl"></div>
            <div className="relative rounded-lg shadow-2xl w-full h-[400px] flex items-center justify-center bg-white/90 dark:bg-card/90 border border-border/50">
              <img
                src={logoImage}
                alt={`${env.APP_NAME} Logo`}
                className="w-80 h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}