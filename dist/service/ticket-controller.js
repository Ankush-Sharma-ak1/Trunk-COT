import { TicketRender } from "../components/ticket-render.js";
export class TicketController {
    constructor() {
    }
    static getInstance() {
        if (this.instance)
            return this.instance;
        else
            this.instance = new TicketController();
        return this.instance;
    }
    addTicket(obj) {
        new TicketRender(obj);
    }
}
//# sourceMappingURL=ticket-controller.js.map