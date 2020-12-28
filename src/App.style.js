import styled from "styled-components";

export const LightSource = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  background: transparent;
  height: 30px;
  width: 30px;
  cursor: pointer;
  border: 2px solid var(--textColor);
  border-bottom-right-radius: ${(props) =>
    props.right === "unset" && props.bottom === "unset" ? "30px" : "unset"};
  border-bottom-left-radius: ${(props) =>
    props.left === "unset" && props.bottom === "unset" ? "30px" : "unset"};
  border-top-right-radius: ${(props) =>
    props.right === "unset" && props.top === "unset" ? "30px" : "unset"};
  border-top-left-radius: ${(props) =>
    props.left === "unset" && props.top === "unset" ? "30px" : "unset"};

  &.active {
    background: #ffff00;
  }
`;
