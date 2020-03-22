import { ElementRef, ChangeDetectorRef } from '@angular/core';
import { MatSlider } from '@angular/material/slider';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
export declare class MatSliderProgressBarComponent extends MatSlider {
    mode: string;
    value: number;
    /** Buffer value of the progress bar. Defaults to zero. */
    get bufferValue(): number;
    set bufferValue(v: number);
    private _bufferValue;
    /** The id of the progress bar. */
    sliderprogressbarId: string;
    constructor(elementRef: ElementRef, focusMonitor: FocusMonitor, changeDetectorRef: ChangeDetectorRef, dir: Directionality, tabIndex: string);
    /** CSS styles for the track fill element. */
    get _trackBufferStyles(): {
        [key: string]: string;
    };
}
