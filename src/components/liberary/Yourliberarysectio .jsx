import React from "react";

const Yourliberarysectio = ({ collapsed = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 w-full px-4 py-3 text-white font-semibold rounded-lg hover:bg-[#1F1F1F] transition-colors cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866M16 4.732V20h4V7.041zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1" />
      </svg>
      {!collapsed && <span>Your Library</span>}
    </button>
  );
};

export default Yourliberarysectio;
