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
        
      </form>
      <Button description="Game History"/>
      <Button description="Play" />
    </CreateGameWrapper>
  );
}

const CreateGameWrapper = styled.section`
padding:2rem;
  width:700px;
  border:2px solid grey;
  margin-top:2rem;
  border-radius:1rem;
`;
