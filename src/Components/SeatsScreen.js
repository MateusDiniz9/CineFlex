import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Seats from "./Seats";

export default function SeatsScreen({
  name,
  setName,
  cpf,
  setCpf,
  selected,
  setSelected,
  seats,
  setSeats,
}) {
  const { idSessao } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
    );
    promise.then((response) => {
      setSeats(response.data);
    });
  }, []);

  function sendToAPI(event) {
    event.preventDefault();
    const request = axios.post(
      "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
      { ids: selected, name: name, cpf: cpf }
    );
    request.then((res) => console.log(res));
    navigate("/sucesso");
  }

  return (
    <Wrapper>
      <h1>Selecione o(s) Assento(s)</h1>
      {seats.length === 0 ? (
        "carregando"
      ) : (
        <>
          <Seats
            seats={seats.seats}
            selected={selected}
            setSelected={setSelected}
          />
          <form onSubmit={sendToAPI}>
            <Forms>
              <h3>Nome do comprador</h3>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu Nome..."
                required
              />
              <h3>CPF do comprador</h3>
              <input
                type="number"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="Digite seu Cpf..."
                required
              />

              <button type="submit">Reservar Assento(s)</button>
            </Forms>
          </form>
          <Footer
            img={seats.movie.posterURL}
            title={seats.movie.title}
            date={seats.day.weekday}
            time={seats.name}
          />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 20px auto;
    font-size: 24px;
    color: #293845;
  }
`;
const Forms = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  input {
    width: 300px;
    height: 51px;
    border: 1px solid #d4d4d4;
    margin-bottom: 20px;
    padding-left: 10px;
    font-size: 18px;
    border: 1px solid #d4d4d4;
  }
  h3 {
    font-size: 18px;
    color: #293845;
    margin-bottom: 10px;
  }
  button {
    width: 225px;
    height: 42px;
    color: white;
    background-color: #e8833a;
    border: none;
    font-size: 18px;
    border-radius: 3px;
    a {
      text-decoration: none;
      color: white;
    }
  }
`;
