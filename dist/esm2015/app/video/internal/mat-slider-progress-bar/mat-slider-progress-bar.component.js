import { __decorate, __param } from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, ChangeDetectorRef, ViewEncapsulation, ChangeDetectionStrategy, Optional, Attribute } from '@angular/core';
import { MatSlider, MAT_SLIDER_VALUE_ACCESSOR } from '@angular/material/slider';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
/** Counter used to generate unique IDs for progress bars. */
let sliderprogressbarId = 0;
let MatSliderProgressBarComponent = class MatSliderProgressBarComponent extends MatSlider {
    constructor(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) {
        super(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex);
        this.mode = 'buffer';
        this.value = 0;
        this._bufferValue = 0;
        /** The id of the progress bar. */
        this.sliderprogressbarId = `mat-slider-progress-bar-${sliderprogressbarId++}`;
        this.tabIndex = parseInt(tabIndex) || 0;
    }
    /** Buffer value of the progress bar. Defaults to zero. */
    get bufferValue() { return this._bufferValue; }
    set bufferValue(v) { this._bufferValue = clamp(v || 0); }
    /** CSS styles for the track fill element. */
    get _trackBufferStyles() {
        if (this.mode === 'buffer') {
            const axis = this.vertical ? 'Y' : 'X';
            return {
                'transform': `translate${axis}(0px) scale${axis}(${this._bufferValue / 100})`
            };
        }
    }
};
MatSliderProgressBarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FocusMonitor },
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: String, decorators: [{ type: Attribute, args: ['tabindex',] }] }
];
__decorate([
    Input()
], MatSliderProgressBarComponent.prototype, "mode", void 0);
__decorate([
    Input()
], MatSliderProgressBarComponent.prototype, "value", void 0);
__decorate([
    Input()
], MatSliderProgressBarComponent.prototype, "bufferValue", null);
MatSliderProgressBarComponent = __decorate([
    Component({
        selector: 'mat-slider-progress-bar',
        template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n    <div class=\"mat-slider-track-wrapper\">\n        <svg width=\"100%\" height=\"2\" focusable=\"false\" class=\"mat-slider-progress-background\">\n            <defs>\n                <pattern [id]=\"sliderprogressbarId\" x=\"2.5\" y=\"0\" width=\"5\" height=\"2.5\" patternUnits=\"userSpaceOnUse\">\n                    <circle cx=\"1.25\" cy=\"1.25\" r=\"1.25\" />\n                </pattern>\n            </defs>\n            <rect [attr.fill]=\"'url(#' + sliderprogressbarId + ')'\" width=\"100%\" height=\"100%\" />\n        </svg>\n        <div class=\"mat-slider-track-fill mat-slider-track-buffer\" [ngStyle]=\"_trackBufferStyles\"></div>\n        <div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div>\n    </div>\n    <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\">\n        <div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div>\n    </div>\n    <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\">\n        <div class=\"mat-slider-focus-ring\"></div>\n        <div class=\"mat-slider-thumb\"></div>\n        <div class=\"mat-slider-thumb-label\">\n            <span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span>\n        </div>\n    </div>\n</div>",
        providers: [MAT_SLIDER_VALUE_ACCESSOR],
        host: {
            '(focus)': '_onFocus()',
            '(blur)': '_onBlur()',
            '(click)': 'this["_onClick"] ? this["_onClick"]($event) : null',
            '(mousedown)': 'this["_onMousedown"] ? this["_onMousedown"]($event) : null',
            '(keydown)': '_onKeydown($event)',
            '(keyup)': '_onKeyup()',
            '(mouseenter)': '_onMouseenter()',
            'class': 'mat-slider',
            'role': 'slider',
            '[tabIndex]': 'tabIndex',
            '[attr.aria-disabled]': 'disabled',
            '[attr.aria-valuemax]': 'max',
            '[attr.aria-valuemin]': 'min',
            '[attr.aria-valuenow]': 'value',
            '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
            '[class.mat-slider-disabled]': 'disabled',
            '[class.mat-slider-has-ticks]': 'tickInterval',
            '[class.mat-slider-horizontal]': '!vertical',
            '[class.mat-slider-axis-inverted]': '_invertAxis',
            '[class.mat-slider-sliding]': '_isSliding',
            '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
            '[class.mat-slider-vertical]': 'vertical',
            '[class.mat-slider-min-value]': '_isMinValue',
            '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue && _thumbGap && _invertAxis',
        },
        inputs: ['disabled', 'color', 'tabIndex'],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host{width:100%}.mat-slider-progress-background{position:absolute;height:2px;width:100%;fill:#d3d3d3}.mat-slider-track-buffer{background-color:#d3d3d3!important}.mat-slider-thumb{border-color:transparent!important;visibility:hidden;opacity:0;transition:visibility .2s,opacity .2s linear}:host:hover .mat-slider-thumb{visibility:visible;opacity:1;transition:opacity .2s linear}"]
    }),
    __param(3, Optional()),
    __param(4, Attribute('tabindex'))
], MatSliderProgressBarComponent);
export { MatSliderProgressBarComponent };
/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v, min = 0, max = 100) {
    return Math.max(min, Math.min(max, v));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNsaWRlci1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL2ludGVybmFsL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2SyxPQUFPLEVBQUUsU0FBUyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCw2REFBNkQ7QUFDN0QsSUFBSSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFxQzVCLElBQWEsNkJBQTZCLEdBQTFDLE1BQWEsNkJBQThCLFNBQVEsU0FBUztJQVl4RCxZQUNJLFVBQXNCLEVBQ3RCLFlBQTBCLEVBQzFCLGlCQUFvQyxFQUN4QixHQUFtQixFQUNSLFFBQWdCO1FBRXZDLEtBQUssQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQWxCN0QsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQUN4QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBS25CLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRWpDLGtDQUFrQztRQUNsQyx3QkFBbUIsR0FBRywyQkFBMkIsbUJBQW1CLEVBQUUsRUFBRSxDQUFDO1FBVXJFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBbEJELDBEQUEwRDtJQUUxRCxJQUFJLFdBQVcsS0FBYSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELElBQUksV0FBVyxDQUFDLENBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBaUJqRSw2Q0FBNkM7SUFDN0MsSUFBSSxrQkFBa0I7UUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUN4QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUN2QyxPQUFPO2dCQUNILFdBQVcsRUFBRSxZQUFZLElBQUksY0FBYyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUc7YUFDaEYsQ0FBQztTQUNMO0lBQ0wsQ0FBQztDQUNKLENBQUE7O1lBbkJtQixVQUFVO1lBQ1IsWUFBWTtZQUNQLGlCQUFpQjtZQUNuQixjQUFjLHVCQUE5QixRQUFRO3lDQUNSLFNBQVMsU0FBQyxVQUFVOztBQWhCaEI7SUFBUixLQUFLLEVBQUU7MkRBQXlCO0FBQ3hCO0lBQVIsS0FBSyxFQUFFOzREQUFtQjtBQUczQjtJQURDLEtBQUssRUFBRTtnRUFDK0M7QUFMOUMsNkJBQTZCO0lBbkN6QyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLGd6Q0FBdUQ7UUFFdkQsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7UUFDdEMsSUFBSSxFQUFFO1lBQ0YsU0FBUyxFQUFFLFlBQVk7WUFDdkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFLG9EQUFvRDtZQUMvRCxhQUFhLEVBQUUsNERBQTREO1lBQzNFLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLFlBQVk7WUFDdkIsY0FBYyxFQUFFLGlCQUFpQjtZQUNqQyxPQUFPLEVBQUUsWUFBWTtZQUNyQixNQUFNLEVBQUUsUUFBUTtZQUNoQixZQUFZLEVBQUUsVUFBVTtZQUN4QixzQkFBc0IsRUFBRSxVQUFVO1lBQ2xDLHNCQUFzQixFQUFFLEtBQUs7WUFDN0Isc0JBQXNCLEVBQUUsS0FBSztZQUM3QixzQkFBc0IsRUFBRSxPQUFPO1lBQy9CLHlCQUF5QixFQUFFLHNDQUFzQztZQUNqRSw2QkFBNkIsRUFBRSxVQUFVO1lBQ3pDLDhCQUE4QixFQUFFLGNBQWM7WUFDOUMsK0JBQStCLEVBQUUsV0FBVztZQUM1QyxrQ0FBa0MsRUFBRSxhQUFhO1lBQ2pELDRCQUE0QixFQUFFLFlBQVk7WUFDMUMsd0NBQXdDLEVBQUUsWUFBWTtZQUN0RCw2QkFBNkIsRUFBRSxVQUFVO1lBQ3pDLDhCQUE4QixFQUFFLGFBQWE7WUFDN0MsbUNBQW1DLEVBQUUscURBQXFEO1NBQzdGO1FBQ0QsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7UUFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2xELENBQUM7SUFrQk8sV0FBQSxRQUFRLEVBQUUsQ0FBQTtJQUNWLFdBQUEsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0dBakJqQiw2QkFBNkIsQ0FnQ3pDO1NBaENZLDZCQUE2QjtBQWtDMUMsc0VBQXNFO0FBQ3RFLFNBQVMsS0FBSyxDQUFDLENBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHO0lBQ3hDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9wdGlvbmFsLCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNsaWRlciwgTUFUX1NMSURFUl9WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlcic7XG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcblxuLyoqIENvdW50ZXIgdXNlZCB0byBnZW5lcmF0ZSB1bmlxdWUgSURzIGZvciBwcm9ncmVzcyBiYXJzLiAqL1xubGV0IHNsaWRlcnByb2dyZXNzYmFySWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWF0LXNsaWRlci1wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtNQVRfU0xJREVSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBob3N0OiB7XG4gICAgICAgICcoZm9jdXMpJzogJ19vbkZvY3VzKCknLFxuICAgICAgICAnKGJsdXIpJzogJ19vbkJsdXIoKScsXG4gICAgICAgICcoY2xpY2spJzogJ3RoaXNbXCJfb25DbGlja1wiXSA/IHRoaXNbXCJfb25DbGlja1wiXSgkZXZlbnQpIDogbnVsbCcsIC8vIEFuZ3VsYXIgNS82IHN1cHBvcnRcbiAgICAgICAgJyhtb3VzZWRvd24pJzogJ3RoaXNbXCJfb25Nb3VzZWRvd25cIl0gPyB0aGlzW1wiX29uTW91c2Vkb3duXCJdKCRldmVudCkgOiBudWxsJywgLy8gQW5ndWxhciA3IHN1cHBvcnRcbiAgICAgICAgJyhrZXlkb3duKSc6ICdfb25LZXlkb3duKCRldmVudCknLFxuICAgICAgICAnKGtleXVwKSc6ICdfb25LZXl1cCgpJyxcbiAgICAgICAgJyhtb3VzZWVudGVyKSc6ICdfb25Nb3VzZWVudGVyKCknLFxuICAgICAgICAnY2xhc3MnOiAnbWF0LXNsaWRlcicsXG4gICAgICAgICdyb2xlJzogJ3NsaWRlcicsXG4gICAgICAgICdbdGFiSW5kZXhdJzogJ3RhYkluZGV4JyxcbiAgICAgICAgJ1thdHRyLmFyaWEtZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAgICAgJ1thdHRyLmFyaWEtdmFsdWVtYXhdJzogJ21heCcsXG4gICAgICAgICdbYXR0ci5hcmlhLXZhbHVlbWluXSc6ICdtaW4nLFxuICAgICAgICAnW2F0dHIuYXJpYS12YWx1ZW5vd10nOiAndmFsdWUnLFxuICAgICAgICAnW2F0dHIuYXJpYS1vcmllbnRhdGlvbl0nOiAndmVydGljYWwgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIicsXG4gICAgICAgICdbY2xhc3MubWF0LXNsaWRlci1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgICAgICAnW2NsYXNzLm1hdC1zbGlkZXItaGFzLXRpY2tzXSc6ICd0aWNrSW50ZXJ2YWwnLFxuICAgICAgICAnW2NsYXNzLm1hdC1zbGlkZXItaG9yaXpvbnRhbF0nOiAnIXZlcnRpY2FsJyxcbiAgICAgICAgJ1tjbGFzcy5tYXQtc2xpZGVyLWF4aXMtaW52ZXJ0ZWRdJzogJ19pbnZlcnRBeGlzJyxcbiAgICAgICAgJ1tjbGFzcy5tYXQtc2xpZGVyLXNsaWRpbmddJzogJ19pc1NsaWRpbmcnLFxuICAgICAgICAnW2NsYXNzLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZ10nOiAndGh1bWJMYWJlbCcsXG4gICAgICAgICdbY2xhc3MubWF0LXNsaWRlci12ZXJ0aWNhbF0nOiAndmVydGljYWwnLFxuICAgICAgICAnW2NsYXNzLm1hdC1zbGlkZXItbWluLXZhbHVlXSc6ICdfaXNNaW5WYWx1ZScsXG4gICAgICAgICdbY2xhc3MubWF0LXNsaWRlci1oaWRlLWxhc3QtdGlja10nOiAnZGlzYWJsZWQgfHwgX2lzTWluVmFsdWUgJiYgX3RodW1iR2FwICYmIF9pbnZlcnRBeGlzJyxcbiAgICB9LFxuICAgIGlucHV0czogWydkaXNhYmxlZCcsICdjb2xvcicsICd0YWJJbmRleCddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcblxuZXhwb3J0IGNsYXNzIE1hdFNsaWRlclByb2dyZXNzQmFyQ29tcG9uZW50IGV4dGVuZHMgTWF0U2xpZGVyIHtcbiAgICBASW5wdXQoKSBtb2RlOiBzdHJpbmcgPSAnYnVmZmVyJztcbiAgICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyID0gMDtcbiAgICAvKiogQnVmZmVyIHZhbHVlIG9mIHRoZSBwcm9ncmVzcyBiYXIuIERlZmF1bHRzIHRvIHplcm8uICovXG4gICAgQElucHV0KClcbiAgICBnZXQgYnVmZmVyVmFsdWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2J1ZmZlclZhbHVlOyB9XG4gICAgc2V0IGJ1ZmZlclZhbHVlKHY6IG51bWJlcikgeyB0aGlzLl9idWZmZXJWYWx1ZSA9IGNsYW1wKHYgfHwgMCk7IH1cbiAgICBwcml2YXRlIF9idWZmZXJWYWx1ZTogbnVtYmVyID0gMDtcblxuICAgIC8qKiBUaGUgaWQgb2YgdGhlIHByb2dyZXNzIGJhci4gKi9cbiAgICBzbGlkZXJwcm9ncmVzc2JhcklkID0gYG1hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyLSR7c2xpZGVycHJvZ3Jlc3NiYXJJZCsrfWA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgQE9wdGlvbmFsKCkgZGlyOiBEaXJlY3Rpb25hbGl0eSxcbiAgICAgICAgQEF0dHJpYnV0ZSgndGFiaW5kZXgnKSB0YWJJbmRleDogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIGZvY3VzTW9uaXRvciwgY2hhbmdlRGV0ZWN0b3JSZWYsIGRpciwgdGFiSW5kZXgpO1xuICAgICAgICB0aGlzLnRhYkluZGV4ID0gcGFyc2VJbnQodGFiSW5kZXgpIHx8IDA7XG4gICAgfVxuXG4gICAgLyoqIENTUyBzdHlsZXMgZm9yIHRoZSB0cmFjayBmaWxsIGVsZW1lbnQuICovXG4gICAgZ2V0IF90cmFja0J1ZmZlclN0eWxlcygpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ2J1ZmZlcicpIHtcbiAgICAgICAgICAgIGNvbnN0IGF4aXMgPSB0aGlzLnZlcnRpY2FsID8gJ1knIDogJ1gnO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogYHRyYW5zbGF0ZSR7YXhpc30oMHB4KSBzY2FsZSR7YXhpc30oJHt0aGlzLl9idWZmZXJWYWx1ZSAvIDEwMH0pYFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqIENsYW1wcyBhIHZhbHVlIHRvIGJlIGJldHdlZW4gdHdvIG51bWJlcnMsIGJ5IGRlZmF1bHQgMCBhbmQgMTAwLiAqL1xuZnVuY3Rpb24gY2xhbXAodjogbnVtYmVyLCBtaW4gPSAwLCBtYXggPSAxMDApIHtcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHYpKTtcbn1cbiJdfQ==