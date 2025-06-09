import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-full w-9 h-9 relative border p-5"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100  rounded-full transition-transform dark:-rotate-90 dark:scale-0 absolute" />
      <Moon className="h-5 w-5 rotate-90 scale-0  rounded-full transition-transform dark:rotate-0 dark:scale-100 absolute" />
    </Button>
  );
};

export default ThemeToggle;
