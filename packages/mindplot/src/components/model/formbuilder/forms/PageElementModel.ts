import ElementModel from '../ElementModel';
import { ElementType } from '../ElementType';

export default class PageElementModel extends ElementModel {
  private _pageUrl: string;

  constructor(type: ElementType, attributes: object, pageUrl: string) {
    super(type, attributes);
    this._pageUrl = pageUrl;
  }

  get pageUrl(): string { return this._pageUrl; }

  set pageUrl(value: string) { this._pageUrl = value; }
}
