
export type Dimension = 'EXP_STR' | 'EMO_TEC' | 'SPO_PLA' | 'LEA_SUP' | 'PER_CRE' | 'COL_IND';

export interface Question {
  id: number;
  text: string;
  dimension: Dimension;
  invert: boolean;
  isVocal?: boolean;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  type: 'technical' | 'creative' | 'business';
}

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  suggestedMilestones: string[];
}

export interface GrowthPath {
  practiceAreas: string[];
  recommendedArtists: { name: string; why: string }[];
  mentorsToFollow: string[];
  suggestedGenres: string[];
  roleMilestones: Milestone[];
}

export interface Archetype {
  id: string;
  name: string;
  tagline: string;
  description: string;
  strengths: string[];
  pitfalls: string[];
  idealMatches: string[];
  studioVsLive: string;
  profile: Record<Dimension, number>;
  imageUrl: string;
  color: string;
  growthPath: GrowthPath;
}

export interface UserScores {
  EXP_STR: number;
  EMO_TEC: number;
  SPO_PLA: number;
  LEA_SUP: number;
  PER_CRE: number;
  COL_IND: number;
}

export interface VocalData {
  isVocalist: boolean;
  range?: string;
  texture?: string;
  audioBlob?: Blob;
}

export interface Member {
  id: string;
  name: string;
  archetypeId: string;
  scores: UserScores;
  isCurrentUser?: boolean;
}

export interface Collective {
  id: string;
  name: string;
  members: Member[];
}

export interface PerformanceLog {
  id: string;
  date: string;
  title: string;
  archetypeAlignment: number; // 0-100
  notes: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'growth' | 'vocal' | 'groups' | 'productivity';
  date: string;
  imageUrl: string;
}
