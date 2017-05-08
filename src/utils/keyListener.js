import soundMap from './soundMap';
import _find from 'lodash/find';

class KeyListener {
  constructor() {
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyUp);
    this.audio = null;
    this.soundMap = soundMap;
    this.currentSound = { code: null }
    this.subscribed = [];
  }

  subscribe = fn => {
    this.subscribed.push(fn);
  }

  update = () => {
    this.subscribed.forEach(fn => fn(this.currentSound.code));
  }

  handleKeyUp = ({ keyCode }) => {
    const sound = _find(this.soundMap, { code: keyCode });
    if (!sound) {
      return false;
    }
    this.currentSound = { code: null };
    this.update();
  }
  handleKeyPress = ({ keyCode }) => {
    const sound = _find(this.soundMap, { code: keyCode });
    if (!sound) {
      return false;
    }
    this.currentSound = sound;
    this.audio = new Audio(this.currentSound.sound);
    this.audio.play();
    this.update();
  }
}

export default KeyListener;
