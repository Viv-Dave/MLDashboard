import { useState } from "react";
import { imageList } from "./imageList";

export default function DatasetDisplay() {
  const getRandomImages = () => {
    const shuffled = [...imageList].sort(() => Math.random() - 0.5);

    return shuffled.slice(0, 9);
  };

  const [selectedImages, setSelectedImages] = useState(getRandomImages());

  function handleButtonClick() {
    setSelectedImages(getRandomImages());
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Dataset Page</h1>

        <button
          onClick={handleButtonClick}
          className="px-5 py-2 rounded-lg bg-black text-white hover:opacity-90 transition"
        >
          Randomize Images
        </button>
      </div>

      <div className="grid grid-cols-3 gap-0">
        {selectedImages.map((item) => {
          return <ImageCard key={item.id} path={item.path} num={item.num} />;
        })}
      </div>
    </div>
  );
}

function ImageCard({ path, num }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border-2 border-gray-100 p-2 flex flex-col items-center">
      <img
        src={path}
        alt={`Digit ${num}`}
        className="w-40 h-40 object-contain"
      />

      <p className="mt-4 text-xl font-semibold text-black">Label: {num}</p>
    </div>
  );
}
