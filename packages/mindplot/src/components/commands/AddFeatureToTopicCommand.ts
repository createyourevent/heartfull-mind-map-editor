/*
 *    Copyright [2021] [wisemapping]
 *
 *   Licensed under WiseMapping Public License, Version 1.0 (the "License").
 *   It is basically the Apache License, Version 2.0 (the "License") plus the
 *   "powered by wisemapping" text requirement on every single page;
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the license at
 *
 *       http://www.wisemapping.org/license
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */
import Command from '../Command';
import CommandContext from '../CommandContext';
import FeatureModel from '../model/FeatureModel';
import FeatureType from '../model/FeatureType';
import { ElementType } from '../model/formbuilder/ElementType';
import FormElementModel from '../model/formbuilder/forms/FormElementModel';

class AddFeatureToTopicCommand extends Command {
  private _topicIds: number[];

  private _type: FeatureType | ElementType;

  private _attributes: object;

  private _model: FeatureModel | FormElementModel | undefined;

  /*
   * @classdesc This command class handles do/undo of adding features to topics, e.g. an
   * icon or a note. For a reference of existing features, refer to {@link mindplot.TopicFeature}
   * @constructs
   * @param {String} topicId the id of the topic
   * @param {String} featureType the id of the feature type to add, e.g. "icon"
   * @param {Object} attributes the attribute(s) of the respective feature model
   * @extends mindplot.Command
   * @see mindplot.model.FeatureModel and subclasses
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(topicIds: number[], type: FeatureType | ElementType, attributes: object) {
    super();
    if (this.isElementType(type)) {
      this._type = type;
    } else {
      this._type = type;
    }
    this._attributes = attributes;
    this._topicIds = topicIds;
  }

  isElementType(value: FeatureType | ElementType): value is ElementType {
    return typeof value === 'string' && Object.values(value).includes(value);
  }

  execute(commandContext: CommandContext): void {
    const topics = commandContext.findTopics(this._topicIds);
    topics.forEach((topic) => {
      // Feature must be created only one time.
      if (!this._model) {
        const model = topic.getModel();
        this._model = model.createFeature(<FeatureType> this._type, this._attributes);
        topic.addFeature(this._model);
      }
      if (!this._model) {
        const model = topic.getModel();
        this._model = <FormElementModel> model.createElement(<ElementType> this._type, this._attributes);
        topic.addElement(this._model);
      }
    });
  }

  undoExecute(commandContext: CommandContext) {
    const topics = commandContext.findTopics(this._topicIds);
    topics.forEach((topic) => {
      topic.removeFeature(this._model!);
    });
  }
}

export default AddFeatureToTopicCommand;
