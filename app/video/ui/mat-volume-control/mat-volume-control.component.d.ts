import { AfterViewInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { EventService } from '../../services/event.service';
export declare class MatVolumeControlComponent implements AfterViewInit, OnChanges {
    private evt;
    video: HTMLVideoElement;
    color: ThemePalette;
    volume: number;
    volumeChanged: EventEmitter<number>;
    muted: boolean;
    mutedChanged: EventEmitter<boolean>;
    keyboard: boolean;
    constructor(evt: EventService);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setVolume(value: number): void;
    setMuted(value: boolean): void;
    toggleMuted(): void;
    updateMuted(emitChange?: boolean): void;
    onMuteKey(event: KeyboardEvent): void;
}
