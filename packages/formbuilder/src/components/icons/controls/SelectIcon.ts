import FormElementIcon from '../FormElementIcon';
import SelectSvg from '../../../../assets/icons/controls/select.svg';
import { $msg } from '@mindplot/components/Messages';
import { Topic, PersistenceManager, $notify } from '@mindplot/index';
import FeatureModel from '@wisemapping/mindplot/dist/mindplot/src/components/model/FeatureModel';
import ElementModel from '../../model/ElementModel';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class SelectIcon extends FormElementIcon {
  static IMAGE_URL = SelectSvg;

  constructor(elementModel: ElementModel, topic: Topic) {
    super(SelectIcon.IMAGE_URL, topic, new FeatureModel('empty'), elementModel);
    this.setElementModel(elementModel);
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
