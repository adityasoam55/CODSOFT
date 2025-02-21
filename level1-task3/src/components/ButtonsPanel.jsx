import React from "react";
import Button from "./Button";

export default function ButtonsPanel({ onButtonClick }) {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "C", "0", "=", "+"
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {buttons.map((btn) => (
        <Button key={btn} label={btn} onClick={() => onButtonClick(btn)} />
      ))}
    </div>
  );
}
