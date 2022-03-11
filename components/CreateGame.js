import { Button } from "./Button";
import Input from "./Input";
import styled from "styled-components";
import { useState } from "react";

const defaultData = {
  gameName: "",
  gamePlayers: "",
};

export default function CreateGame({ onCreateGame }) {
  const [newData, setNewData] = useState(defaultData);

  function handleSubmit(event) {
    event.preventDefault();

    onCreateGame({
      gameName: event.target.elements.gameName.value,
      gamePlayers: event.target.elements.gamePlayers.value
        .split(",")
        .map((name) => name.trim()),
    });
    setNewData(defaultData);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNewData({ ...newData, [name]: value });
  }

  return (
    <CreateGameWrapper>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          labelText="Create new game "
          id="gameName"
          name="gameName"
          placeholder="insert the name of the Game"
          type="text"
          value={newData.gameName}
          onChange={handleChange}
        />
        <Input
          labelText="Insert Players"
          id="gamePlayers"
          name="gamePlayers"
          placeholder="e.g. Player 1, Player 2"
          type="text"
          value={newData.gamePlayers}
          onChange={handleChange}
        />
        <Button description="Create game score" />
      </form>
      <Button description="Game History" />
      <Button description="Play" />
    </CreateGameWrapper>
  );
}

const CreateGameWrapper = styled.section`
  padding: 2rem;
  width: 700px;
  border: 2px solid grey;
  margin-top: 2rem;
  border-radius: 1rem;
`;
