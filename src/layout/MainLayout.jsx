import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <div className="w-full bg-white shadow">
        <nav className="container mx-auto flex gap-6 py-4 px-4">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>{" "}
          |
          <NavLink to="/anime-vs-motion" className="hover:underline">
            Anime vs Motion
          </NavLink>{" "}
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
