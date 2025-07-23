import { Card, CardContent } from "./ui/card";
import { Lightbulb, Users, Rocket } from "lucide-react";

export function MissionSection() {
  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary border border-primary/20 mb-4">
            Our Purpose
          </div>
          <h2 className="text-3xl lg:text-4xl text-primary">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            To empower MIT students with the tools, knowledge, and community needed to drive technological innovation and create solutions that shape the future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6 border-border/50 bg-gradient-to-b from-card to-card/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/30 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl text-primary">Innovation</h3>
              <p className="text-muted-foreground">
                We foster creative thinking and encourage breakthrough ideas that push the boundaries of technology.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 border-border/50 bg-gradient-to-b from-card to-card/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent-foreground/20 to-primary/30 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl text-accent-foreground">Collaboration</h3>
              <p className="text-muted-foreground">
                Building a strong community where members support each other and work together on ambitious projects.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 border-border/50 bg-gradient-to-b from-card to-card/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent-foreground/30 rounded-full flex items-center justify-center">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl text-primary">Impact</h3>
              <p className="text-muted-foreground">
                Creating real-world solutions that make a difference in our communities and beyond.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}