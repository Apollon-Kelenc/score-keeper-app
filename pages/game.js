import { Button } from "../components/Button";
import styled from "styled-components";

export default function Newgame({ gameName, players, id }) {
  return (
    <>
      <h2>{gameName}</h2>
      <section>
        <ul>
          <PlayerElement>
            <p>Federico</p>
            <Button description="-" />
            10
            <Button description="+" />
          </PlayerElement>
          <PlayerElement>
            <p>Lisa</p>
            <Button description="-" />5<Button description="+" />
          </PlayerElement>
          <PlayerElement>
            <p>Apollon</p>
            <Button description="-" />6<Button description="+" />
          </PlayerElement>
        </ul>
        <ButtonsFrame>
          <Button description="Reset Score" />
          <Button description="End Game" />
        </ButtonsFrame>
      </section>
    </>
  );
}

const PlayerElement = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  border: 2px solid black;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  padding: 0.3rem 1.5rem 0.3rem 2rem;
  border-radius: 5rem;
  box-shadow: 0 0 8px rgba(0 0 0 / 50%);
  width: 700px;
`;

const ButtonsFrame = styled.div`
  padding: 0 0 2rem 2rem;
`;
