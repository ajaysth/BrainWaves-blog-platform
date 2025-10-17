"use client";

import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';

// Helper function to convert a string to PascalCase
const toPascalCase = (str) => {
  if (!str) return '';
  return str.replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, (match, separator, char) =>
    char.toUpperCase()
  );
};

export function DynamicLucideIcon({ name, ...props }) {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    if (name) {
      const pascalCaseName = toPascalCase(name);
      const Icon = LucideIcons[pascalCaseName];
      setIconComponent(() => Icon);
    } else {
      setIconComponent(null);
    }
  }, [name]);

  if (!IconComponent) {
    return null; // Or a fallback icon, or a loading spinner
  }

  return <IconComponent {...props} />;
}