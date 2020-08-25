
import { LooseObject } from "./loose-object.js";
import { TicketRender } from "../components/ticket-render.js";


export class TicketController {
    private static instance: TicketController;

    private constructor(){

    }

    static getInstance() {
        if(this.instance)
            return this.instance;
        else
            this.instance = new TicketController(); 
           
        return this.instance;    
    }

    addTicket(obj: LooseObject) {
        new TicketRender(obj);
    }
}