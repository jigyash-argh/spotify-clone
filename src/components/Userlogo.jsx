import React from 'react'

const Userlogo = ({ user }) => {
  // Fallback if user or user.name is missing
  const initial = user?.name ? user.name[0].toUpperCase() : '?';

  return (
    <div className="flex items-center hover:scale-110 cursor-pointer">
      <div
        className="w-12 h-12 bg-gradient-to-br from-green-500 to-black rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md border border-[#282828]"
        title={user?.name}
      >
        {initial}
      </div>
    </div>
  );
};

export default Userlogo