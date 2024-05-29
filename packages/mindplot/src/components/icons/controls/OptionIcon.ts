import FormElementIcon from '../FormElementIcon';
import SelectItemSvg from '../../../../assets/icons/controls/selectItem.svg';
import Topic from '../../Topic';
import ElementModel from '../../shared/ElementModel';
import PersistenceManager from '../../PersistenceManager';
import { $msg } from '../../Messages';
import { $notify } from '../../model/ToolbarNotifier';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class OptionIcon extends FormElementIcon {
  static IMAGE_URL = SelectItemSvg;

  constructor(elementModel: ElementModel, topic: Topic) {
    super(OptionIcon.IMAGE_URL, elementModel, topic);
    this.setModel(elementModel);
    this.setTopic(topic);
  }

  remove() {
    const topic = super.getTopic();

    topic.getModel().removeElement();
    topic.removeElement(<ElementModel> super.getFeatureModel());

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