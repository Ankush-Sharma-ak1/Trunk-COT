var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TicketController } from "../service/ticket-controller.js";
import { autobind } from "../decorators/autobind-decorator.js";
export class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionElement = this.element.querySelector('#description');
        this.priorityInputElement = this.element.querySelector("#priority");
        this.assigneeInputElement = this.element.querySelector('#assignee');
        this.ticketController = TicketController.getInstance();
        this.configure();
        this.attach();
    }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredSummary = this.descriptionElement.value;
        const enteredPriority = this.priorityInputElement.value;
        const enteredAssignee = this.assigneeInputElement.value;
        if (enteredTitle.trim().length === 0 || enteredSummary.trim().length === 0
            || enteredPriority.trim().length === 0 || enteredAssignee.trim().length === 0) {
            alert('Invalid input, please try again');
            return;
        }
        else {
            return {
                id: (Math.floor(Math.random() * 1000) + 100).toString(),
                title: enteredTitle,
                summary: enteredSummary,
                priority: enteredPriority,
                assignee: enteredAssignee
            };
        }
    }
    submitHandler(event) {
        event.preventDefault();
        const userObject = this.gatherUserInput();
        if (typeof userObject === 'object') {
            this.ticketController.addTicket(userObject);
            this.titleInputElement.value = '';
            this.descriptionElement.value = '';
            this.priorityInputElement.value = 'Normal';
            this.assigneeInputElement.value = '';
        }
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler);
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "submitHandler", null);
//# sourceMappingURL=project-input.js.map