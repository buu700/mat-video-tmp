import { __decorate, __extends, __param } from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, ChangeDetectorRef, ViewEncapsulation, ChangeDetectionStrategy, Optional, Attribute } from '@angular/core';
import { MatSlider, MAT_SLIDER_VALUE_ACCESSOR } from '@angular/material/slider';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
/** Counter used to generate unique IDs for progress bars. */
var sliderprogressbarId = 0;
var MatSliderProgressBarComponent = /** @class */ (function (_super) {
    __extends(MatSliderProgressBarComponent, _super);
    function MatSliderProgressBarComponent(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) {
        var _this = _super.call(this, elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) || this;
        _this.mode = 'buffer';
        _this.value = 0;
        _this._bufferValue = 0;
        /** The id of the progress bar. */
        _this.sliderprogressbarId = "mat-slider-progress-bar-" + sliderprogressbarId++;
        _this.tabIndex = parseInt(tabIndex) || 0;
        return _this;
    }
    Object.defineProperty(MatSliderProgressBarComponent.prototype, "bufferValue", {
        /** Buffer value of the progress bar. Defaults to zero. */
        get: function () { return this._bufferValue; },
        set: function (v) { this._bufferValue = clamp(v || 0); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSliderProgressBarComponent.prototype, "_trackBufferStyles", {
        /** CSS styles for the track fill element. */
        get: function () {
            if (this.mode === 'buffer') {
                var axis = this.vertical ? 'Y' : 'X';
                return {
                    'transform': "translate" + axis + "(0px) scale" + axis + "(" + this._bufferValue / 100 + ")"
                };
            }
        },
        enumerable: true,
        configurable: true
    });
    MatSliderProgressBarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FocusMonitor },
        { type: ChangeDetectorRef },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: String, decorators: [{ type: Attribute, args: ['tabindex',] }] }
    ]; };
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
    return MatSliderProgressBarComponent;
}(MatSlider));
export { MatSliderProgressBarComponent };
/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.max(min, Math.min(max, v));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNsaWRlci1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL2ludGVybmFsL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2SyxPQUFPLEVBQUUsU0FBUyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCw2REFBNkQ7QUFDN0QsSUFBSSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFxQzVCO0lBQW1ELGlEQUFTO0lBWXhELHVDQUNJLFVBQXNCLEVBQ3RCLFlBQTBCLEVBQzFCLGlCQUFvQyxFQUN4QixHQUFtQixFQUNSLFFBQWdCO1FBTDNDLFlBT0ksa0JBQU0sVUFBVSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLFNBRXBFO1FBcEJRLFVBQUksR0FBVyxRQUFRLENBQUM7UUFDeEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUtuQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUVqQyxrQ0FBa0M7UUFDbEMseUJBQW1CLEdBQUcsNkJBQTJCLG1CQUFtQixFQUFJLENBQUM7UUFVckUsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUM1QyxDQUFDO0lB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bWl0dGVyLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPcHRpb25hbCwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTbGlkZXIsIE1BVF9TTElERVJfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5cbi8qKiBDb3VudGVyIHVzZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIElEcyBmb3IgcHJvZ3Jlc3MgYmFycy4gKi9cbmxldCBzbGlkZXJwcm9ncmVzc2JhcklkID0gMDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtYXQtc2xpZGVyLXByb2dyZXNzLWJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tYXQtc2xpZGVyLXByb2dyZXNzLWJhci5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbTUFUX1NMSURFUl9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgaG9zdDoge1xuICAgICAgICAnKGZvY3VzKSc6ICdfb25Gb2N1cygpJyxcbiAgICAgICAgJyhibHVyKSc6ICdfb25CbHVyKCknLFxuICAgICAgICAnKGNsaWNrKSc6ICd0aGlzW1wiX29uQ2xpY2tcIl0gPyB0aGlzW1wiX29uQ2xpY2tcIl0oJGV2ZW50KSA6IG51bGwnLCAvLyBBbmd1bGFyIDUvNiBzdXBwb3J0XG4gICAgICAgICcobW91c2Vkb3duKSc6ICd0aGlzW1wiX29uTW91c2Vkb3duXCJdID8gdGhpc1tcIl9vbk1vdXNlZG93blwiXSgkZXZlbnQpIDogbnVsbCcsIC8vIEFuZ3VsYXIgNyBzdXBwb3J0XG4gICAgICAgICcoa2V5ZG93biknOiAnX29uS2V5ZG93bigkZXZlbnQpJyxcbiAgICAgICAgJyhrZXl1cCknOiAnX29uS2V5dXAoKScsXG4gICAgICAgICcobW91c2VlbnRlciknOiAnX29uTW91c2VlbnRlcigpJyxcbiAgICAgICAgJ2NsYXNzJzogJ21hdC1zbGlkZXInLFxuICAgICAgICAncm9sZSc6ICdzbGlkZXInLFxuICAgICAgICAnW3RhYkluZGV4XSc6ICd0YWJJbmRleCcsXG4gICAgICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgICAgICdbYXR0ci5hcmlhLXZhbHVlbWF4XSc6ICdtYXgnLFxuICAgICAgICAnW2F0dHIuYXJpYS12YWx1ZW1pbl0nOiAnbWluJyxcbiAgICAgICAgJ1thdHRyLmFyaWEtdmFsdWVub3ddJzogJ3ZhbHVlJyxcbiAgICAgICAgJ1thdHRyLmFyaWEtb3JpZW50YXRpb25dJzogJ3ZlcnRpY2FsID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCInLFxuICAgICAgICAnW2NsYXNzLm1hdC1zbGlkZXItZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAgICAgJ1tjbGFzcy5tYXQtc2xpZGVyLWhhcy10aWNrc10nOiAndGlja0ludGVydmFsJyxcbiAgICAgICAgJ1tjbGFzcy5tYXQtc2xpZGVyLWhvcml6b250YWxdJzogJyF2ZXJ0aWNhbCcsXG4gICAgICAgICdbY2xhc3MubWF0LXNsaWRlci1heGlzLWludmVydGVkXSc6ICdfaW52ZXJ0QXhpcycsXG4gICAgICAgICdbY2xhc3MubWF0LXNsaWRlci1zbGlkaW5nXSc6ICdfaXNTbGlkaW5nJyxcbiAgICAgICAgJ1tjbGFzcy5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmddJzogJ3RodW1iTGFiZWwnLFxuICAgICAgICAnW2NsYXNzLm1hdC1zbGlkZXItdmVydGljYWxdJzogJ3ZlcnRpY2FsJyxcbiAgICAgICAgJ1tjbGFzcy5tYXQtc2xpZGVyLW1pbi12YWx1ZV0nOiAnX2lzTWluVmFsdWUnLFxuICAgICAgICAnW2NsYXNzLm1hdC1zbGlkZXItaGlkZS1sYXN0LXRpY2tdJzogJ2Rpc2FibGVkIHx8IF9pc01pblZhbHVlICYmIF90aHVtYkdhcCAmJiBfaW52ZXJ0QXhpcycsXG4gICAgfSxcbiAgICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnY29sb3InLCAndGFiSW5kZXgnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBNYXRTbGlkZXJQcm9ncmVzc0JhckNvbXBvbmVudCBleHRlbmRzIE1hdFNsaWRlciB7XG4gICAgQElucHV0KCkgbW9kZTogc3RyaW5nID0gJ2J1ZmZlcic7XG4gICAgQElucHV0KCkgdmFsdWU6IG51bWJlciA9IDA7XG4gICAgLyoqIEJ1ZmZlciB2YWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgYmFyLiBEZWZhdWx0cyB0byB6ZXJvLiAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGJ1ZmZlclZhbHVlKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9idWZmZXJWYWx1ZTsgfVxuICAgIHNldCBidWZmZXJWYWx1ZSh2OiBudW1iZXIpIHsgdGhpcy5fYnVmZmVyVmFsdWUgPSBjbGFtcCh2IHx8IDApOyB9XG4gICAgcHJpdmF0ZSBfYnVmZmVyVmFsdWU6IG51bWJlciA9IDA7XG5cbiAgICAvKiogVGhlIGlkIG9mIHRoZSBwcm9ncmVzcyBiYXIuICovXG4gICAgc2xpZGVycHJvZ3Jlc3NiYXJJZCA9IGBtYXQtc2xpZGVyLXByb2dyZXNzLWJhci0ke3NsaWRlcnByb2dyZXNzYmFySWQrK31gO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgICAgICBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIEBPcHRpb25hbCgpIGRpcjogRGlyZWN0aW9uYWxpdHksXG4gICAgICAgIEBBdHRyaWJ1dGUoJ3RhYmluZGV4JykgdGFiSW5kZXg6IHN0cmluZ1xuICAgICkge1xuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCBmb2N1c01vbml0b3IsIGNoYW5nZURldGVjdG9yUmVmLCBkaXIsIHRhYkluZGV4KTtcbiAgICAgICAgdGhpcy50YWJJbmRleCA9IHBhcnNlSW50KHRhYkluZGV4KSB8fCAwO1xuICAgIH1cblxuICAgIC8qKiBDU1Mgc3R5bGVzIGZvciB0aGUgdHJhY2sgZmlsbCBlbGVtZW50LiAqL1xuICAgIGdldCBfdHJhY2tCdWZmZXJTdHlsZXMoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdidWZmZXInKSB7XG4gICAgICAgICAgICBjb25zdCBheGlzID0gdGhpcy52ZXJ0aWNhbCA/ICdZJyA6ICdYJztcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IGB0cmFuc2xhdGUke2F4aXN9KDBweCkgc2NhbGUke2F4aXN9KCR7dGhpcy5fYnVmZmVyVmFsdWUgLyAxMDB9KWBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKiBDbGFtcHMgYSB2YWx1ZSB0byBiZSBiZXR3ZWVuIHR3byBudW1iZXJzLCBieSBkZWZhdWx0IDAgYW5kIDEwMC4gKi9cbmZ1bmN0aW9uIGNsYW1wKHY6IG51bWJlciwgbWluID0gMCwgbWF4ID0gMTAwKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2KSk7XG59XG4iXX0=