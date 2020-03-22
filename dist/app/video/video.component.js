var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
import { EventService } from './services/event.service';
var MatVideoComponent = /** @class */ (function () {
    function MatVideoComponent(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.src = null;
        this.title = null;
        this.autoplay = false;
        this.preload = true;
        this.loop = false;
        this.quality = true;
        this.fullscreen = true;
        this.playsinline = false;
        this.showFrameByFrame = false;
        this.fps = 29.97;
        this.download = false;
        this.color = 'primary';
        this.spinner = 'spin';
        this.poster = null;
        this.keyboard = true;
        this.overlay = null;
        this.muted = false;
        this.mutedChange = new EventEmitter();
        this.timeChange = new EventEmitter();
        this.playing = false;
        this.isFullscreen = false;
        this.videoLoaded = false;
        this.isMouseMoving = false;
        this.isMouseMovingTimeout = 2000;
    }
    Object.defineProperty(MatVideoComponent.prototype, "time", {
        get: function () {
            return this.getVideoTag().currentTime;
        },
        set: function (val) {
            var _this = this;
            var video = this.getVideoTag();
            if (video && val) {
                if (val > video.duration) {
                    val = video.duration;
                }
                if (val < 0) {
                    val = 0;
                }
                if (val !== video.currentTime) {
                    video.currentTime = val;
                }
                if (this.lastTime !== video.currentTime) {
                    setTimeout(function () { return _this.timeChange.emit(video.currentTime); }, 0);
                    this.lastTime = video.currentTime;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    MatVideoComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.events = [
            { element: this.video.nativeElement, name: 'loadstart', callback: function (event) { return _this.videoLoaded = false; }, dispose: null },
            { element: this.video.nativeElement, name: 'loadedmetadata', callback: function (event) { return _this.evLoadedMetadata(event); }, dispose: null },
            { element: this.video.nativeElement, name: 'error', callback: function (event) { return console.error('Unhandled Video Error', event); }, dispose: null },
            { element: this.video.nativeElement, name: 'contextmenu', callback: function (event) { return event.preventDefault(); }, dispose: null },
            { element: this.video.nativeElement, name: 'timeupdate', callback: function (event) { return _this.evTimeUpdate(event); }, dispose: null },
            { element: this.player.nativeElement, name: 'mousemove', callback: function (event) { return _this.evMouseMove(event); }, dispose: null }
        ];
        this.video.nativeElement.onloadeddata = function () { return _this.videoLoaded = true; };
        this.evt.addEvents(this.renderer, this.events);
        this.setVideoSrc(this.src);
    };
    MatVideoComponent.prototype.ngOnChanges = function (changes) {
        if (changes.src) {
            this.setVideoSrc(this.src);
        }
    };
    MatVideoComponent.prototype.ngOnDestroy = function () {
        this.video.nativeElement.onloadeddata = null;
        this.evt.removeEvents(this.events);
        this.setVideoSrc(null);
    };
    MatVideoComponent.prototype.load = function () {
        if (this.video && this.video.nativeElement)
            this.video.nativeElement.load();
    };
    MatVideoComponent.prototype.getVideoTag = function () {
        return this.video && this.video.nativeElement ? this.video.nativeElement : null;
    };
    MatVideoComponent.prototype.evLoadedMetadata = function (event) {
        this.videoWidth = this.video.nativeElement.videoWidth;
        this.videoHeight = this.video.nativeElement.videoHeight;
        this.videoLoaded = true;
    };
    MatVideoComponent.prototype.evMouseMove = function (event) {
        var _this = this;
        this.isMouseMoving = true;
        clearTimeout(this.isMouseMovingTimer);
        this.isMouseMovingTimer = setTimeout(function () {
            _this.isMouseMoving = false;
        }, this.isMouseMovingTimeout);
    };
    MatVideoComponent.prototype.evTimeUpdate = function (event) {
        this.time = this.getVideoTag().currentTime;
    };
    MatVideoComponent.prototype.getOverlayClass = function (activeClass, inactiveClass) {
        if (this.overlay === null) {
            return (!this.playing || this.isMouseMoving) ? activeClass : inactiveClass;
        }
        else {
            return this.overlay ? activeClass : inactiveClass;
        }
    };
    MatVideoComponent.prototype.setVideoSrc = function (src) {
        this.video.nativeElement.src = null;
        if ('srcObject' in HTMLVideoElement.prototype) {
            this.video.nativeElement.srcObject = null;
        }
        if (this.srcObjectURL) {
            URL.revokeObjectURL(this.srcObjectURL);
            this.srcObjectURL = null;
        }
        if (!src) {
            return;
        }
        if (typeof src === 'string') {
            this.video.nativeElement.src = src;
        }
        else if ('srcObject' in HTMLVideoElement.prototype) {
            this.video.nativeElement.srcObject = src;
        }
        else {
            this.srcObjectURL = URL.createObjectURL(src);
            this.video.nativeElement.src = this.srcObjectURL;
        }
    };
    __decorate([
        ViewChild('player'),
        __metadata("design:type", ElementRef)
    ], MatVideoComponent.prototype, "player", void 0);
    __decorate([
        ViewChild('video'),
        __metadata("design:type", ElementRef)
    ], MatVideoComponent.prototype, "video", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MatVideoComponent.prototype, "src", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MatVideoComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatVideoComponent.prototype, "autoplay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatVideoComponent.prototype, "preload", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatVideoComponent.prototype, "loop", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatVideoComponent.prototype, "quality", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatVideoComponent.prototype, "fullscreen", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatVideoComponent.prototype, "playsinline", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatVideoComponent.prototype, "showFrameByFrame", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MatVideoComponent.prototype, "fps", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatVideoComponent.prototype, "download", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MatVideoComponent.prototype, "color", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MatVideoComponent.prototype, "spinner", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MatVideoComponent.prototype, "poster", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatVideoComponent.prototype, "keyboard", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatVideoComponent.prototype, "overlay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatVideoComponent.prototype, "muted", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MatVideoComponent.prototype, "mutedChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], MatVideoComponent.prototype, "time", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MatVideoComponent.prototype, "timeChange", void 0);
    MatVideoComponent = __decorate([
        Component({
            selector: 'mat-video',
            templateUrl: './video.component.html',
            styleUrls: ['./video.component.css', './styles/icons.css']
        }),
        __metadata("design:paramtypes", [Renderer2,
            EventService])
    ], MatVideoComponent);
    return MatVideoComponent;
}());
export { MatVideoComponent };
//# sourceMappingURL=video.component.js.map