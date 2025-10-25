import React, { useState } from "react";

const timelineData = [
  { name: "All", page: "all" },
  { name: "Ongoing", page: "ongoing" },
  { name: "Upcoming", page: "upcoming" },
  { name: "Past", page: "completed" },
];

export const Timeline: React.FC<{ setTab: (tab: string) => void }> = ({ setTab }) => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="flex justify-center">
      <div className="flex bg-gray-100 rounded-full p-2 space-x-2">
        {timelineData?.map((tab) => (
          <button
            key={tab?.page}
            onClick={() => {
              setActiveTab(tab?.page);
              setTab(tab?.page);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeTab === tab?.page
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-200"
              }`}
          >
            {tab?.name}
          </button>
        ))}
      </div>
    </div>
  );
}
