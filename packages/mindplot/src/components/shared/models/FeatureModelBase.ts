import FeatureType from '../../model/FeatureType';
import ModelBase from './ModelBase';

export default class FeatureModelBase extends ModelBase {
  private _type: FeatureType;

  constructor(type: FeatureType, attributes: object) {
    super(attributes);
    this._type = type;
  }

  get type(): FeatureType {
    return this._type;
  }

  set type(value: FeatureType) {
    this._type = value;
  }
}
