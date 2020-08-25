"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TicketRender {
    constructor(array) {
        this.renderElement = document.getElementById('ticketRender');
        const importedNode = document.importNode(this.renderElement, true);
        this.element = importedNode.firstElementChild;
        this.element.className = 'renderDiv';
        this.render(array);
    }
    render(array) {
        for (let item of array) {
            this.element.id = 'Ticket' + item.id;
            let structure = `<p><b>Ticket ID:</b> ${item.id}</p>
            <p>${item.title} </p>
            <p class="ticket-desc"><b>Ticket Description:</b> ${item.summary}</p>
            <p> <b>Priority:</b> ${item.priority} </p>
            <p> <b>Assignee:</b> ${item.assignee} </p>
            `;
            this.element.innerHTML = structure;
        }
        this.renderElement.insertAdjacentElement('afterbegin', this.element);
    }
}
exports.TicketRender = TicketRender;
//# sourceMappingURL=ticket-render.js.map