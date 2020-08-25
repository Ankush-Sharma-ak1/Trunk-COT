var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autobind } from "../decorators/autobind-decorator.js";
import { TicketDetail } from "./ticket-details.js";
export class TicketRender {
    constructor(obj) {
        this.ticketDataObject = obj;
        if (document.getElementById('Ticket' + obj.id) == null) {
            var renderElement = document.getElementById('ticketRender');
            const importedNode = document.importNode(renderElement, true);
            var element = importedNode.firstElementChild;
            element.className = 'renderDiv';
            this.configure(element);
            this.render(this.ticketDataObject, element, renderElement);
        }
        else {
            this.updateTicket(this.ticketDataObject);
        }
    }
    updateTicket(UpdatedObject) {
        let updatedElement = document.getElementById('Ticket' + UpdatedObject.id);
        updatedElement.querySelector('.ticket-id').textContent = UpdatedObject.id;
        updatedElement.querySelector('.ticket-title').textContent = UpdatedObject.title;
        updatedElement.querySelector('.ticket-desc').textContent = UpdatedObject.summary;
        updatedElement.querySelector('.ticket-priority').textContent = UpdatedObject.priority;
        updatedElement.querySelector('.ticket-assignee').textContent = UpdatedObject.assignee;
    }
    editHandler(event) {
        event.preventDefault();
        new TicketDetail(this.ticketDataObject);
    }
    configure(element) {
        element.addEventListener("click", this.editHandler);
    }
    render(ticketDataObject, element, renderElement) {
        element.id = 'Ticket' + ticketDataObject.id;
        let structure = `<b>Ticket ID:</b> <p class="ticket-id"> ${ticketDataObject.id}</p>  
                            <p class="ticket-title">${ticketDataObject.title} </p>
                            <b>Ticket Description:</b> <p class="ticket-desc"> ${ticketDataObject.summary}</p>
                            <b>Priority:</b> <p class="ticket-priority"> ${ticketDataObject.priority} </p>
                            <b>Assignee:</b> <p class="ticket-assignee">  ${ticketDataObject.assignee} </p>`;
        element.innerHTML = structure;
        renderElement.insertAdjacentElement('afterbegin', element);
    }
}
__decorate([
    autobind
], TicketRender.prototype, "editHandler", null);
//# sourceMappingURL=ticket-render.js.map