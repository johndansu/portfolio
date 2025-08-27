import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar } from "lucide-react"

export function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      status: "Active",
      credentialId: "AWS-SA-2023-001",
      description: "Validates expertise in designing distributed systems on AWS",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      status: "Active",
      credentialId: "GCP-PD-2023-002",
      description: "Demonstrates ability to build scalable applications on Google Cloud",
      skills: ["GCP Services", "Kubernetes", "CI/CD", "Monitoring"],
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      status: "Active",
      credentialId: "CKA-2022-003",
      description: "Validates skills in Kubernetes cluster administration",
      skills: ["Kubernetes", "Container Orchestration", "DevOps", "Troubleshooting"],
    },
    {
      title: "Meta Frontend Developer Professional",
      issuer: "Meta (Coursera)",
      date: "2022",
      status: "Completed",
      credentialId: "META-FE-2022-004",
      description: "Comprehensive frontend development specialization",
      skills: ["React", "JavaScript", "HTML/CSS", "Version Control"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      year: "2019",
      gpa: "3.8/4.0",
      relevant: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"],
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl mb-4 text-balance">
            Certifications & Education
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Continuous learning and professional development through industry-recognized certifications and formal
            education.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="font-montserrat font-bold text-2xl mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="font-montserrat font-bold text-lg">{cert.title}</CardTitle>
                        <p className="font-open-sans text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    <Badge
                      variant={cert.status === "Active" ? "default" : "secondary"}
                      className="font-open-sans text-xs"
                    >
                      {cert.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-open-sans text-sm text-muted-foreground leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-open-sans">Earned {cert.date}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="font-open-sans text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <p className="font-open-sans text-xs text-muted-foreground">Credential ID: {cert.credentialId}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="font-montserrat font-bold text-2xl mb-8">Education</h3>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="font-montserrat font-bold text-lg">{edu.degree}</h4>
                      <p className="font-open-sans text-primary font-medium">{edu.school}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-open-sans text-muted-foreground">{edu.year}</p>
                      <p className="font-open-sans text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-open-sans font-medium mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="secondary" className="font-open-sans text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
