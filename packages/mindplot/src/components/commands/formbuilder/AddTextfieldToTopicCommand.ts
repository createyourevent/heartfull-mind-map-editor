import AddElementToTopicCommand from './AddElementToTopicCommand';

class AddTextfieldToTopicCommand extends AddElementToTopicCommand {
  constructor(topicIds: number[], attributes: object) {
    super(topicIds, 'textfield', attributes);
  }
}

export default AddTextfieldToTopicCommand;
