import Landing from "@/components/Landing";
import About from "@/components/About";
import Faqs from "@/components/Faqs";
import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";

export default function Home() {
  return (
    <div className="font-ibm-plex-mono">
      <Navbar1 />
      <Landing />
      <About />

      <div className="w-full flex items-center justify-center">
        <Faqs />
      </div>
      <div className="text-center py-6 px-2 border botder-t">
        <p className="text-sm text-muted-foreground">
          © 2025 TalkItOut. All rights reserved.
        </p>
      </div>
    </div>
  );
}
