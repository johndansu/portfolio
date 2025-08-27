import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ExternalLink } from "lucide-react"

export function Blog() {
  const blogPosts = [
    {
      title: "Building Scalable React Applications with TypeScript",
      excerpt:
        "Learn best practices for structuring large React applications with TypeScript, including advanced patterns for state management and component architecture.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      image: "/placeholder-e8psu.png",
      url: "#",
      featured: true,
    },
    {
      title: "Optimizing Next.js Performance: A Complete Guide",
      excerpt:
        "Deep dive into Next.js performance optimization techniques, from image optimization to server-side rendering strategies.",
      date: "2023-12-20",
      readTime: "12 min read",
      tags: ["Next.js", "Performance", "Web Vitals"],
      image: "/nextjs-performance-dashboard.png",
      url: "#",
      featured: true,
    },
    {
      title: "Microservices Architecture with Node.js and Docker",
      excerpt:
        "How to design and implement a microservices architecture using Node.js, Docker, and Kubernetes for scalable applications.",
      date: "2023-11-10",
      readTime: "15 min read",
      tags: ["Node.js", "Docker", "Microservices"],
      image: "/microservices-architecture.png",
      url: "#",
      featured: true,
    },
    {
      title: "Modern CSS Techniques for Better UX",
      excerpt:
        "Exploring modern CSS features like Grid, Flexbox, and custom properties to create better user experiences.",
      date: "2023-10-05",
      readTime: "6 min read",
      tags: ["CSS", "UX", "Frontend"],
      image: "/placeholder-6wc2m.png",
      url: "#",
      featured: false,
    },
    {
      title: "API Design Best Practices",
      excerpt: "Guidelines for designing RESTful APIs that are maintainable, scalable, and developer-friendly.",
      date: "2023-09-18",
      readTime: "10 min read",
      tags: ["API", "REST", "Backend"],
      image: "/api-documentation-interface.png",
      url: "#",
      featured: false,
    },
  ]

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured)

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-4 text-balance">Latest Articles</h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Sharing insights, tutorials, and thoughts on modern web development, best practices, and emerging
            technologies.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="font-montserrat font-bold text-2xl mb-8">Featured Articles</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="font-open-sans">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="font-open-sans">{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="font-montserrat font-bold text-xl hover:text-primary transition-colors">
                    <a href={post.url}>{post.title}</a>
                  </CardTitle>
                  <CardDescription className="font-open-sans leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="font-open-sans text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      Read More
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="font-montserrat font-bold text-2xl mb-8">Recent Posts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...featuredPosts.slice(2), ...recentPosts].map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="font-open-sans">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="font-open-sans">{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="font-montserrat font-bold text-lg hover:text-primary transition-colors">
                    <a href={post.url}>{post.title}</a>
                  </CardTitle>
                  <CardDescription className="font-open-sans text-sm leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="font-open-sans text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="font-open-sans text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All Articles
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
