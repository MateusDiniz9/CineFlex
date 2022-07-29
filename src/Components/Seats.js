import { useState } from "react";
import styled from "styled-components";
import Seat from "./Seat";

export default function Seats({ seats, selected, setSelected }) {
  return (
    <Wraper>
      {seats.map((seat, index) => (
        <Seat
          seat={seat}
          key={index}
          index={index}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
      <div>
        <div>
          <Bolinha color="#8DD7CF" border="#1AAE9E"></Bolinha>
          Selecionado
        </div>
        <div>
          <Bolinha color="#C3CFD9" border="#7B8B99"></Bolinha>
          Disponível
        </div>
        <div>
          <Bolinha color="#FBE192" border="#F7C52B"></Bolinha>
          Indisponível
        </div>
      </div>
    </Wraper>
  );
}

const Wraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0px 30px;

  div {
    display: flex;
    justify-content: space-between;
  }
  div div {
    flex-direction: column;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
  }
`;

const Bolinha = styled.span`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  color: black;
  margin-right: 5px;
  margin-bottom: 10px;
  font-size: 11px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.border};
`;
