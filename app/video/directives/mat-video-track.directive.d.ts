import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { MatVideoComponent } from '../video.component';
export declare class MatVideoTrackDirective implements OnChanges {
    private matVideoComponent;
    private el;
    src: string;
    kind: string;
    srclang: string;
    label: string;
    private init;
    private video;
    private track;
    constructor(matVideoComponent: MatVideoComponent, el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
}
