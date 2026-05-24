import { useRef, useState, useEffect } from 'react';
import type { ModuleId } from '../types';
import { MODULES } from '../data/modules';

const AUDIO_URLS: Record<ModuleId, string> = {
  biopsych: '/audio/biopsych.mp3',
  socialpsych: '/audio/socialpsych.mp3',
  ai: '/audio/ai.mp3',
};

const SPEEDS = [1, 1.5, 2, 0.75];

function formatTime(seconds: number): string {
  if (!isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

interface Props {
  moduleId: ModuleId;
  onBack: () => void;
}

export function PodcastView({ moduleId, onBack }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speedIdx, setSpeedIdx] = useState(0);
  const [error, setError] = useState(false);

  const module = MODULES.find((m) => m.id === moduleId);
  const audioUrl = AUDIO_URLS[moduleId];
  const speed = SPEEDS[speedIdx];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.playbackRate = speed;
  }, [speed]);

  useEffect(() => {
    // Reset state when module changes
    setPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setError(false);
    setSpeedIdx(0);
  }, [moduleId]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => setError(true));
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const t = Number(e.target.value);
    audio.currentTime = t;
    setCurrentTime(t);
  };

  const cycleSpeed = () => setSpeedIdx((i) => (i + 1) % SPEEDS.length);

  const skip = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(duration, audio.currentTime + seconds));
  };

  const progress = duration > 0 ? currentTime / duration : 0;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-10">
      <div className="max-w-xl mx-auto">
        <button onClick={onBack} className="text-slate-400 hover:text-white mb-8 flex items-center gap-2 transition-colors">
          ← Zurück
        </button>

        {/* Module header */}
        <div className="text-center mb-10">
          <div className={`inline-block p-5 rounded-3xl bg-gradient-to-br ${module?.color ?? 'from-violet-600 to-purple-700'} mb-4 text-5xl`}>
            🎙️
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">{module?.title}</h1>
          <p className="text-slate-400 text-sm">KI-generierter Podcast · NotebookLM</p>
        </div>

        {/* Player card */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
          {error ? (
            <p className="text-red-400 text-center text-sm py-4">
              Audio-Datei nicht gefunden. Bitte lege die Datei unter <code className="bg-slate-700 px-1 rounded">{audioUrl}</code> ab.
            </p>
          ) : (
            <>
              {/* Progress bar */}
              <div className="mb-2">
                <input
                  type="range"
                  min={0}
                  max={duration || 1}
                  step={0.1}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #8b5cf6 ${progress * 100}%, #334155 ${progress * 100}%)`,
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-slate-500 mb-6">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6 mb-6">
                {/* −15s */}
                <button
                  onClick={() => skip(-15)}
                  className="text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-0.5"
                >
                  <span className="text-xl">↺</span>
                  <span className="text-xs">15</span>
                </button>

                {/* Play/Pause */}
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-violet-600 hover:bg-violet-500 flex items-center justify-center text-white text-2xl transition-colors shadow-lg"
                >
                  {playing ? '⏸' : '▶'}
                </button>

                {/* +15s */}
                <button
                  onClick={() => skip(15)}
                  className="text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-0.5"
                >
                  <span className="text-xl">↻</span>
                  <span className="text-xs">15</span>
                </button>
              </div>

              {/* Speed */}
              <div className="flex justify-center">
                <button
                  onClick={cycleSpeed}
                  className="bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-medium px-4 py-1.5 rounded-full transition-colors"
                >
                  {speed === 1 ? '1×' : `${speed}×`}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Hidden native audio element */}
        <audio
          ref={audioRef}
          src={audioUrl}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => { setPlaying(false); setCurrentTime(0); }}
          onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime ?? 0)}
          onDurationChange={() => setDuration(audioRef.current?.duration ?? 0)}
          onError={() => setError(true)}
          preload="metadata"
        />
      </div>
    </div>
  );
}
