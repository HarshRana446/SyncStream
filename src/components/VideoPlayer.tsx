"use client";
import React, { useRef, useEffect } from "react";

interface VideoPlayerProps {
  stream: MediaStream | null;
  muted?: boolean;
  borderColor: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ stream, muted = false, borderColor }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      muted={muted}
      className={`rounded-2xl border-4 ${borderColor} shadow-lg w-full h-full object-cover`}
    />
  );
};

export default VideoPlayer;
