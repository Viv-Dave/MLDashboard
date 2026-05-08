import { useState } from "react";

import ApiStats from "./SubPages/apiData";
import Charts from "./SubPages/chartsData";
import DefaultPage from "./SubPages/defaultPage";
import MachineLearningData from "./SubPages/MachineData";

export default function NavBar() {
  const [page, setPage] = useState(1);

  const list = [
    {
      id: 1,
      button_name: "Home",
    },
    {
      id: 2,
      button_name: "Machine Learning",
    },
    {
      id: 3,
      button_name: "API Data",
    },
    {
      id: 4,
      button_name: "Charts",
    },
  ];

  function handleClick(id) {
    setPage(id);
  }

  return (
    <>
      <div
        className="
    relative
    w-full
    flex
    border-b
    border-t
    border-green-500
    bg-white
    overflow-hidden
    p-1
  "
      >
        {/* Sliding Active Background */}
        <div
          className="
      absolute
      top-1
      left-0
      h-[calc(100%-8px)]
      bg-gray-200
      rounded-full
      transition-all
      duration-300
      ease-in-out
    "
          style={{
            width: `${100 / list.length}%`,
            transform: `translateX(${(page - 1) * 100}%)`,
          }}
        />

        {list.map((button) => {
          return (
            <button
              key={button.id}
              onClick={() => handleClick(button.id)}
              className={`
          relative
          z-10
          flex-1
          py-3
          text-sm
          font-normal
          rounded-full
          transition-colors
          duration-300

          ${
            page === button.id
              ? "text-green-700"
              : "text-green-700 hover:bg-gray-100"
          }
        `}
            >
              {button.button_name}
            </button>
          );
        })}
      </div>
    </>
  );
}

function DisplayPage({ page }) {
  switch (page) {
    case 1:
      return <DefaultPage />;

    case 2:
      return <MachineLearningData />;

    case 3:
      return <ApiStats />;

    case 4:
      return <Charts />;

    default:
      return <DefaultPage />;
  }
}
