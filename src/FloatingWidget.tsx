import React, { useState, useEffect, useRef } from "react";
import styles from "./FloatingWidget.module.css";

export interface FloatingWidgetProps {
  title?: string;
  placeholder?: string;
  onSend?: (message: string) => void;
}

const FloatingWidget: React.FC<FloatingWidgetProps> = ({
  title = "Chat with us!",
  placeholder = "Type a message...",
  onSend,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      // Small timeout to ensure the DOM is ready if animations are involved
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage = inputValue.trim();
      setMessages((prev) => [...prev, newMessage]);
      if (onSend) {
        onSend(newMessage);
      }
      setInputValue("");
    }
  };

  return (
    <div className={styles.wrapper}>
      {isOpen && (
        <div className={styles.window}>
          <div className={styles.header}>{title}</div>
          <div className={styles.content}>
            {messages.length === 0 ? (
              <p style={{ margin: 0, color: "#666", fontSize: "0.8rem" }}>
                How can we help you today?
              </p>
            ) : (
              <div className={styles.messageLog}>
                {messages.map((msg, i) => (
                  <div key={i} className={styles.message}>
                    {msg}
                  </div>
                ))}
              </div>
            )}
          </div>
          <form className={styles.footer} onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className={styles.input}
              placeholder={placeholder}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className={styles.submit}>
              Send
            </button>
          </form>
        </div>
      )}
      <button
        className={styles.button}
        onClick={toggleOpen}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          )}
        </svg>
      </button>
    </div>
  );
};

export default FloatingWidget;
