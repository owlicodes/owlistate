import Image from "next/image";
import Link from "next/link";

import { Award, Home, TrendingUp, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[50vh] items-center justify-center text-white">
        <Image
          src="/About Us.jpg"
          alt="Real estate background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            About Owlistate
          </h1>
          <p className="text-xl md:text-2xl">
            Your Trusted Partner in Finding the Perfect Home
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gray-100 px-4 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
          <p className="text-xl text-gray-700">
            At Owlistate, we are committed to helping our clients find their
            perfect home while providing exceptional service and expertise in
            the real estate market. Our goal is to make the home buying and
            selling process as smooth and enjoyable as possible.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Home,
                title: "Extensive Listings",
                description:
                  "Access to a wide range of properties to suit every need and budget",
              },
              {
                icon: Users,
                title: "Expert Agents",
                description:
                  "A team of experienced and knowledgeable real estate professionals",
              },
              {
                icon: TrendingUp,
                title: "Market Insights",
                description:
                  "Up-to-date market analysis and trends to inform your decisions",
              },
              {
                icon: Award,
                title: "Award-Winning Service",
                description:
                  "Recognized for our commitment to client satisfaction",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="flex flex-col items-center p-6 text-center"
              >
                <feature.icon className="mb-4 h-12 w-12 text-primary" />
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-gray-100 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Jane Doe",
                role: "Founder & CEO",
                image: "/Jane Doe.jpg",
              },
              {
                name: "John Smith",
                role: "Senior Real Estate Agent",
                image: "/John Smith.jpg",
              },
              {
                name: "Emily Brown",
                role: "Marketing Director",
                image: "/Emily Brown.jpg",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="h-64 w-full object-cover"
                />
                <CardContent className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary px-4 py-16 text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Find Your Dream Home?
          </h2>
          <p className="mb-8 text-xl">
            Let us help you navigate the real estate market and find the perfect
            property.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
