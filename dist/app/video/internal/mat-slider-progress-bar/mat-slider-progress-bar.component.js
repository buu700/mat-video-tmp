var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, Optional, Attribute } from '@angular/core';
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
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MatSliderProgressBarComponent.prototype, "mode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MatSliderProgressBarComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], MatSliderProgressBarComponent.prototype, "bufferValue", null);
    MatSliderProgressBarComponent = __decorate([
        Component({
            selector: 'mat-slider-progress-bar',
            templateUrl: './mat-slider-progress-bar.component.html',
            styleUrls: ['./mat-slider-progress-bar.component.css'],
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
        }),
        __param(3, Optional()),
        __param(4, Attribute('tabindex')),
        __metadata("design:paramtypes", [ElementRef,
            FocusMonitor,
            ChangeDetectorRef,
            Directionality, String])
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
//# sourceMappingURL=mat-slider-progress-bar.component.js.map