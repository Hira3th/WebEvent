import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEvent, ISession } from "..";
import { EventService } from "../shared/event.service";

@Component({
    templateUrl: "./event-details.component.html",
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
        a {cursor: pointer}
    `]
})
export class EventDetailsComponent  implements OnInit{
    event:IEvent
    addMode: boolean
    constructor(private eventService: EventService, private route: ActivatedRoute){

    }
    ngOnInit(){         
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
        console.log(this.event);
        
    }

    addSession(){
        this.addMode = true
    }

    showSessions(){
        this.addMode = false
    }

    saveNewSession(session:ISession){
        const nextId = this.event.sessions?.length > 0 ? Math.max.apply(null, this.event.sessions.map(s => s.id)) : 0;
        console.log(this.event.sessions);
        session.id = nextId + 1
        console.log(session.id);
        if (this.event.sessions?.length > 0){
            this.event.sessions?.push(session)
        } else {
            this.event.sessions = [session]
        }
        this.eventService.updateEvent(this.event)
        this.addMode = false
    }

    cancelAddSession(){
        this.addMode = false
    }
}