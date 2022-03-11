import styled from "styled-components";

export function Button({ description }) {
  return <FancyButton>{description}</FancyButton>;
}

const FancyButton = styled.button`
  height: 4rem;
  margin: 1rem 0;
  width: auto;
  padding: 1rem;
  background: rgb(165, 15, 216);
  background: linear-gradient(
    132deg,
    rgba(165, 15, 216, 1) 0%,
    rgba(132, 33, 221, 0.9017545391061452) 0%,
    rgba(193, 156, 30, 0.9296875) 100%
  );
  color: white;
  text-transform: uppercase;
  border-radius: 2rem;
`;
