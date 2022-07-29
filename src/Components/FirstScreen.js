import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./MovieList";
export default function FirstScreen() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    );
    promise.then((resolve) => {
      setMovies(resolve.data);
    });
  }, []);

  return (
    <Container>
      <h1>Selecione o Filme</h1>
      {movies.length === 0 ? "carregando" : <MovieList movies={movies} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 20px auto;
    font-size: 24px;
    color: #293845;
  }
`;
