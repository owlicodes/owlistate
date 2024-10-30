import { Route } from "next";
import { headers } from "next/headers";
import Link from "next/link";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignInButton } from "@/features/auth/components/sign-in-button";
import { SignOutButton } from "@/features/auth/components/sign-out-button";
import { SignUpButton } from "@/features/auth/components/sign-up-button";
import { auth } from "@/lib/auth";

export const Header = async () => {
  const session = await auth.api.getSession({
    headers: headers(),
  });

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "News", href: "/news" },
    { name: "FAQ", href: "/faq" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">Owlistate</span>
            </Link>
          </div>
          <nav className="hidden space-x-4 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href as Route}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center space-x-2 md:flex">
            {!session?.user ? (
              <>
                <SignInButton />
                <SignUpButton />
              </>
            ) : (
              <SignOutButton />
            )}
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                  aria-label="Menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="hidden">Owlistate Navigation</SheetTitle>
                <SheetDescription className="hidden">
                  Navigate through all the available page.
                </SheetDescription>
                <nav className="mt-4 flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href as Route}
                      className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-4 flex flex-col space-y-2">
                    {!session?.user ? (
                      <>
                        <SignInButton />
                        <SignUpButton />
                      </>
                    ) : (
                      <SignOutButton />
                    )}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
