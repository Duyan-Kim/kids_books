import axios from "axios";
import { API_KEY, KAKAO_KEY } from "../constant";

export function getBestSeller(categoryId) {
  return axios.get("/api/bestSeller.api", {
    params: {
      key: API_KEY,
      categoryId,
      output: "json",
    },
  });
}

export function getNewBook(categoryId) {
  return axios.get("/api/newBook.api", {
    params: {
      key: API_KEY,
      categoryId,
      output: "json",
    },
  });
}

export function getSearchResult(searchTerm) {
  return axios({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    headers: { Authorization: KAKAO_KEY },
    params: {
      query: searchTerm,
      target: "title",
    },
  });
}
