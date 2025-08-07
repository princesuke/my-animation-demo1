import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
