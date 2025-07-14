"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HomePage() {
  const [roomID, setRoomID] = useState("");
  const router = useRouter();

  const handleJoin = () => {
    if (roomID.trim()) {
      router.push(`/room/${roomID}`);
    } else {
      alert("Please enter a Room ID.");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-950 text-white space-y-6">
      <motion.h1
        className="text-5xl font-bold tracking-wide text-yellow-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🎥 SyncStream
      </motion.h1>
      <motion.p
        className="text-gray-400 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Real-time Video Meetings with AI Emotion Detection
      </motion.p>

      <div className="flex space-x-2 mt-4">
        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomID}
          onChange={(e) => setRoomID(e.target.value)}
          className="px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white w-64"
        />
        <button
          onClick={handleJoin}
          className="px-5 py-3 bg-yellow-600 hover:bg-yellow-700 rounded text-white font-semibold transition"
        >
          Join Meeting
        </button>
      </div>

      <p className="text-sm text-gray-500 mt-8">© 2025 SyncStream. All rights reserved.</p>
    </div>
  );
}
