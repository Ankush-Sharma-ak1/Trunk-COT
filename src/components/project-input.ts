import { TicketController } from "../service/ticket-controller.js";
import { autobind } from "../decorators/autobind-decorator.js";
import { LooseObject } from "../service/loose-object.js";


//
export class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;
    titleInputElement: HTMLInputElement;
    descriptionElement: HTMLInputElement;
    priorityInputElement: HTMLInputElement;
    assigneeInputElement: HTMLInputElement;
    ticketController : TicketController;

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLElement;
        this.element.id='user-input';

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionElement = this.element.querySelector('#description') as HTMLInputElement;
        this.priorityInputElement = this.element.querySelector("#priority") as HTMLInputElement;
        this.assigneeInputElement = this.element.querySelector('#assignee') as HTMLInputElement;
        this.ticketController = TicketController.getInstance();

        this.configure();
        this.attach();
    }

    private gatherUserInput():LooseObject | void{

        const enteredTitle   = this.titleInputElement.value;
        const enteredSummary = this.descriptionElement.value;
        const enteredPriority = this.priorityInputElement.value;
        const enteredAssignee = this.assigneeInputElement.value;
        if(enteredTitle.trim().length === 0 || enteredSummary.trim().length === 0 
            || enteredPriority.trim().length === 0 || enteredAssignee.trim().length === 0) {
                alert('Invalid input, please try again');
                return ;
            }
            else {
                return {
                    id : (Math.floor(Math.random() * 1000) + 100).toString(),
                    title:  enteredTitle,
                    summary: enteredSummary,
                    priority: enteredPriority,
                    assignee: enteredAssignee
                }
            }

    }
    @autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userObject = this.gatherUserInput();
        if(typeof userObject === 'object') {
            this.ticketController.addTicket(userObject);
            this.titleInputElement.value = '';
            this.descriptionElement.value = '';
            this.priorityInputElement.value= 'Normal';
            this.assigneeInputElement.value= '';
        }  
    }
    private configure() {
        this.element.addEventListener("submit",this.submitHandler)
    }
    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin',this.element);
    }
}