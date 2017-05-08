import React from "react";
import { StyledDrum, TitleContainer, KeyContainer } from "./styles";

function Drum(props) {
  return (
    <StyledDrum pressed={props.drumKeyCode === props.currentKey}>
      <TitleContainer pressed={props.drumKeyCode === props.currentKey}>
        {props.name}
      </TitleContainer>
      <KeyContainer pressed={props.drumKeyCode === props.currentKey}>
        {props.drumKey}
      </KeyContainer>
    </StyledDrum>
  );
}

export default Drum;
