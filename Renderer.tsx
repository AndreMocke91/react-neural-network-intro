import React from 'react';
import { Vec2 } from "./Trainer";
import { observer } from "mobx-react";
import { NeuralNetwork } from './NeuralNetwork';

interface IGraph {
  neuralNetwork: NeuralNetwork;
  width?: number;
  height?: number;
}
export const Graph: React.SFC<IGraph> = observer((props) => (
  <svg width={props.width} height={props.height}>
    {props.neuralNetwork.vec2Inputs.map((point, index) => {
      return (
        <circle
          key={index}
          cx={point.x}
          cy={point.y}
          r={4}
          stroke={props.neuralNetwork.decide(point) === -1 ? "rgba(150,250,50,0.8)" : "rgba(50,150,250,0.8)"}
          strokeWidth={3}
          fill="#FFF"

        />
      )
    })}
    <line
      x1={0}
      y1={0}
      x2={props.width}
      y2={props.height}
      stroke="rgba(250,50,250, 0.8)"
      strokeWidth="6"
    />
    <line
      x1={0}
      y1={0}
      x2={props.width}
      y2={props.height}
      stroke="#fff"
      strokeWidth="2"
    />
  </svg>
));

Graph.defaultProps = {
  width: 500,
  height: 500
}