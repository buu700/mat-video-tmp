import * as tslib_1 from "tslib";
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, Renderer2, SimpleChanges, ViewChild, } from '@angular/core';
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
        if (this.srcObjectURL) {
            URL.revokeObjectURL(this.srcObjectURL);
            this.srcObjectURL = null;
        }
        if (!this.video || !this.video.nativeElement) {
            return;
        }
        if (!src) {
            this.video.nativeElement.src = null;
            if ('srcObject' in HTMLVideoElement.prototype) {
                this.video.nativeElement.srcObject = new MediaStream();
            }
        }
        else if (typeof src === 'string') {
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
    MatVideoComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: EventService }
    ]; };
    tslib_1.__decorate([
        ViewChild('player')
    ], MatVideoComponent.prototype, "player", void 0);
    tslib_1.__decorate([
        ViewChild('video')
    ], MatVideoComponent.prototype, "video", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "src", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "autoplay", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "preload", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "loop", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "quality", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "fullscreen", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "playsinline", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "showFrameByFrame", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "fps", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "download", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "spinner", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "poster", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "keyboard", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "overlay", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "muted", void 0);
    tslib_1.__decorate([
        Output()
    ], MatVideoComponent.prototype, "mutedChange", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoComponent.prototype, "time", null);
    tslib_1.__decorate([
        Output()
    ], MatVideoComponent.prototype, "timeChange", void 0);
    MatVideoComponent = tslib_1.__decorate([
        Component({
            selector: 'mat-video',
            template: "<div #player class=\"videoplayer\" [ngClass]=\"getOverlayClass('show-mouse', 'hide-mouse')\">\n    <div class=\"header\" *ngIf=\"title\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\n        {{title}}\n    </div>\n\n    <video #video class=\"video\" [attr.autoplay]=\"autoplay ? true : null\"\n        [preload]=\"preload ? 'auto' : 'metadata'\" [attr.poster]=\"poster ? poster : null\"\n        [attr.loop]=\"loop ? loop : null\" [attr.playsinline]=\"playsinline ? true : null\">\n        <ng-content select=\"source\"></ng-content>\n        <ng-content select=\"track\"></ng-content>\n        This browser does not support HTML5 video.\n    </video>\n\n    <div class=\"controls\" *ngIf=\"videoLoaded\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\n        <div class=\"progress\">\n            <mat-seek-progress-control [color]=\"color\" [video]=\"video\"></mat-seek-progress-control>\n        </div>\n\n        <div class=\"menu\">\n            <div class=\"left\">\n                <mat-play-button (playChanged)=\"playing = $event\" [video]=\"video\" [keyboard]=\"keyboard\">\n                </mat-play-button>\n\n                <mat-frame-by-frame-control *ngIf=\"showFrameByFrame\" [video]=\"video\" [fps]=\"fps\"></mat-frame-by-frame-control>\n\n                <mat-volume-control [muted]=\"muted\" (mutedChanged)=\"muted = $event; mutedChange.emit(muted);\"\n                    [color]=\"color\" [video]=\"video\" [keyboard]=\"keyboard\">\n                </mat-volume-control>\n\n                <mat-time-control [video]=\"video\"></mat-time-control>\n            </div>\n\n            <div class=\"right\">\n                <mat-quality-control *ngIf=\"quality\" [video]=\"video\"></mat-quality-control>\n\n                <mat-download-button *ngIf=\"download\" [title]=\"title\" [video]=\"video\"></mat-download-button>\n\n                <mat-fullscreen-button *ngIf=\"fullscreen\" (fullscreenChanged)=\"isFullscreen = $event\" [player]=\"player\"\n                    [keyboard]=\"keyboard\"></mat-fullscreen-button>\n            </div>\n        </div>\n    </div>\n\n    <mat-video-spinner [spinner]=\"spinner\" [video]=\"video\"></mat-video-spinner>\n</div>\n",
            styles: [".videoplayer{font-family:Roboto,\"Helvetica Neue\",sans-serif;background-color:#000;position:relative;width:100%;height:100%}.header{color:#fff;display:flex;justify-content:center;align-items:center;position:absolute;left:0;top:0;padding:14px 0;width:100%;z-index:1;background-image:linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.65))}.video{display:block;width:100%;height:100%;z-index:0}.controls{color:#fff;position:absolute;left:0;bottom:0;width:100%;z-index:1;background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.65))}.controls .progress{height:26px}.controls .menu{display:flex;align-items:center;flex-direction:row;justify-content:space-between;height:48px}.controls .menu .left{justify-content:flex-start}.controls .menu .right{justify-content:flex-end}.visible{visibility:visible;opacity:1;transition:opacity .5s linear}.hidden{visibility:hidden;opacity:0;transition:visibility .5s,opacity .5s linear}.show-mouse{cursor:default}.hide-mouse{cursor:none}"]
        })
    ], MatVideoComponent);
    return MatVideoComponent;
}());
export { MatVideoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILGFBQWEsRUFDYixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sU0FBUyxFQUNULGFBQWEsRUFDYixTQUFTLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBT3hEO0lBbUVJLDJCQUNZLFFBQW1CLEVBQ25CLEdBQWlCO1FBRGpCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQWpFcEIsUUFBRyxHQUF3QyxJQUFJLENBQUM7UUFDaEQsVUFBSyxHQUFXLElBQUksQ0FBQztRQUNyQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLFFBQUcsR0FBVyxLQUFLLENBQUM7UUFDcEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUNoQyxZQUFPLEdBQVcsTUFBTSxDQUFDO1FBQ3pCLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBUTFD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SyxFQUFFO29EQUFzQjtJQUNyQjtRQUFSLEtBQUssRUFBRTt1REFBMkI7SUFDMUI7UUFBUixLQUFLLEVBQUU7c0RBQXlCO0lBQ3hCO1FBQVIsS0FBSyxFQUFFO21EQUF1QjtJQUN0QjtRQUFSLEtBQUssRUFBRTtzREFBeUI7SUFDeEI7UUFBUixLQUFLLEVBQUU7eURBQTRCO0lBQzNCO1FBQVIsS0FBSyxFQUFFOzBEQUE4QjtJQUM3QjtRQUFSLEtBQUssRUFBRTsrREFBbUM7SUFDbEM7UUFBUixLQUFLLEVBQUU7a0RBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFO3VEQUEyQjtJQUMxQjtRQUFSLEtBQUssRUFBRTtvREFBaUM7SUFDaEM7UUFBUixLQUFLLEVBQUU7c0RBQTBCO0lBQ3pCO1FBQVIsS0FBSyxFQUFFO3FEQUF1QjtJQUN0QjtRQUFSLEtBQUssRUFBRTt1REFBMEI7SUFDekI7UUFBUixLQUFLLEVBQUU7c0RBQXlCO0lBQ3hCO1FBQVIsS0FBSyxFQUFFO29EQUF3QjtJQUN0QjtRQUFULE1BQU0sRUFBRTswREFBMkM7SUFJcEQ7UUFEQyxLQUFLLEVBQUU7aURBR1A7SUFFUztRQUFULE1BQU0sRUFBRTt5REFBeUM7SUE3QnpDLGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixpcUVBQXFDOztTQUV4QyxDQUFDO09BQ1csaUJBQWlCLENBaUs3QjtJQUFELHdCQUFDO0NBQUEsQUFqS0QsSUFpS0M7U0FqS1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE91dHB1dCxcbiAgICBSZW5kZXJlcjIsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJy4vaW50ZXJmYWNlcy9ldmVudC1oYW5kbGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21hdC12aWRlbycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZGVvLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi92aWRlby5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0VmlkZW9Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgQFZpZXdDaGlsZCgncGxheWVyJykgcHJpdmF0ZSBwbGF5ZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgndmlkZW8nKSBwcml2YXRlIHZpZGVvOiBFbGVtZW50UmVmO1xuXG4gICAgQElucHV0KCkgc3JjOiBzdHJpbmd8TWVkaWFTdHJlYW18TWVkaWFTb3VyY2V8QmxvYiA9IG51bGw7XG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9IG51bGw7XG4gICAgQElucHV0KCkgYXV0b3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBwcmVsb2FkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBsb29wOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgcXVhbGl0eTogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgZnVsbHNjcmVlbjogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgcGxheXNpbmxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzaG93RnJhbWVCeUZyYW1lOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZnBzOiBudW1iZXIgPSAyOS45NztcbiAgICBASW5wdXQoKSBkb3dubG9hZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gICAgQElucHV0KCkgc3Bpbm5lcjogc3RyaW5nID0gJ3NwaW4nO1xuICAgIEBJbnB1dCgpIHBvc3Rlcjogc3RyaW5nID0gbnVsbDtcbiAgICBASW5wdXQoKSBrZXlib2FyZDogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgb3ZlcmxheTogYm9vbGVhbiA9IG51bGw7XG4gICAgQElucHV0KCkgbXV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAT3V0cHV0KCkgbXV0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFZpZGVvVGFnKCkuY3VycmVudFRpbWU7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpIHRpbWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgICBzZXQgdGltZSh2YWw6IG51bWJlcikge1xuICAgICAgICBjb25zdCB2aWRlbzogSFRNTFZpZGVvRWxlbWVudCA9IHRoaXMuZ2V0VmlkZW9UYWcoKTtcbiAgICAgICAgaWYgKHZpZGVvICYmIHZhbCkge1xuICAgICAgICAgICAgaWYgKHZhbCA+IHZpZGVvLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gdmlkZW8uZHVyYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsIDwgMCkge1xuICAgICAgICAgICAgICAgIHZhbCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsICE9PSB2aWRlby5jdXJyZW50VGltZSkge1xuICAgICAgICAgICAgICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdFRpbWUgIT09IHZpZGVvLmN1cnJlbnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRpbWVDaGFuZ2UuZW1pdCh2aWRlby5jdXJyZW50VGltZSksIDApO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB2aWRlby5jdXJyZW50VGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGlzRnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgdmlkZW9XaWR0aDogbnVtYmVyO1xuICAgIHZpZGVvSGVpZ2h0OiBudW1iZXI7XG4gICAgbGFzdFRpbWU6IG51bWJlcjtcblxuICAgIHZpZGVvTG9hZGVkID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGlzTW91c2VNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGlzTW91c2VNb3ZpbmdUaW1lcjogTm9kZUpTLlRpbWVyO1xuICAgIHByaXZhdGUgaXNNb3VzZU1vdmluZ1RpbWVvdXQ6IG51bWJlciA9IDIwMDA7XG5cbiAgICBwcml2YXRlIGV2ZW50czogRXZlbnRIYW5kbGVyW107XG5cbiAgICBwcml2YXRlIHNyY09iamVjdFVSTDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBldnQ6IEV2ZW50U2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gW1xuICAgICAgICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQsIG5hbWU6ICdsb2Fkc3RhcnQnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy52aWRlb0xvYWRlZCA9IGZhbHNlLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICAgICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCwgbmFtZTogJ2xvYWRlZG1ldGFkYXRhJywgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMuZXZMb2FkZWRNZXRhZGF0YShldmVudCksIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgICAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LCBuYW1lOiAnZXJyb3InLCBjYWxsYmFjazogZXZlbnQgPT4gY29uc29sZS5lcnJvcignVW5oYW5kbGVkIFZpZGVvIEVycm9yJywgZXZlbnQpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICAgICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCwgbmFtZTogJ2NvbnRleHRtZW51JywgY2FsbGJhY2s6IGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCksIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgICAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LCBuYW1lOiAndGltZXVwZGF0ZScsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLmV2VGltZVVwZGF0ZShldmVudCksIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgICAgICAgIHsgZWxlbWVudDogdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudCwgbmFtZTogJ21vdXNlbW92ZScsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLmV2TW91c2VNb3ZlKGV2ZW50KSwgZGlzcG9zZTogbnVsbCB9XG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50Lm9ubG9hZGVkZGF0YSA9ICgpID0+IHRoaXMudmlkZW9Mb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZXZ0LmFkZEV2ZW50cyh0aGlzLnJlbmRlcmVyLCB0aGlzLmV2ZW50cyk7XG4gICAgICAgIHRoaXMuc2V0VmlkZW9TcmModGhpcy5zcmMpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuc3JjKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZpZGVvU3JjKHRoaXMuc3JjKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQub25sb2FkZWRkYXRhID0gbnVsbDtcblxuICAgICAgICB0aGlzLmV2dC5yZW1vdmVFdmVudHModGhpcy5ldmVudHMpO1xuICAgICAgICB0aGlzLnNldFZpZGVvU3JjKG51bGwpO1xuICAgIH1cblxuICAgIGxvYWQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnZpZGVvICYmIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudClcbiAgICAgICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5sb2FkKCk7XG4gICAgfVxuXG4gICAgZ2V0VmlkZW9UYWcoKTogSFRNTFZpZGVvRWxlbWVudCB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy52aWRlbyAmJiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTFZpZGVvRWxlbWVudCA6IG51bGw7XG4gICAgfVxuXG4gICAgZXZMb2FkZWRNZXRhZGF0YShldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlkZW9XaWR0aCA9IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC52aWRlb1dpZHRoO1xuICAgICAgICB0aGlzLnZpZGVvSGVpZ2h0ID0gdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgICAgICB0aGlzLnZpZGVvTG9hZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBldk1vdXNlTW92ZShldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNNb3VzZU1vdmluZyA9IHRydWU7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmlzTW91c2VNb3ZpbmdUaW1lcik7XG4gICAgICAgIHRoaXMuaXNNb3VzZU1vdmluZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzTW91c2VNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgfSwgdGhpcy5pc01vdXNlTW92aW5nVGltZW91dCk7XG4gICAgfVxuXG4gICAgZXZUaW1lVXBkYXRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW1lID0gdGhpcy5nZXRWaWRlb1RhZygpLmN1cnJlbnRUaW1lO1xuICAgIH1cblxuICAgIGdldE92ZXJsYXlDbGFzcyhhY3RpdmVDbGFzczogc3RyaW5nLCBpbmFjdGl2ZUNsYXNzOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gKCF0aGlzLnBsYXlpbmcgfHwgdGhpcy5pc01vdXNlTW92aW5nKSA/IGFjdGl2ZUNsYXNzIDogaW5hY3RpdmVDbGFzcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkgPyBhY3RpdmVDbGFzcyA6IGluYWN0aXZlQ2xhc3M7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFZpZGVvU3JjKHNyYzogc3RyaW5nfE1lZGlhU3RyZWFtfE1lZGlhU291cmNlfEJsb2IpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3JjT2JqZWN0VVJMKSB7XG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuc3JjT2JqZWN0VVJMKTtcbiAgICAgICAgICAgIHRoaXMuc3JjT2JqZWN0VVJMID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy52aWRlbyB8fCAhdGhpcy52aWRlby5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LnNyYyA9IG51bGw7XG4gICAgICAgICAgICBpZiAoJ3NyY09iamVjdCcgaW4gSFRNTFZpZGVvRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQuc3JjT2JqZWN0ID0gbmV3IE1lZGlhU3RyZWFtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNyYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5zcmMgPSBzcmM7XG4gICAgICAgIH0gZWxzZSBpZiAoJ3NyY09iamVjdCcgaW4gSFRNTFZpZGVvRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5zcmNPYmplY3QgPSBzcmM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNyY09iamVjdFVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc3JjKTtcbiAgICAgICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLnNyY09iamVjdFVSTDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19