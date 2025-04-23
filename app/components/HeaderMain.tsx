export default function HeaderMain({ children }: { children: React.ReactNode }) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[rgb(var(--background-rgb))]/80 backdrop-blur-xl z-50 border-b border-[rgb(var(--gray-200))]">
      {children}
    </header>
  );
}
