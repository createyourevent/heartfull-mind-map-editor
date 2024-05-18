import ElementModel from './ElementModel';
import { ElementType } from './ElementType';
import TextfieldElementModel from './TextfieldElementModel';

export default class ElementModelFactory {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static createElementModel(type: ElementType, attributes: any): ElementModel {
    let placeholder; let maxLength; let defaultValue; let otherAttributes;

    switch (type) {
      case 'textfield':
        ({ placeholder, maxLength, defaultValue, ...otherAttributes } = attributes);
        return new TextfieldElementModel(type, otherAttributes, placeholder, maxLength, defaultValue);
      /*
      case 'textarea':
        return new ImageElementModel(attributes);
      case 'checkbox':
        return new FormElementModel(attributes);
      case 'radio':
        return new FormElementModel(attributes);
      */
      default:
        throw new Error('Ungültiger ElementType');
    }
  }
}
