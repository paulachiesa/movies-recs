import React, { ReactNode } from "react";
import MovieDetailsPage from "../movies/[id]/page";
import Link from "next/link";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function MovieCard({ movie }: { movie: any }) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  return (
    <div>
      <Link href={"/movies/" + movie.id} style={{ textDecoration: "none" }}>
        <Card sx={{ width: "16rem", height: "43rem" }}>
          <CardMedia
            sx={{ height: "25rem" }}
            image={IMAGE_BASE_URL + movie.poster_path}
            title={movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {movie.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ height: "190px", overflowY: "auto" }}
            >
              {movie.overview}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
