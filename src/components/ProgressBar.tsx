interface Props {
  value: number;
  max: number;
  colorClass?: string;
}

export function ProgressBar({ value, max, colorClass = 'bg-blue-500' }: Props) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100);
  return (
    <div className="w-full bg-slate-700 rounded-full h-2">
      <div
        className={`${colorClass} h-2 rounded-full transition-all duration-500`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
