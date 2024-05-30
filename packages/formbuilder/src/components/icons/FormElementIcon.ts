import ElementModel from "../model/ElementModel";
import FeatureModel from "@mindplot/";


class FormElementIcon extends ImageIcon implements Icon {
  private _featureModel: FeatureModel;

  private _elementModel: ElementModel;

  private _topic: Topic;

  constructor(url: string, topic: Topic, featureModel: FeatureModel, elementModel: ElementModel) {
    super(url);
    this._featureModel = featureModel;
    this._elementModel = elementModel;
    this._topic = topic;
  }

  getFeatureModel(): FeatureModel {
    return this._featureModel;
  }

  getElementModel(): ElementModel {
    return this._elementModel;
  }

  setElementModel(elementModel: ElementModel): void {
    if (elementModel instanceof ElementModel) {
      this._elementModel = elementModel;
    }
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
