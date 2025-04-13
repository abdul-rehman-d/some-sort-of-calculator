'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  if (!theme) {
    return null;
  }

  return (
    <Button variant="ghost" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <span className="sr-only">Switch to {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
      <span aria-hidden="true" className="text-primary-foreground text-2xl">
        {theme === 'dark' ? <Moon /> : <Sun />}
      </span>
    </Button>
  );
}
