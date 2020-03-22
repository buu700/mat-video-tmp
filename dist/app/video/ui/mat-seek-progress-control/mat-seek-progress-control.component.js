var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { EventService } from '../../services/event.service';
var MatSeekProgressControlComponent = /** @class */ (function () {
    function MatSeekProgressControlComponent(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.curTimePercent = 0;
        this.bufTimePercent = 0;
        this.video = null;
        this.color = 'primary';
        this.currentTime = 0;
        this.currentTimeChanged = new EventEmitter();
        this.bufferedTime = 0;
        this.bufferedTimeChanged = new EventEmitter();
    }
    MatSeekProgressControlComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.events = [
            { element: this.video, name: 'seeking', callback: function (event) { return _this.updateCurrentTime(_this.video.currentTime); }, dispose: null },
            { element: this.video, name: 'canplaythrough', callback: function (event) { return _this.updateBufferedTime(); }, dispose: null },
            { element: this.video, name: 'timeupdate', callback: function (event) { return _this.updateCurrentTime(_this.video.currentTime); }, dispose: null },
            { element: this.video, name: 'progress', callback: function (event) { return _this.updateBufferedTime(); }, dispose: null }
        ];
        this.evt.addEvents(this.renderer, this.events);
    };
    MatSeekProgressControlComponent.prototype.ngOnDestroy = function () {
        this.evt.removeEvents(this.events);
    };
    MatSeekProgressControlComponent.prototype.seekVideo = function (value) {
        var percentage = value / 100;
        var newTime = this.video.duration * percentage;
        this.video.currentTime = newTime;
    };
    MatSeekProgressControlComponent.prototype.updateCurrentTime = function (time) {
        this.currentTime = time;
        this.curTimePercent = this.updateTime(this.currentTimeChanged, this.currentTime);
    };
    MatSeekProgressControlComponent.prototype.updateBufferedTime = function () {
        if (this.video.buffered.length > 0) {
            var largestBufferValue = 0;
            for (var i = 0; i < this.video.buffered.length; i++) {
                var cur = this.video.currentTime;
                var start = this.video.buffered.start(i);
                var end = this.video.buffered.end(i);
                if (start <= cur && end > cur && (end - start) > largestBufferValue)
                    largestBufferValue = end;
            }
            this.bufferedTime = largestBufferValue;
            this.bufTimePercent = this.updateTime(this.bufferedTimeChanged, this.bufferedTime);
        }
    };
    MatSeekProgressControlComponent.prototype.updateTime = function (emitter, time) {
        emitter.emit(time);
        return time / this.video.duration * 100;
    };
    __decorate([
        Input(),
        __metadata("design:type", HTMLVideoElement)
    ], MatSeekProgressControlComponent.prototype, "video", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MatSeekProgressControlComponent.prototype, "color", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MatSeekProgressControlComponent.prototype, "currentTime", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MatSeekProgressControlComponent.prototype, "currentTimeChanged", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MatSeekProgressControlComponent.prototype, "bufferedTime", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MatSeekProgressControlComponent.prototype, "bufferedTimeChanged", void 0);
    MatSeekProgressControlComponent = __decorate([
        Component({
            selector: 'mat-seek-progress-control',
            templateUrl: './mat-seek-progress-control.component.html',
            styleUrls: ['./mat-seek-progress-control.component.css']
        }),
        __metadata("design:paramtypes", [Renderer2,
            EventService])
    ], MatSeekProgressControlComponent);
    return MatSeekProgressControlComponent;
}());
export { MatSeekProgressControlComponent };
//# sourceMappingURL=mat-seek-progress-control.component.js.map