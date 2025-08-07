import { animate } from "animejs";

export default function ScaleRotateDemo() {
  const handleScaleRotate = () => {
    animate(".box0", {
      keyframes: [
        { y: "-2.5rem", duration: 100 },
        { x: "17rem", rotate: 180, scale: 0.5 },
        { y: "2.5rem" },
        { x: 0, y: 0 },
      ],
      loop: true,
      alternate: true,
      playbackEase: "inOut(3)",
      //   duration: 800,
    });
  };

  return (
    <div className="px-10">
      <div className="box0 w-20 h-20 bg-amber-700 rounded-lg"></div>
      <button
        onClick={handleScaleRotate}
        className="mt-3 bg-blue-700 p-3 text-white rounded-sm cursor-pointer"
      >
        Play Box0
      </button>
    </div>
  );
}
