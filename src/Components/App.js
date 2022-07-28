import GlobalStyle from "./globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import FistScreen from "./FirstScreen";
import SessionScreen from "./SessionScreen";
import SeatsScreen from "./SeatsScreen";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FistScreen />} />
          <Route path="/filme/:idFilme" element={<SessionScreen />} />
          <Route path="/assentos/:idSessao" element={<SeatsScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
