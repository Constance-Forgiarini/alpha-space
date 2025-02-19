import axios from "axios";

const snapiAPI = "https://api.spaceflightnewsapi.net/v4/articles/";
const datastroAPI =
  "https://www.datastro.eu/api/explore/v2.1/catalog/datasets/nasahubble/records";
const nasaAPI = "https://api.nasa.gov/planetary/apod";

export const snapiCustomFetch = axios.create({
  baseURL: snapiAPI,
});

export const datastroCustomFetch = axios.create({
  baseURL: datastroAPI,
});

export const nasaCustomFetch = axios.create({
  baseURL: nasaAPI,
  params: { api_key: import.meta.env.VITE_API_KEY_NASA },
});
