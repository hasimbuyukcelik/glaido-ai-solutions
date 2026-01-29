// Fix: Import React to resolve "Cannot find namespace 'React'" error for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
  variant?: 'primary' | 'secondary';
}