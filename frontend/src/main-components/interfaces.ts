import { ReactNode } from 'react';


export interface RawOption {
  name: string;
  number: number;
  available: boolean;
  status: boolean;
  description: string;
}

export interface RawProject {
  icon: ReactNode;
  name: string;
  id: string;
  pending: string;
  time: string;
  status: string;
  percent: number;
  options: RawOption[];
}

export interface RawUser {
  name: string;
  projects: RawProject[];
}



export interface Option {
  name: string;
  description: string;
  available: boolean;
  status: boolean;
  number: number,
  icon: ReactNode,
}

export interface Project {
  icon: ReactNode;
  name: string;
  id: string;
  pending: string;
  time: string;
  status: string;
  percent: number;
  options: Option[];
}

export interface User {
  name: string;
  projects: Project[];
}