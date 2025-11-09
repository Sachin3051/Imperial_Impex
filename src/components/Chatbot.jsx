import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

// 🧠 Local memory key
const BOT_MEMORY_KEY = "my_chatbot_memory";

const SmartChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I'm your smart assistant. How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [memory, setMemory] = useState({});

  // 📞 Your WhatsApp number (include country code, no +)
  const whatsappNumber = "917448217068";

  // 🧠 Load memory from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(BOT_MEMORY_KEY);
    if (saved) setMemory(JSON.parse(saved));
  }, []);

  // 💾 Save memory whenever it changes
  useEffect(() => {
    localStorage.setItem(BOT_MEMORY_KEY, JSON.stringify(memory));
  }, [memory]);

  // 🔍 Simple similarity check (keyword based)
  const findBestMatch = (msg) => {
    msg = msg.toLowerCase();
    let bestMatch = null;
    for (let key in memory) {
      if (msg.includes(key.toLowerCase())) {
        bestMatch = memory[key];
        break;
      }
    }
    return bestMatch;
  };

  // 🗣️ Bot reply generator
  const getBotReply = (userMsg) => {
    const msg = userMsg.toLowerCase();

    // Learning command
    if (msg.startsWith("learn:")) {
      // Format: learn: hello -> Hi there!
      const parts = msg.split("->");
      if (parts.length === 2) {
        const key = parts[0].replace("learn:", "").trim();
        const value = parts[1].trim();
        if (key && value) {
          setMemory((prev) => ({ ...prev, [key]: value }));
          return `Got it! I’ve learned that when you say "${key}", I should reply "${value}". 🧠`;
        }
      }
      return "Please teach me like this: learn: hello -> Hi there!";
    }

    // Look for known responses
    const reply = findBestMatch(msg);
    if (reply) return reply;

    // Default replies
    if (msg.includes("hi") || msg.includes("hello")) return "Hey there! 👋";
    if (msg.includes("how are you")) return "I'm great! Thanks for asking 😄";
    if (msg.includes("your name")) return "I'm SmartBot 🤖, your friendly assistant!";
    if (msg.includes("bye")) return "Goodbye! 👋 See you later.";

    return "I’m not sure I understand. You can teach me using 'learn: [word] -> [response]'.";
  };

  // ✉️ Handle message sending
  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: getBotReply(input) };

    setMessages((prev) => [...prev, userMsg, botMsg]);



    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* 💬 Floating Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-gradient bg-blue-gradient text-white rounded-full p-4 shadow-lg transition-all"
      >
        {isOpen ? "✖" : "💬"}
      </button>

      {/* 🟢 WhatsApp Floating Icon */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-24 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* 💬 Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute bottom-16 right-0 w-80 bg-white border border-gray-300 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-blue-gradient text-white text-center py-3 font-semibold">
              SmartBot 🤖
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-3 overflow-y-auto h-80">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`my-2 p-2 rounded-xl ${
                    msg.sender === "user"
                      ? "bg-blue-100 text-right ml-10"
                      : "bg-gray-100 text-left mr-10"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <form onSubmit={sendMessage} className="flex border-t">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-2 outline-none"
              />
              <button
                type="submit"
                className="bg-blue-gradient bg-blue-gradient text-white px-4 py-2 rounded-r-2xl"
              >
                ➤
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SmartChatbot;
