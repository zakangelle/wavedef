import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Cyanide from '../../stock-synths/Cyanide';
import Oscillator from '../components/Oscillator';
import Filter from '../components/Filter';
import LFO from '../components/LFO';
import Mixer from '../components/Mixer';
import VolumeEnvelope from '../components/VolumeEnvelope';
import Keyboard from '../components/Keyboard';
import './App.css';

const cyanide = new Cyanide();

console.log(cyanide); // eslint-disable-line

export default class App extends Component {
  render() {
    const {
      synth,
      osc,
      filter,
      lfo,
      mixer,
      volumeEnvelope,
    } = cyanide;

    const params = synth.getParams();

    return (
      <div className="app">
        <Row>
          <Col>
            <h1>wavedef</h1>
          </Col>
        </Row>

        <Row type="flex">
          <Col span={5}>
            <Oscillator oscillator={osc} />
          </Col>

          <Col span={5}>
            <Filter filter={filter} />
          </Col>

          <Col span={5}>
            <VolumeEnvelope envelope={volumeEnvelope} />
          </Col>

          <Col span={5}>
            <LFO lfo={lfo} params={params} />
          </Col>

          <Col span={4}>
            <Mixer mixer={mixer} />
          </Col>
        </Row>

        <Row>
          <Col>
            <Keyboard
              octaves={7}
              startingOctave={1}
              onKeypress={[
                value => osc.setFrequency(value),
                value => volumeEnvelope.triggerADS(value),
              ]}
              onKeyRelease={[
                value => volumeEnvelope.triggerRelease(value),
              ]}
            />
          </Col>
        </Row>
      </div>
    );
  }
}