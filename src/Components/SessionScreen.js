import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SessionScreen() {
  const { idFilme } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((response) => {
      setSessions(response.data.days);
    });
  }, []);

  return (
    <Container>
      <h1>Selecione o Horário</h1>
      {sessions.length === 0
        ? "carregando"
        : sessions.map((session, index) => (
            <div key={index}>
              <Day>
                {session.weekday} - {session.date}
              </Day>
              <Time>
                {session.showtimes.map((times, index) => (
                  <Link to={"/assentos/" + times.id} key={index}>
                    <button>{times.name}</button>
                  </Link>
                ))}
              </Time>
            </div>
          ))}
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
const Day = styled.div`
  margin-left: 20px;
  font-size: 20px;
  margin-bottom: 15px;
`;
const Time = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-bottom: 15px;

  button {
    border: none;
    border-radius: 3px;
    background-color: #e8833a;
    color: white;
    width: 83px;
    height: 43px;
    cursor: pointer;
    margin-right: 10px;
    font-size: 18px;
  }
`;
