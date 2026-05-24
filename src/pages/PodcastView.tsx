import { useRef, useState, useEffect } from 'react';
import type { ModuleId } from '../types';
import { MODULES } from '../data/modules';
import { PODCASTS, audioUrl, trackTitle } from '../data/podcasts';

const SPEEDS = [1, 1.5, 2, 0.75];

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return '0:00';
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
  const [trackIdx, setTrackIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speedIdx, setSpeedIdx] = useState(0);
  const [error, setError] = useState(false);

  const module = MODULES.find((m) => m.id === moduleId);
  const tracks = PODCASTS[moduleId] ?? [];
  const track = tracks[trackIdx];
  const speed = SPEEDS[speedIdx];

  // Apply speed whenever it changes
  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = speed;
  }, [speed]);

  // Load new track source without auto-playing
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !track) return;
    const wasPlaying = !audio.paused;
    audio.load();
    setCurrentTime(0);
    setDuration(0);
    setError(false);
    if (wasPlaying) {
      audio.play().catch(() => setError(true));
    }
  }, [trackIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  const goToTrack = (idx: number, autoplay = false) => {
    if (idx < 0 || idx >= tracks.length) return;
    setTrackIdx(idx);
    if (autoplay) {
      // play will be triggered by useEffect above via wasPlaying
      setTimeout(() => audioRef.current?.play().catch(() => setError(true)), 50);
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) audio.pause();
    else audio.play().catch(() => setError(true));
  };

  const handleEnded = () => {
    if (trackIdx < tracks.length - 1) {
      const next = trackIdx + 1;
      setTrackIdx(next);
      setTimeout(() => audioRef.current?.play().catch(() => setError(true)), 50);
    } else {
      setPlaying(false);
      setCurrentTime(0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = Number(e.target.value);
    if (audioRef.current) audioRef.current.currentTime = t;
    setCurrentTime(t);
  };

  const skip = (sec: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + sec));
  };

  const cycleSpeed = () => setSpeedIdx((i) => (i + 1) % SPEEDS.length);

  const progress = duration > 0 ? currentTime / duration : 0;

  if (tracks.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Keine Audio-Dateien für dieses Modul.</p>
          <button onClick={onBack} className="text-blue-400 hover:text-blue-300">← Zurück</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Header */}
      <div className="p-6 md:px-10">
        <button onClick={onBack} className="text-slate-400 hover:text-white mb-6 flex items-center gap-2 transition-colors">
          ← Zurück
        </button>
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${module?.color ?? 'from-violet-600 to-purple-700'} text-3xl`}>
            🎙️
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">{module?.title}</h1>
            <p className="text-slate-400 text-sm">KI-Podcast · NotebookLM · {tracks.length} {tracks.length === 1 ? 'Teil' : 'Teile'}</p>
          </div>
        </div>
      </div>

      {/* Track list */}
      <div className="flex-1 overflow-y-auto px-6 md:px-10 pb-4">
        <div className="max-w-xl mx-auto space-y-2">
          {tracks.map((t, i) => {
            const isActive = i === trackIdx;
            return (
              <button
                key={t.file}
                onClick={() => goToTrack(i)}
                className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all border ${
                  isActive
                    ? 'bg-violet-900 border-violet-600 text-white'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-750'
                }`}
              >
                <span className={`text-lg w-6 flex-shrink-0 ${isActive ? 'text-violet-300' : 'text-slate-500'}`}>
                  {isActive && playing ? '▶' : String(i + 1).padStart(2, ' ')}
                </span>
                <span className="flex-1 text-sm font-medium truncate">{trackTitle(t.file)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sticky player */}
      <div className="bg-slate-800 border-t border-slate-700 px-6 md:px-10 py-5">
        <div className="max-w-xl mx-auto">
          {/* Track name */}
          <p className="text-white font-medium text-sm mb-3 truncate">{trackTitle(track.file)}</p>

          {error ? (
            <p className="text-red-400 text-xs pb-1">
              Datei nicht gefunden: <code className="bg-slate-700 px-1 rounded">/audio/{moduleId}/{track.file}</code>
            </p>
          ) : (
            <>
              {/* Seek bar */}
              <input
                type="range"
                min={0}
                max={duration || 1}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer mb-1"
                style={{
                  background: `linear-gradient(to right, #8b5cf6 ${progress * 100}%, #334155 ${progress * 100}%)`,
                }}
              />
              <div className="flex justify-between text-xs text-slate-500 mb-4">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                {/* Prev track */}
                <button
                  onClick={() => goToTrack(trackIdx - 1)}
                  disabled={trackIdx === 0}
                  className="text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-lg px-2"
                >
                  ⏮
                </button>

                {/* −15s */}
                <button onClick={() => skip(-15)} className="text-slate-400 hover:text-white transition-colors flex flex-col items-center">
                  <span className="text-lg">↺</span>
                  <span className="text-xs">15</span>
                </button>

                {/* Play/Pause */}
                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-violet-600 hover:bg-violet-500 flex items-center justify-center text-white text-xl transition-colors shadow-lg"
                >
                  {playing ? '⏸' : '▶'}
                </button>

                {/* +15s */}
                <button onClick={() => skip(15)} className="text-slate-400 hover:text-white transition-colors flex flex-col items-center">
                  <span className="text-lg">↻</span>
                  <span className="text-xs">15</span>
                </button>

                {/* Next track */}
                <button
                  onClick={() => goToTrack(trackIdx + 1)}
                  disabled={trackIdx === tracks.length - 1}
                  className="text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-lg px-2"
                >
                  ⏭
                </button>
              </div>

              {/* Speed */}
              <div className="flex justify-center mt-4">
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
      </div>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={track ? audioUrl(moduleId, track.file) : undefined}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={handleEnded}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime ?? 0)}
        onDurationChange={() => setDuration(audioRef.current?.duration ?? 0)}
        onError={() => setError(true)}
        preload="metadata"
      />
    </div>
  );
}
