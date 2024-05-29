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
import { $assert, createDocument } from '@wisemapping/core-js';
import Mindmap from '../model/Mindmap';
import NodeModel from '../model/NodeModel';
import XMLMindmapSerializer from './XMLMindmapSerializer';

class XMLSerializerFormBuilder implements XMLMindmapSerializer {
  toXML(mindmap: Mindmap): Document {
    $assert(mindmap, 'Can not save a null mindmap');

    const document = createDocument();
    const rootElement = document.createElement('form-elements');
    document.appendChild(rootElement);

    // Iteriere über alle Topics und serialisiere nur die Formular-Elemente
    const topics = mindmap.getBranches();
    topics.forEach((topic) => {
      const formElement = this._topicToFormElement(topic);
      if (formElement) {
        rootElement.appendChild(formElement);
      }
    });

    return document;
  }

  private _topicToFormElement(topic: NodeModel): Node | null {
    const htmlElement = topic.getElement();
    if (htmlElement) {
      const elementType = htmlElement.type;
      const elementNode = document.createElement(elementType);

      // Füge Attribute des Elements hinzu
      const { attributes } = htmlElement;
      Object.keys(attributes).forEach((key) => {
        elementNode.setAttribute(key, attributes[key]);
      });

      // Füge Kindelemente hinzu (z.B. für Textfeld innerhalb eines Formulars)
      const childTopics = topic.getChildren();
      childTopics.forEach((childTopic) => {
        const childNode = this._topicToFormElement(childTopic);
        if (childNode) {
          elementNode.appendChild(childNode);
        }
      });

      return elementNode;
    }

    return null;
  }

  loadFromDom(dom: Document, mapId: string) {
    $assert(dom, 'dom can not be null');
    $assert(mapId, 'mapId can not be null');

    const rootElem = dom.documentElement;

    // Start the loading process ...
    const version = rootElem.getAttribute('version') || 'pela';
    const mindmap = new Mindmap(mapId, version);
    return mindmap;
  }
}

export default XMLSerializerFormBuilder;
