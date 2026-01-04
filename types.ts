
import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: 'Healthcare' | 'Banking' | 'Government' | 'Industrial' | 'General';
  description: string;
  tags: string[];
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number; // 0-100
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
}