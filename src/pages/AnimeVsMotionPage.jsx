import AnimeBox from "../components/animeVsMotion/AnimeBox";
import MotionBox from "../components/animeVsMotion/MotionBox";

export default function AnimeVsMotionPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 space-y-10">
      <h1>Anime Vs Motion</h1>
      <MotionBox />
      <AnimeBox />
    </div>
  );
}
