import type { ModuleId } from '../types';

export interface PodcastTrack {
  file: string; // filename inside public/audio/<moduleId>/
}

export const PODCASTS: Record<ModuleId, PodcastTrack[]> = {
  biopsych: [
    { file: '01. Einführung.mp3' },
    { file: '02. Lernen.mp3' },
    { file: '03. Gedächtnis.mp3' },
    { file: '04. Gehirn & Nervenzelle.mp3' },
    { file: '05. Nervensystem & Endokrines System.mp3' },
    { file: '06. Wahrnehmung.mp3' },
    { file: '07. Aufmerksamkeit, Bewusstsein & Kontrolle.mp3' },
    { file: '08. Sprache & Denken.mp3' },
  ],
  socialpsych: [
    { file: '01. Was ist Sozialpsychologie überhaupt.mp3' },
    { file: '02. Wie forschen Sozialpsychologen.mp3' },
    { file: '03. Soziale Wahrnehmung & Attribution – Wie sehen wir andere.mp3' },
    { file: '04. Soziale Kognition & Heuristiken – Wie denken wir (wirklich).mp3' },
    { file: '05. Selbstkonzept & Soziale Identität – Wer bin ich.mp3' },
    { file: '06. Einstellungen – Was finden wir gut oder schlecht.mp3' },
    { file: '07. Soziale Einflussnahme – Wie beeinflussen uns andere.mp3' },
    { file: '08. Gruppenprozesse – Was passiert, wenn wir in Gruppen sind.mp3' },
    { file: '09. Wo begegnet uns das im Alltag.mp3' },
  ],
  ai: [
    { file: '01. Einführung & Geschichte der KI.mp3' },
    { file: '02. Infrastruktur für KI - Big Data.mp3' },
    { file: '03. Data Warehouse & Data Lake.mp3' },
    { file: '04. Datenmanagement & Data Engineering.mp3' },
    { file: '05. KI-Agenten & Agentensysteme.mp3' },
    { file: '06. Logiken & Wissensbasierte Systeme.mp3' },
    { file: '07. Maschinelles Lernen.mp3' },
    { file: '08. Ethik, Gesellschaft & Recht.mp3' },
  ],
};

export function audioUrl(moduleId: ModuleId, file: string): string {
  return `/audio/${moduleId}/${encodeURIComponent(file)}`;
}

export function trackTitle(file: string): string {
  return file
    .replace(/\.[^.]+$/, '')
    .replace(/^\d+\.\s*/, '');
}
