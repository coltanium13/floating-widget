import React from 'react';
import { createRoot } from 'react-dom/client';
import FloatingWidget from './FloatingWidget';
import type { FloatingWidgetProps } from './FloatingWidget';

export { FloatingWidget };
export type { FloatingWidgetProps };

/**
 * Initialize the FloatingWidget into a DOM element.
 * Useful for non-React environments.
 */
export const init = (elementId: string, props: FloatingWidgetProps = {}) => {
  const container = document.getElementById(elementId);
  if (!container) {
    console.error(`FloatingWidget Error: Element with ID "${elementId}" not found.`);
    return;
  }
  const root = createRoot(container);
  root.render(React.createElement(FloatingWidget, props));
};
