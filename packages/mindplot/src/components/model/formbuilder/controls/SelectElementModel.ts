import ElementModel from '../ElementModel';

export default class SelectElementModel extends ElementModel {
  constructor(attributes: object) {
    super('select', attributes);
  }
}
