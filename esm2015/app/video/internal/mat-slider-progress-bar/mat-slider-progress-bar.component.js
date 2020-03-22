import * as tslib_1 from "tslib";
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
tslib_1.__decorate([
    Input()
], MatSliderProgressBarComponent.prototype, "mode", void 0);
tslib_1.__decorate([
    Input()
], MatSliderProgressBarComponent.prototype, "value", void 0);
tslib_1.__decorate([
    Input()
], MatSliderProgressBarComponent.prototype, "bufferValue", null);
MatSliderProgressBarComponent = tslib_1.__decorate([
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
    tslib_1.__param(3, Optional()),
    tslib_1.__param(4, Attribute('tabindex'))
], MatSliderProgressBarComponent);
export { MatSliderProgressBarComponent };
/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v, min = 0, max = 100) {
    return Math.max(min, Math.min(max, v));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNsaWRlci1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL2ludGVybmFsL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2SyxPQUFPLEVBQUUsU0FBUyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCw2REFBNkQ7QUFDN0QsSUFBSSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFxQzVCLElBQWEsNkJBQTZCLEdBQTFDLE1BQWEsNkJBQThCLFNBQVEsU0FBUztJQVl4RCxZQUNJLFVBQXNCLEVBQ3RCLFlBQTBCLEVBQzFCLGlCQUFvQyxFQUN4QixHQUFtQixFQUNSLFFBQWdCO1FBRXZDLEtBQUssQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQWxCN0QsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQUN4QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBS25CLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRWpDLGtDQUFrQztRQUNsQyx3QkFBbUIsR0FBRywyQkFBMkIsbUJBQW1CLEVBQUUsRUFBRSxDQUFDO1FBVXJFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBbEJELDBEQUEwRDtJQUUxRCxJQUFJLFdBQVcsS0FBYSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELElBQUksV0FBVyxDQUFDLENBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBaUJqRSw2Q0FBNkM7SUFDN0MsSUFBSSxrQkFBa0I7UUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUN4QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUN2QyxPQUFPO2dCQUNILFdBQVcsRUFBRSxZQUFZLElBQUksY0FBYyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUc7YUFDaEYsQ0FBQztTQUNMO0lBQ0wsQ0FBQztDQUNKLENBQUE7O1lBbkJtQixVQUFVO1lBQ1IsWUFBWTtZQUNQLGlCQUFpQjtZQUNuQixjQUFjLHVCQUE5QixRQUFRO3lDQUNSLFNBQVMsU0FBQyxVQUFVOztBQWhCaEI7SUFBUixLQUFLLEVBQUU7MkRBQXlCO0FBQ3hCO0lBQVIsS0FBSyxFQUFFOzREQUFtQjtBQUczQjtJQURDLEtBQUssRUFBRTtnRUFDK0M7QUFMOUMsNkJBQTZCO0lBbkN6QyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLGd6Q0FBdUQ7UUFFdkQsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7UUFDdEMsSUFBSSxFQUFFO1lBQ0YsU0FBUyxFQUFFLFlBQVk7WUFDdkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFLG9EQUFvRDtZQUMvRCxhQUFhLEVBQUUsNERBQTREO1lBQzNFLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLFlBQVk7WUFDdkIsY0FBYyxFQUFFLGlCQUFpQjtZQUNqQyxPQUFPLEVBQUUsWUFBWTtZQUNyQixNQUFNLEVBQUUsUUFBUTtZQUNoQixZQUFZLEVBQUUsVUFBVTtZQUN4QixzQkFBc0IsRUFBRSxVQUFVO1lBQ2xDLHNCQUFzQixFQUFFLEtBQUs7WUFDN0Isc0JBQXNCLEVBQUUsS0FBSztZQUM3QixzQkFBc0IsRUFBRSxPQUFPO1lBQy9CLHlCQUF5QixFQUFFLHNDQUFzQztZQUNqRSw2QkFBNkIsRUFBRSxVQUFVO1lBQ3pDLDhCQUE4QixFQUFFLGNBQWM7WUFDOUMsK0JBQStCLEVBQUUsV0FBVztZQUM1QyxrQ0FBa0MsRUFBRSxhQUFhO1lBQ2pELDRCQUE0QixFQUFFLFlBQVk7WUFDMUMsd0NBQXdDLEVBQUUsWUFBWTtZQUN0RCw2QkFBNkIsRUFBRSxVQUFVO1lBQ3pDLDhCQUE4QixFQUFFLGFBQWE7WUFDN0MsbUNBQW1DLEVBQUUscURBQXFEO1NBQzdGO1FBQ0QsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7UUFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2xELENBQUM7SUFrQk8sbUJBQUEsUUFBUSxFQUFFLENBQUE7SUFDVixtQkFBQSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUE7R0FqQmpCLDZCQUE2QixDQWdDekM7U0FoQ1ksNkJBQTZCO0FBa0MxQyxzRUFBc0U7QUFDdEUsU0FBUyxLQUFLLENBQUMsQ0FBUyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUc7SUFDeEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3B0aW9uYWwsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U2xpZGVyLCBNQVRfU0xJREVSX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuXG4vKiogQ291bnRlciB1c2VkIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRHMgZm9yIHByb2dyZXNzIGJhcnMuICovXG5sZXQgc2xpZGVycHJvZ3Jlc3NiYXJJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWF0LXNsaWRlci1wcm9ncmVzcy1iYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYXQtc2xpZGVyLXByb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbWF0LXNsaWRlci1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmNzcyddLFxuICAgIHByb3ZpZGVyczogW01BVF9TTElERVJfVkFMVUVfQUNDRVNTT1JdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJyhmb2N1cyknOiAnX29uRm9jdXMoKScsXG4gICAgICAgICcoYmx1ciknOiAnX29uQmx1cigpJyxcbiAgICAgICAgJyhjbGljayknOiAndGhpc1tcIl9vbkNsaWNrXCJdID8gdGhpc1tcIl9vbkNsaWNrXCJdKCRldmVudCkgOiBudWxsJywgLy8gQW5ndWxhciA1LzYgc3VwcG9ydFxuICAgICAgICAnKG1vdXNlZG93biknOiAndGhpc1tcIl9vbk1vdXNlZG93blwiXSA/IHRoaXNbXCJfb25Nb3VzZWRvd25cIl0oJGV2ZW50KSA6IG51bGwnLCAvLyBBbmd1bGFyIDcgc3VwcG9ydFxuICAgICAgICAnKGtleWRvd24pJzogJ19vbktleWRvd24oJGV2ZW50KScsXG4gICAgICAgICcoa2V5dXApJzogJ19vbktleXVwKCknLFxuICAgICAgICAnKG1vdXNlZW50ZXIpJzogJ19vbk1vdXNlZW50ZXIoKScsXG4gICAgICAgICdjbGFzcyc6ICdtYXQtc2xpZGVyJyxcbiAgICAgICAgJ3JvbGUnOiAnc2xpZGVyJyxcbiAgICAgICAgJ1t0YWJJbmRleF0nOiAndGFiSW5kZXgnLFxuICAgICAgICAnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgICAgICAnW2F0dHIuYXJpYS12YWx1ZW1heF0nOiAnbWF4JyxcbiAgICAgICAgJ1thdHRyLmFyaWEtdmFsdWVtaW5dJzogJ21pbicsXG4gICAgICAgICdbYXR0ci5hcmlhLXZhbHVlbm93XSc6ICd2YWx1ZScsXG4gICAgICAgICdbYXR0ci5hcmlhLW9yaWVudGF0aW9uXSc6ICd2ZXJ0aWNhbCA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiJyxcbiAgICAgICAgJ1tjbGFzcy5tYXQtc2xpZGVyLWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgICAgICdbY2xhc3MubWF0LXNsaWRlci1oYXMtdGlja3NdJzogJ3RpY2tJbnRlcnZhbCcsXG4gICAgICAgICdbY2xhc3MubWF0LXNsaWRlci1ob3Jpem9udGFsXSc6ICchdmVydGljYWwnLFxuICAgICAgICAnW2NsYXNzLm1hdC1zbGlkZXItYXhpcy1pbnZlcnRlZF0nOiAnX2ludmVydEF4aXMnLFxuICAgICAgICAnW2NsYXNzLm1hdC1zbGlkZXItc2xpZGluZ10nOiAnX2lzU2xpZGluZycsXG4gICAgICAgICdbY2xhc3MubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nXSc6ICd0aHVtYkxhYmVsJyxcbiAgICAgICAgJ1tjbGFzcy5tYXQtc2xpZGVyLXZlcnRpY2FsXSc6ICd2ZXJ0aWNhbCcsXG4gICAgICAgICdbY2xhc3MubWF0LXNsaWRlci1taW4tdmFsdWVdJzogJ19pc01pblZhbHVlJyxcbiAgICAgICAgJ1tjbGFzcy5tYXQtc2xpZGVyLWhpZGUtbGFzdC10aWNrXSc6ICdkaXNhYmxlZCB8fCBfaXNNaW5WYWx1ZSAmJiBfdGh1bWJHYXAgJiYgX2ludmVydEF4aXMnLFxuICAgIH0sXG4gICAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2NvbG9yJywgJ3RhYkluZGV4J10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuXG5leHBvcnQgY2xhc3MgTWF0U2xpZGVyUHJvZ3Jlc3NCYXJDb21wb25lbnQgZXh0ZW5kcyBNYXRTbGlkZXIge1xuICAgIEBJbnB1dCgpIG1vZGU6IHN0cmluZyA9ICdidWZmZXInO1xuICAgIEBJbnB1dCgpIHZhbHVlOiBudW1iZXIgPSAwO1xuICAgIC8qKiBCdWZmZXIgdmFsdWUgb2YgdGhlIHByb2dyZXNzIGJhci4gRGVmYXVsdHMgdG8gemVyby4gKi9cbiAgICBASW5wdXQoKVxuICAgIGdldCBidWZmZXJWYWx1ZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fYnVmZmVyVmFsdWU7IH1cbiAgICBzZXQgYnVmZmVyVmFsdWUodjogbnVtYmVyKSB7IHRoaXMuX2J1ZmZlclZhbHVlID0gY2xhbXAodiB8fCAwKTsgfVxuICAgIHByaXZhdGUgX2J1ZmZlclZhbHVlOiBudW1iZXIgPSAwO1xuXG4gICAgLyoqIFRoZSBpZCBvZiB0aGUgcHJvZ3Jlc3MgYmFyLiAqL1xuICAgIHNsaWRlcnByb2dyZXNzYmFySWQgPSBgbWF0LXNsaWRlci1wcm9ncmVzcy1iYXItJHtzbGlkZXJwcm9ncmVzc2JhcklkKyt9YDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcbiAgICAgICAgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBAT3B0aW9uYWwoKSBkaXI6IERpcmVjdGlvbmFsaXR5LFxuICAgICAgICBAQXR0cmlidXRlKCd0YWJpbmRleCcpIHRhYkluZGV4OiBzdHJpbmdcbiAgICApIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgZm9jdXNNb25pdG9yLCBjaGFuZ2VEZXRlY3RvclJlZiwgZGlyLCB0YWJJbmRleCk7XG4gICAgICAgIHRoaXMudGFiSW5kZXggPSBwYXJzZUludCh0YWJJbmRleCkgfHwgMDtcbiAgICB9XG5cbiAgICAvKiogQ1NTIHN0eWxlcyBmb3IgdGhlIHRyYWNrIGZpbGwgZWxlbWVudC4gKi9cbiAgICBnZXQgX3RyYWNrQnVmZmVyU3R5bGVzKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnYnVmZmVyJykge1xuICAgICAgICAgICAgY29uc3QgYXhpcyA9IHRoaXMudmVydGljYWwgPyAnWScgOiAnWCc7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiBgdHJhbnNsYXRlJHtheGlzfSgwcHgpIHNjYWxlJHtheGlzfSgke3RoaXMuX2J1ZmZlclZhbHVlIC8gMTAwfSlgXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiogQ2xhbXBzIGEgdmFsdWUgdG8gYmUgYmV0d2VlbiB0d28gbnVtYmVycywgYnkgZGVmYXVsdCAwIGFuZCAxMDAuICovXG5mdW5jdGlvbiBjbGFtcCh2OiBudW1iZXIsIG1pbiA9IDAsIG1heCA9IDEwMCkge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdikpO1xufVxuIl19