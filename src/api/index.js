import axios from "axios";
import { API_KEY } from "../constant";

export function getBestSeller(categoryId) {
  return axios.get("/api/bestSeller.api", {
    params: {
      key: API_KEY,
      categoryId,
      output: "json",
    },
  });
}
