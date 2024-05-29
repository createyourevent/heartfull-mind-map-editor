import ElementModel from '../../../shared/ElementModel';
import { ElementType } from '../ElementType';

export default class TabElementModel extends ElementModel {
  _title;

  constructor(type: ElementType, attributes: object, title: string) {
    super('tab', attributes);
    this._title = title;
  }
}
