import { AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { EventService } from '../../services/event.service';
export declare class MatVideoSpinnerComponent implements AfterViewInit, OnDestroy {
    private renderer;
    private evt;
    video: HTMLVideoElement;
    spinner: string;
    videoBuffering: boolean;
    videoLoaded: boolean;
    private events;
    constructor(renderer: Renderer2, evt: EventService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
