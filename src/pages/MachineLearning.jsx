import { useEffect, useState } from "react";

export default function MachineLearning() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">
          Machine Learning Dashboard
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:scale-105 hover:shadow-xl"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="mb-2 text-xl font-semibold text-gray-800">
                  {item.title}
                </h2>

                <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-indigo-600">
                    ${item.price}
                  </span>

                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                    ⭐ {item.rating}
                  </span>
                </div>

                <button className="mt-5 w-full rounded-xl bg-indigo-600 py-2 font-medium text-white transition hover:bg-indigo-700">
                  View Prediction
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
