import ElementModel from '../../../shared/ElementModel';
import { ElementType } from '../ElementType';

export default class TabsElementModel extends ElementModel {
  constructor(type: ElementType, attributes: object) {
    super('tabs', attributes);
  }
}
