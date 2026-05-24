import { useState, useCallback, useEffect } from 'react';
import type { ModuleId } from '../types';

const STORAGE_KEY = 'studyapp_podcast';

interface ModulePodcastProgress {
  trackIdx: number;
  position: number; // seconds into the track
  completed: number[]; // indices of fully-played tracks
}

type PodcastProgress = Record<ModuleId, ModulePodcastProgress>;

function blank(): ModulePodcastProgress {
  return { trackIdx: 0, position: 0, completed: [] };
}

function load(): PodcastProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) throw new Error();
    const p = JSON.parse(raw);
    const fromMod = (id: ModuleId): ModulePodcastProgress => ({
      trackIdx: p[id]?.trackIdx ?? 0,
      position: p[id]?.position ?? 0,
      completed: p[id]?.completed ?? [],
    });
    return { biopsych: fromMod('biopsych'), socialpsych: fromMod('socialpsych'), ai: fromMod('ai') };
  } catch {
    return { biopsych: blank(), socialpsych: blank(), ai: blank() };
  }
}

export function usePodcastProgress() {
  const [progress, setProgress] = useState<PodcastProgress>(load);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const savePosition = useCallback((moduleId: ModuleId, trackIdx: number, position: number) => {
    setProgress((prev) => ({
      ...prev,
      [moduleId]: { ...prev[moduleId], trackIdx, position },
    }));
  }, []);

  const markCompleted = useCallback((moduleId: ModuleId, trackIdx: number) => {
    setProgress((prev) => {
      const already = prev[moduleId].completed;
      if (already.includes(trackIdx)) return prev;
      return {
        ...prev,
        [moduleId]: { ...prev[moduleId], completed: [...already, trackIdx] },
      };
    });
  }, []);

  return { progress, savePosition, markCompleted };
}
