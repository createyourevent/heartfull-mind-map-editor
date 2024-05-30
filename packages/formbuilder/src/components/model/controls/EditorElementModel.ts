import ElementModel from '../ElementModel';
import { ElementType } from '../ElementType';

export default class EditorElementModel extends ElementModel {
  private _defaultValue: string;

  constructor(type: ElementType, attributes: object, defaultValue: string) {
    super(type, attributes);
    this._defaultValue = defaultValue;
  }

  // Getter und Setter für die neuen Eigenschaften

  get defaultValue(): string { return this._defaultValue; }

  set defaultValue(value: string) { this._defaultValue = value; }
}
