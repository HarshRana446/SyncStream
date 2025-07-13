"use client";

import { useState, useRef, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function MeetingRoom() {
  const { roomID } = useParams();
  const router = useRouter();
  const userVideo = useRef<HTMLVideoElement>(null);
  const partnerVideo = useRef<HTMLVideoElement>(null);
  const [emotion, setEmotion] = useState("Waiting...");

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      if (userVideo.current) userVideo.current.srcObject = stream;
    });
  }, []);

  const leaveMeeting = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-950 text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-900 border-b border-gray-800 shadow">
        <h2 className="text-2xl font-bold tracking-wide">🎥 SyncStream — Room: <span className="text-yellow-400">{roomID}</span></h2>
        <button
          onClick={leaveMeeting}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition"
        >
          Leave Meeting
        </button>
      </div>

      {/* Main Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Video Section */}
        <div className="flex flex-col items-center w-2/3 p-6 space-y-6 bg-gray-900">
          <div className="flex space-x-4">
            <video
              ref={userVideo}
              autoPlay
              muted
              playsInline
              className="w-[480px] h-[270px] rounded-lg border-4 border-blue-500 shadow-lg"
            />
            <video
              ref={partnerVideo}
              autoPlay
              playsInline
              className="w-[480px] h-[270px] rounded-lg border-4 border-green-500 shadow-lg"
            />
          </div>

          <div className="text-lg mt-2">
            😊 Emotion: <span className="font-bold text-yellow-400">{emotion}</span>
          </div>

          <div className="flex space-x-4 mt-4">
            <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded shadow transition">Share Screen</button>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded shadow transition">Record</button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded shadow transition">Stop</button>
          </div>
        </div>

        {/* Chat Section */}
        <div className="flex flex-col w-1/3 p-6 border-l border-gray-800 bg-gray-900 space-y-4">
          <h3 className="text-xl font-semibold mb-2">💬 Chat</h3>
          <div className="flex-1 bg-gray-800 rounded p-3 overflow-y-auto space-y-2 shadow-inner">
            <p className="text-gray-400 text-sm">No messages yet...</p>
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="p-2 rounded bg-gray-700 text-white focus:outline-none shadow"
          />
        </div>
      </div>
    </div>
  );
}
