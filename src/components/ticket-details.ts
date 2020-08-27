import { LooseObject } from "../service/loose-object.js";
import { TicketRender } from "./ticket-render.js";


export class TicketDetail {
    constructor(detailObj : LooseObject) {
        console.log(detailObj.id);
        this.renderDetails(detailObj);
    }
    renderDetails(detailObj : LooseObject) {

        if(document.getElementById('ticketDetails' + detailObj.id) == null) {
            let element = document.createElement('div');
            element.className='ticket-details p-3';
            let structure = `<p class="ticket-id"><b>Ticket ID:</b> ${detailObj.id}</p>  
            <div>
                <label for="title${detailObj.id}">Title</label>
                <input type="text" id="title${detailObj.id}" value=${detailObj.title}> 
            </div>
            <div>
              <label for="description${detailObj.id}">Summary</label>
              <textarea id="description${detailObj.id}" rows="3"> ${detailObj.summary}</textarea>
            </div>
            <div>
                <label for="Priority${detailObj.id}">Priority</label>
                <input type="text" id="Priority${detailObj.id}" value=${detailObj.priority}> 
          </div>
          <div>
              <label for="assignee${detailObj.id}">Assignee</label>
              <input type="text" id="assignee${detailObj.id}" value=${detailObj.assignee}>
            </div>
            <button id="update-button-${detailObj.id}">Update</button>
            <button id="close-button-${detailObj.id}">Close</button>`
           
            element.id= 'ticketDetails' + detailObj.id;
            element.innerHTML = structure;
            let overLayElement = document.createElement('div');
            overLayElement.id = 'overlay-div-'+detailObj.id;
            overLayElement.className='overlay-div';
            overLayElement.append(element);
            document.body.appendChild(overLayElement);
            document.getElementById('update-button-'+detailObj.id)!.addEventListener('click', () => this.updateDetails(detailObj.id));
            document.getElementById('close-button-'+detailObj.id)!.addEventListener('click', () => {
                document.getElementById('overlay-div-'+detailObj.id)!.style.display= "none";
            });
        }
        else{
            document.getElementById('overlay-div-'+detailObj.id)!.style.display = "block";
        }
        
       
    }
    updateDetails(objectId: string) {
        console.log(objectId);
        let updatedElement = document.getElementById('ticketDetails' + objectId)!;
         let titleElement = updatedElement.querySelector('#title'+ objectId)  as HTMLInputElement;
         let summaryElement = updatedElement.querySelector('#description'+ objectId) as HTMLInputElement;
         let priorityElement = updatedElement.querySelector("#Priority"+ objectId) as HTMLInputElement;
         let assigneeElement = updatedElement.querySelector('#assignee'+ objectId) as HTMLInputElement;
         const updatedObject: LooseObject = {
                id: objectId,
                title: titleElement.value,
                summary: summaryElement.value,
                priority: priorityElement.value,
                assignee: assigneeElement.value
         }
         document.getElementById('overlay-div-'+objectId)!.style.display= "none"; 
         new TicketRender(updatedObject);
    }
    
}