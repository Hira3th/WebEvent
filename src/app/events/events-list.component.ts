import { Component, OnInit } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";


@Component({
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit{
   events:any[]
    constructor(private _eventService: EventService, private _toastr: ToastrService){
      //No injections in the construstion
        
    }

    ngOnInit(){
      //injection belong here
      this.events = this._eventService.getEvents();
    }

    handleThumbnailClick(eventName){
      this._toastr.success(eventName)
    }
}