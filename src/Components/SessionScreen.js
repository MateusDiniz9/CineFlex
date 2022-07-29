import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Footer from "./Footer";
import FilmSession from "./FilmSession";

export default function SessionScreen() {
  const { idFilme } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((response) => {
      setSessions(response.data);
    });
  }, []);

  return (
    <Container>
      <h1>Selecione o Horário</h1>
      <FilmSession sessions={sessions} />
      <Footer img={sessions.posterURL} title={sessions.title} />
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
