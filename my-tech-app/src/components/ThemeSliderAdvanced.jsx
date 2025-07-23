import React, { useState, useEffect } from 'react';
import { Palette, Sliders } from 'lucide-react';
import { Button } from './ui/button';

const themes = [
  { 
    name: 'Blue Purple', 
    value: 'theme-blue-purple', 
    colors: ['#a855f7', '#6366f1'],
    description: 'Dark blue and purple',
    cssVars: {
      '--primary': '263.4 70% 50.4%',
      '--accent': '270.7 91% 65.1%',
      '--ring': '263.4 70% 50.4%'
    }
  },
  { 
    name: 'Blue Cyan', 
    value: 'theme-blue-cyan', 
    colors: ['#06b6d4', '#0ea5e9'],
    description: 'Ocean blue and cyan',
    cssVars: {
      '--primary': '198.6 88.7% 48.4%',
      '--accent': '188.7 94.5% 42.7%',
      '--ring': '198.6 88.7% 48.4%'
    }
  },
  { 
    name: 'Purple Pink', 
    value: 'theme-purple-pink', 
    colors: ['#a855f7', '#ec4899'],
    description: 'Purple and pink gradient',
    cssVars: {
      '--primary': '270.7 91% 65.1%',
      '--accent': '316.7 77.5% 68%',
      '--ring': '270.7 91% 65.1%'
    }
  },
  { 
    name: 'Green Blue', 
    value: 'theme-green-blue', 
    colors: ['#059669', '#0ea5e9'],
    description: 'Emerald and blue',
    cssVars: {
      '--primary': '173.4 80.4% 40%',
      '--accent': '198.6 88.7% 48.4%',
      '--ring': '173.4 80.4% 40%'
    }
  },
  { 
    name: 'Orange Red', 
    value: 'theme-orange-red', 
    colors: ['#f97316', '#ef4444'],
    description: 'Orange and red fire',
    cssVars: {
      '--primary': '24.6 95% 53.1%',
      '--accent': '0 84.2% 60.2%',
      '--ring': '24.6 95% 53.1%'
    }
  }
];

export function ThemeSliderAdvanced() {
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
    const root = document.documentElement;
    const theme = themes.find(t => t.value === themeClass);
    
    if (theme) {
      // Apply CSS custom properties directly
      Object.entries(theme.cssVars).forEach(([property, value]) => {
        root.style.setProperty(property, value);
      });
      
      // Also add the theme class for additional styling
      themes.forEach(t => root.classList.remove(t.value));
      root.classList.add(themeClass);
      
      // Save to localStorage
      localStorage.setItem('color-theme', themeClass);
      
      console.log('Applied theme:', themeClass, 'CSS vars:', theme.cssVars);
      
      // Trigger a custom event to notify other components
      window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: themeClass } }));
    }
  };

  const handleSliderChange = (event) => {
    const index = parseInt(event.target.value);
    setCurrentTheme(index);
    applyTheme(themes[index].value);
    console.log('Slider changed to theme:', themes[index].name);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="w-9 h-9 p-0 relative"
      >
        <Sliders className="h-4 w-4" />
        <span className="sr-only">Change theme colors</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-12 z-50 w-80 p-4 bg-card border border-border rounded-lg shadow-lg backdrop-blur-sm">
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
            
            <div className="space-y-4">
              {/* Current theme display */}
              <div className="p-3 rounded-lg bg-muted/30 border border-border">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {themes[currentTheme].colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-8 h-8 rounded-full border border-border/50"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      {themes[currentTheme].name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {themes[currentTheme].description}
                    </div>
                  </div>
                </div>
              </div>

              {/* Range slider */}
              <div className="space-y-2">
                <label className="text-xs text-muted-foreground">
                  Theme Selection ({currentTheme + 1} of {themes.length})
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max={themes.length - 1}
                    value={currentTheme}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between mt-1">
                    {themes.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentTheme ? 'bg-primary' : 'bg-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Theme list */}
              <div className="space-y-2 max-h-40 overflow-y-auto">
                <label className="text-xs text-muted-foreground">Available Themes</label>
                {themes.map((theme, index) => (
                  <button
                    key={theme.value}
                    onClick={() => {
                      setCurrentTheme(index);
                      applyTheme(theme.value);
                    }}
                    className={`w-full p-2 rounded text-left transition-all duration-200 hover:bg-muted/50 ${
                      currentTheme === index 
                        ? 'bg-primary/10 border border-primary/50' 
                        : 'bg-muted/20 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {theme.colors.map((color, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="w-4 h-4 rounded-full border border-border/50"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-foreground">{theme.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Use the slider or click themes to change colors instantly
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(var(--primary));
          cursor: pointer;
          border: 2px solid hsl(var(--background));
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(var(--primary));
          cursor: pointer;
          border: 2px solid hsl(var(--background));
        }
      `}</style>
    </div>
  );
}
