export const metadata = {
  title: "Notes",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center">
      <div className="text-center">
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
          Built for the Ownright team
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Bruno Tosi · May 2026
        </p>
      </div>
    </main>
  );
}