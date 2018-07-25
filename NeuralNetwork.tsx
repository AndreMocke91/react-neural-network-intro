import { observable } from 'mobx';
import { Vec2, Trainer } from './Trainer';

export class NeuralNetwork {
  intialVec2Weights: Vec2 = Trainer.randomVec2(-1, 1);

  @observable
  currentVec2Weights: Vec2 = this.intialVec2Weights;

  @observable
  vec2Inputs = Trainer.generateRandomVec2Array(1000, 0, 500);

  constructor() {
    console.log("Im alive");
  }

  clearTest = () => {
    this.vec2Inputs = [];
  }

  putDot = (value: 1 | -1 = 1) => {
    let foundDot = false;

    while(!foundDot){
      const potentialPoint = Trainer.randomVec2(0,500);
      if(this.decide(potentialPoint) === value){
        foundDot = true;
        this.vec2Inputs.push(potentialPoint);
      }
    }
  }

  train = (numberOfPoints: number = 1) => {
    let errors = 0;
    const points = Trainer.generateRandomVec2Array(numberOfPoints, 0, 500);
    points.map(point => {
      const guess = this.decide(point);
      const lesson = Trainer.truthLesson(point);

      if (guess !== lesson) {
        errors++;
        this.currentVec2Weights = {
          x: this.currentVec2Weights.x + (point.x * (lesson - guess)),
          y: this.currentVec2Weights.y + (point.y * (lesson - guess))
        }
      }
    });
    const percentage = 100 - errors / numberOfPoints * 100;
    console.log(`percentage : ${percentage}%`);
    if (percentage === 100) {
      console.log({x : this.currentVec2Weights.x, y: this.currentVec2Weights.y});
    }
  }

  decide = (point: Vec2) => {
    const sum = point.x * this.currentVec2Weights.x + point.y * this.currentVec2Weights.y;
    return sum >= 1000 ? 1 : -1;
  }
}