import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
  return (
    <Movies>
      {movies.map((movie, index) => (
        <Link to={"/filme/" + movie.id} key={index}>
          <div>
            <img src={movie.posterURL} alt="poster" />
          </div>
        </Link>
      ))}
    </Movies>
  );
}

const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  img {
    width: 129px;
    height: 193px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px (0, 0, 0, 10%);
    margin-bottom: 10px;
  }
`;
