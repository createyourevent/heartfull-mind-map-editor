import Mindmap from '../model/Mindmap';
import XMLSerializerTango from './XMLSerializerTango';

export default class XMLSerializerElements extends XMLSerializerTango {
  toXML(mindmap: Mindmap): Document {
    const document = super.toXML(mindmap);

    // Erstellen Sie einen neuen Knoten für die Form- und Controlselemente
    const formElementsNode = document.createElement('form-elements');

    // Fügen Sie die Form- und Controlselemente als Kindelemente hinzu
    formElementsNode.appendChild(this.serializeFormElement1());
    formElementsNode.appendChild(this.serializeFormElement2());

    // Fügen Sie den formElementsNode an das Dokument an
    document.documentElement.appendChild(formElementsNode);

    return document;
  }

  loadFromDom(dom: Document, mapId: string): Mindmap {
    // Rufen Sie zuerst die Basisimplementierung auf, um die Mindmap zu laden
    const mindmap = super.loadFromDom(dom, mapId);

    // Finden Sie den Knoten, der die Form- und Controlselemente enthält
    const formElementsNode = dom.getElementsByTagName('form-elements')[0];

    if (formElementsNode) {
      // Iterieren Sie über die Kindelemente und deserialisieren Sie die Form- und Controlselemente
      const formElements = formElementsNode.childNodes;
      for (let i = 0; i < formElements.length; i++) {
        const formElement = formElements[i];
        this.deserializeFormElement(mindmap, formElement);
      }
    }

    return mindmap;
  }

  deserializeFormElement(mindmap: Mindmap, formElementNode: Node) {
    // Analysieren Sie den XML-Knoten und erstellen Sie die entsprechenden Form- und Controlselemente
    // Fügen Sie diese dann zur Mindmap hinzu
    // ...
  }
}
