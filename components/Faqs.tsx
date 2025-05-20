import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const talkItOutFaqData = {
  heading: "Frequently Asked Questions",
  description:
    "Got questions about how TalkItOut works? Here's everything you need to know. Still unsure? Reach out to our support team anytime.",
  items: [
    {
      id: "faq-1",
      question: "What is TalkItOut?",
      answer:
        "TalkItOut is an AI-powered counselor designed to provide supportive, judgment-free conversations whenever you need someone to talk to.",
    },
    {
      id: "faq-2",
      question: "Is TalkItOut a real therapist?",
      answer:
        "No, TalkItOut is an AI tool meant to offer supportive conversations and mental health tips. It's not a substitute for professional therapy or medical advice.",
    },
    {
      id: "faq-3",
      question: "How do you protect my privacy?",
      answer:
        "Your privacy is our top priority. Conversations are encrypted, and we do not share your data with third parties. You can chat with confidence knowing your information is safe.",
    },
    {
      id: "faq-4",
      question: "Can TalkItOut understand my feelings?",
      answer:
        "Yes! TalkItOut uses advanced AI to recognize your mood and respond with empathy, aiming to vibe with how you feel and offer helpful support.",
    },
    {
      id: "faq-5",
      question: "Is TalkItOut free to use?",
      answer:
        "Yes, TalkItOut offers free access to its core counseling features. We may introduce premium features in the future to enhance your experience.",
    },
  ],
  supportHeading: "Still have questions?",
  supportDescription:
    "If you didn't find what you were looking for, our friendly support team is here to help. Reach out anytime!",
  supportButtonText: "Contact Support",
  supportButtonUrl: "mailto:rk4740779@gmail.com",
};

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  heading: string;
  description: string;
  items?: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const Faq3 = ({
  heading = "Frequently asked questions",
  description = "Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.",
  items,
  supportHeading = "Need more support?",
  supportDescription = "Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.",
  supportButtonText = "Contact Support",
  supportButtonUrl = "https://www.shadcnblocks.com",
}: Faq3Props) => {
  return (
    <section id="faqs" className="py-32">
      <div className="container space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items?.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-accent p-4 text-center md:rounded-xl md:p-6 lg:p-8">
          <div className="relative">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-2.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-3.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 size-16 border md:mb-5">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-1.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto" asChild>
              <a href={supportButtonUrl} target="_blank">
                {supportButtonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Faqs() {
  return <Faq3 {...talkItOutFaqData} />;
}
