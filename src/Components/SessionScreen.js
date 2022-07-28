import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function SessionScreen() {
  const { idFilme } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((response) => {
      setSessions(response.data);
      console.log(response.data.days);
    });
  }, [idFilme]);

  return (
    <Container>
      <h1>Selecione o Horário</h1>
      {
        <Sections>
          {sessions.length === 0
            ? "carregando"
            : sessions.map((session) => <div>{session.id}</div>)}
        </Sections>
      }
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
const Sections = styled.div``;
