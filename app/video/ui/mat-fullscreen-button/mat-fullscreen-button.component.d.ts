import { EventEmitter, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { FullscreenService } from '../../services/fullscreen.service';
export declare class MatFullscreenButtonComponent implements OnInit {
    private fscreen;
    private evt;
    canFullscreen: boolean;
    player: HTMLVideoElement;
    fullscreen: boolean;
    fullscreenChanged: EventEmitter<boolean>;
    keyboard: boolean;
    constructor(fscreen: FullscreenService, evt: EventService);
    ngOnInit(): void;
    setFullscreen(value: boolean): void;
    toggleFullscreen(): void;
    updateFullscreen(): void;
    onChangesFullscreen(value: boolean): void;
    onFullscreenKey(event: KeyboardEvent): void;
}
