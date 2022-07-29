import styled from "styled-components";

export default function Footer({ img, title, date = "", time = "" }) {
  if (date !== "") {
    return (
      <Wraper>
        <Border>
          <img src={img} alt="poster" />
        </Border>
        <Description>
          <div>{title}</div>
          {date} - {time}
        </Description>
      </Wraper>
    );
  } else {
    return (
      <Wraper>
        <Border>
          <img src={img} alt="poster" />
        </Border>
        {title}
      </Wraper>
    );
  }
}

const Wraper = styled.div`
  width: 100%;
  height: 117px;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #dfe6ed;
  border-top: 1px solid #9eadba;
  font-size: 26px;

  img {
    width: 48px;
    height: 72px;
  }
`;

const Border = styled.div`
  width: 64px;
  height: 89px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  margin-left: 5px;
  margin-right: 10px;
`;
const Description = styled.div`
  font-size: 26px;
  color: #293845;
`;
