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
  title: string;
  description: string;
  logo: Attacments[]
  start: string;
  end: string;
}

export interface ExperienceUI extends Experience{
  startYear: string;
  endYear: string;
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