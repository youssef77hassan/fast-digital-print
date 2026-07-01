/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamic map to Lucide icons
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  role: string;
  text: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
