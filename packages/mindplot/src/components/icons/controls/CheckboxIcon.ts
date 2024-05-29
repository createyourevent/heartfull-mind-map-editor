import FormElementIcon from '../FormElementIcon';
import CheckboxSvg from '../../../../assets/icons/controls/checkbox.svg';
import Topic from '../../Topic';
import ElementModel from '../../shared/ElementModel';
import { $notify } from '../../model/ToolbarNotifier';
import { $msg } from '../../Messages';
import PersistenceManager from '../../PersistenceManager';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class CheckboxIcon extends FormElementIcon {
  static IMAGE_URL = CheckboxSvg;

  constructor(elementModel: ElementModel, topic: Topic) {
    super(CheckboxIcon.IMAGE_URL, elementModel, topic);
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
