'use client';

interface NavigationProps {
  title: string;
}

export default function Navigation({ title }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
      <div className="flex space-x-8">
        {['Features', 'Pricing', 'FAQ'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-sm text-[rgb(var(--gray-600))] hover:text-[rgb(var(--foreground-rgb))] transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}
