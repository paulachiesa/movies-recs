import MovieCard from "@/app/components/MovieCard";
import SearchResults from "@/app/components/SearchResults";
import { getMovies } from "@/app/utils/requests";
import { Box } from "@mui/material";
import React from "react";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const searchText = searchParams.query;
  const movies = await getMovies(searchText);
  return (
    // <div>
    //   <h1>Search Results</h1>
    //   <Box sx={{ display: "flex", flexWrap: "wrap" }} gap={3}>
    //     {movies.map((movie) => {
    //       return <MovieCard movie={movie}></MovieCard>;
    //     })}
    //   </Box>
    // </div>
    <div>
      <SearchResults searchText={searchText} movies={movies}></SearchResults>
    </div>
  );
}
