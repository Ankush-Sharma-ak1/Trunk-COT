import { autobind } from "../decorators/autobind-decorator.js";
import { TicketDetail } from "./ticket-details.js";
import { LooseObject } from "../service/loose-object.js";

export class TicketRender {
    ticketDataObject : LooseObject;

    constructor(obj : LooseObject) {    
        this.ticketDataObject = obj;
        if(document.getElementById('Ticket' + obj.id) == null) { 
            var renderElement = document.getElementById('ticketRender')! as HTMLDivElement;
            const importedNode = document.importNode(renderElement, true);
            var element = importedNode.firstElementChild as HTMLDivElement;
            element.className ='renderDiv';
            this.configure(element);
            this.render(this.ticketDataObject, element, renderElement);
        }
        else {
            this.updateTicket(this.ticketDataObject);
        }
        
    } 
    
    updateTicket(UpdatedObject: LooseObject) {
       let updatedElement = document.getElementById('Ticket' + UpdatedObject.id)!;
       updatedElement.querySelector('.ticket-id')!.textContent = UpdatedObject.id;
       updatedElement.querySelector('.ticket-title')!.textContent = UpdatedObject.title;
       updatedElement.querySelector('.ticket-desc')!.textContent = UpdatedObject.summary;
       updatedElement.querySelector('.ticket-priority')!.textContent = UpdatedObject.priority;
       updatedElement.querySelector('.ticket-assignee')!.textContent = UpdatedObject.assignee;
    }
    @autobind
    private editHandler(event: Event) {
        event.preventDefault();
        new TicketDetail(this.ticketDataObject);
    }
    private configure(element : HTMLDivElement) {
        element.addEventListener("click",this.editHandler);
    }
    private render(ticketDataObject : LooseObject, element: HTMLDivElement, renderElement: HTMLDivElement) {   
            element.id = 'Ticket' + ticketDataObject.id;
            let structure = `<b>Ticket ID:</b> <p class="ticket-id"> ${ticketDataObject.id}</p>  
                            <p class="ticket-title">${ticketDataObject.title} </p>
                            <b>Ticket Description:</b> <p class="ticket-desc"> ${ticketDataObject.summary}</p>
                            <b>Priority:</b> <p class="ticket-priority"> ${ticketDataObject.priority} </p>
                            <b>Assignee:</b> <p class="ticket-assignee">  ${ticketDataObject.assignee} </p>`
            element.innerHTML = structure;    
        
        renderElement.insertAdjacentElement('afterbegin',element);  
    }
}