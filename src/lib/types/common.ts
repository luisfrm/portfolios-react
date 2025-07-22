import { ReactNode } from 'react';

// Base interfaces
export interface BaseItem {
  name: string;
}

export interface BaseContent {
  title: string;
}

export interface IconProps {
  icon: ReactNode;
  url: string;
}

// Navigation types
export interface NavItem extends BaseItem {
  href: string;
}

// Contact types
export interface ContactInfo {
  email: string;
  phone: string;
  city: string;
  download: string;
}

export interface ContactFormInfo {
  title: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  sendButtonText: string;
  messages: {
    validationError: string;
    validationDescription: string;
    successMessage: string;
    successDescription: string;
    errorMessage: string;
    errorDescription: string;
    sendingText: string;
  };
}

// Personal information types
export interface PersonalInfo extends BaseContent {
  name: string;
  role: string;
  about: string;
}

// Social media types
export interface SocialMediaItem extends IconProps {
  name: string;
}

// Generic list types
export interface ListContent<T> extends BaseContent {
  list: T[];
} 