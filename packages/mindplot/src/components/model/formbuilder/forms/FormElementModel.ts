import ElementModel from '../../../shared/ElementModel';
import { ElementType } from '../ElementType';

export default class FormElementModel extends ElementModel {
  private _get: string;

  private _method: string;

  private _enctype: string;

  constructor(type: ElementType, attributes: object, get: string) {
    super(type, attributes);
    this._get = get;
    this._method = 'post';
    this._enctype = 'application/x-www-form-urlencoded';
  }

  get formUrl(): string { return this._get; }

  set formUrl(value: string) { this.formUrl = value; }

  get method(): string { return this._method; }

  set method(value: string) {
    if (value === 'post' || value === 'get') {
      this._method = value;
    } else {
      throw new Error('Method must be either "post" or "get"');
    }
  }

  get enctype(): string { return this._enctype; }

  set enctype(value: string) {
    if (value === 'application/x-www-form-urlencoded'
        || value === 'multipart/form-data'
        || value === 'text/plain') {
      this._enctype = value;
    } else {
      throw new Error('enctype must be either "application/x-www-form-urlencoded", "multipart/form-data" or "text/plain"');
    }
  }
}
