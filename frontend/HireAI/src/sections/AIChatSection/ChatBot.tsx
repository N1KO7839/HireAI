import Button from "../../components/Button";
import ChatMessage from "./ChatMessage";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const ChatBot = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([
    "Hi there! What can I help you with today? Just type in the job you want to prepare for, and let's get you ready to nail the interview.",
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  //scrolling down when there is new message
  const scrollToBottom = () => {
    if (messages.length < 1) return; //scroll only if there is more than 1 messages
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  //function to send message when enter is pressed
  const handleEnterPressed = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key == "Enter") {
      e.preventDefault();
      const trimmedMessage = message.trim();
      if (trimmedMessage === "") return;
      setMessages([...messages, message]);
      setMessage("");
      const response = await axios.post("http://localhost:3000/api/chat", {
        message: message,
      });
      setMessages([...messages, message, response.data.reply]);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col justify-center bg-slate-800 text-amber-50 rounded-2xl w-full max-w-5xl mx-auto p-5 mt-16">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-blue-600 p-2">
          <img
            className="w-8"
            src="../../src/assets/chatbot.png"
            alt="AI profile photo"
          />
        </div>
        <h3 className="text-2xl font-semibold">HireAI Assistant</h3>
      </div>
      <hr className="text-amber-50/5 border-t-3 rounded mt-4" />
      <div className="flex flex-col text-start gap-2 mt-8 h-96 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-slate-600/40 scrollbar-track-slate-800/50">
        {/* Map to generate all messages */}
        {messages.map((messageMap, index) => {
          return (
            <ChatMessage
              key={index}
              messageText={`${messageMap}`}
              index={index}
            />
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      <hr className="text-amber-50/5 border-t-3 rounded" />
      <div className="flex items-center">
        <input
          className="h-10 w-full pl-4 border-2 border-slate-600/20 rounded-lg"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          placeholder="Type your message..."
          id="inputMessage"
          onKeyPress={(e) =>
            handleEnterPressed(e as React.KeyboardEvent<HTMLInputElement>)
          }
        />
        <Button
          icon="../../../src/assets/paperPlane.png"
          height="h-11"
          width="w-12"
          action={() => {
            handleEnterPressed({
              key: "Enter",
              preventDefault: () => {},
            } as React.KeyboardEvent<HTMLInputElement>);
          }}
        />
      </div>
    </div>
  );
};

export default ChatBot;
