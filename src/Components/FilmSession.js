import styled from "styled-components";
import { Link } from "react-router-dom";
export default function FilmSession({ sessions }) {
  return (
    <Wrapper>
      {sessions.length === 0
        ? "carregando"
        : sessions.days.map((session, index) => (
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
    </Wrapper>
  );
}
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
const Wrapper = styled.div`
  margin-bottom: 117px;
`;
