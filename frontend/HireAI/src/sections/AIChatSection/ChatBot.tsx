import Button from "../../components/Button";
import ChatMessage from "./ChatMessage";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

type isTestChat = {
  isTestChat: boolean;
}

const ChatBot = ({isTestChat}: isTestChat) => {
  type Role = "user" | "assistant";

  interface Message {
    role: Role;
    content: string;
  }

  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const [initialized, setInitialized] = useState(false);
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputMessageRef = useRef<HTMLInputElement>(null);

  //scrolling down when there is new message
  const scrollToBottom = () => {
    if (messages.length < 2) return; //scroll only if there is more than 1
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  //function to clear chat from messages
  const removeChat = () => {
    localStorage.removeItem("chat_messages")
    setMessages([
        "Hi there! What can I help you with today? Just type in the job you want to prepare for, and let's get you ready to nail the interview.",
      ]);
  }

  useEffect(() => {
    const savedMessages = localStorage.getItem("chat_messages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      setMessages([
        "Hi there! What can I help you with today? Just type in the job you want to prepare for, and let's get you ready to nail the interview.",
      ]);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized) return;
    localStorage.setItem("chat_messages", JSON.stringify(messages));
    scrollToBottom();
  }, [messages, initialized]);

  //function to format mesages that AI will understand the context
  function formatMessages(messagesArray: string[]): Message[] {
    return messagesArray.map((msg, index) => ({
      role: index % 2 === 0 ? "assistant" : "user",
      content: msg,
    }));
  }

  //function to send message when enter is pressed
  const handleEnterPressed = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key !== "Enter") return;

    e.preventDefault();
    const trimmedMessage = message.trim();
    if (trimmedMessage === "") return;

    setIsWaitingForResponse(true)

    const updatedMessages = [...messages, trimmedMessage];
    setMessages(updatedMessages);
    setMessage("");

    const formattedMessages = formatMessages(updatedMessages);

    const instructionForAI = [
      {
        role: "system",
        content: `You are a professional recruiter conducting a formal job interview. The conversation contains alternating messages starting with you (assistant). Use context to respond naturally.`,
      },
      ...formattedMessages,
    ];

    const response = await axios.post("http://localhost:3000/api/chat", {
      messages: instructionForAI,
    });

    setMessages([...updatedMessages, response.data.reply]);
    setIsWaitingForResponse(false)
    // need timeout to foucus after setIsWaitingForResponse is set to false otherwise it is disabled when trying to focus
    setTimeout(() => {
      inputMessageRef.current?.focus();
    }, 1);
  };

  return (
    <div className="flex flex-col justify-center bg-slate-800 text-amber-50 rounded-2xl w-11/12 mx-auto p-5 mt-16">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-sky-600/90 p-2">
          <img
            className="w-8"
            src="../../src/assets/chatbot.png"
            alt="AI profile photo"
          />
        </div>
        <h3 className="text-2xl font-semibold">HireAI Assistant</h3>
      </div>
      <hr className="text-amber-50/5 border-t-3 rounded mt-4" />

      <div className="flex flex-col text-start gap-2 mt-8 h-116 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-slate-600/40 scrollbar-track-slate-800/50">
        {messages.map((messageMap, index) => (
          <ChatMessage key={index} messageText={messageMap} index={index} />
        ))}
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
          disabled={isWaitingForResponse}
          ref={inputMessageRef}
        />
        {!isTestChat && <Button
          icon="../../../src/assets/deleteChat.png"
          height="h-11"
          width="w-12"
          action={() => {
            removeChat()
          }}
        />}
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
