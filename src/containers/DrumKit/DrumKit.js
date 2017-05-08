import React, { Component } from "react";
import Drum from "../../components/Drum";
import { StyledDrumKit } from "./styles";
import keyListener from "../../utils/keyListener";

class DrumKit extends Component {
  constructor() {
    super();
    this.state = {
      currentKey: null
    };
    this.keyListener = new keyListener();
    this.keyListener.subscribe(currentKey => {
      this.setState({ currentKey });
    });
  }

  renderDrums = () => {
    return this.keyListener.soundMap.map(sound => {
      return (
        <Drum
          key={sound.code}
          sound={sound.sound}
          drumKey={sound.key}
          currentKey={this.state.currentKey}
          drumKeyCode={parseInt(sound.code, 10)}
          name={sound.name}
        />
      )
    });
  };
  render() {
    return (
      <StyledDrumKit>
        {this.renderDrums()}
      </StyledDrumKit>
    );
  }
}

export default DrumKit;
