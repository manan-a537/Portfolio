import { Layout } from "@/components/layout/Layout";
import { BarChart3, ArrowLeft, Code2, Zap, Database, GitBranch, CheckCircle, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const skillCategories = [
  {
    value: "5+",
    label: "Years of experience",
    icon: Code2,
  },
  {
    value: "10+",
    label: "Technologies mastered",
    icon: Zap,
  },
  {
    value: "20+",
    label: "Projects completed",
    icon: CheckCircle,
  },
  {
    value: "100%",
    label: "Dedication to quality",
    icon: Lightbulb,
  },
];

const technologies = [
  {
    name: "React.js",
    contribution: "Modern frontend development with component-based architecture, hooks, and state management",
  },
  {
    name: "Node.js",
    contribution: "Scalable backend development with Express.js, middleware, and asynchronous programming",
  },
  {
    name: "Python",
    contribution: "Versatile backend scripting, data processing, automation, and machine learning applications",
  },
  {
    name: "Java",
    contribution: "Enterprise-level applications with OOP principles, design patterns, and robust systems",
  },
];

const skillAreas = [
  "Frontend: React, HTML5, CSS3, TypeScript, State Management",
  "Backend: Node.js, Express.js, Python, Java",
  "Databases: MySQL, MongoDB, PostgreSQL",
  "Tools: Git, Docker, REST APIs, GraphQL",
  "Methodologies: Agile, TDD, Design Patterns",
  "Other: Authentication, Deployment, Performance Optimization",
];

const strengthAreas = [
  "Building responsive, interactive user interfaces",
  "Designing scalable backend architectures",
  "Writing clean, maintainable, and efficient code",
  "Problem-solving and algorithmic thinking",
  "Full-stack development and integration",
  "Continuous learning and technical improvement",
];

const Infographic = () => {
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
            <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
              <BarChart3 className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Skills & Specialties</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
            Technical Skills & Expertise
          </h1>
          
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive overview of my technical stack, specializations, and areas of expertise in full-stack development.
          </p>
        </div>
      </section>

      {/* Infographic Content */}
      <section className="page-container py-12 sm:py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Statistics Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Quick Stats</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((stat, index) => (
                <div key={index} className="card-base text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technologies Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Core Technologies</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="card-base">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground">{tech.contribution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Timeline */}
          <div className="card-base">
            <h2 className="text-xl font-bold mb-6 text-center">Technology Timeline</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
              
              <div className="space-y-8">
                {[
                  { year: "2019", event: "Started learning HTML, CSS, and JavaScript fundamentals" },
                  { year: "2020", event: "Mastered React.js and began building interactive frontend applications" },
                  { year: "2021", event: "Gained proficiency in Node.js and Express.js for backend development" },
                  { year: "2022", event: "Expanded expertise to Python and Java for versatile development" },
                  { year: "2023", event: "Specialized in full-stack development and system architecture" },
                  { year: "2024", event: "Leading projects and mentoring junior developers" },
                ].map((item, index) => (
                  <div key={index} className={`flex items-center gap-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <p className="font-semibold text-primary">{item.year}</p>
                      <p className="text-sm text-muted-foreground">{item.event}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Areas Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card-base">
              <h2 className="text-xl font-bold mb-4">Technical Skill Areas</h2>
              <ul className="space-y-3">
                {skillAreas.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-base bg-accent/5 border-accent/20">
              <h2 className="text-xl font-bold mb-4">Areas of Strength</h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                {strengthAreas.map((strength, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Visualization */}
          <div className="card-base p-0 overflow-hidden">
            <div className="aspect-[16/9] bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Technology Stack Visualization</h3>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  Replace this placeholder with a detailed tech stack infographic or architecture diagram.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Infographic;
