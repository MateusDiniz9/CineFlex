import { useState } from "react";
import styled from "styled-components";

export default function Seat({ seat, selected, setSelected }) {
  const [color1, setColor1] = useState("#C3CFD9");
  const [border1, setBorder1] = useState("#7B8B99");
  const [clicked, setClicked] = useState(false);
  seat = { ...seat, clicked };

  function selectSeat() {
    setSelected([...selected, seat.id]);
    setColor1("#8DD7CF");
    setBorder1("#1AAE9E");
    setClicked(true);
  }
  function unselectSeat() {
    let ind = selected.indexOf(seat.id);
    selected.splice(ind, 1);
    setColor1("#C3CFD9");
    setBorder1("#7B8B99");
    setClicked(false);
  }
  function notAvaible() {
    alert("Esse assento não está disponível");
  }
  if (seat.isAvailable === true && seat.clicked === false) {
    return (
      <Bolinha color={color1} border={border1} onClick={selectSeat}>
        {seat.name}
      </Bolinha>
    );
  } else if (seat.clicked === true) {
    return (
      <Bolinha color={color1} border={border1} onClick={unselectSeat}>
        {seat.name}
      </Bolinha>
    );
  } else {
    return (
      <Bolinha color={"#FBE192"} border={"#F7C52B"} onClick={notAvaible}>
        {seat.name}
      </Bolinha>
    );
  }
}
const Bolinha = styled.span`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  color: black;
  margin-right: 5px;
  margin-bottom: 15px;
  font-size: 11px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.border};
`;
