import { useState } from "react";

import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";

function ChatPage() {
  const [clearSignal, setClearSignal] = useState(0);

  const handleClearChat = () => {
    setClearSignal((prev) => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar onClearChat={handleClearChat} />

      <div className="flex-1">
        <ChatBox clearSignal={clearSignal} />
      </div>
    </div>
  );
}

export default ChatPage;
