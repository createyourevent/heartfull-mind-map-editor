import FormElementIcon from '../FormElementIcon';
import RatingsSvg from '../../../../assets/icons/controls/ratings.svg';
import { $msg } from '@mindplot/components/Messages';
import { Topic, PersistenceManager, $notify } from '@mindplot/index';
import ElementModel from '../../model/ElementModel';
import FeatureModel from '@wisemapping/mindplot/dist/mindplot/src/components/model/FeatureModel';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class RatingsIcon extends FormElementIcon {
  static IMAGE_URL = RatingsSvg;

  constructor(elementModel: ElementModel, topic: Topic) {
    super(RatingsIcon.IMAGE_URL, topic, new FeatureModel('empty'), elementModel);
    this.setElementModel(elementModel);
    this.setTopic(topic);
  }

  remove() {
    const topic = super.getTopic();

    topic.getModel().removeElement();
    topic.removeElement(super.getElementModel());

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
