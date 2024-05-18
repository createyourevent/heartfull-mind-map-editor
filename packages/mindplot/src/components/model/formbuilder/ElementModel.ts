// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import { ElementType } from './ElementType';

export default class ElementModel {
  private _id: string;

  private _type: ElementType;

  private _attributes: object;

  constructor(type: ElementType, attributes: object) {
    // Generiere eine eindeutige ID für das Element
    const newUuid: string = uuidv4();
    this._id = newUuid;
    this._type = type;
    this._attributes = attributes;
  }

  // Getter und Setter für Eigenschaften
  get id(): string { return this._id; }

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
