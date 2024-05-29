import { ElementType } from '../ElementType';

export default class FieldsetElementModel extends ElementModel {
  _legend: string;

  constructor(type: ElementType, attributes: object, legend: string) {
    super('fieldset', attributes);
    this._legend = legend;
  }

  get legend(): string { return this._legend; }

  set legend(value: string) {
    this._legend = value;
  }
}
