type MarginNoteProps = {
  label?: string;
  children: React.ReactNode;
};

export default function MarginNote({ label = "Note", children }: MarginNoteProps) {
  return (
    <div className="my-6 pl-4 border-l-2 border-[var(--accent)] bg-[var(--accent-soft)] py-3 pr-4 rounded-r-md">
      <p className="text-xs uppercase tracking-wider text-[var(--accent-deep)] font-semibold mb-1">
        {label}
      </p>
      <p className="text-sm text-[var(--foreground-muted)] leading-relaxed italic">
        {children}
      </p>
    </div>
  );
}