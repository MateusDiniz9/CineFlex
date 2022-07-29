import GlobalStyle from "./globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import FistScreen from "./FirstScreen";
import SessionScreen from "./SessionScreen";
import SeatsScreen from "./SeatsScreen";
import { useState } from "react";
import SuccessScreen from "./SuccessScreen";
export default function App() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [selected, setSelected] = useState([]);
  const [seats, setSeats] = useState([]);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FistScreen />} />
          <Route path="/filme/:idFilme" element={<SessionScreen />} />
          <Route
            path="/assentos/:idSessao"
            element={
              <SeatsScreen
                name={name}
                setName={setName}
                cpf={cpf}
                setCpf={setCpf}
                selected={selected}
                setSelected={setSelected}
                seats={seats}
                setSeats={setSeats}
              />
            }
          />
          <Route
            path="/sucesso"
            element={
              <SuccessScreen
                name={name}
                cpf={cpf}
                selected={selected}
                seats={seats}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
