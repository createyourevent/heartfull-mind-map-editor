import Topic from '../Topic';
import CheckboxElementModel from '../model/formbuilder/controls/CheckboxElementModel';
import ElementModel from '../../../../formbuilder/ElementModel';
import RadioElementModel from '../model/formbuilder/controls/RadioElementModel';
import TextareaElementModel from '../model/formbuilder/controls/TextareaElementModel';
import TextfieldElementModel from '../model/formbuilder/controls/TextfieldElementModel';
import CheckboxIcon from './controls/CheckboxIcon';
import FormElementIcon from './FormElementIcon';
import RadioIcon from './controls/RadioIcon';
import TextareaIcon from './controls/TextareaIcon';
import TextfieldIcon from './controls/TextfieldIcon';
import SelectIcon from './controls/SelectIcon';
import SelectElementModel from '../model/formbuilder/controls/SelectElementModel';
import EditorIcon from './controls/EditorIcon';
import EditorElementModel from '../model/formbuilder/controls/EditorElementModel';
import AddressIcon from './controls/AddressIcon';
import AddressElementModel from '../model/formbuilder/controls/AddressElementModel';
import ChipsElementModel from '../model/formbuilder/controls/ChipsElementModel';
import ChipsIcon from './controls/ChipsIcon';
import MulticheckboxIcon from './controls/MulticheckboxIcon';
import MulticheckboxElementModel from '../model/formbuilder/controls/MulticheckboxElementModel';
import RatingsIcon from './controls/RatingsIcon';
import RatingsElementModel from '../model/formbuilder/controls/RatingsElementModel';
import TimeIcon from './controls/TimeIcon';
import TimeElementModel from '../model/formbuilder/controls/TimeElementModel';
import DateIcon from './controls/DateIcon';
import DateElementModel from '../model/formbuilder/controls/DateElementModel';
import PageIcon from './forms/PageIcon';
import PageElementModel from '../model/formbuilder/forms/PageElementModel';
import FormIcon from './forms/FormIcon';
import FormElementModel from '../model/formbuilder/forms/FormElementModel';
import FieldsetIcon from './forms/FieldsetIcon';
import FieldsetElementModel from '../model/formbuilder/forms/FieldsetElementModel';
import TabsIcon from './forms/TabsIcon';
import TabsElementModel from '../model/formbuilder/forms/TabsElementModel';
import TabElementModel from '../model/formbuilder/forms/TabElementModel';
import OptionIcon from './controls/OptionIcon';

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
      case 'select':
        result = new SelectIcon(model as SelectElementModel, topic);
        break;
      case 'editor':
        result = new EditorIcon(model as EditorElementModel, topic);
        break;
      case 'address':
        result = new AddressIcon(model as AddressElementModel, topic);
        break;
      case 'chips':
        result = new ChipsIcon(model as ChipsElementModel, topic);
        break;
      case 'multicheckbox':
        result = new MulticheckboxIcon(model as MulticheckboxElementModel, topic);
        break;
      case 'ratings':
        result = new RatingsIcon(model as RatingsElementModel, topic);
        break;
      case 'time':
        result = new TimeIcon(model as TimeElementModel, topic);
        break;
      case 'date':
        result = new DateIcon(model as DateElementModel, topic);
        break;
      case 'page':
        result = new PageIcon(model as PageElementModel, topic);
        break;
      case 'form':
        result = new FormIcon(model as FormElementModel, topic);
        break;
      case 'fieldset':
        result = new FieldsetIcon(model as FieldsetElementModel, topic);
        break;
      case 'tabs':
        result = new TabsIcon(model as TabsElementModel, topic);
        break;
      case 'tab':
        result = new OptionIcon(model as TabElementModel, topic);
        break;
      default: {
        throw new Error('Unhandled element type');
      }
    }
    return result;
  }
}

export default TopicElementIconFactory;
