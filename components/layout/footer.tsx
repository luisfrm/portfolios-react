import { Skills } from "@/components/skills/skills";
import { SocialMedia } from "@/components/social-media/social-media";

export function Footer() {
  return (
    <>
      <Skills />
      <SocialMedia />
      <p className="text-center text-sm text-muted-foreground">
        Developed with ❤️ by Luis Rivas
      </p>
    </>
  );
}
