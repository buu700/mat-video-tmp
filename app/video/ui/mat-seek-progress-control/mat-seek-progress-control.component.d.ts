import { AfterViewInit, EventEmitter, OnDestroy, Renderer2 } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { EventService } from '../../services/event.service';
export declare class MatSeekProgressControlComponent implements AfterViewInit, OnDestroy {
    private renderer;
    private evt;
    curTimePercent: number;
    bufTimePercent: number;
    video: HTMLVideoElement;
    color: ThemePalette;
    currentTime: number;
    currentTimeChanged: EventEmitter<number>;
    bufferedTime: number;
    bufferedTimeChanged: EventEmitter<number>;
    private events;
    constructor(renderer: Renderer2, evt: EventService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    seekVideo(value: number): void;
    updateCurrentTime(time: number): void;
    updateBufferedTime(): void;
    updateTime(emitter: EventEmitter<number>, time: number): number;
}
