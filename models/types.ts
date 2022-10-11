import { Attachment } from "airtable"
import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export interface Experience {
  id: string;
  company: string;
  companyUrl: string;
  title: string;
  description: string;
  logo: Attacments[]
  start: string;
  end: string;
}

export interface ExperienceUI extends Experience{
  startYear: string;
  endYear: string;
  skills: SkillUI[];
}

export interface Skill {
  title: string;
  logo: Attacments[];
  url: string;
  type: 'database' | 'framework-library' | 'tools'
  Experiences: string[];
  Projects: string[];
}
export interface SkillUI extends Omit<Skill, 'Experiences' | 'Projects'> {
  id: string;
}

export interface Attacments {
  id: string;
  url: string;
  filename: string;
  size: number;
  type: string;
  width: number;
  height:number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  gitHub?: string;
  doc?: string;
  npm?: string;
  preview: Attachment[];
  collaboration?: string;
  website: string;
}

export interface ProjectUI extends Project {
  skills: SkillUI[];
}

export interface Pages {
  path: string;
  title: string;
}

export interface Profile {
  title: string;
  role: string;
  intro: string;
  lang: string;
}
export interface ProfileUI extends Profile {
  id: string;
}
export interface Contacts {
  name: string;
  url?: string;
  urlLabel?: string;
  value?: string;
  type: 'social' | 'info' | 'contact';
}
export interface ContactsUI extends Contacts {
  id: string;
}