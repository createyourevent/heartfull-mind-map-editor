import CheckboxElementModel from './controls/CheckboxElementModel';
import ElementModel from './ElementModel';
import { ElementType } from './ElementType';
import RadioElementModel from './controls/RadioElementModel';
import TextareaElementModel from './controls/TextareaElementModel';
import TextfieldElementModel from './controls/TextfieldElementModel';
import SelectElementModel from './controls/SelectElementModel';
import EditorElementModel from './controls/EditorElementModel';
import AddressElementModel from './controls/AddressElementModel';
import ChipsElementModel from './controls/ChipsElementModel';
import MulticheckboxElementModel from './controls/MulticheckboxElementModel';
import RatingsElementModel from './controls/RatingsElementModel';
import DateElementModel from './controls/DateElementModel';
import TimeElementModel from './controls/TimeElementModel';
import FormElementModel from './forms/FormElementModel';
import PageElementModel from './forms/PageElementModel';
import FieldsetElementModel from './forms/FieldsetElementModel';
import TabsElementModel from './forms/TabsElementModel';
import TabElementModel from './forms/TabElementModel';
import OptionElementModel from './controls/OptionElementModel';

export default class ElementModelFactory {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static createElementModel(type: ElementType, attributes: any): ElementModel {
    let name: string;
    let rows: number;
    let cols: number;
    let placeholder: string;
    let maxLength: number;
    let defaultValue: string;
    let pageUrl: string;
    let formUrl: string;
    let legend: string;
    let title: string;
    let otherAttributes;
    switch (type) {
      case 'textfield':
        ({ placeholder, maxLength, defaultValue, ...otherAttributes } = attributes);
        return new TextfieldElementModel(
          type,
          otherAttributes,
          placeholder,
          maxLength,
          defaultValue,
        );
        break;
      case 'textarea':
        ({ placeholder, rows, cols, defaultValue, ...otherAttributes } = attributes);
        return new TextareaElementModel(
          type,
          otherAttributes,
          placeholder,
          rows,
          cols,
          defaultValue,
        );
        break;
      case 'checkbox':
        ({ name, defaultValue, ...otherAttributes } = attributes);
        return new CheckboxElementModel(type, otherAttributes, name, defaultValue);
        break;
      case 'radio':
        ({ name, defaultValue, ...otherAttributes } = attributes);
        return new RadioElementModel(type, otherAttributes, name, defaultValue);
        break;
      case 'select':
        ({ name, defaultValue, ...otherAttributes } = attributes);
        return new SelectElementModel(type, otherAttributes, name, defaultValue);
      case 'option':
        ({ name, defaultValue, ...otherAttributes } = attributes);
        return new OptionElementModel(type, otherAttributes, name, defaultValue);
      case 'editor':
        ({ defaultValue, ...otherAttributes } = attributes);
        return new EditorElementModel(type, otherAttributes, defaultValue);
      case 'address':
        ({ name, defaultValue, ...otherAttributes } = attributes);
        return new AddressElementModel(type, otherAttributes, name, defaultValue);
      case 'chips':
        ({ name, defaultValue, ...otherAttributes } = attributes);
        return new ChipsElementModel(type, otherAttributes, name, defaultValue);
      case 'multicheckbox':
        ({ name, defaultValue, ...otherAttributes } = attributes);
        return new MulticheckboxElementModel(type, otherAttributes, name, defaultValue);
        break;
      case 'ratings':
        ({ name, defaultValue, ...otherAttributes } = attributes);
        return new RatingsElementModel(type, otherAttributes, name, defaultValue);
        break;
      case 'date':
        ({ name, defaultValue, ...otherAttributes } = attributes);
        return new DateElementModel(type, otherAttributes, name, defaultValue);
        break;
      case 'time':
        ({ name, defaultValue, ...otherAttributes } = attributes);
        return new TimeElementModel(type, otherAttributes, name, defaultValue);
        break;
      case 'page':
        ({ pageUrl = '', ...otherAttributes } = attributes);
        return new PageElementModel(type, otherAttributes, pageUrl);
        break;
      case 'form':
        ({ formUrl, defaultValue, ...otherAttributes } = attributes);
        return new FormElementModel(type, otherAttributes, formUrl);
        break;
      case 'fieldset':
        ({ legend, ...otherAttributes } = attributes);
        return new FieldsetElementModel(type, otherAttributes, legend);
        break;
      case 'tabs':
        ({ ...otherAttributes } = attributes);
        return new TabsElementModel(type, otherAttributes);
        break;
      case 'tab':
        ({ title, defaultValue, ...otherAttributes } = attributes);
        return new TabElementModel(type, otherAttributes, title);
        break;
      default:
        throw new Error('Ungültiger ElementType');
    }
  }
}
