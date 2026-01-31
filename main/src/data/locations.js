
// src/data/locations.js
export const locations = [
  {
    id: 1,
    name: "Inner Harbour",
    city: "Victoria",
    busyness: 90,
    lat: 48.4215,
    lng: -123.3687,
    tags: ["waterfront", "downtown", "popular"]
  },
  {
    id: 2,
    name: "Fisherman's Wharf",
    city: "Victoria",
    busyness: 75,
    lat: 48.4236,
    lng: -123.3735
    tags: ["waterfront", "downtown", "popular"]
  },
  {
    id: 3,
    name: "Royal BC Museum",
    city: "Victoria",
    busyness: 85,
    lat: 48.4201,
    lng: -123.3676,
    tags: ["downtown", "popular"]

  },
  {
    id: 4,
    name: "Beacon Hill Park",
    city: "Victoria",
    busyness: 40,
    lat: 48.4134,
    lng: -123.3600,
    tags: ["nature", "downtown", "popular", "walkable"]
  },
  {
    id: 5,
    name: "Dallas Road Waterfront",
    city: "Victoria",
    busyness: 25,
    lat: 48.4105,
    lng: -123.3762,
    tags: ["nature", "walkable"]

  },
  {
    id: 6,
    name: "Craigdarroch Castle",
    city: "Victoria",
    busyness: 45,
    lat: 48.4456,
    lng: -123.3335,
    tags: ["historic"]
  },
  {
    id: 7,
    name: "Chinatown (Fan Tan Alley)",
    city: "Victoria",
    busyness: 70,
    lat: 48.4321,
    lng: -123.3694,
    tags:["historic", "downtown"]
  },
  {
    id: 8,
    name: "Government Street",
    city: "Victoria",
    busyness: 80,
    lat: 48.4245,
    lng: -123.3670,
    tags:["popular", "walkable"]
  },
  {
    id: 9,
    name: "Songhees Walkway",
    city: "Victoria",
    busyness: 30,
    lat: 48.4308,
    lng: -123.3867,
    tags: ["walkable"]
  }, 
  {
    id: 10,
    name: "Oak Bay Marina",
    city: "Victoria",
    busyness: 20,
    lat: 48.4263,
    lng: -123.3116,
    tags: ["waterfront"]
  }
];



const sortedLocations = [...locations].sort(
    (a, b) => a.busyness - b.busyness
);