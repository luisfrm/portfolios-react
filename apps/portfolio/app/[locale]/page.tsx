import { Layout, MainContent, Footer, ModernHero, HeroContent } from "@/components/layout";
import Navigation from "@/components/navigation/navigation";
import Projects from "@/components/projects/projects";
import WorkExperience from "@/components/work-experience-accordion/work-experience";
import Education from "@/components/education/education";
import Skills from "@/components/skills/skills";
import { ContactForm } from "@/components/contact/contact-form";
import { UpWidget } from "@/components/common/up-widget";

export default function HomePage() {
  return (
    <Layout>
      <UpWidget />
      <Navigation />
      <ModernHero>
        <HeroContent />
      </ModernHero>
      <MainContent>
        <WorkExperience />
        <Projects />
        <Education />
        <Skills />
        <ContactForm />
      </MainContent>
      <Footer />
    </Layout>
  );
}
