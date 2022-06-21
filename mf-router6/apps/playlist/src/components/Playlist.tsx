import { Box, Grid, Title } from "@mantine/core";
import { MovieCard } from "card";

import { useStore } from "store"

export const Playlist: React.FunctionComponent = () => {
  const { movies } = useStore();

  return (
      <>
        <Box>
          <Title>Viewing List</Title>
        </Box>
        <Grid
          mt={20}
          sx={{
            gap: "1rem",
          }}
        >
        {movies.map((movie)=>(
          <MovieCard {...movie} key={movie.title} showAddButton={false}/>
        ))}
        </Grid>
      </>
    )
}