
// src/data/locations.js
export const locations = [
  {
    id: 1,
    name: "Inner Harbour",
    city: "Victoria",
    busyness: 90
  },
  {
    id: 2,
    name: "Fisherman's Wharf",
    city: "Victoria",
    busyness: 75
  },
  {
    id: 3,
    name: "Royal BC Museum",
    city: "Victoria",
    busyness: 85

  },
  {
    id: 4,
    name: "Beacon Hill Park",
    city: "Victoria",
    busyness: 40
  },
  {
    id: 5,
    name: "Dallas Road Waterfront",
    city: "Victoria",
    busyness: 25

  },
  {
    id: 6,
    name: "Craigdarroch Castle",
    city: "Victoria",
    busyness: 45
  },
  {
    id: 7,
    name: "Chinatown (Fan Tan Alley)",
    city: "Victoria",
    busyness: 70
  },
  {
    id: 8,
    name: "Government Street",
    city: "Victoria",
    busyness: 80
  },
  {
    id: 9,
    name: "Songhees Walkway",
    city: "Victoria",
    busyness: 30
  }, 
  {
    id: 10,
    name: "Oak Bay Marina",
    city: "Victoria",
    busyness: 20
  },
  {
    id: 11,
    name: "Cattle Poiny Lookout",
    city: "Victoria",
    busyness: 4
  },
  {
    id: 12,
    name: "Cadboro Bay",
    city: "Victoria",
    busyness: 11
  },
  {
    id: 13,
    name: "The Cove",
    city: "Victoria",
    busyness: 10
  }, 
  {
    id: 14,
    name: "Galloping Goose Trail",
    city: "Victoria",
    busyness: 10
  }
];



const sortedLocations = [...locations].sort(
    (a, b) => a.busyness - b.busyness
);