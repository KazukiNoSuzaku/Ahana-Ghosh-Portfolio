"use client";

import SectionContainer from "./SectionContainer";
import ResearchCard from "./ResearchCard";
import { researchExperiences } from "@/lib/data";

export default function Research() {
  return (
    <SectionContainer
      id="research"
      eyebrow="Research Experience"
      title="Scientific Journey"
      subtitle="Investigating cancer immunity from multiple angles — spanning bench-top experiments, computational analysis, and translational models."
      alt
    >
      <div className="space-y-6">
        {researchExperiences.map((exp, i) => (
          <ResearchCard key={exp.id} experience={exp} index={i} />
        ))}
      </div>
    </SectionContainer>
  );
}
