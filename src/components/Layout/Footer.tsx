import { ReactNode } from 'react';
import Skills from '@/components/Skills/Skills';
import SocialMedia from '@/components/SocialMedia/SocialMedia';
import type { Skills as SkillsType, SocialMedia as SocialMediaType } from '@/lib/types.d';

interface FooterProps {
  skills: SkillsType;
  socialMedia: SocialMediaType[];
  children?: ReactNode;
}

export function Footer({ skills, socialMedia, children }: FooterProps) {
  return (
    <>
      <Skills skills={skills} />
      <SocialMedia content={socialMedia} />
      {children || "Developed with ❤️ by Luis Rivas"}
    </>
  );
} 