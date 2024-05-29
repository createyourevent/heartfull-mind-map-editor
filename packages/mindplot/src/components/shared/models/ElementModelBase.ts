import { ElementType } from '../../model/formbuilder/ElementType';
import ModelBase from './ModelBase';

export default class ElementModelBase extends ModelBase {
  private _type: ElementType;

  constructor(type: ElementType, attributes: object) {
    super(attributes);
    this._type = type;
  }

  get type(): ElementType {
    return this._type;
  }

  set type(value: ElementType) {
    this._type = value;
  }
}
