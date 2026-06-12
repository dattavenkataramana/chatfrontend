import { useState } from "react";

interface Props {
  onSend: (message: string) => void;
}

function MessageInput({ onSend }: Props) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="flex gap-2">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="
        flex-1
        bg-white
        border
        rounded-full
        px-4
        py-3
        outline-none"
      />

      <button
        onClick={handleSend}
        className="
        bg-[#25D366]
        text-white
        px-6
        rounded-full"
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
