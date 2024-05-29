// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import { ElementType } from '../model/formbuilder/ElementType';

export default class ElementModel {
  private _id: string;

  private _type: ElementType;

  private _label: string;

  private _required: boolean;

  private _disabled: boolean;

  private _visible: boolean;

  private _className: string;

  private _attributes: object;

  constructor(type: ElementType, attributes: object) {
    // Generiere eine eindeutige ID für das Element
    this._id = uuidv4();
    this._type = type;
    this._attributes = attributes;

    // Initialisiere die restlichen Eigenschaften mit Standardwerten
    this._label = '';
    this._required = false;
    this._disabled = false;
    this._visible = true;
    this._className = '';
  }

  // Getter und Setter für Eigenschaften
  get id(): string { return this._id; }

  set id(value: string) { this._id = value; }

  get type(): ElementType { return this._type; }

  set type(value: ElementType) { this._type = value; }

  get label(): string { return this._label; }

  set label(value: string) { this._label = value; }

  get required(): boolean { return this._required; }

  set required(value: boolean) { this._required = value; }

  get disabled(): boolean { return this._disabled; }

  set disabled(value: boolean) { this._disabled = value; }

  get visible(): boolean { return this._visible; }

  set visible(value: boolean) { this._visible = value; }

  get className(): string { return this._className; }

  set className(value: string) { this._className = value; }

  get attributes(): object { return this._attributes; }

  set attributes(value: object) { this._attributes = value; }
}
