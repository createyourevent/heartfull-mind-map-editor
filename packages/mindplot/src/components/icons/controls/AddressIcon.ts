import FormElementIcon from '../FormElementIcon';
import AddressSvg from '../../../../assets/icons/controls/address.svg';
import Topic from '../../Topic';
import ElementModel from '../../model/formbuilder/ElementModel';
import PersistenceManager from '../../PersistenceManager';
import { $msg } from '../../Messages';
import { $notify } from '../../model/ToolbarNotifier';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class AddressIcon extends FormElementIcon {
  static IMAGE_URL = AddressSvg;

  constructor(elementModel: ElementModel, topic: Topic) {
    super(AddressIcon.IMAGE_URL, elementModel, topic);
    this.setModel(elementModel);
    this.setTopic(topic);
  }

  remove() {
    const topic = super.getTopic();

    topic.getModel().removeElement();
    topic.removeElement(<ElementModel> super.getModel());

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
