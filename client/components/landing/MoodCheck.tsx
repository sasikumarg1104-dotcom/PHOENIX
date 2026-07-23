"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

const moods = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😌", label: "Calm" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😰", label: "Anxious" },
  { emoji: "😤", label: "Angry" },
  { emoji: "😴", label: "Exhausted" },
];

export default function MoodCheck() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <Section>
      <Container>
        <Heading
          title="How are you feeling today?"
          subtitle="There's no right or wrong answer. Just choose how you feel in this moment."
        />

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-3">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => setSelectedMood(mood.label)}
              className={`rounded-3xl border p-6 transition-all duration-300 ${
                selectedMood === mood.label
                  ? "border-violet-500 bg-violet-500/20"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              <div className="text-5xl">{mood.emoji}</div>

              <p className="mt-4 text-lg font-medium text-white">
                {mood.label}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button disabled={!selectedMood}>
            Continue
          </Button>
        </div>
      </Container>
    </Section>
  );
}