// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

export default class ModelBase {
  _id: number;

  _attributes: object;

  constructor(attributes: object) {
    this._id = this._nextUUID();
    this._attributes = attributes;
  }

  _nextUUID = () => {
    const id = uuidv4();
    return parseInt(id.slice(0, 8), 16);
  };
}
