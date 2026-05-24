import type { ModuleId } from '../types';

export interface PodcastTrack {
  file: string; // filename inside public/audio/<moduleId>/
}

export const PODCASTS: Record<ModuleId, PodcastTrack[]> = {
  biopsych: [
    { file: 'teil1.mp3' },
  ],
  socialpsych: [
    { file: 'teil1.mp3' },
    { file: 'teil2.mp3' },
    { file: 'teil3.mp3' },
    { file: 'teil4.mp3' },
    { file: 'teil5.mp3' },
    { file: 'teil6.mp3' },
    { file: 'teil7.mp3' },
    { file: 'teil8.mp3' },
    { file: 'teil9.mp3' },
  ],
  ai: [
    { file: 'teil1.mp3' },
  ],
};

export function audioUrl(moduleId: ModuleId, file: string): string {
  return `/audio/${moduleId}/${file}`;
}

export function trackTitle(file: string): string {
  return file
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
