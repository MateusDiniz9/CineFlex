import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SeatsScreen() {
  const { idSession } = useParams();
  const [seats, setSeats] = useState([]);

  console.log(idSession);
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSession}/seats`
    );
    promise.then((response) => {
      setSeats(response.data);
      console.log(response.data);
    });
  }, []);

  return <>OLA</>;
}
