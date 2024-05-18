import { ElementType } from './ElementType';

class ElementModel {
  private _id: number;

  private _type: ElementType;

  private _attributes: object;

  constructor(type: ElementType, attributes: object) {
    this._type = type;
    this._attributes = attributes;
    // Generiere eine eindeutige ID für das Element
    this._id = 1;
  }

  // Getter und Setter für Eigenschaften
  get id(): number { return this._id; }

  get type(): ElementType { return this._type; }

  get attributes(): object { return this._attributes; }

  // Weitere Methoden für das Rendering, Validierung, etc.
  render(): string {
    return 'HAllo';
  }

  validate(): boolean {
    return true;
  }
}

export default ElementModel;
