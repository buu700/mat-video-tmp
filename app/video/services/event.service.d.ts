import { Renderer2 } from '@angular/core';
import { EventHandler } from '../interfaces/event-handler.interface';
export declare class EventService {
    constructor();
    addEvents(renderer: Renderer2, events: EventHandler[]): void;
    removeEvents(events: EventHandler[]): void;
}
