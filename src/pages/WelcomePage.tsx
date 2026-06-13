import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://wallpapercave.com/wp/wp7872152.jpg",
    "https://wallpapercave.com/wp/wp7872161.jpg",
    "https://wallpapercave.com/wp/wp7872147.jpg",
    "https://wallpapercave.com/wp/wp7872157.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = () => {
    const newCount = count + 1;

    setCount(newCount);

    if (newCount === 4) {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-md">
        <img
          src={images[currentImage]}
          alt="Radha Krishna"
          className="w-full  object-cover rounded-3xl shadow-2xl cursor-pointer transition-all duration-700"
          onClick={handleImageClick}
        />
      </div>

      <h1 className="mt-6 text-3xl font-bold text-pink-700">
         Radha Krishna 
      </h1>

      
    </div>
  );
}

export default WelcomePage;
