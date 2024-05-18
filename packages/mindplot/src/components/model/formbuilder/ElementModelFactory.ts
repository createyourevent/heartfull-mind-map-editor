import { ElementType } from './ElementType';
import ElementModel from './ElementModel';

class ElementModelFactory {
  static createElementModel(type: ElementType, attributes: object): ElementModel {
    switch (type) {
      case 'textfield':
        return new TextElementModel(attributes);
      case ElementType.IMAGE:
        return new ImageElementModel(attributes);
      case ElementType.FORM:
        return new FormElementModel(attributes);
      // Füge hier weitere Fälle für neue ElementTypes hinzu
      default:
        throw new Error('Ungültiger ElementType');
    }
  }
}