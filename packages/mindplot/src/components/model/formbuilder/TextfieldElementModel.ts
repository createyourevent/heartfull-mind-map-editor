import ElementModel from './ElementModel';
import { ElementType } from './ElementType';

export default class TextfieldElementModel extends ElementModel {
  private _placeholder: string;

  private _maxLength: number;

  private _defaultValue: string;

  constructor(type: ElementType, attributes: object, placeholder: string, maxLength: number, defaultValue: string) {
    super(type, attributes);
    this._placeholder = placeholder;
    this._maxLength = maxLength;
    this._defaultValue = defaultValue;
  }

  // Getter und Setter für die neuen Eigenschaften
  get placeholder(): string { return this._placeholder; }

  set placeholder(value: string) { this._placeholder = value; }

  get maxLength(): number { return this._maxLength; }

  set maxLength(value: number) { this._maxLength = value; }

  get defaultValue(): string { return this._defaultValue; }

  set defaultValue(value: string) { this._defaultValue = value; }

  // Überschreiben der render()-Methode für Textfelder
  render(): string {
    return `<input type="text" placeholder="${this.placeholder}" maxlength="${this.maxLength}" value="${this.defaultValue}">`;
  }
}
