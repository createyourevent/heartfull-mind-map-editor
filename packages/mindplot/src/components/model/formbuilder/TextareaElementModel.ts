import ElementModel from './ElementModel';
import { ElementType } from './ElementType';

export default class TextareaElementModel extends ElementModel {
  private _placeholder: string;

  private _rows: number;

  private _cols: number;

  private _defaultValue: string;

  constructor(type: ElementType, attributes: object, placeholder: string, rows: number, cols: number, defaultValue: string) {
    super(type, attributes);
    this._placeholder = placeholder;
    this._rows = rows;
    this._cols = cols;
    this._defaultValue = defaultValue;
  }

  // Getter und Setter für die neuen Eigenschaften
  get placeholder(): string { return this._placeholder; }

  set placeholder(value: string) { this._placeholder = value; }

  get rows(): number { return this._rows; }

  set rows(value: number) { this._rows = value; }

  get cols(): number { return this._cols; }

  set cols(value: number) { this._cols = value; }

  get defaultValue(): string { return this._defaultValue; }

  set defaultValue(value: string) { this._defaultValue = value; }

  // Überschreiben der render()-Methode für Textfelder
  render(): string {
    return `<textarea placeholder="${this.placeholder}" rows="${this.rows}" cols=${this.cols} value="${this.defaultValue}">`;
  }
}
