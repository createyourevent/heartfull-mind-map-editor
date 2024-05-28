import CheckboxElementModel from './CheckboxElementModel';
import ElementModel from './ElementModel';
import { ElementType } from './ElementType';
import RadioElementModel from './RadioElementModel';
import TextareaElementModel from './TextareaElementModel';
import TextfieldElementModel from './TextfieldElementModel';

export default class ElementModelFactory {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static createElementModel(type: ElementType, attributes: any): ElementModel {
    let name: string; let rows: number; let cols: number; let placeholder: string; let maxLength: number; let defaultValue: string; let otherAttributes;
    switch (type) {
      case 'textfield':
        ({ placeholder, maxLength, defaultValue, ...otherAttributes } = attributes);
        return new TextfieldElementModel(type, otherAttributes, placeholder, maxLength, defaultValue);
      case 'textarea':
        ({ placeholder, rows, cols, defaultValue, ...otherAttributes } = attributes);
        return new TextareaElementModel(type, otherAttributes, placeholder, rows, cols, defaultValue);
      case 'checkbox':
        ({ name, defaultValue, ...otherAttributes } = attributes);
        return new CheckboxElementModel(type, otherAttributes, name, defaultValue);
      case 'radio':
        ({ name, defaultValue, ...otherAttributes } = attributes);
        return new RadioElementModel(type, otherAttributes, name, defaultValue);
      default:
        throw new Error('Ungültiger ElementType');
    }
  }
}
