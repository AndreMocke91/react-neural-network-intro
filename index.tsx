import React, { Component } from 'react';
import { render } from 'react-dom';
import { NeuralNetwork } from './NeuralNetwork';
import { Graph } from './Renderer';
import { Trainer } from './Trainer';

import './style.css';

const brain = new NeuralNetwork();
window["brain"] = brain;

window["startTraining"] = () => {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => { brain.train(120) }, 500 * i);
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Graph neuralNetwork={window["brain"]} />
      // <svg width={500} height={500}>
      // <Trainer.randomRectangle width={500} height={500}/>
      // <Trainer.randomTriangle width={500} height={500}/>
      // <Trainer.randomCircle width={500} height={500}/>
      // </svg>
    );
  }
}

render(<App />, document.getElementById('root'));
