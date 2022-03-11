import Head from "next/head";
import CreateGame from "../components/CreateGame";
import Newgame from "./game";
import styled from "styled-components";
import { useState } from "react/cjs/react.production.min";

export default function Home() {
  const [players, setPlayers] = useState([]);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FlexFrame>
          <CreateGame />
        </FlexFrame>
      </main>
    </div>
  );
}

const FlexFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
