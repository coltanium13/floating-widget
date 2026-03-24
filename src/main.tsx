import React from 'react'
import ReactDOM from 'react-dom/client'
import FloatingWidget from './FloatingWidget'

const mountWidget = () => {
  const anchor = document.getElementById('ai-chat-widget-anchor');

  if (anchor) {
    // @ts-expect-error - store the root on the DOM node
    if (!anchor._reactRoot) {
      const root = ReactDOM.createRoot(anchor);
      root.render(
        <React.StrictMode>
          <FloatingWidget title="AI Support" />
        </React.StrictMode>
      );
      // @ts-expect-error - cache the root
      anchor._reactRoot = root;
    }
  } else {
    console.warn("Widget Error: Could not find element #ai-chat-widget-anchor");
  }
};

// Execute the mounting logic as soon as the script is loaded
mountWidget();
