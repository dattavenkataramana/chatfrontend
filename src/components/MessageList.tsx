import type { Message } from "../types/message";

interface Props {
  messages: Message[];
  currentUserId: number;
}

function MessageList({ messages, currentUserId }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${
            msg.sender_id === currentUserId ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[75%]
            px-4 py-2
            rounded-2xl
            shadow

            ${msg.sender_id === currentUserId ? "bg-[#d9fdd3]" : "bg-white"}
            `}
          >
            <p>{msg.message}</p>

            <div className="text-xs text-gray-500 mt-1 text-right">
              {new Date(msg.created_at).toLocaleTimeString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
