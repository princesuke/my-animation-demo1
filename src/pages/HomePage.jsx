import FadeSlideDemo from "../components/FadeSlideDemo";
import ScaleRotateDemo from "../components/ScaleRotateDemo";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-center">Animation</h1>
      <ScaleRotateDemo />
      <div className="mt-10 bg-amber-200 h-2"></div>
      <FadeSlideDemo />
    </div>
  );
}
