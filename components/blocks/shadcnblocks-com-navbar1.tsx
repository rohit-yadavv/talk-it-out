"use client";

import { Menu } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { JSX } from "react/jsx-runtime";
import Image from "next/image";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/talkitout-logo.png", // replace with your real logo path
    alt: "TalkItOut Logo",
    title: "TalkItOut",
  },
  menu = [
    { title: "About Us", url: "#about" },
    { title: "Faqs", url: "#faqs" },
  ],
  auth = {
    login: { text: "Login", url: "/login" },
    signup: { text: "Sign Up", url: "/signup" },
  },
}: Navbar1Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAuthAction = () => {
    setIsOpen(false);
  };

  return (
    <section className="bg-white/20 backdrop-blur-3xl shadow-sm sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Desktop Navbar */}
        <nav className="hidden lg:flex w-full justify-between items-center">
          <Link href={logo.url} className="flex items-center gap-3">
            <span className="text-2xl font-bold tracking-wide text-gray-900">
              {logo.title}
            </span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="outline"
                  size="sm"
                  className="uppercase font-semibold tracking-wide"
                >
                  {auth.login.text}
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button
                  size="sm"
                  className="uppercase font-semibold tracking-wide"
                >
                  {auth.signup.text}
                </Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-9 h-9 rounded-full",
                  },
                }}
              />
            </SignedIn>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <div className="flex lg:hidden w-full justify-between items-center">
          <a href={logo.url} className="flex items-center gap-2">
            <Image
              width={36}
              height={36}
              src={logo.src}
              alt={logo.alt}
              className="rounded"
            />
            <span className="text-lg font-semibold">{logo.title}</span>
          </a>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open Menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            <SheetContent className="p-6">
              <SheetHeader>
                <SheetTitle>
                  <a href={logo.url} className="flex items-center gap-2">
                    <Image
                      width={36}
                      height={36}
                      src={logo.src}
                      alt={logo.alt}
                      className="rounded"
                    />
                    <span className="text-xl font-semibold">{logo.title}</span>
                  </a>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-6">
                <Accordion type="single" collapsible className="w-full">
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>

                <div className="mt-6 flex flex-col gap-4">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <Button variant="outline" onClick={handleAuthAction}>
                        {auth.login.text}
                      </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button onClick={handleAuthAction}>
                        {auth.signup.text}
                      </Button>
                    </SignUpButton>
                  </SignedOut>

                  <SignedIn>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" className="w-full">
                          Sign Out
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Sign Out Confirmation
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to sign out? You&apos;ll need
                            to login again to access your account.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <SignOutButton>
                            <AlertDialogAction onClick={handleAuthAction}>
                              Yes, Sign Out
                            </AlertDialogAction>
                          </SignOutButton>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </SignedIn>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="text-gray-700 font-semibold hover:text-red-600">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-64 p-3 space-y-2">
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <Link
                  href={subItem.url}
                  className="flex items-center gap-3 rounded-md p-3 hover:bg-red-50 hover:text-red-600 transition"
                >
                  {subItem.icon}
                  <div>
                    <p className="font-semibold">{subItem.title}</p>
                    {subItem.description && (
                      <p className="text-sm text-gray-500">
                        {subItem.description}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="text-gray-700 font-semibold uppercase text-sm hover:text-red-600"
        onClick={(e) => {
          if (item.url.startsWith("#")) {
            e.preventDefault();
            const element = document.querySelector(item.url);
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-3 text-lg font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="pl-4">
          {item.items.map((subItem) => (
            <a
              key={subItem.title}
              href={subItem.url}
              className="block rounded-md p-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
            >
              <div className="font-semibold">{subItem.title}</div>
              {subItem.description && (
                <p className="text-sm text-gray-500">{subItem.description}</p>
              )}
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className="block py-2 text-lg font-semibold text-gray-800 hover:text-red-600"
    >
      {item.title}
    </a>
  );
};

export { Navbar1 };
