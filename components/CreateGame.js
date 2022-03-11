import { Button } from "./Button";
import Input from "./Input";
import styled from "styled-components";
import { useState } from "react";

export default function CreateGame() {
  return (
    <CreateGameWrapper>
      <form autoComplete="off">
        <Input
          labelText="Create new game "
          id="gameName"
          name="gameName"
          placeholder="insert the name of the Game"
          type="text"
          value=""
          onChange={() => {}}
        />
        <Input
          labelText="Insert Players"
          id="gamePlayers"
          name="gamePlayers"
          placeholder="e.g. Player 1, Player 2"
          type="text"
          value=""
          onChange={() => {}}
        />
        <Button description="Create game score" />
        <Button description="Game History" />
      </form>
    </CreateGameWrapper>
  );
}

const CreateGameWrapper = styled.section`
  margin: 2rem;
`;
