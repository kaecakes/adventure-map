export type PlacesType = {
  id: number,
  name: string,
  longitude: number,
  latitude: number,
  type: string,
}

const layers = {
  "places": [
    {
      "id": 1,
      "name": "Iron Goat",
      "longitude": -121.171,
      "latitude": 47.719,
      "type": "hike"
    },
    {
      "id": 2,
      "name": "Ohanapecosh Campground",
      "longitude": -121.5692,
      "latitude": 46.7328,
      "type": "camp"
    },
    {
      "id": 3,
      "name": "Stehekin",
      "longitude": -120.6567,
      "latitude": 48.3105,
      "type": "destination"
    },
  ]
}

export default layers;
