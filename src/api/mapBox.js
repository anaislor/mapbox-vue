import axios from "axios";
require("dotenv").config();
const service = axios.create({ baseURL: "https://api.mapbox.com" });

export default {
  displayMap: () => {
    return service
      .get(
        `/v4/mapbox.mapbox-streets-v8/1/0/0.mvt?access_token=${process.env.VUE_APP_MAPBOX_API_KEY}`
      )
      .then(res => res.data);
  },

  getSearch: search_text => {
    return service
      .get(
        `/geocoding/v5/mapbox.places/${search_text}.json?access_token=${process.env.VUE_APP_MAPBOX_API_KEY}`
      )
      .then(res => res);
  }
};
