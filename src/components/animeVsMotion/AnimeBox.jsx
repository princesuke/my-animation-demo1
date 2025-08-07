import { useState } from "react";
import { animate } from "animejs";

export default function AnimeBox() {
  const [toggled, setTogged] = useState(null);

  const handleClick = () => {
    animate(
      ".box2",
      toggled
        ? {
            x: 150,
            rotate: 360,
            duration: 2000,
          }
        : {
            x: 0,
            rotate: 0,
            duration: 1000,
          }
    );

    setTogged(!toggled);
  };

  return (
    <div className="px-5 space-y-5">
      <button
        onClick={() => handleClick()}
        className="bg-blue-700 p-3 text-white rounded-sm cursor-pointer"
      >
        Play with Anime
      </button>
      <div className="box2 w-10 h-10 bg-red-500 rounded-sm"></div>
    </div>
  );
}
