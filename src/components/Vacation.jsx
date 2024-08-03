"use client";
import Image from "next/image";
import { useState } from "react";
//faltu data
const vacations = [
  {
    id: 1,
    name: "Rome, Italy",
    image: "/path/to/rome.jpg",
    price: "5,42k",
    duration: "10 Days Trip",
    rating: 4.8,
  },
  {
    id: 2,
    name: "London, UK",
    image: "/path/to/london.jpg",
    price: "2,42k",
    duration: "07 Days Trip",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Osaka, Japan",
   
    image: "/japan.jpeg",
    price: "5,42k",
    duration: "10 Days Trip",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Osaka, Japan",
    image: "/path/to/osaka.jpg",
    price: "5,42k",
    duration: "10 Days Trip",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Osaka, Japan",
    image: "/path/to/osaka.jpg",
    price: "5,42k",
    duration: "10 Days Trip",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Osaka, Japan",
    image: "/path/to/osaka.jpg",
    price: "5,42k",
    duration: "10 Days Trip",
    rating: 4.8,
  },
];

const VacationPlan = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? vacations.length - 3 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= vacations.length - 3 ? 0 : prevIndex + 1
    );
  };

  const displayedVacations = vacations.slice(currentIndex, currentIndex + 3);

  return (
    <div className="flex justify-center items-center flex-wrap gap-6 p-10 bg-white">
      <h1 className="w-full text-2xl font-bold text-center mb-4">
        Best <bold className="text-customOrange">vacation plan</bold>
      </h1>
      <p className="w-full text-center mb-6">
        Plan your perfect vacation with{" "}
        <bold className="text-customOrange">Rahi</bold> Discover and customize
        your journey to create your <br></br> perfect trip and choose among
        hundreds of all-inclusive offers!
      </p>
      <button
        className="mr-4 "
        onClick={handleLeftClick}
        disabled={currentIndex === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="30"
          fill="orange"
          class="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
      </button>
      <div className="flex overflow-hidden">
        {displayedVacations.map((vacation) => (
          <div
            key={vacation.id}
            className="max-w-sm rounded overflow-hidden shadow-lg mx-2 flex-shrink-0"
          >
            <Image
              src={vacation.image}
              alt={vacation.name}
              width={300}
              height={200}
              objectFit="cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{vacation.name}</div>
              <p className="text-gray-700 text-base">
                {vacation.price} | {vacation.duration}
              </p>
              <p className="text-gray-600 text-sm">⭐ {vacation.rating}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="ml-4"
        onClick={handleRightClick}
        disabled={currentIndex >= vacations.length - 3}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="orange"
          class="bi bi-arrow-right-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
        </svg>
      </button>
    </div>
  );
};

export default VacationPlan;
