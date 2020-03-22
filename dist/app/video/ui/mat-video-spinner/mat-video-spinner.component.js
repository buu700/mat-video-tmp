var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Renderer2 } from '@angular/core';
import { EventService } from '../../services/event.service';
var MatVideoSpinnerComponent = /** @class */ (function () {
    function MatVideoSpinnerComponent(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.spinner = 'spin';
        this.videoBuffering = false;
        this.videoLoaded = false;
        this.events = [];
    }
    MatVideoSpinnerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.events = [
            { element: this.video, name: 'loadstart', callback: function (event) { return _this.videoLoaded = false; }, dispose: null },
            { element: this.video, name: 'loadedmetadata', callback: function (event) { return _this.videoLoaded = true; }, dispose: null },
            { element: this.video, name: 'canplay', callback: function (event) { return _this.videoBuffering = false; }, dispose: null },
            { element: this.video, name: 'waiting', callback: function (event) { return _this.videoBuffering = true; }, dispose: null },
            { element: this.video, name: 'durationchange', callback: function (event) { return _this.videoBuffering = true; }, dispose: null }
        ];
        this.video.onloadeddata = function () { return _this.videoLoaded = true; };
        this.evt.addEvents(this.renderer, this.events);
    };
    MatVideoSpinnerComponent.prototype.ngOnDestroy = function () {
        this.video.onloadeddata = null;
        this.evt.removeEvents(this.events);
    };
    __decorate([
        Input(),
        __metadata("design:type", HTMLVideoElement)
    ], MatVideoSpinnerComponent.prototype, "video", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MatVideoSpinnerComponent.prototype, "spinner", void 0);
    MatVideoSpinnerComponent = __decorate([
        Component({
            selector: 'mat-video-spinner',
            templateUrl: './mat-video-spinner.component.html',
            styleUrls: [
                './mat-video-spinner.component.scss',
                './indicators/spin.css',
                './indicators/dot.css',
                './indicators/split-ring.css',
                './indicators/hourglass.css'
            ]
        }),
        __metadata("design:paramtypes", [Renderer2,
            EventService])
    ], MatVideoSpinnerComponent);
    return MatVideoSpinnerComponent;
}());
export { MatVideoSpinnerComponent };
//# sourceMappingURL=mat-video-spinner.component.js.map