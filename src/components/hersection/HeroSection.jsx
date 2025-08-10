import React, { useState, useRef } from "react";
import MiddlePart from "../hersection/MiddlePart";
import Rightpart from "../rightside/Rightpart";
import Liberary from "../liberary/Liberary";

export default function HeroSection() {
  const [libWidth, setLibWidth] = useState(240);
  const [collapsed, setCollapsed] = useState(false);
  const [lastExpandedWidth, setLastExpandedWidth] = useState(240);
  const [rightWidth, setRightWidth] = useState(300);

  const containerRef = useRef(null);
  const isDragging = useRef(null);
  const COLLAPSE_THRESHOLD = 100;

  const startDrag = (e, side) => {
    isDragging.current = side;
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  const handleDrag = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    if (isDragging.current === "left") {
      let newW = e.clientX - rect.left;
      if (newW < 72) {
        setCollapsed(true);
        setLibWidth(72);
      } else if (newW > 72 && newW < 400) {
        setLibWidth(newW);
        setCollapsed(false);
        setLastExpandedWidth(newW);
      }
    } else if (isDragging.current === "right") {
      let newW = rect.right - e.clientX;
      if (newW > 150 && newW < 500) setRightWidth(newW);
    }
  };

  const stopDrag = () => {
    isDragging.current = null;
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", stopDrag);
  };

  const toggleCollapse = () => {
    if (collapsed) {
      setCollapsed(false);
      setLibWidth(lastExpandedWidth);
    } else {
      setCollapsed(true);
      setLibWidth(72);
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex bg-black text-white h-[78vh] overflow-hidden"
    >
      {/* Left Sidebar */}
      <div
        className="bg-[#121212] rounded-2xl transition-all duration-300 flex flex-col"
        style={{ width: libWidth }}
      >
        <Liberary
          collapsed={collapsed}
          setCollapsed={toggleCollapse}
        />
      </div>

      {/* Always show resizer */}
      <div
        onMouseDown={(e) => startDrag(e, "left")}
        className="w-1 bg-transparent hover:bg-white active:bg-white cursor-col-resize"
        style={{ marginLeft: collapsed ? "-0.5rem" : 0 }}
      />

      {/* Middle */}
      <div className="flex-1">
        <MiddlePart />
      </div>

      {/* Right Resizer */}
      <div
        onMouseDown={(e) => startDrag(e, "right")}
        className="w-1 bg-transparent hover:bg-white active:bg-white cursor-col-resize"
      />

      {/* Right Sidebar */}
      <div style={{ width: rightWidth }} className="bg-[#121212] rounded-2xl p-5">
        <Rightpart />
      </div>
    </div>
  );
}
