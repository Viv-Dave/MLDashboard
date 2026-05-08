import NavBar from "./NavBar";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="p-0">
        <h1 className="text-5xl font-bold text-green-500">ML Dashboard</h1>

        <p className="text-gray-500 mt-2">
          Monitor datasets, APIs, and machine learning experiments in one place.
        </p>
        <NavBar />
      </div>
    </div>
  );
}
