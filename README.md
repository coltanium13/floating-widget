# AIChatWidget Library

A lightweight, auto-mounting, and self-contained chat widget.

## Quick Start (Single Drop-in)

This widget is designed to be added to any website with just two lines of code. It includes its own minimal runtime (Preact), so it **does not require React or any other dependencies** to be installed on the host page.

### 1. Add the Target Anchor

Add a `div` with the ID `ai-chat-widget-anchor` anywhere in your HTML (usually before the closing `</body>` tag).

```html
<div id="ai-chat-widget-anchor"></div>
```

### 2. Load the Scripts

Include the CSS and the single JS bundle. Use the local paths where you've hosted your `dist` folder.

```html
<!-- The Widget Styles -->
<link rel="stylesheet" href="./dist/my-widget.css">

<!-- The Widget Logic (Auto-mounts) -->
<script src="./dist/my-widget.iife.js"></script>
```

The script will automatically find the `#ai-chat-widget-anchor` element and initialize the chat widget inside it.

## Features

- **Zero-Dependency**: Bundled with Preact (~26kB total) for high performance and low overhead.
- **Auto-Mounting**: No initialization code required; just include the script.
- **Auto-Focus**: Automatically focuses the input field when the chat is opened.
- **Running Log**: Keeps a running log of sent messages during the session.

## Local Development

```bash
# Install dependencies
npm install

# Run the development server (with HMR)
npm run dev
```

The dev server uses `index.html` which contains the correct anchor ID for testing.

## Production Build

```bash
# Generate optimized production bundle
npm run build
```

The output will be in the `dist` folder:
- `my-widget.iife.js`: The self-contained JS bundle.
- `my-widget.css`: The required styles.
