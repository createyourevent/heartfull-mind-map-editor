import Command from '../../Command';
import CommandContext from '../../CommandContext';
import ElementModel from '../../shared/ElementModel';
import { ElementType } from '../../model/formbuilder/ElementType';

class AddElementToTopicCommand extends Command {
  private _topicIds: number[];

  private _elementModel: ElementModel;

  constructor(topicIds: number[], elementType: ElementType, attributes: object) {
    super();
    this._topicIds = topicIds;
    this._elementModel = new ElementModel(elementType, attributes);
  }

  execute(commandContext: CommandContext): void {
    const topics = commandContext.findTopics(this._topicIds);
    topics.forEach((topic) => {
      // Füge das ElementModel zum Topic hinzu
      topic.addElement(this._elementModel);
      topic.redraw();
    });
  }

  undoExecute(commandContext: CommandContext): void {
    const topics = commandContext.findTopics(this._topicIds);
    topics.forEach((topic) => {
    // Entferne das ElementModel vom Topic
      topic.removeElement(this._elementModel);
    });
  }
}

export default AddElementToTopicCommand;
