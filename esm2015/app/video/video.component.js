import * as tslib_1 from "tslib";
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, Renderer2, SimpleChanges, ViewChild, } from '@angular/core';
import { EventService } from './services/event.service';
let MatVideoComponent = class MatVideoComponent {
    constructor(renderer, evt) {
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
    get time() {
        return this.getVideoTag().currentTime;
    }
    set time(val) {
        const video = this.getVideoTag();
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
                setTimeout(() => this.timeChange.emit(video.currentTime), 0);
                this.lastTime = video.currentTime;
            }
        }
    }
    ngAfterViewInit() {
        this.events = [
            { element: this.video.nativeElement, name: 'loadstart', callback: event => this.videoLoaded = false, dispose: null },
            { element: this.video.nativeElement, name: 'loadedmetadata', callback: event => this.evLoadedMetadata(event), dispose: null },
            { element: this.video.nativeElement, name: 'error', callback: event => console.error('Unhandled Video Error', event), dispose: null },
            { element: this.video.nativeElement, name: 'contextmenu', callback: event => event.preventDefault(), dispose: null },
            { element: this.video.nativeElement, name: 'timeupdate', callback: event => this.evTimeUpdate(event), dispose: null },
            { element: this.player.nativeElement, name: 'mousemove', callback: event => this.evMouseMove(event), dispose: null }
        ];
        this.video.nativeElement.onloadeddata = () => this.videoLoaded = true;
        this.evt.addEvents(this.renderer, this.events);
        this.setVideoSrc(this.src);
    }
    ngOnChanges(changes) {
        if (changes.src) {
            this.setVideoSrc(this.src);
        }
    }
    ngOnDestroy() {
        this.video.nativeElement.onloadeddata = null;
        this.evt.removeEvents(this.events);
        this.setVideoSrc(null);
    }
    load() {
        if (this.video && this.video.nativeElement)
            this.video.nativeElement.load();
    }
    getVideoTag() {
        return this.video && this.video.nativeElement ? this.video.nativeElement : null;
    }
    evLoadedMetadata(event) {
        this.videoWidth = this.video.nativeElement.videoWidth;
        this.videoHeight = this.video.nativeElement.videoHeight;
        this.videoLoaded = true;
    }
    evMouseMove(event) {
        this.isMouseMoving = true;
        clearTimeout(this.isMouseMovingTimer);
        this.isMouseMovingTimer = setTimeout(() => {
            this.isMouseMoving = false;
        }, this.isMouseMovingTimeout);
    }
    evTimeUpdate(event) {
        this.time = this.getVideoTag().currentTime;
    }
    getOverlayClass(activeClass, inactiveClass) {
        if (this.overlay === null) {
            return (!this.playing || this.isMouseMoving) ? activeClass : inactiveClass;
        }
        else {
            return this.overlay ? activeClass : inactiveClass;
        }
    }
    setVideoSrc(src) {
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
    }
};
MatVideoComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: EventService }
];
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
export { MatVideoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILGFBQWEsRUFDYixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sU0FBUyxFQUNULGFBQWEsRUFDYixTQUFTLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBT3hELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBbUUxQixZQUNZLFFBQW1CLEVBQ25CLEdBQWlCO1FBRGpCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQWpFcEIsUUFBRyxHQUF3QyxJQUFJLENBQUM7UUFDaEQsVUFBSyxHQUFXLElBQUksQ0FBQztRQUNyQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLFFBQUcsR0FBVyxLQUFLLENBQUM7UUFDcEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUNoQyxZQUFPLEdBQVcsTUFBTSxDQUFDO1FBQ3pCLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdEIsZ0JBQVcs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QTRCO0FBQzNCO0lBQVIsS0FBSyxFQUFFO3NEQUE4QjtBQUM3QjtJQUFSLEtBQUssRUFBRTsyREFBbUM7QUFDbEM7SUFBUixLQUFLLEVBQUU7OENBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFO21EQUEyQjtBQUMxQjtJQUFSLEtBQUssRUFBRTtnREFBaUM7QUFDaEM7SUFBUixLQUFLLEVBQUU7a0RBQTBCO0FBQ3pCO0lBQVIsS0FBSyxFQUFFO2lEQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTttREFBMEI7QUFDekI7SUFBUixLQUFLLEVBQUU7a0RBQXlCO0FBQ3hCO0lBQVIsS0FBSyxFQUFFO2dEQUF3QjtBQUN0QjtJQUFULE1BQU0sRUFBRTtzREFBMkM7QUFJcEQ7SUFEQyxLQUFLLEVBQUU7NkNBR1A7QUFFUztJQUFULE1BQU0sRUFBRTtxREFBeUM7QUE3QnpDLGlCQUFpQjtJQUw3QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixpcUVBQXFDOztLQUV4QyxDQUFDO0dBQ1csaUJBQWlCLENBaUs3QjtTQWpLWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT3V0cHV0LFxuICAgIFJlbmRlcmVyMixcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2V2ZW50LWhhbmRsZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZXZlbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWF0LXZpZGVvJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlkZW8uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3ZpZGVvLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRWaWRlb0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBAVmlld0NoaWxkKCdwbGF5ZXInKSBwcml2YXRlIHBsYXllcjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCd2aWRlbycpIHByaXZhdGUgdmlkZW86IEVsZW1lbnRSZWY7XG5cbiAgICBASW5wdXQoKSBzcmM6IHN0cmluZ3xNZWRpYVN0cmVhbXxNZWRpYVNvdXJjZXxCbG9iID0gbnVsbDtcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gbnVsbDtcbiAgICBASW5wdXQoKSBhdXRvcGxheTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHByZWxvYWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGxvb3A6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBxdWFsaXR5OiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBmdWxsc2NyZWVuOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBwbGF5c2lubGluZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHNob3dGcmFtZUJ5RnJhbWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBmcHM6IG51bWJlciA9IDI5Ljk3O1xuICAgIEBJbnB1dCgpIGRvd25sb2FkOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcbiAgICBASW5wdXQoKSBzcGlubmVyOiBzdHJpbmcgPSAnc3Bpbic7XG4gICAgQElucHV0KCkgcG9zdGVyOiBzdHJpbmcgPSBudWxsO1xuICAgIEBJbnB1dCgpIGtleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBvdmVybGF5OiBib29sZWFuID0gbnVsbDtcbiAgICBASW5wdXQoKSBtdXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBPdXRwdXQoKSBtdXRlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXG4gICAgQElucHV0KClcbiAgICBnZXQgdGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmlkZW9UYWcoKS5jdXJyZW50VGltZTtcbiAgICB9XG5cbiAgICBAT3V0cHV0KCkgdGltZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICAgIHNldCB0aW1lKHZhbDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50ID0gdGhpcy5nZXRWaWRlb1RhZygpO1xuICAgICAgICBpZiAodmlkZW8gJiYgdmFsKSB7XG4gICAgICAgICAgICBpZiAodmFsID4gdmlkZW8uZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICB2YWwgPSB2aWRlby5kdXJhdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWwgPCAwKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWwgIT09IHZpZGVvLmN1cnJlbnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgdmlkZW8uY3VycmVudFRpbWUgPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0VGltZSAhPT0gdmlkZW8uY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudGltZUNoYW5nZS5lbWl0KHZpZGVvLmN1cnJlbnRUaW1lKSwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHZpZGVvLmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgaXNGdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICB2aWRlb1dpZHRoOiBudW1iZXI7XG4gICAgdmlkZW9IZWlnaHQ6IG51bWJlcjtcbiAgICBsYXN0VGltZTogbnVtYmVyO1xuXG4gICAgdmlkZW9Mb2FkZWQgPSBmYWxzZTtcblxuICAgIHByaXZhdGUgaXNNb3VzZU1vdmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNNb3VzZU1vdmluZ1RpbWVyOiBOb2RlSlMuVGltZXI7XG4gICAgcHJpdmF0ZSBpc01vdXNlTW92aW5nVGltZW91dDogbnVtYmVyID0gMjAwMDtcblxuICAgIHByaXZhdGUgZXZlbnRzOiBFdmVudEhhbmRsZXJbXTtcblxuICAgIHByaXZhdGUgc3JjT2JqZWN0VVJMOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwcml2YXRlIGV2dDogRXZlbnRTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXG4gICAgICAgICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCwgbmFtZTogJ2xvYWRzdGFydCcsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnZpZGVvTG9hZGVkID0gZmFsc2UsIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgICAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LCBuYW1lOiAnbG9hZGVkbWV0YWRhdGEnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy5ldkxvYWRlZE1ldGFkYXRhKGV2ZW50KSwgZGlzcG9zZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQsIG5hbWU6ICdlcnJvcicsIGNhbGxiYWNrOiBldmVudCA9PiBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgVmlkZW8gRXJyb3InLCBldmVudCksIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgICAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LCBuYW1lOiAnY29udGV4dG1lbnUnLCBjYWxsYmFjazogZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSwgZGlzcG9zZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQsIG5hbWU6ICd0aW1ldXBkYXRlJywgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMuZXZUaW1lVXBkYXRlKGV2ZW50KSwgZGlzcG9zZTogbnVsbCB9LFxuICAgICAgICAgICAgeyBlbGVtZW50OiB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LCBuYW1lOiAnbW91c2Vtb3ZlJywgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMuZXZNb3VzZU1vdmUoZXZlbnQpLCBkaXNwb3NlOiBudWxsIH1cbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQub25sb2FkZWRkYXRhID0gKCkgPT4gdGhpcy52aWRlb0xvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5ldnQuYWRkRXZlbnRzKHRoaXMucmVuZGVyZXIsIHRoaXMuZXZlbnRzKTtcbiAgICAgICAgdGhpcy5zZXRWaWRlb1NyYyh0aGlzLnNyYyk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAoY2hhbmdlcy5zcmMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmlkZW9TcmModGhpcy5zcmMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5vbmxvYWRlZGRhdGEgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuZXZ0LnJlbW92ZUV2ZW50cyh0aGlzLmV2ZW50cyk7XG4gICAgICAgIHRoaXMuc2V0VmlkZW9TcmMobnVsbCk7XG4gICAgfVxuXG4gICAgbG9hZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudmlkZW8gJiYgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50KVxuICAgICAgICAgICAgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LmxvYWQoKTtcbiAgICB9XG5cbiAgICBnZXRWaWRlb1RhZygpOiBIVE1MVmlkZW9FbGVtZW50IHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZGVvICYmIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCA/IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCBhcyBIVE1MVmlkZW9FbGVtZW50IDogbnVsbDtcbiAgICB9XG5cbiAgICBldkxvYWRlZE1ldGFkYXRhKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52aWRlb1dpZHRoID0gdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LnZpZGVvV2lkdGg7XG4gICAgICAgIHRoaXMudmlkZW9IZWlnaHQgPSB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQudmlkZW9IZWlnaHQ7XG4gICAgICAgIHRoaXMudmlkZW9Mb2FkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGV2TW91c2VNb3ZlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc01vdXNlTW92aW5nID0gdHJ1ZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaXNNb3VzZU1vdmluZ1RpbWVyKTtcbiAgICAgICAgdGhpcy5pc01vdXNlTW92aW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNNb3VzZU1vdmluZyA9IGZhbHNlO1xuICAgICAgICB9LCB0aGlzLmlzTW91c2VNb3ZpbmdUaW1lb3V0KTtcbiAgICB9XG5cbiAgICBldlRpbWVVcGRhdGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbWUgPSB0aGlzLmdldFZpZGVvVGFnKCkuY3VycmVudFRpbWU7XG4gICAgfVxuXG4gICAgZ2V0T3ZlcmxheUNsYXNzKGFjdGl2ZUNsYXNzOiBzdHJpbmcsIGluYWN0aXZlQ2xhc3M6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLm92ZXJsYXkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAoIXRoaXMucGxheWluZyB8fCB0aGlzLmlzTW91c2VNb3ZpbmcpID8gYWN0aXZlQ2xhc3MgOiBpbmFjdGl2ZUNsYXNzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheSA/IGFjdGl2ZUNsYXNzIDogaW5hY3RpdmVDbGFzcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VmlkZW9TcmMoc3JjOiBzdHJpbmd8TWVkaWFTdHJlYW18TWVkaWFTb3VyY2V8QmxvYik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zcmNPYmplY3RVUkwpIHtcbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5zcmNPYmplY3RVUkwpO1xuICAgICAgICAgICAgdGhpcy5zcmNPYmplY3RVUkwgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnZpZGVvIHx8ICF0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQuc3JjID0gbnVsbDtcbiAgICAgICAgICAgIGlmICgnc3JjT2JqZWN0JyBpbiBIVE1MVmlkZW9FbGVtZW50LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5zcmNPYmplY3QgPSBuZXcgTWVkaWFTdHJlYW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3JjID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LnNyYyA9IHNyYztcbiAgICAgICAgfSBlbHNlIGlmICgnc3JjT2JqZWN0JyBpbiBIVE1MVmlkZW9FbGVtZW50LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LnNyY09iamVjdCA9IHNyYztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3JjT2JqZWN0VVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChzcmMpO1xuICAgICAgICAgICAgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMuc3JjT2JqZWN0VVJMO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=