import { Button } from "../components/Button";

export default function Newgame({ gameName, players, id }) {
  return (
    <>
      <h2>{gameName}</h2>
      <section>
        <ul>
          <li>
            <p>Federico</p>
            <Button description="-" />
            10
            <Button description="+" />
          </li>
          <li>
            <p>Lisa</p>
            <Button description="-" />5<Button description="+" />
          </li>
          <li>
            <p>Apollon</p>
            <Button description="-" />6<Button description="+" />
          </li>
        </ul>
      </section>
    </>
  );
}
