"use client";
import Link from "next/link";
import DotPattern from "./ui/dot-pattern";

export default function Landing() {
  return (
    <>
      <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0 md:py-24 py-12">
        <div className="relative flex flex-col items-center border border-red-500 rounded-[40px] px-4 sm:px-6 md:px-10 xl:px-20">
          <DotPattern width={5} height={5} />

          {/* Red Corner Dots */}
          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-red-500" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-red-500" />
          <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-red-500" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-red-500" />

          {/* Hero Content */}
          <div className="relative z-20 mx-auto max-w-7xl rounded-[40px] py-6 md:p-10 xl:py-20 text-center">
            <p className="text-sm md:text-lg text-red-500 lg:text-xl xl:text-3xl font-medium tracking-wide">
              TalkItOut - Your AI Counselor
            </p>

            <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900 mt-4 leading-tight">
              Real Talk, Anytime.
            </h1>

            <p className="mt-6 text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              TalkItOut is your always-available AI counselor – built to listen,
              support, and vibe with your feelings. Zero judgment, just support.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-2 sm:px-0">
              <button
                type="button"
                className="w-full sm:w-auto bg-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition"
              >
                <Link href={"/talk-it-out"}>Start Talking</Link>
              </button>
              <button
                type="button"
                className="w-full sm:w-auto border border-red-500 text-red-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-50 transition"
              >
                <Link href={"#about"}>Learn More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
