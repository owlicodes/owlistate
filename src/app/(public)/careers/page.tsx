import Image from "next/image";

import { Briefcase, Building, TrendingUp, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-4xl font-bold">Join Our Growing Team</h2>
            <p className="mb-8 text-xl">
              Discover exciting opportunities in the world of real estate
            </p>
            <Button size="lg" className="px-8 text-lg">
              View Open Positions
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Building,
                  title: "Industry Leader",
                  description: "Work with top professionals in real estate",
                },
                {
                  icon: Users,
                  title: "Collaborative Culture",
                  description: "Join a supportive and dynamic team",
                },
                {
                  icon: TrendingUp,
                  title: "Growth Opportunities",
                  description: "Advance your career with our training programs",
                },
                {
                  icon: Briefcase,
                  title: "Competitive Benefits",
                  description: "Enjoy comprehensive benefits and perks",
                },
              ].map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <benefit.icon className="mb-4 h-12 w-12 text-primary" />
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Current Openings
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Real Estate Agent",
                  location: "New York, NY",
                  type: "Full-time",
                },
                {
                  title: "Property Manager",
                  location: "Los Angeles, CA",
                  type: "Full-time",
                },
                {
                  title: "Marketing Specialist",
                  location: "Chicago, IL",
                  type: "Full-time",
                },
                {
                  title: "Leasing Consultant",
                  location: "Miami, FL",
                  type: "Part-time",
                },
                {
                  title: "Real Estate Analyst",
                  location: "San Francisco, CA",
                  type: "Full-time",
                },
                {
                  title: "Administrative Assistant",
                  location: "Boston, MA",
                  type: "Full-time",
                },
              ].map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{job.type}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Apply Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Culture</h2>
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <p className="mb-4 text-lg">
                  At Owlistate, we foster a culture of innovation,
                  collaboration, and excellence. Our team is passionate about
                  transforming the real estate industry and providing
                  exceptional service to our clients.
                </p>
                <p className="mb-4 text-lg">
                  We believe in continuous learning, embracing challenges, and
                  celebrating our successes together. Join us and be part of a
                  team that&apos;s shaping the future of real estate.
                </p>
              </div>
              <div className="rounded-lg bg-muted">
                <Image
                  src="/Culture.jpg"
                  alt="Our Culture"
                  height={400}
                  width={600}
                  className="rounded-t-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Get in Touch
            </h2>
            <Card className="mx-auto max-w-2xl">
              <CardHeader>
                <CardTitle>
                  Have questions about our career opportunities?
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-1 block text-sm font-medium"
                      >
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-1 block text-sm font-medium"
                      >
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block text-sm font-medium"
                    >
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message here..." />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Submit</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
