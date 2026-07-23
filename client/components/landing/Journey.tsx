import {
  HeartHandshake,
  Users,
  Sprout,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const steps = [
  {
    icon: HeartHandshake,
    title: "Share",
    description:
      "Express your feelings safely and anonymously.",
  },
  {
    icon: Users,
    title: "Connect",
    description:
      "Find people who genuinely understand your journey.",
  },
  {
    icon: Sprout,
    title: "Grow",
    description:
      "Build small daily habits that create meaningful change.",
  },
  {
    icon: Sparkles,
    title: "Rise",
    description:
      "Celebrate your progress and continue moving forward.",
  },
];

export default function Journey() {
  return (
    <Section>
      <Container>
        <Heading
          title="Your Healing Journey"
          subtitle="Healing isn't about becoming someone else. It's about becoming yourself again."
        />

        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="flex items-start gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/20">
                  <Icon className="h-8 w-8 text-violet-400" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {index + 1}. {step.title}
                  </h3>

                  <p className="mt-3 text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}