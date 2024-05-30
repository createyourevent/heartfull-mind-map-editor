import FormElementIcon from '../FormElementIcon';
import TextfieldSvg from '../../../../assets/icons/controls/textarea.svg';
import Topic from '../../Topic';
import ElementModel from '../../../../../formbuilder/ElementModel';
import { $notify } from '../../model/ToolbarNotifier';
import { $msg } from '../../Messages';
import PersistenceManager from '../../PersistenceManager';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class TextareaIcon extends FormElementIcon {
  static IMAGE_URL = TextfieldSvg;

  constructor(elementModel: ElementModel, topic: Topic) {
    super(TextareaIcon.IMAGE_URL, elementModel, topic);
    this.setElementModel(elementModel);
    this.setTopic(topic);
  }

  remove() {
    const topic = super.getTopic();

    topic.getModel().removeElement();
    topic.removeElement(this.getElementModel());

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