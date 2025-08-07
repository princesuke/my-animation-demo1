import { useState } from "react";
import { motion } from "motion/react";

export default function MotionBox() {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="px-5 space-y-5">
      <button
        onClick={() => setAnimate(!animate)}
        className="bg-blue-700 p-3 text-white rounded-sm cursor-pointer"
      >
        Play with Motion
      </button>
      <motion.div
        animate={
          animate
            ? {
                x: 150,
                rotate: 360,
                transition: { duration: 2 },
              }
            : {
                x: 0,
                rotate: 0,
                transition: { duration: 1 },
              }
        }
        className="w-10 h-10 bg-amber-500 rounded-sm"
      ></motion.div>
    </div>
  );
}
