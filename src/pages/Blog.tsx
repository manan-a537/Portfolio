import { Layout } from "@/components/layout/Layout";
import { 
  Code2, 
  Zap, 
  Cpu, 
  Layers, 
  TrendingUp, 
  Lightbulb,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Blog = () => {
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
              <Code2 className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Technical Blog</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
            Building Modern Web Applications with React and Node.js
          </h1>
          
          <p className="text-muted-foreground max-w-2xl">
            Exploring best practices, architectural patterns, and technical insights for developing scalable and maintainable full-stack applications.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="page-container py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The landscape of web development has evolved dramatically over the past decade. With the rise of powerful 
              frontend frameworks like React and robust backend solutions like Node.js, developers can now build sophisticated, 
              full-stack applications with unprecedented ease and scalability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This article explores the modern approach to web application development, examining the synergy between React 
              on the frontend and Node.js on the backend. We'll discuss architectural patterns, best practices, and practical 
              strategies for building applications that are not just functional, but also maintainable and scalable.
            </p>
          </section>

          {/* Key Statistics Card */}
          <div className="card-base bg-accent/5 border-accent/20 mb-12">
            <div className="flex items-start gap-4">
              <TrendingUp className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Key Development Facts</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• React is used by over 40% of professional developers worldwide</li>
                  <li>• Node.js powers millions of applications with non-blocking I/O architecture</li>
                  <li>• Full-stack JavaScript enables seamless code sharing between client and server</li>
                  <li>• Modern build tools and frameworks have reduced development time by 30-50%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Frontend Development */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">React: The Frontend Revolution</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              React has transformed how we build user interfaces by introducing component-based architecture and declarative 
              programming. Instead of manually manipulating the DOM, developers describe what the UI should look like, and 
              React efficiently handles the rendering and updates.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The power of React lies in its virtual DOM mechanism, which optimizes performance by minimizing direct DOM 
              manipulation. Combined with state management solutions and hooks for functional components, React enables the 
              creation of responsive, maintainable user interfaces at scale.
            </p>
          </section>

          {/* Backend Development */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Node.js: Server-Side Excellence</h2>
            
            <div className="grid gap-6">
              <div className="card-base">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Asynchronous I/O</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Node.js uses a non-blocking, event-driven architecture that allows handling thousands of concurrent 
                      connections efficiently. This makes it ideal for I/O-intensive applications like real-time chat systems, 
                      streaming services, and high-traffic web applications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-base">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Rich Ecosystem</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The Node Package Manager (npm) hosts over a million packages, providing developers with ready-made 
                      solutions for authentication, database integration, API development, and much more. Frameworks like 
                      Express.js simplify server development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-base">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">JavaScript Everywhere</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Using JavaScript on both frontend and backend enables code reuse, consistent coding patterns, and 
                      faster development cycles. Developers can move fluidly between client-side and server-side concerns 
                      without context switching.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Integration & Best Practices */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Integration & Best Practices</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Building a successful full-stack application requires more than just technical knowledge. It demands attention 
              to architectural patterns, separation of concerns, and adherence to best practices.
            </p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Key Principles:</h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• <strong>API-First Design:</strong> Define clear APIs between frontend and backend for smooth integration</li>
                <li>• <strong>Component Modularity:</strong> Build reusable components that encapsulate logic and styling</li>
                <li>• <strong>Error Handling:</strong> Implement comprehensive error handling at both layers</li>
                <li>• <strong>Security:</strong> Validate input, use HTTPS, manage secrets securely, and implement authentication</li>
                <li>• <strong>Testing:</strong> Write unit tests, integration tests, and end-to-end tests for reliability</li>
                <li>• <strong>Performance Optimization:</strong> Code splitting, lazy loading, caching, and database optimization</li>
              </ul>
            </div>
          </section>

          {/* Personal Insights */}
          <section className="mb-12">
            <div className="card-base border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Personal Insights</h3>
                  <div className="text-muted-foreground space-y-3 text-sm leading-relaxed">
                    <p>
                      Through my experience with React and Node.js, I have learned that choosing the right technology is only 
                      half the battle. What truly matters is understanding the problem space, making informed architectural decisions, 
                      and executing with precision.
                    </p>
                    <p>
                      React's component model has taught me the value of breaking down complex problems into manageable pieces, 
                      while Node.js has shown me the elegance of asynchronous programming and event-driven architectures. 
                      Both technologies demand a deep understanding of JavaScript fundamentals.
                    </p>
                    <p>
                      My commitment is to continuously improve my craft by staying updated with the latest developments, 
                      exploring new tools and patterns, and most importantly, writing code that is clean, efficient, and serves 
                      the end user's needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              React and Node.js have become the de facto standards for building modern web applications. Their combination 
              provides developers with powerful tools to create scalable, maintainable, and performant applications that meet 
              the demands of today's digital landscape.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a developer, mastering these technologies and understanding their principles enables you to build not just 
              applications that work, but solutions that excel. The journey of learning and improving never stops, and I am 
              committed to pushing the boundaries of what is possible with modern web technologies.
            </p>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default Blog;
