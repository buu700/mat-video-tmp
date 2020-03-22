var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { EventService } from '../../services/event.service';
var MatPlayButtonComponent = /** @class */ (function () {
    function MatPlayButtonComponent(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.play = false;
        this.playChanged = new EventEmitter();
        this.keyboard = true;
    }
    MatPlayButtonComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.events = [
            { element: this.video, name: 'play', callback: function (event) { return _this.setVideoPlayback(true); }, dispose: null },
            { element: this.video, name: 'pause', callback: function (event) { return _this.setVideoPlayback(false); }, dispose: null },
            { element: this.video, name: 'durationchange', callback: function (event) { return _this.setVideoPlayback(false); }, dispose: null },
            { element: this.video, name: 'ended', callback: function (event) { return _this.setVideoPlayback(false); }, dispose: null },
            { element: this.video, name: 'click', callback: function (event) { return _this.toggleVideoPlayback(); }, dispose: null }
        ];
        this.evt.addEvents(this.renderer, this.events);
    };
    MatPlayButtonComponent.prototype.ngOnDestroy = function () {
        this.evt.removeEvents(this.events);
    };
    MatPlayButtonComponent.prototype.setVideoPlayback = function (value) {
        if (this.play !== value)
            this.toggleVideoPlayback();
    };
    MatPlayButtonComponent.prototype.toggleVideoPlayback = function () {
        this.play = !this.play;
        this.updateVideoPlayback();
    };
    MatPlayButtonComponent.prototype.updateVideoPlayback = function () {
        this.play ? this.video.play() : this.video.pause();
        this.playChanged.emit(this.play);
    };
    MatPlayButtonComponent.prototype.onPlayKey = function (event) {
        if (this.keyboard) {
            this.toggleVideoPlayback();
            event.preventDefault();
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", HTMLVideoElement)
    ], MatPlayButtonComponent.prototype, "video", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatPlayButtonComponent.prototype, "play", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MatPlayButtonComponent.prototype, "playChanged", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatPlayButtonComponent.prototype, "keyboard", void 0);
    __decorate([
        HostListener('document:keyup.space', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MatPlayButtonComponent.prototype, "onPlayKey", null);
    MatPlayButtonComponent = __decorate([
        Component({
            selector: 'mat-play-button',
            templateUrl: './mat-play-button.component.html',
            styleUrls: ['./mat-play-button.component.css']
        }),
        __metadata("design:paramtypes", [Renderer2,
            EventService])
    ], MatPlayButtonComponent);
    return MatPlayButtonComponent;
}());
export { MatPlayButtonComponent };
//# sourceMappingURL=mat-play-button.component.js.map