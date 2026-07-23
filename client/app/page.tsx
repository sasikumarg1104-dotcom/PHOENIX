import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Statistics from "@/components/landing/Statistics";
import Features from "@/components/landing/Features";
import Journey from "@/components/landing/Journey";
import MoodCheck from "@/components/landing/MoodCheck";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Features />
      <Journey />
      <MoodCheck />
    </>
  );
}