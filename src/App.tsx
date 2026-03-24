import { useState } from "preact/hooks";
import FloatingWidget from "./FloatingWidget";
import "./App.css";

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = (message: string) => {
    console.log("User sent:", message);
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div className="demo-container">
      <h1>Floating Widget Library Demo</h1>
      <p>The widget is in the bottom right corner.</p>

      {messages.length > 0 && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            background: "#f5f5f5",
            borderRadius: "8px",
          }}
        >
          <h3>Messages Log:</h3>
          <ul>
            {messages.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </div>
      )}

      <FloatingWidget title="Custom Chat Support" onSend={handleSend} />
    </div>
  );
}

export default App;
