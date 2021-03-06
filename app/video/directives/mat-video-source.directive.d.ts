import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { MatVideoComponent } from '../video.component';
export declare class MatVideoSourceDirective implements OnChanges {
    private matVideoComponent;
    private el;
    src: string;
    type: string;
    private init;
    private video;
    private source;
    constructor(matVideoComponent: MatVideoComponent, el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
}
