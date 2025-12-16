import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ThemeCard } from "@/components/ui/theme-card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Zap,
  Layers,
  Palette,
  ArrowRight,
  BookOpen,
  Briefcase,
  FileText,
  BarChart3,
  Lightbulb
} from "lucide-react";

const themes = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with React.js, HTML5, and modern CSS techniques.",
    color: "primary" as const,
  },
  {
    icon: Zap,
    title: "Backend Development",
    description: "Developing scalable server-side applications and APIs using Node.js and Python.",
    color: "primary" as const,
  },
  {
    icon: Layers,
    title: "Full-Stack Solutions",
    description: "Creating end-to-end applications that seamlessly integrate frontend and backend technologies.",
    color: "accent" as const,
  },
  {
    icon: Palette,
    title: "Java Development",
    description: "Writing robust object-oriented applications with Java for enterprise-level solutions.",
    color: "accent" as const,
  },
];

const sections = [
  {
    icon: BookOpen,
    title: "Technical Blog",
    description: "In-depth articles on React, Node.js, Python, and web development best practices",
    path: "/blog",
  },
  {
    icon: Briefcase,
    title: "Projects",
    description: "Showcase of technical projects and portfolio work",
    path: "/poster",
  },
  {
    icon: BarChart3,
    title: "Skills & Specialties",
    description: "Comprehensive overview of technical skills and tech stack",
    path: "/infographic",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="page-container section-spacing">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Code2 className="h-4 w-4" />
              Full-Stack Developer & Software Engineer
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Manan Arora
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              React • Node.js • Python • Java • HTML/CSS
            </p>

            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              I am a passionate full-stack developer specializing in building scalable web applications and robust backend systems.
              With expertise in React.js, Node.js, Python, and Java, I create elegant solutions to complex technical problems.
              Explore my work, read my technical insights, and discover what drives my passion for software development.
            </p>

            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg">
                <Link to="/blog">
                  Read My Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/poster">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Themes Section */}
      <section className="page-container section-spacing">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I specialize in these core technology areas to deliver comprehensive solutions for modern web development challenges.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, index) => (
            <div 
              key={theme.title} 
              className="animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ThemeCard {...theme} />
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="bg-muted/30">
        <div className="page-container section-spacing">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore My Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navigate through my blog posts, project portfolio, and technical skills to learn more about my work and expertise.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {sections.map((section, index) => (
              <Link
                key={section.path}
                to={section.path}
                className="card-base group hover:-translate-y-1 flex items-start gap-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <section.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="page-container section-spacing">
        <div className="max-w-3xl mx-auto">
          <div className="card-base border-l-4 border-l-primary">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Lightbulb className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">About Me</h3>
                <div className="text-muted-foreground space-y-3 leading-relaxed">
                  <p>
                    I am a dedicated software engineer with a passion for building elegant and scalable web applications.
                    My journey in computer science has taken me through various programming languages and frameworks,
                    each contributing to a comprehensive understanding of modern software development.
                  </p>
                  <p>
                    My specialization spans across frontend technologies like React.js and backend development with Node.js and Python.
                    I am also experienced in Java for enterprise applications and have a strong foundation in HTML/CSS.
                    This diverse skill set allows me to take on full-stack development challenges and deliver complete solutions.
                  </p>
                  <p>
                    I believe in clean code, continuous learning, and writing software that not only solves problems but also
                    stands as a testament to good engineering practices. Through this portfolio, I share my technical insights,
                    project experiences, and commitment to excellence in software development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
