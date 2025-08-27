import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Solutions",
      image: "/professional-woman-headshot.png",
      content:
        "Alex consistently delivers high-quality code and innovative solutions. His ability to translate complex requirements into elegant technical implementations is exceptional.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      image: "/professional-man-headshot.png",
      content:
        "Working with Alex was a game-changer for our startup. He built our entire platform from scratch and scaled it to handle thousands of users seamlessly.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Lead Designer",
      company: "Digital Agency Pro",
      image: "/professional-woman-designer-headshot.png",
      content:
        "Alex has an incredible eye for detail and user experience. He brings designs to life with pixel-perfect precision and smooth interactions.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-4 text-balance">What People Say</h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Testimonials from colleagues, clients, and collaborators I've had the pleasure of working with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="font-open-sans text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="font-montserrat font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-montserrat font-semibold">{testimonial.name}</p>
                    <p className="font-open-sans text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
