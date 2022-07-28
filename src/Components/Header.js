import styled from "styled-components";

export default function Header() {
  return <Top>CINEFLEX</Top>;
}

const Top = styled.div`
  width: 100%;
  height: 70px;
  font-size: 34px;
  color: #e8833a;
  background-color: #c3cfd9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;
