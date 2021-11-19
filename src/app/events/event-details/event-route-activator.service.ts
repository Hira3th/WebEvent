import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivator implements	CanActivate {
    constructor(private  _eventService: EventService, private _router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const eventExists = !!this._eventService.getEvent(+route.params['id'])

        if (!eventExists)
            this._router.navigate(['/404']);

        return eventExists
    }
}