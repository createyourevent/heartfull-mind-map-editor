import Icon from '../../Icon';
import Topic from '../../Topic';

class IconModel {
  private _icon: Icon;

  private _topic: Topic;

  constructor(icon: Icon, topic: Topic) {
    this._icon = icon;
    this._topic = topic;
  }

  getIcon(): Icon {
    return this._icon;
  }

  setIcon(icon: Icon): void {
    this._icon = icon;
  }

  getTopic(): Topic {
    return this._topic;
  }

  setTopic(topic: Topic): void {
    this._topic = topic;
  }
}

export default IconModel;
