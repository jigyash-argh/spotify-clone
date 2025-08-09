import React, { useState, useRef } from "react";

import MiddlePart from "../hersection/MiddlePart";
import Rightpart from "../rightside/Rightpart";
import Liberary from "../liberary/Liberary";
export default function App() {
  const [libWidth, setLibWidth] = useState(300);
  const [rightWidth, setRightWidth] = useState(300);
  const containerRef = useRef(null);
  const isDragging = useRef(null);

  const startDrag = (e, side) => {
    isDragging.current = side;
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  const handleDrag = (e) => {
    const containerRect = containerRef.current.getBoundingClientRect();

    if (isDragging.current === "left") {
      const newWidth = e.clientX - containerRect.left;
      if (newWidth > 150 && newWidth < 500) setLibWidth(newWidth);
    }
    if (isDragging.current === "right") {
      const newWidth = containerRect.right - e.clientX;
      if (newWidth > 150 && newWidth < 500) setRightWidth(newWidth);
    }
  };

  const stopDrag = () => {
    isDragging.current = null;
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", stopDrag);
  };

  return (
    <div
      ref={containerRef}
      className="flex  bg-black text-white overflow-hidden gap-2 m-2 h-[78vh]"
    >
      <div style={{ width: libWidth }} className="bg-[#121212] rounded-2xl ">
        <Liberary />
      </div>

      <div
        onMouseDown={(e) => startDrag(e, "left")}
        className="w-1 bg-transparent active:bg-white cursor-col-resize hover:bg-white"
      />

      <div className="flex-1">
        <MiddlePart />
      </div>

      <div
        onMouseDown={(e) => startDrag(e, "right")}
        className="w-1 bg-transparent active:bg-white cursor-col-resize hover:bg-white"
      />

      <div style={{ width: rightWidth }} className="bg-[#121212] rounded-2xl p-5">
        <Rightpart />
      </div>
    </div>
  );
}
