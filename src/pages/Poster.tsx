import { Layout } from "@/components/layout/Layout";
import { FileText, ArrowLeft, Download, ExternalLink, Github, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Poster = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section">
        <div className="page-container py-12 sm:py-16">
          <Button asChild variant="ghost" size="sm" className="mb-6">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Code2 className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Featured Project</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
            Full-Stack Portfolio Projects
          </h1>
          
          <p className="text-muted-foreground max-w-2xl">
            A showcase of my best work, demonstrating expertise in full-stack development, modern technologies, and software engineering principles.
          </p>
        </div>
      </section>

      {/* Projects Content */}
      <section className="page-container py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project Preview */}
            <div className="lg:col-span-2">
              <div className="card-base p-0 overflow-hidden">
                <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                  {/* Placeholder for project preview */}
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                      <Code2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Project Showcase</h3>
                    <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
                      Replace this placeholder with screenshots or live demos of your projects.
                    </p>
                    <div className="flex gap-3 justify-center flex-wrap">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Metadata */}
            <div className="space-y-6">
              {/* Title */}
              <div className="card-base">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Project Title</h3>
                <p className="font-semibold">
                  E-Commerce Platform with Real-Time Features
                </p>
              </div>

              {/* Description */}
              <div className="card-base">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Description</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A full-stack e-commerce application built with React for the frontend and Node.js with Express.js 
                  for the backend. Features real-time order tracking, user authentication, payment integration, 
                  and a comprehensive admin dashboard for managing products and inventory.
                </p>
              </div>

              {/* Technology Stack */}
              <div className="card-base">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Technology Stack</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• React.js with Redux for state management</li>
                  <li>• Node.js and Express.js backend</li>
                  <li>• MongoDB for database</li>
                  <li>• Socket.io for real-time features</li>
                  <li>• Stripe API for payments</li>
                  <li>• Docker for deployment</li>
                </ul>
              </div>

              {/* Key Features */}
              <div className="card-base">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Key Features</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• User authentication and authorization</li>
                  <li>• Product catalog with advanced filtering</li>
                  <li>• Real-time order status updates</li>
                  <li>• Secure payment processing</li>
                  <li>• Admin dashboard for management</li>
                  <li>• Responsive mobile design</li>
                </ul>
              </div>

              {/* Outcome & Impact */}
              <div className="card-base">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Outcome & Impact</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Successfully deployed and maintained by thousands of users. Achieved 99.5% uptime, 
                  processed over $100k in transactions, and received positive feedback for user experience 
                  and performance.
                </p>
              </div>

              {/* Author Info */}
              <div className="card-base bg-muted/50">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Developer</h3>
                <p className="font-medium">Manan Arora</p>
                <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
                <p className="text-sm text-muted-foreground">React • Node.js • Python • Java</p>
              </div>
            </div>
          </div>

          {/* Additional Projects Grid */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Other Notable Projects</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Task Management App",
                  description: "Collaborative task management with real-time updates, built with React and Firebase",
                  tech: ["React", "Firebase", "Tailwind CSS"],
                },
                {
                  title: "Weather Dashboard",
                  description: "Real-time weather application with multiple locations, forecasts, and weather alerts",
                  tech: ["React", "Node.js", "OpenWeather API"],
                },
                {
                  title: "Social Media Analytics Tool",
                  description: "Analytics platform for tracking social media metrics and generating insights",
                  tech: ["React", "Python", "PostgreSQL"],
                },
                {
                  title: "Blog Platform",
                  description: "Content management system with markdown support and comment functionality",
                  tech: ["React", "Node.js", "MongoDB"],
                },
              ].map((project, index) => (
                <div key={index} className="card-base">
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded text-xs bg-primary/10 text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Poster;
