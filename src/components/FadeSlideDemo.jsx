import { useRef, useState } from "react";
import { animate, stagger, text } from "animejs";

export default function FadeSlideDemo() {
  const [isSlideLeft, setIsSlideLeft] = useState(false);
  //   const box2Ref = useRef(null);
  let player;

  const handleAnimateBox = () => {
    animate(".box2", {
      translateX: [0, 200],
      scale: [0, 1],
      duration: 800,
      ease: "outCubic",
      delay: stagger(100),
    });
  };

  const handleAnimateText = () => {
    if (player) {
      player.play();
      return;
    }

    const { chars } = text.split("p", {
      chars: true,
    });

    player = animate(chars, {
      y: ["0px", "-10px", "10px", "0px"],
      x: ["0px", "20px"],
      loop: true,
      delay: stagger(100),
    });
  };

  return (
    <div className="p-10">
      <div
        className={`box1 h-10 w-10 bg-amber-300 ${
          isSlideLeft ? "translate-x-[100px] scale-150" : ""
        } transition-all`}
      ></div>
      <button
        onClick={() => setIsSlideLeft(!isSlideLeft)}
        className="mt-3 bg-blue-700 p-3 text-white rounded-sm cursor-pointer"
      >
        Play Box1
      </button>

      <div className="mt-20">
        <div className="space-y-3">
          <div className="box2 h-10 w-10 bg-red-500"></div>
          <div className="box2 h-10 w-10 bg-red-500"></div>
          <div className="box2 h-10 w-10 bg-red-500"></div>
          <div className="box2 h-10 w-10 bg-red-500"></div>
        </div>
        <button
          onClick={() => handleAnimateBox()}
          className="mt-3 bg-blue-700 p-3 text-white rounded-sm cursor-pointer"
        >
          Play Box2
        </button>
      </div>

      <div className="mt-10">
        <p>CodeCamp 20</p>
        <button
          onClick={() => handleAnimateText()}
          className="mt-3 bg-blue-700 p-3 text-white rounded-sm cursor-pointer"
        >
          Play Text
        </button>
        <button
          onClick={() => player.pause()}
          className="mt-3 ml-3 bg-blue-700 p-3 text-white rounded-sm cursor-pointer"
        >
          Pause
        </button>
      </div>
    </div>
  );
}
