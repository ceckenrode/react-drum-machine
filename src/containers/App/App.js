import React, { Component } from "react";
import DrumKit from "../DrumKit";
import { Wrapper, DrumWrapper } from "./styles";
import keyListener from '../../utils/keyListener';

class App extends Component {
  keyListener = new keyListener();

  render() {
    return (
      <Wrapper>
        <DrumWrapper>
          <DrumKit />
        </DrumWrapper>
      </Wrapper>
    );
  }
}

export default App;
