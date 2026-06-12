
import { useNavigate } from "react-router-dom";

interface Props {
  onClearChat: () => void;
}

function Navbar({ onClearChat }: Props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="bg-[#075E54] text-white p-4 flex justify-between">
      <h1 className="font-bold">Chat</h1>

      <div className="flex gap-3">
        <button
          onClick={onClearChat}
          className="bg-white text-[#075E54] px-3 py-2 rounded"
        >
          Clear Chat
        </button>

        <button
          onClick={handleLogout}
          className="bg-white text-[#075E54] px-3 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;