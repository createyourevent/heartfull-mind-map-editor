import Topic from '../Topic';
import CheckboxElementModel from '../model/formbuilder/CheckboxElementModel';
import ElementModel from '../model/formbuilder/ElementModel';
import TextareaElementModel from '../model/formbuilder/TextareaElementModel';
import TextfieldElementModel from '../model/formbuilder/TextfieldElementModel';
import CheckboxIcon from './CheckboxIcon';
import FormElementIcon from './FormElementIcon';
import TextareaIcon from './TextareaIcon';
import TextfieldIcon from './TextfieldIcon';

class TopicElementIconFactory {
  static createElementIcon(topic: Topic, model: ElementModel): FormElementIcon {
    let result: FormElementIcon;
    const elementType = model.type;
    switch (elementType) {
      case 'textfield':
        result = new TextfieldIcon(model as TextfieldElementModel, topic);
        break;
      case 'textarea':
        result = new TextareaIcon(model as TextareaElementModel, topic);
        break;
      case 'checkbox':
        result = new CheckboxIcon(model as CheckboxElementModel, topic);
        break;
      default: {
        throw new Error('Unhandled element type');
      }
    }
    return result;
  }
}

export default TopicElementIconFactory;
