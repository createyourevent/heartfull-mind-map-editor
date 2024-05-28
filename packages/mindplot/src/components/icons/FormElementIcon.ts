import Topic from '../Topic';
import ElementModel from '../model/formbuilder/ElementModel';
import FeatureModel from '../model/FeatureModel';
import ImageIcon from '../ImageIcon';

class FormElementIcon extends ImageIcon {
  private _model: FeatureModel | ElementModel;

  private _topic: Topic;

  constructor(url: string, elementModel: ElementModel, topic: Topic) {
    super(url);
    this._model = elementModel;
    this._topic = topic;
  }

  getModel(): FeatureModel | ElementModel {
    return this._model;
  }

  setModel(elementModel: ElementModel): void {
    this._model = elementModel;
  }

  getTopic(): Topic {
    return this._topic;
  }

  setTopic(topic: Topic): void {
    this._topic = topic;
  }

  remove() {}
}

export default FormElementIcon;
