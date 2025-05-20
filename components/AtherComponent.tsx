"use client";

import { useVapi } from "@/lib/vapi";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, PhoneOff } from "lucide-react";
import toast from "react-hot-toast";

export default function TalkItOutVoiceChat() {
  const { startCall, stopCall, isCallActive } = useVapi();

  const [isStarting, setIsStarting] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [voiceLevels, setVoiceLevels] = useState([0, 0, 0, 0, 0]);

  const voiceLevelIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Update voice levels every 250ms while call active
  useEffect(() => {
    if (isCallActive) {
      voiceLevelIntervalRef.current = setInterval(() => {
        setVoiceLevels(
          Array(5)
            .fill(0)
            .map(() => Math.random() * 40)
        );
      }, 250);
    } else {
      setVoiceLevels([0, 0, 0, 0, 0]);
      if (voiceLevelIntervalRef.current) {
        clearInterval(voiceLevelIntervalRef.current);
        voiceLevelIntervalRef.current = null;
      }
    }

    return () => {
      if (voiceLevelIntervalRef.current) {
        clearInterval(voiceLevelIntervalRef.current);
        voiceLevelIntervalRef.current = null;
      }
    };
  }, [isCallActive]);

  const handleStartCall = useCallback(async () => {
    setIsStarting(true);
    try {
      await startCall();
      setIsStarted(true);
    } catch {
      setIsStarted(false);
      toast("Some error Occured");
    } finally {
      setIsStarting(false);
    }
  }, [startCall]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      <motion.div
        className="w-full max-w-md bg-white rounded-3xl shadow-lg border border-gray-200 flex flex-col items-center p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4 select-none">
          TalkItOut Voice Chat
        </h1>

        {isStarted && isCallActive && (
          <motion.div
            className="mb-8 px-6 py-4 rounded-lg w-full text-center"
            animate={{
              backgroundColor: isCallActive
                ? "rgba(220, 38, 38, 0.1)"
                : isStarting
                ? "rgba(243, 244, 246, 0.5)"
                : "rgba(229, 231, 235, 0.5)",
              color: isCallActive ? "#dc2626" : "#4b5563",
            }}
            transition={{ duration: 0.4 }}
            aria-live="polite"
            role="status"
          >
            Say Hello to Start
          </motion.div>
        )}

        <div className="flex items-end gap-2 h-16 w-full max-w-xs mb-12">
          {voiceLevels.map((level, i) => (
            <motion.div
              key={i}
              animate={{ height: 6 + level }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-1 rounded-full bg-red-500"
              aria-hidden="true"
              style={{ maxWidth: "6px", minWidth: "4px" }}
            />
          ))}
        </div>

        <div className="flex justify-center gap-10 w-full max-w-xs">
          <motion.button
            onClick={handleStartCall}
            disabled={isStarted}
            whileHover={
              !isCallActive && !isStarting
                ? { scale: 1.07, backgroundColor: "#4ade80", color: "#065f46" }
                : {}
            }
            whileTap={!isCallActive && !isStarting ? { scale: 0.95 } : {}}
            className={`relative flex items-center justify-center gap-2 flex-1 rounded-full py-4 text-lg font-semibold
              border-2 border-green-600
              ${
                isStarted
                  ? "bg-green-200 border-green-200 cursor-not-allowed opacity-40 text-transparent select-none"
                  : "bg-green-600 text-white shadow-md"
              }
            `}
            aria-label="Start Call"
          >
            <AnimatePresence>
              <>
                <PhoneCall className="w-5 h-5" />
                Start Call
              </>
            </AnimatePresence>
          </motion.button>

          {/* End Call button */}
          <motion.button
            onClick={stopCall}
            disabled={!isCallActive}
            whileHover={isCallActive ? { scale: 1.07 } : {}}
            whileTap={isCallActive ? { scale: 0.95 } : {}}
            className={`flex items-center justify-center flex-1 rounded-full py-4 text-lg font-semibold
              border-2 border-gray-300
              transition-colors duration-300
              ${
                isCallActive
                  ? "bg-red-600 text-white border-red-600 shadow-lg hover:bg-red-700"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }
            `}
            aria-label="End Call"
          >
            <PhoneOff className="w-5 h-5" />
            End Call
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
