import { ReactNode } from "react";

export interface FooterLink {
  id: number;
  name: string;
  href: string;
  icon?: ReactNode;
}

export interface SocialLink {
  id: number;
  href: string;
  label: string;
  icon: ReactNode;
}
