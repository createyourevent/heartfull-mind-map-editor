import Topic from '../Topic';
import CheckboxElementModel from '../model/formbuilder/controls/CheckboxElementModel';
import ElementModel from '../model/formbuilder/ElementModel';
import RadioElementModel from '../model/formbuilder/controls/RadioElementModel';
import TextareaElementModel from '../model/formbuilder/controls/TextareaElementModel';
import TextfieldElementModel from '../model/formbuilder/controls/TextfieldElementModel';
import CheckboxIcon from './controls/CheckboxIcon';
import FormElementIcon from './FormElementIcon';
import RadioIcon from './controls/RadioIcon';
import TextareaIcon from './controls/TextareaIcon';
import TextfieldIcon from './controls/TextfieldIcon';

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
      case 'radio':
        result = new RadioIcon(model as RadioElementModel, topic);
        break;
      default: {
        throw new Error('Unhandled element type');
      }
    }
    return result;
  }
}

export default TopicElementIconFactory;
