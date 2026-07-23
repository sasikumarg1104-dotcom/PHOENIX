import {
  Heart,
  BookOpen,
  Sparkles,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import GlassCard from "@/components/ui/GlassCard";

const features = [
  {
    icon: Heart,
    title: "Anonymous Stories",
    description:
      "Share your feelings without revealing your identity. Sometimes the first step to healing is simply being heard.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description:
      "Meet people who truly understand your journey and build meaningful, judgment-free connections.",
  },
  {
    icon: Sparkles,
    title: "Healing Journey",
    description:
      "Track your moods, build healthy habits, and celebrate small victories every single day.",
  },
  {
    icon: BookOpen,
    title: "Articles & Resources",
    description:
      "Read carefully curated articles designed to inspire growth, resilience, and emotional well-being.",
  },
];

export default function Features() {
  return (
    <Section>
      <Container>

        <Heading
          title="How Phoenix Helps You"
          subtitle="Everything you need to heal, grow, and build meaningful connections in one safe place."
        />

        <div className="grid gap-8 md:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <GlassCard key={feature.title}>

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20">

                  <Icon className="h-7 w-7 text-violet-400" />

                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {feature.description}
                </p>

              </GlassCard>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}