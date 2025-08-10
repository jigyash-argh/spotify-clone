import React from "react";
import Yourliberarysectio from "./Yourliberarysectio ";

export default function Liberary({ collapsed, setCollapsed }) {
  return (
    <div className="h-full">
      <Yourliberarysectio
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
    </div>
  );
}
