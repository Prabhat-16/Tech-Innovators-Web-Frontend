import React, { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';
import { Button } from './ui/button';

const themes = [
  { 
    name: 'Blue Purple', 
    value: 'theme-blue-purple', 
    colors: ['#a855f7', '#6366f1'],
    description: 'Dark blue and purple'
  },
  { 
    name: 'Blue Cyan', 
    value: 'theme-blue-cyan', 
    colors: ['#06b6d4', '#0ea5e9'],
    description: 'Ocean blue and cyan'
  },
  { 
    name: 'Purple Pink', 
    value: 'theme-purple-pink', 
    colors: ['#a855f7', '#ec4899'],
    description: 'Purple and pink gradient'
  },
  { 
    name: 'Green Blue', 
    value: 'theme-green-blue', 
    colors: ['#059669', '#0ea5e9'],
    description: 'Emerald and blue'
  },
  { 
    name: 'Orange Red', 
    value: 'theme-orange-red', 
    colors: ['#f97316', '#ef4444'],
    description: 'Orange and red fire'
  }
];

export function ThemeSlider() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(0);

  useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('color-theme');
    if (savedTheme) {
      const themeIndex = themes.findIndex(theme => theme.value === savedTheme);
      if (themeIndex !== -1) {
        setCurrentTheme(themeIndex);
        applyTheme(savedTheme);
      }
    } else {
      // Apply default theme
      applyTheme(themes[0].value);
    }
  }, []);

  const applyTheme = (themeClass) => {
    // Remove all theme classes
    themes.forEach(theme => {
      document.documentElement.classList.remove(theme.value);
    });
    
    // Add the selected theme class
    document.documentElement.classList.add(themeClass);
    
    // Save to localStorage
    localStorage.setItem('color-theme', themeClass);
  };

  const handleThemeChange = (index) => {
    setCurrentTheme(index);
    applyTheme(themes[index].value);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="w-9 h-9 p-0 relative"
      >
        <Palette className="h-4 w-4" />
        <span className="sr-only">Change theme colors</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-12 z-50 w-72 p-4 bg-card border border-border rounded-lg shadow-lg backdrop-blur-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-foreground">Color Theme</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
            
            <div className="space-y-3">
              {themes.map((theme, index) => (
                <button
                  key={theme.value}
                  onClick={() => handleThemeChange(index)}
                  className={`w-full p-3 rounded-lg border-2 transition-all duration-200 hover:scale-[1.02] ${
                    currentTheme === index 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border bg-muted/30 hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {theme.colors.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="w-6 h-6 rounded-full border border-border/50"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-foreground">
                        {theme.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {theme.description}
                      </div>
                    </div>
                    {currentTheme === index && (
                      <div className="ml-auto">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
            
            <div className="pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Choose your preferred color scheme for the website
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
