import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SuccessScreen({ name, cpf, selected, seats }) {
  return (
    <Wraper>
      <h1>Pedido Feito com Sucesso!</h1>
      <div>
        <h2>Filme e sessão</h2>
        <h3>{seats.movie.title}</h3>
        <h3>
          {seats.day.weekday} - {seats.name}
        </h3>
        <h2>Ingressos</h2>
        {selected.map((seat, index) => (
          <h3 key={index}>Assento {seat}</h3>
        ))}
        <h2>Comprador</h2>
        <h3>Nome: {name}</h3>
        <h3>CPF: {cpf}</h3>
      </div>
      <Link to="/">
        <button>Voltar para Home</button>
      </Link>
    </Wraper>
  );
}

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-right: 100px;
  }
  h1 {
    width: 170px;
    margin-top: 30px;
    color: #247a6b;
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 30px;
  }
  h2 {
    margin-top: 20px;
    font-size: 20px;
    color: #293845;
    font-weight: bold;
    margin-bottom: 5px;
  }
  h3 {
    font-size: 18px;
    color: #293845;
    margin-bottom: 5px;
  }
  button {
    margin-top: 80px;
    background-color: #e8833a;
    color: white;
    border-radius: 3px;
    border: none;
    text-decoration: none;
    width: 225px;
    height: 42px;
  }
`;
