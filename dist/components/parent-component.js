export class ParentComponent {
    constructor(templateId, hostElementId, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = newElementId;
    }
}
//# sourceMappingURL=parent-component.js.map