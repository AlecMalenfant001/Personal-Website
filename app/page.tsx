import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import { Amplify } from "aws-amplify";
import config from "aws-exports.js";

Amplify.configure(config);

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
