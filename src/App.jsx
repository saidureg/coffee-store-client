import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadCoffees);

  return (
    <div className="max-w-7xl mx-auto ">
      <h1 className="text-3xl font-semibold text-center mt-24 mb-4">
        Hot Hot cool coffee: {coffees.length}
      </h1>
      <div className="mb-24 text-center">
        <Link to="/add_coffee">
          <button className="btn btn-secondary">Add Coffee</button>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
