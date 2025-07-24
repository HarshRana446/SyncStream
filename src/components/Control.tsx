"use client";
import React from "react";

interface ControlsProps {
  onShareScreen: () => void;
  onRecord: () => void;
  onStop: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onShareScreen, onRecord, onStop }) => (
  <div className="flex gap-4 mt-4">
    <button onClick={onShareScreen} className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600 text-white">Share Screen</button>
    <button onClick={onRecord} className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 text-white">Record</button>
    <button onClick={onStop} className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-600 text-white">Stop</button>
  </div>
);

export default Controls;