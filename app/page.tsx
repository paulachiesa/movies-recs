import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button } from "@mui/material";
import { getTrendingMovies } from "./utils/requests";
import MovieCard from "./components/MovieCard";
import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function HomePage() {
  const movies = await getTrendingMovies();
  // const movies = response.data.results;
  console.log(movies);

  return (
    <div>
      <h1>Top Trending Movies</h1>
      <Box sx={{ display: "flex", flexWrap: "wrap" }} gap={3}>
        {movies.map((movie: any) => {
          return <MovieCard key={movie.id} movie={movie}></MovieCard>;
        })}
      </Box>
    </div>
  );
}
