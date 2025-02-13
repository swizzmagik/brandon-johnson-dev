import { Background } from "@/components/background";
import { Companies } from "@/components/companies";
import { Container } from "@/components/Container-old";
import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { GridFeatures } from "@/components/grid-features";
import { Hero } from "@/components/hero";
import { ProjectsGrid } from "@/components/projects-grid";
import { Testimonials } from "@/components/testimonials";
import { WorkExperienceCarousel } from "@/components/work-experience-carousel";
// test2 3

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden ">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col items-center justify-between ">
        <Hero />
        <Companies />
        <div id="skills">
          <GridFeatures />
        </div>
        <div id="experience">
          <WorkExperienceCarousel />
        </div>
        <div id="ai-agents">
          <Features />
        </div>
        <div id="projects">
          <ProjectsGrid />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
      </Container>
      <div className="relative">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Background />
        </div>
        <CTA />
      </div>
    </div>
  );
}
