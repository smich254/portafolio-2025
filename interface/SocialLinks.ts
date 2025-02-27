// interface/SocialLinks.ts
export interface SocialLinks {
    linkedin?: string;
    github?: string;
    twitter?: string;
    [key: string]: string | undefined;  // permite extensibilidad para otras redes
  }
  