const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import axios from "axios";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export const getTrendingMovies = async () => {
  try {
    const res = await instance.get("/trending/movie/day?language=en-US");
    return res.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};

export const getMovies = async (query: any) => {
  try {
    const res = await instance.get(`/search/movie?query=${query}`);
    return res.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};

export const getMovieDetails = async (id: any) => {
  try {
    const res = await instance.get(`/movie/${id}?language=en-US`);
    return res.data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};

export const getSimilarMovies = async (id: any) => {
  try {
    const res = await instance.get(`/movie/${id}/similar`);
    return res.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};
