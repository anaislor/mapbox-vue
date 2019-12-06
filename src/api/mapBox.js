import axios from "axios";
require("dotenv").config();
const service = axios.create({ baseURL: "https://api.mapbox.com" });

export default {};
