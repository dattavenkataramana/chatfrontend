import { useState } from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  const handleImageClick = () => {
    const newCount = count + 1;

    setCount(newCount);

    if (newCount === 4) {
      navigate("/login");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-pink-100">
      <img
        src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46"
        alt="God"
        className="w-80 rounded-xl shadow-lg cursor-pointer"
        onClick={handleImageClick}
      />

      <h1 className="mt-5 text-2xl font-bold text-pink-700">
        Radha Krishna ❤️
      </h1>

      <p className="mt-2 text-gray-600">Tap the image 4 times</p>
    </div>
  );
}

export default WelcomePage;
