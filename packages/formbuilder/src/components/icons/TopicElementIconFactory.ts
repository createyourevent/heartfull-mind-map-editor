
import { Topic } from "@wisemapping/mindplot";
import ElementModel from "../model/ElementModel";
import AddressElementModel from "../model/controls/AddressElementModel";
import CheckboxElementModel from "../model/controls/CheckboxElementModel";
import ChipsElementModel from "../model/controls/ChipsElementModel";
import DateElementModel from "../model/controls/DateElementModel";
import EditorElementModel from "../model/controls/EditorElementModel";
import MulticheckboxElementModel from "../model/controls/MulticheckboxElementModel";
import RadioElementModel from "../model/controls/RadioElementModel";
import RatingsElementModel from "../model/controls/RatingsElementModel";
import SelectElementModel from "../model/controls/SelectElementModel";
import TextareaElementModel from "../model/controls/TextareaElementModel";
import TextfieldElementModel from "../model/controls/TextfieldElementModel";
import TimeElementModel from "../model/controls/TimeElementModel";
import FieldsetElementModel from "../model/forms/FieldsetElementModel";
import FormElementModel from "../model/forms/FormElementModel";
import PageElementModel from "../model/forms/PageElementModel";
import TabElementModel from "../model/forms/TabElementModel";
import TabsElementModel from "../model/forms/TabsElementModel";
import FormElementIcon from "./FormElementIcon";
import AddressIcon from "./controls/AddressIcon";
import CheckboxIcon from "./controls/CheckboxIcon";
import ChipsIcon from "./controls/ChipsIcon";
import DateIcon from "./controls/DateIcon";
import EditorIcon from "./controls/EditorIcon";
import MulticheckboxIcon from "./controls/MulticheckboxIcon";
import OptionIcon from "./controls/OptionIcon";
import RadioIcon from "./controls/RadioIcon";
import RatingsIcon from "./controls/RatingsIcon";
import SelectIcon from "./controls/SelectIcon";
import TextareaIcon from "./controls/TextareaIcon";
import TextfieldIcon from "./controls/TextfieldIcon";
import TimeIcon from "./controls/TimeIcon";
import FieldsetIcon from "./forms/FieldsetIcon";
import FormIcon from "./forms/FormIcon";
import PageIcon from "./forms/PageIcon";
import TabsIcon from "./forms/TabsIcon";


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
