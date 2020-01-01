import styled from 'styled-components';


export const Sun = styled.div`
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  background: transparent;
  height: 30px;
  width: 30px;
  cursor: pointer;
  border: 2px solid var(--textColor);
  border-bottom-right-radius: ${props => props.right === "unset" && props.bottom === "unset" ? "30px" : "unset"};
  border-bottom-left-radius: ${props => props.left === "unset" && props.bottom === "unset" ? "30px" : "unset"};
  border-top-right-radius: ${props => props.right === "unset" && props.top === "unset" ? "30px" : "unset"};
  border-top-left-radius: ${props => props.left === "unset" && props.top === "unset" ? "30px" : "unset"};

  &.active {
    background: #ffff00;
  }
`


export const ShapeSwitch = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 3px;
  flex-grow: 1;


  button {
    flex-grow: 1;
    padding: 10px 15px;
    font-size: 13px;
    background: var(--textColor);
    color: var(--textColorOpposite);
    cursor: pointer;
    outline: 0;
    border: none;
    opacity: 0.8

    &:first-child {
      //border-right: 2px solid var(--textColor);
    }

    &.active {
      opacity: 1
    }
  }
`