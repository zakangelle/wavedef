import Gain from './Gain';
import MixerChannel from './MixerChannel';
import addChildModule from '../helpers/addChildModule';

export default class Mixer {
  constructor(amount) {
    this.amount = amount || 2;
    this.gain = new Gain();
    this.node = this.gain.node;

    this.createChannels();
  }

  createChannels() {
    for (let x = 1; x <= this.amount; x++) {
      this::addChildModule(new MixerChannel());
    }
  }

  channel(number) {
    return this.children[number - 1];
  }
}