import MovieCard from "@/app/components/MovieCard";
import { getMovieDetails, getSimilarMovies } from "@/app/utils/requests";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

async function MovieDetailsPage({ params }: { params: any }) {
  const movieDetails = await getMovieDetails(params.id);
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const similarMovies = await getSimilarMovies(params.id);

  return (
    <div className="my-4 mx-3">
      <Box sx={{ display: "flex", alignItems: "center" }} p={1}>
        <Box pt={1}>
          <img src={IMAGE_BASE_URL + movieDetails.backdrop_path} alt="" />
        </Box>
        <Box p={2}>
          <h3>{movieDetails.title}</h3>
          <Stack direction="row" spacing={1}>
            <Chip label={movieDetails.status} color="primary" />
            <Chip label={movieDetails.release_date} color="primary" />
            <Chip label={movieDetails.original_language} color="primary" />
          </Stack>
          <Stack direction="row" spacing={1} mt={1}>
            {movieDetails.genres.map((genre: any) => {
              return <Chip label={genre.name} key={genre.id} color="success" />;
            })}
          </Stack>
          <p>{movieDetails.overview}</p>
          <p>Rating: {movieDetails.popularity}</p>
        </Box>
      </Box>
      <Box>
        <h2>Similar Movies</h2>
        <div>
          <Box sx={{ display: "flex", flexWrap: "wrap" }} gap={3}>
            {similarMovies.map((movie: any) => {
              return (
                <Card sx={{ width: "16rem", height: "25rem" }}>
                  <CardMedia
                    sx={{ height: "20rem" }}
                    image={IMAGE_BASE_URL + movie.poster_path}
                    title={movie.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      textAlign="center"
                    >
                      {movie.title}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default MovieDetailsPage;
