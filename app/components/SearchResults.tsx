"use client";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Box } from "@mui/material";

export default function SearchResults({
  searchText,
  movies,
}: {
  searchText: string;
  movies: any;
}) {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  return (
    <div>
      <h1>Top Search Results for {searchText}</h1>
      <Box sx={{ display: "flex", flexWrap: "wrap" }} gap={3}>
        {filteredMovies.map((movie: any) => {
          return <MovieCard key={movie.id} movie={movie}></MovieCard>;
        })}
      </Box>
      {/* <div>
        {filteredMovies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie}></MovieCard>;
        })}
      </div> */}
    </div>
  );
}
