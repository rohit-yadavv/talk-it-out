"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Clock, ShieldCheck, MessageSquare, Lightbulb } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      title: "Always Available",
      description: "Chat anytime, day or night.",
      icon: <Clock className="w-10 h-10 text-red-500" />,
    },
    {
      title: "Safe & Private",
      description: "Your space, free from judgment.",
      icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
    },
    {
      title: "Understands Vibe",
      description: "AI that speaks your language.",
      icon: <MessageSquare className="w-10 h-10 text-red-500" />,
    },
    {
      title: "Helpful Support",
      description: "Clarity and calm, tailored for you.",
      icon: <Lightbulb className="w-10 h-10 text-red-500" />,
    },
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-10 py-16 bg-gray-50 rounded-[40px] my-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-8">
        Why TalkItOut?
      </h2>
      <p className="max-w-3xl mx-auto text-center text-lg md:text-xl text-gray-700 mb-16 leading-relaxed">
        Life can get messy. Whether you&apos;re stressed, anxious, or just need
        to vent, TalkItOut is here 24/7 to listen and chat. Powered by advanced
        AI, it’s designed to understand your feelings and provide thoughtful,
        supportive conversation — without any stigma.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {features.map(({ title, description, icon }) => (
          <Card
            key={title}
            className="shadow-lg hover:shadow-xl transition-shadow rounded-3xl"
          >
            <CardHeader className="flex flex-col items-center space-y-2">
              {icon}
              <CardTitle className="text-xl font-semibold text-center">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600">
                {description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
