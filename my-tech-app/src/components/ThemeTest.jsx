import React, { useState, useEffect } from 'react';

export function ThemeTest() {
  const [currentTheme, setCurrentTheme] = useState('none');
  const [primaryColor, setPrimaryColor] = useState('');
  const [accentColor, setAccentColor] = useState('');

  useEffect(() => {
    const updateThemeInfo = () => {
      const root = document.documentElement;
      const themes = ['theme-blue-purple', 'theme-blue-cyan', 'theme-purple-pink', 'theme-green-blue', 'theme-orange-red'];
      
      const activeTheme = themes.find(theme => root.classList.contains(theme));
      setCurrentTheme(activeTheme || 'default');
      
      // Get current CSS variable values
      const computedStyle = getComputedStyle(root);
      setPrimaryColor(computedStyle.getPropertyValue('--primary').trim());
      setAccentColor(computedStyle.getPropertyValue('--accent').trim());
    };

    // Initial update
    updateThemeInfo();

    // Listen for theme changes
    const handleThemeChange = () => {
      updateThemeInfo();
    };

    window.addEventListener('themeChanged', handleThemeChange);
    
    // Also listen for class changes on the document element
    const observer = new MutationObserver(updateThemeInfo);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'style']
    });

    return () => {
      window.removeEventListener('themeChanged', handleThemeChange);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 p-4 bg-card border border-border rounded-lg shadow-lg z-50 transition-all duration-300">
      <div className="text-xs text-muted-foreground mb-2">Theme Debug:</div>
      <div className="text-sm font-medium text-foreground mb-2">{currentTheme}</div>
      <div className="flex gap-2 mb-2">
        <div 
          className="w-8 h-8 rounded border border-border transition-all duration-300" 
          style={{ backgroundColor: `hsl(${primaryColor})` }}
          title={`Primary: hsl(${primaryColor})`}
        ></div>
        <div 
          className="w-8 h-8 rounded border border-border transition-all duration-300" 
          style={{ backgroundColor: `hsl(${accentColor})` }}
          title={`Accent: hsl(${accentColor})`}
        ></div>
      </div>
      <div className="text-xs text-muted-foreground">
        <div>Primary: {primaryColor}</div>
        <div>Accent: {accentColor}</div>
      </div>
    </div>
  );
}
