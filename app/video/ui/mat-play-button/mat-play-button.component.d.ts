import { AfterViewInit, EventEmitter, OnDestroy, Renderer2 } from '@angular/core';
import { EventService } from '../../services/event.service';
export declare class MatPlayButtonComponent implements AfterViewInit, OnDestroy {
    private renderer;
    private evt;
    video: HTMLVideoElement;
    play: boolean;
    playChanged: EventEmitter<boolean>;
    keyboard: boolean;
    private events;
    constructor(renderer: Renderer2, evt: EventService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setVideoPlayback(value: boolean): void;
    toggleVideoPlayback(): void;
    updateVideoPlayback(): void;
    onPlayKey(event: KeyboardEvent): void;
}
