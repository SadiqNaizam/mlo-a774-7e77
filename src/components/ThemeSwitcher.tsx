import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

// Define the themes inspired by Doraemon characters
const themes = [
  { name: 'theme-blue', label: 'Doraemon Blue', color: '#009fde' },
  { name: 'theme-yellow', label: "Noby's Yellow", color: '#f7d43c' },
  { name: 'theme-pink', label: "Shizuka's Pink", color: '#f4a7c3' },
  { name: 'theme-orange', label: "Big G's Orange", color: '#f28f41' },
  { name: 'theme-green', label: "Dora's Bell", color: '#fdd835' }, // Using bell color
  { name: 'theme-dark', label: 'Midnight Pocket', color: '#2c3e50' },
];

const ThemeSwitcher: React.FC = () => {
  console.log('ThemeSwitcher loaded');

  // State to track the active theme, persisted in localStorage.
  const [activeTheme, setActiveTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('doraetunes-theme') || 'theme-blue';
    }
    return 'theme-blue'; // Default theme for SSR or initial load
  });

  // This effect applies the selected theme class to the root <html> element
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove any existing theme classes
    const themeClasses = Array.from(root.classList).filter(cls => cls.startsWith('theme-'));
    if (themeClasses.length) {
      root.classList.remove(...themeClasses);
    }

    // Add the new theme class
    root.classList.add(activeTheme);

    // Save the theme choice to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('doraetunes-theme', activeTheme);
      console.log(`Theme changed and saved: ${activeTheme}`);
    }
  }, [activeTheme]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Change Theme</CardTitle>
        <CardDescription>
          Select a Doraemon-inspired theme. Your choice will be saved for your next visit.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {themes.map((theme) => (
          <Button
            key={theme.name}
            variant="outline"
            className={`w-full h-24 flex flex-col items-center justify-center gap-2 border-2 relative transition-all duration-200 ${
              activeTheme === theme.name ? 'border-primary' : 'border-transparent hover:border-muted-foreground/50'
            }`}
            onClick={() => setActiveTheme(theme.name)}
            aria-label={`Select ${theme.label} theme`}
          >
            {activeTheme === theme.name && (
              <div className="absolute top-1.5 right-1.5 bg-primary text-primary-foreground rounded-full p-0.5">
                <Check className="h-3 w-3" />
              </div>
            )}
            <div
              className="w-8 h-8 rounded-full border"
              style={{ backgroundColor: theme.color }}
              aria-hidden="true"
            />
            <span className="text-xs text-center font-medium">{theme.label}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default ThemeSwitcher;