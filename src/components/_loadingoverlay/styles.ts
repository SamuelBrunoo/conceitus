import styled from "styled-components"

export const Bg = styled.div<{ $showing: boolean }>`
  display: ${({ $showing }) => ($showing ? "grid" : "none")};
  place-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;

  svg {
    overflow: visible;

    path:nth-child(3) {
      animation: rotateOutside 1.2s infinite;
      transform-origin: 56% 51%;
    }
  }

  @keyframes rotateOutside {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
