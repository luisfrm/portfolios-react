import { Layout, MainContent, Footer, ModernHero, HeroContent } from "@/components/layout";
import Navigation from "@/components/navigation/navigation";
import Projects from "@/components/projects/projects";
import WorkExperience from "@/components/work-experience-accordion/work-experience";
import Education from "@/components/education/education";
import { ContactForm } from "@/components/contact/contact-form";
import { MouseMoveEffect } from "@/components/mouse-move/mouse-move-effect";
import { UpWidget } from "@/components/common/up-widget";

export default function HomePage() {
  return (
    <Layout>
      <MouseMoveEffect />
      <UpWidget />
      <Navigation />
      <ModernHero>
        <HeroContent />
      </ModernHero>
      <MainContent footer={<Footer />}>
        <WorkExperience />
        <Projects />
        <Education />
        <ContactForm />
      </MainContent>
    </Layout>
  );
}
