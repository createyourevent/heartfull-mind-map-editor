import ElementModel from "../../model/ElementModel";
import FormElementIcon from "../FormElementIcon";
import AddressSvg from "../../../../assets/icons/address.svg";
import { $notify, PersistenceManager, Topic } from "@wisemapping/mindplot";
import { $msg } from '@mindplot/components/Messages';
import FeatureModel from '../../../../../mindplot/dist/mindplot/src/components/model/FeatureModel';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class AddressIcon extends FormElementIcon {
  static IMAGE_URL = AddressSvg;

  constructor(elementModel: ElementModel, topic: Topic) {
    super(AddressIcon.IMAGE_URL, topic, new FeatureModel('empty'), elementModel);
    this.setElementModel(elementModel);
    this.setTopic(topic);
  }

  remove() {
    const topic = super.getTopic();

    topic.getModel().removeElement();
    topic.removeFormElement(<ElementModel> super.getFeatureModel());

    // Erhalten Sie das Mindmap aus dem Topic(NodeModel)
    const mindmap = super.getTopic().getModel().getMindmap();
    const mindmapProp = globalThis.designer.getMindmapProperties();
    // Call persistence manager for saving ...
    const persistenceManager = PersistenceManager.getInstance();
    persistenceManager.save(mindmap, mindmapProp, false, {
      onSuccess() {
        $notify($msg('SAVE_COMPLETE'));
      },
      onError() {
        $notify($msg('SAVE_FAILED'));
      },
    });
  }
}
