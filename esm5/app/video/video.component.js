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
            styles: [".videoplayer{font-family:Roboto,\"Helvetica Neue\",sans-serif;background-color:#000;position:relative;width:100%;height:100%}.header{color:#fff;display:flex;justify-content:center;align-items:center;position:absolute;left:0;top:0;padding:14px 0;width:100%;z-index:1;background-image:linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.65))}.video{display:block;width:100%;height:100%;z-index:0}.controls{color:#fff;position:absolute;left:0;bottom:0;width:100%;z-index:1;background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.65))}.controls .progress{height:26px}.controls .menu{display:flex;align-items:center;flex-direction:row;justify-content:space-between;height:48px}.controls .menu .left{justify-content:flex-start}.controls .menu .right{justify-content:flex-end}.visible{visibility:visible;opacity:1;transition:opacity .5s linear}.hidden{visibility:hidden;opacity:0;transition:visibility .5s,opacity .5s linear}.show-mouse{cursor:default}.hide-mouse{cursor:none}", "@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v36/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2')}::ng-deep.material-icons{font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}"]
        })
    ], MatVideoComponent);
    return MatVideoComponent;
}());
export { MatVideoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILGFBQWEsRUFDYixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sU0FBUyxFQUNULGFBQWEsRUFDYixTQUFTLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBT3hEO0lBbUVJLDJCQUNZLFFBQW1CLEVBQ25CLEdBQWlCO1FBRGpCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQWpFcEIsUUFBRyxHQUF3QyxJQUFJLENBQUM7UUFDaEQsVUFBSyxHQUFXLElBQUksQ0FBQztRQUNyQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLFFBQUcsR0FBVyxLQUFLLENBQUM7UUFDcEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUNoQyxZQUFPLEdBQVcsTUFBTSxDQUFDO1FBQ3pCLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBUTFD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QUFFO21EQUF1QjtJQUN0QjtRQUFSLEtBQUssRUFBRTtzREFBeUI7SUFDeEI7UUFBUixLQUFLLEVBQUU7eURBQTRCO0lBQzNCO1FBQVIsS0FBSyxFQUFFOzBEQUE4QjtJQUM3QjtRQUFSLEtBQUssRUFBRTsrREFBbUM7SUFDbEM7UUFBUixLQUFLLEVBQUU7a0RBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFO3VEQUEyQjtJQUMxQjtRQUFSLEtBQUssRUFBRTtvREFBaUM7SUFDaEM7UUFBUixLQUFLLEVBQUU7c0RBQTBCO0lBQ3pCO1FBQVIsS0FBSyxFQUFFO3FEQUF1QjtJQUN0QjtRQUFSLEtBQUssRUFBRTt1REFBMEI7SUFDekI7UUFBUixLQUFLLEVBQUU7c0RBQXlCO0lBQ3hCO1FBQVIsS0FBSyxFQUFFO29EQUF3QjtJQUN0QjtRQUFULE1BQU0sRUFBRTswREFBMkM7SUFJcEQ7UUFEQyxLQUFLLEVBQUU7aURBR1A7SUFFUztRQUFULE1BQU0sRUFBRTt5REFBeUM7SUE3QnpDLGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixpcUVBQXFDOztTQUV4QyxDQUFDO09BQ1csaUJBQWlCLENBaUs3QjtJQUFELHdCQUFDO0NBQUEsQUFqS0QsSUFpS0M7U0FqS1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE91dHB1dCxcbiAgICBSZW5kZXJlcjIsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJy4vaW50ZXJmYWNlcy9ldmVudC1oYW5kbGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21hdC12aWRlbycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZGVvLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi92aWRlby5jb21wb25lbnQuY3NzJywgJy4vc3R5bGVzL2ljb25zLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdFZpZGVvQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAgIEBWaWV3Q2hpbGQoJ3BsYXllcicpIHByaXZhdGUgcGxheWVyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3ZpZGVvJykgcHJpdmF0ZSB2aWRlbzogRWxlbWVudFJlZjtcblxuICAgIEBJbnB1dCgpIHNyYzogc3RyaW5nfE1lZGlhU3RyZWFtfE1lZGlhU291cmNlfEJsb2IgPSBudWxsO1xuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSBudWxsO1xuICAgIEBJbnB1dCgpIGF1dG9wbGF5OiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgcHJlbG9hZDogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgbG9vcDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHF1YWxpdHk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGZ1bGxzY3JlZW46IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHBsYXlzaW5saW5lOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgc2hvd0ZyYW1lQnlGcmFtZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGZwczogbnVtYmVyID0gMjkuOTc7XG4gICAgQElucHV0KCkgZG93bmxvYWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuICAgIEBJbnB1dCgpIHNwaW5uZXI6IHN0cmluZyA9ICdzcGluJztcbiAgICBASW5wdXQoKSBwb3N0ZXI6IHN0cmluZyA9IG51bGw7XG4gICAgQElucHV0KCkga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIG92ZXJsYXk6IGJvb2xlYW4gPSBudWxsO1xuICAgIEBJbnB1dCgpIG11dGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgQE91dHB1dCgpIG11dGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cbiAgICBASW5wdXQoKVxuICAgIGdldCB0aW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWaWRlb1RhZygpLmN1cnJlbnRUaW1lO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKSB0aW1lQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gICAgc2V0IHRpbWUodmFsOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQgPSB0aGlzLmdldFZpZGVvVGFnKCk7XG4gICAgICAgIGlmICh2aWRlbyAmJiB2YWwpIHtcbiAgICAgICAgICAgIGlmICh2YWwgPiB2aWRlby5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIHZhbCA9IHZpZGVvLmR1cmF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbCA8IDApIHtcbiAgICAgICAgICAgICAgICB2YWwgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbCAhPT0gdmlkZW8uY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICB2aWRlby5jdXJyZW50VGltZSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RUaW1lICE9PSB2aWRlby5jdXJyZW50VGltZSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy50aW1lQ2hhbmdlLmVtaXQodmlkZW8uY3VycmVudFRpbWUpLCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdmlkZW8uY3VycmVudFRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBpc0Z1bGxzY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHZpZGVvV2lkdGg6IG51bWJlcjtcbiAgICB2aWRlb0hlaWdodDogbnVtYmVyO1xuICAgIGxhc3RUaW1lOiBudW1iZXI7XG5cbiAgICB2aWRlb0xvYWRlZCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBpc01vdXNlTW92aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc01vdXNlTW92aW5nVGltZXI6IE5vZGVKUy5UaW1lcjtcbiAgICBwcml2YXRlIGlzTW91c2VNb3ZpbmdUaW1lb3V0OiBudW1iZXIgPSAyMDAwO1xuXG4gICAgcHJpdmF0ZSBldmVudHM6IEV2ZW50SGFuZGxlcltdO1xuXG4gICAgcHJpdmF0ZSBzcmNPYmplY3RVUkw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgZXZ0OiBFdmVudFNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtcbiAgICAgICAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LCBuYW1lOiAnbG9hZHN0YXJ0JywgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMudmlkZW9Mb2FkZWQgPSBmYWxzZSwgZGlzcG9zZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQsIG5hbWU6ICdsb2FkZWRtZXRhZGF0YScsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLmV2TG9hZGVkTWV0YWRhdGEoZXZlbnQpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICAgICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCwgbmFtZTogJ2Vycm9yJywgY2FsbGJhY2s6IGV2ZW50ID0+IGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBWaWRlbyBFcnJvcicsIGV2ZW50KSwgZGlzcG9zZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQsIG5hbWU6ICdjb250ZXh0bWVudScsIGNhbGxiYWNrOiBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICAgICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCwgbmFtZTogJ3RpbWV1cGRhdGUnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy5ldlRpbWVVcGRhdGUoZXZlbnQpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICAgICAgICB7IGVsZW1lbnQ6IHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQsIG5hbWU6ICdtb3VzZW1vdmUnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy5ldk1vdXNlTW92ZShldmVudCksIGRpc3Bvc2U6IG51bGwgfVxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5vbmxvYWRlZGRhdGEgPSAoKSA9PiB0aGlzLnZpZGVvTG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmV2dC5hZGRFdmVudHModGhpcy5yZW5kZXJlciwgdGhpcy5ldmVudHMpO1xuICAgICAgICB0aGlzLnNldFZpZGVvU3JjKHRoaXMuc3JjKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzLnNyYykge1xuICAgICAgICAgICAgdGhpcy5zZXRWaWRlb1NyYyh0aGlzLnNyYyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50Lm9ubG9hZGVkZGF0YSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5ldnQucmVtb3ZlRXZlbnRzKHRoaXMuZXZlbnRzKTtcbiAgICAgICAgdGhpcy5zZXRWaWRlb1NyYyhudWxsKTtcbiAgICB9XG5cbiAgICBsb2FkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy52aWRlbyAmJiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQpXG4gICAgICAgICAgICB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQubG9hZCgpO1xuICAgIH1cblxuICAgIGdldFZpZGVvVGFnKCk6IEhUTUxWaWRlb0VsZW1lbnQgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlkZW8gJiYgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50ID8gdGhpcy52aWRlby5uYXRpdmVFbGVtZW50IGFzIEhUTUxWaWRlb0VsZW1lbnQgOiBudWxsO1xuICAgIH1cblxuICAgIGV2TG9hZGVkTWV0YWRhdGEoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZGVvV2lkdGggPSB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQudmlkZW9XaWR0aDtcbiAgICAgICAgdGhpcy52aWRlb0hlaWdodCA9IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICAgICAgdGhpcy52aWRlb0xvYWRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZXZNb3VzZU1vdmUoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzTW91c2VNb3ZpbmcgPSB0cnVlO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5pc01vdXNlTW92aW5nVGltZXIpO1xuICAgICAgICB0aGlzLmlzTW91c2VNb3ZpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc01vdXNlTW92aW5nID0gZmFsc2U7XG4gICAgICAgIH0sIHRoaXMuaXNNb3VzZU1vdmluZ1RpbWVvdXQpO1xuICAgIH1cblxuICAgIGV2VGltZVVwZGF0ZShldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMudGltZSA9IHRoaXMuZ2V0VmlkZW9UYWcoKS5jdXJyZW50VGltZTtcbiAgICB9XG5cbiAgICBnZXRPdmVybGF5Q2xhc3MoYWN0aXZlQ2xhc3M6IHN0cmluZywgaW5hY3RpdmVDbGFzczogc3RyaW5nKTogYW55IHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuICghdGhpcy5wbGF5aW5nIHx8IHRoaXMuaXNNb3VzZU1vdmluZykgPyBhY3RpdmVDbGFzcyA6IGluYWN0aXZlQ2xhc3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vdmVybGF5ID8gYWN0aXZlQ2xhc3MgOiBpbmFjdGl2ZUNsYXNzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRWaWRlb1NyYyhzcmM6IHN0cmluZ3xNZWRpYVN0cmVhbXxNZWRpYVNvdXJjZXxCbG9iKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5zcmMgPSBudWxsO1xuICAgICAgICBpZiAoJ3NyY09iamVjdCcgaW4gSFRNTFZpZGVvRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3JjT2JqZWN0VVJMKSB7XG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuc3JjT2JqZWN0VVJMKTtcbiAgICAgICAgICAgIHRoaXMuc3JjT2JqZWN0VVJMID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHNyYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5zcmMgPSBzcmM7XG4gICAgICAgIH0gZWxzZSBpZiAoJ3NyY09iamVjdCcgaW4gSFRNTFZpZGVvRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5zcmNPYmplY3QgPSBzcmM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNyY09iamVjdFVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc3JjKTtcbiAgICAgICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLnNyY09iamVjdFVSTDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19