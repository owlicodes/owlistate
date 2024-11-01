import Image from "next/image";
import Link from "next/link";

import { ArrowRight, CalendarIcon, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NewsPage() {
  // In a real application, this data would come from an API or database
  const featuredArticle = {
    title: "Housing Market Trends: What to Expect in 2024",
    description:
      "An in-depth analysis of the upcoming trends in the real estate market for 2024.",
    image: "/Market Trend.jpg",
    date: "2023-11-01",
    readTime: "8 min read",
    category: "Market Analysis",
  };

  const articles = [
    {
      title: "5 Tips for First-Time Home Buyers",
      description:
        "Essential advice for those entering the real estate market for the first time.",
      image: "/Tips.jpg",
      date: "2023-10-28",
      readTime: "5 min read",
      category: "Buying",
    },
    {
      title: "The Impact of Remote Work on Real Estate",
      description:
        "How the shift to remote work is changing housing preferences and market dynamics.",
      image: "/Impact.jpg",
      date: "2023-10-25",
      readTime: "6 min read",
      category: "Trends",
    },
    {
      title: "Sustainable Home Features That Increase Property Value",
      description:
        "Eco-friendly upgrades that can boost your home's market value.",
      image: "/Features.jpg",
      date: "2023-10-22",
      readTime: "4 min read",
      category: "Home Improvement",
    },
    {
      title: "Understanding Property Taxes: A Homeowner's Guide",
      description:
        "Everything you need to know about property taxes and how they affect homeownership.",
      image: "/Understanding.jpg",
      date: "2023-10-19",
      readTime: "7 min read",
      category: "Finance",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Real Estate News & Insights
      </h1>

      {/* Featured Article */}
      <Card className="mb-12 shadow-md">
        <CardContent className="p-0">
          <div className="md:flex">
            <div className="relative h-64 md:h-auto md:w-2/3">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
            </div>
            <div className="p-6 md:w-1/3">
              <Badge className="mb-2">{featuredArticle.category}</Badge>
              <h2 className="mb-2 text-2xl font-bold">
                {featuredArticle.title}
              </h2>
              <p className="mb-4 text-muted-foreground">
                {featuredArticle.description}
              </p>
              <div className="mb-4 flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>{featuredArticle.date}</span>
                <Clock className="ml-4 mr-2 h-4 w-4" />
                <span>{featuredArticle.readTime}</span>
              </div>
              <Link
                href="#"
                className="inline-flex items-center text-primary hover:underline"
              >
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Article Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {articles.map((article, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader className="p-0">
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <Badge className="mb-2">{article.category}</Badge>
              <CardTitle className="mb-2 text-xl">{article.title}</CardTitle>
              <CardDescription className="mb-4">
                {article.description}
              </CardDescription>
              <div className="mb-4 flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>{article.date}</span>
                <Clock className="ml-4 mr-2 h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <Link
                href="#"
                className="inline-flex items-center text-primary hover:underline"
              >
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
