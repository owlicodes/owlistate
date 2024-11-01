import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Contact Us</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <Input type="tel" id="phone" name="phone" className="mt-1" />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Textarea id="message" name="message" required className="mt-1" />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg bg-gray-100 p-6">
            <h2 className="mb-4 text-xl font-semibold">Our Office</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-gray-600" />
                123 Real Estate St, City, State 12345
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-600" />
                (123) 456-7890
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-600" />
                contact@realestate.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
