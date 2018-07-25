import React from 'react';

export interface Vec2 {
  x: number;
  y: number;
}

interface IShape {
  width: number;
  height: number;
}

export enum EShape {
  square, circle, triangle
}

export class Trainer {

  static randomVec2 = (min: number, max: number): Vec2 => {
    return {
      x: Math.random() * (max - min) + min,
      y: Math.random() * (max - min) + min
    }
  }

  static generateRandomVec2Array = (length: number, min: number, max: number): Vec2[] => {
    let resultingRandomArray = [];
    for (let i = 0; i < length; i++) {
      resultingRandomArray.push(Trainer.randomVec2(0, 500));
    }
    return resultingRandomArray;
  }

  static truthLesson = (point: Vec2) => {
    return point.x <= point.y ? -1 : 1;
  }

  static randomShapeSvg = (shape: EShape) => {

  }

  static randomCircle: React.SFC<IShape> = (props) => {
    const radius = Math.random() * (props.width / 5);
    const circleOrigin = Trainer.randomVec2(radius, props.width - radius);
    return (
      <svg width={props.width} height={props.height}>
        <circle
          key="randomCircle"
          cx={circleOrigin.x}
          cy={circleOrigin.y}
          r={radius}
          stroke="rgba(50,150,250,0.8)"
          strokeWidth={3}
          fill="#FFF"
        />
      </svg>
    )
  }

  static randomRectangle: React.SFC<IShape> = (props) => {
    const width = Math.random() * (props.width / 2) + 20;
    const height = Math.random() * (props.width / 2) + 20;

    const topLeft = Trainer.randomVec2(0, props.width - width - 20);
    return (
      <svg width={props.width} height={props.height}>
        <rect
          x={topLeft.x}
          y={topLeft.y}
          width={width}
          height={height}
          fill="#F81"
        />
      </svg>
    )
  }

  static randomTriangle: React.SFC<IShape> = (props) => {
    const A = Trainer.randomVec2(0, props.width - 20);
    const B = Trainer.randomVec2(0, props.width - 20);
    const C = Trainer.randomVec2(0, props.width - 20);
    return (
      <svg width={props.width} height={props.height}>
        <polygon
          points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
          fill="#08F"
        />
      </svg>
    )
  }

}