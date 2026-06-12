import { useEffect, useState } from "react";

import api from "../services/api";
import socket from "../services/socket";

import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

import type { Message } from "../types/message";

interface Props {
  clearSignal: number;
}

function ChatBox({ clearSignal }: Props) {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const currentUserId = user.id;

  const receiverId = currentUserId === 1 ? 2 : 1;

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    loadMessages();

    socket.emit("join", {
      user_id: currentUserId,
    });

    socket.on("receive_message", (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  // Listen for Clear Chat
  useEffect(() => {
    if (clearSignal > 0) {
      clearChat();
    }
  }, [clearSignal]);

  const loadMessages = async () => {
    try {
      const response = await api.get("/chat/messages", {
        params: {
          sender_id: currentUserId,
          receiver_id: receiverId,
        },
      });

      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = (message: string) => {
    socket.emit("send_message", {
      sender_id: currentUserId,
      receiver_id: receiverId,
      message,
    });
  };

  const clearChat = async () => {
    try {
      await api.delete("/chat/clear-chat");

      // Remove messages from screen immediately
      setMessages([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#efeae2]">
      <div className="flex-1 overflow-y-auto p-4">
        <MessageList messages={messages} currentUserId={currentUserId} />
      </div>

      <div className="bg-gray-100 p-3 border-t">
        <MessageInput onSend={sendMessage} />
      </div>
    </div>
  );
}

export default ChatBox;
