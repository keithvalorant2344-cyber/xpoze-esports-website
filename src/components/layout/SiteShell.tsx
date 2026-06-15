export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-xpoze-night text-xpoze-frost">
      {children}
    </div>
  );
}
