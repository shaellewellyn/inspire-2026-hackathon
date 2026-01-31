import { useEffect, useState } from "react";
import { locations as initialLocations } from "./data/locations.js";

function App() {
  const [viewAll, setViewAll] = useState(false);
  const [locations, setLocations] = useState(initialLocations);

  // Simulate live traffic updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLocations((prev) =>
        prev.map((loc) => ({
          ...loc,
          busyness: Math.max(
            0,
            Math.min(100, loc.busyness + Math.floor(Math.random() * 11 - 5))
          )
        }))
      );
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const sortedLocations = [...locations].sort((a, b) => a.busyness - b.busyness);
  const recommendedLocations = sortedLocations.filter((loc) => loc.busyness < 40).slice(0, 3);

  return (
    <div style={{ width: "100vw" }}>
      <div className="app-container" style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h1>Tourist Traffic</h1>
        <p>Live updates | Least busy to Most busy</p>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>{viewAll ? "All Locations" : "Smart Mode"}</h2>
          <button onClick={() => setViewAll(!viewAll)}>
            {viewAll ? "View Smart Mode" : "View All Locations"}
          </button>
        </div>

        <h2>Recommended</h2>
        <ul>
          {(viewAll ? sortedLocations : recommendedLocations).map((loc) => (
            <li
              key={loc.id}
              className={
                loc.busyness < 30
                  ? "calm"
                  : loc.busyness < 70
                  ? "moderate"
                  : "crowded"
              }
            >
              {/* Tags */}
              {loc.tags && (
                <div style={{ background: "yellow", color: "black", padding: "4px", marginBottom: "6px" }}>
                  {loc.tags.join(", ")}
                </div>
              )}

              {/* Name + city */}
              <strong>{loc.name}</strong> ({loc.city})

              {/* Busyness bar */}
              <div className="bar-wrapper">
                <div
                  className="bar-fill"
                  style={{ width: `${loc.busyness}%` }}
                />
              </div>

              <small>{loc.busyness}% busy</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
