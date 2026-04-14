import { MainShell } from "@/components/layout/main-shell";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroPanel } from "@/components/sections/hero-panel";
import { LaboratorySection } from "@/components/sections/laboratory-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TimelineSection } from "@/components/sections/timeline-section";

export default function Home() {
  return (
    <MainShell>
      <HeroPanel />
      <ProjectsSection />
      <TimelineSection />
      <LaboratorySection />
      <ContactSection />
    </MainShell>
  );
}
