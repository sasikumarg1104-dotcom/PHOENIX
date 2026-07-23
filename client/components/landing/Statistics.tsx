import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Section from "@/components/ui/Section";

const stats = [
  { value: "12K+", label: "Community Members" },
  { value: "35K+", label: "Stories Shared" },
  { value: "4.8K+", label: "Support Circles" },
  { value: "150K+", label: "Healing Milestones" },
];

export default function Statistics() {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <GlassCard key={stat.label}>
              <h3 className="text-4xl font-bold text-violet-400">
                {stat.value}
              </h3>

              <p className="mt-3 text-gray-400">
                {stat.label}
              </p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}