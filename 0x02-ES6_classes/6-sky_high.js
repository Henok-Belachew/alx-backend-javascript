/* eslint-disable */

import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, numFloors) {
    super(sqft);
    this._floors = numFloors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
