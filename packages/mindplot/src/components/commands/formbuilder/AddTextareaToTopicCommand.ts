import AddElementToTopicCommand from './AddElementToTopicCommand';

class AddTextareaToTopicCommand extends AddElementToTopicCommand {
  constructor(topicIds: number[], attributes: object) {
    super(topicIds, 'textarea', attributes);
  }
}

export default AddTextareaToTopicCommand;
