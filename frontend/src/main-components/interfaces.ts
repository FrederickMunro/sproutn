import { ReactNode } from 'react';


export interface RawOption {
  name: string;
  number: number;
  available: boolean;
  status: boolean;
  description: string;
  pendingAction: string;
}

export interface RawProject {
  icon: ReactNode;
  name: string;
  id: string;
  pending: string;
  time: string;
  status: string;
  percent: number;
  shippingAddress: string;
  options: RawOption[];
  orders: Order[];
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
  number: number;
  icon: ReactNode;
  productDescription?: string;
  keyFeatures?: string[];
  lockPictures?: boolean;
  lockDocuments?: boolean;
}

export interface Project {
  name: string;
  userId: string;
  id: string;
  pending: string;
  time: number;
  status: string;
  percent: number;
  shippingAddress: string;
}

export interface User {
  username: string;
  firstName: string;
  lastName: string;
}

export interface Order {
  number: string;
  status: string;
  paid: number,
  total: number;
  shippingAddress: string;
  id: string;
  prototype: boolean;
  billingLocked: boolean;
  processLocked: boolean;
  contractLocked: boolean;
  currentDeliveryStep: number;
}