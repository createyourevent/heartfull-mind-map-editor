import ElementModel from '../ElementModel';

export default class FormElementModel extends ElementModel {
  constructor(attributes: object) {
    super('form', attributes);
  }
}
