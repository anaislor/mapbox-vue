import axios from "axios";
require("dotenv").config();
const service = axios.create({ baseURL: "https://api.mapbox.com" });

export default {
  getSearch: search_text => {
    return service
      .get(
        `/geocoding/v5/mapbox.places/${search_text}.json?limit=10&proximity=2.3522,48.8566&access_token=${process.env.VUE_APP_MAPBOX_API_KEY}`
      )
      .then(res => res.data.features);
  },
  getDirection: (origin, destination) => {
    return service
      .get(
        `/directions/v5/mapbox/driving-traffic/${origin};${destination}?access_token=${process.env.VUE_APP_MAPBOX_API_KEY}`
      )
      .then(res => res.data.waypoints);
  }
};
