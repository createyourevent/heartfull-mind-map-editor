import ElementModel from '../ElementModel';
import { ElementType } from '../ElementType';

export default class RadioElementModel extends ElementModel {
  private _name: string;

  private _defaultValue: string;

  constructor(type: ElementType, attributes: object, name: string, defaultValue: string) {
    super(type, attributes);
    this._name = name;
    this._defaultValue = defaultValue;
  }

  // Getter und Setter für die neuen Eigenschaften
  get name(): string { return this._name; }

  set name(value: string) { this._name = value; }

  get defaultValue(): string { return this._defaultValue; }

  set defaultValue(value: string) { this._defaultValue = value; }

  // Überschreiben der render()-Methode für Textfelder
  render(): string {
    return `<input type="radio" name="${this._name}" value="${this._defaultValue}">`;
  }
}
