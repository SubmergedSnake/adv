import styled, { keyframes } from "styled-components";

export const Header = () => {
  const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

  const Header = styled.h1`
    font-size: 3.5em;
    text-align: center;
    color: white;
    opacity: 0;
    animation: ${fadeIn} 2s forwards;
  `;

  return <Header>Aircraft Defect Viewer</Header>;
};
