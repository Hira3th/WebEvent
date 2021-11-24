import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
   events:any
    constructor(private _eventService: EventService, private _toastr: ToastrService,
      private route:ActivatedRoute){
      //No injections in the construstion
        
    }

    ngOnInit(){
      //Now inject in the resolver
      ////injection belong here
      ////this._eventService.getEvents().subscribe(_events => {this.events = _events});
      this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName){
      this._toastr.success(eventName)
    }
}