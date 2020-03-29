import * as tslib_1 from "tslib";
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, Renderer2, SimpleChanges, ViewChild, } from '@angular/core';
import { MatVolumeControlComponent } from './ui/mat-volume-control/mat-volume-control.component';
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
        if (this.volumeControl) {
            this.volumeControl.updateMuted(false);
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
    ViewChild(MatVolumeControlComponent)
], MatVideoComponent.prototype, "volumeControl", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILGFBQWEsRUFDYixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sU0FBUyxFQUNULGFBQWEsRUFDYixTQUFTLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFakcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBT3hELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBb0UxQixZQUNZLFFBQW1CLEVBQ25CLEdBQWlCO1FBRGpCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQWpFcEIsUUFBRyxHQUF3QyxJQUFJLENBQUM7UUFDaEQsVUFBSyxHQUFXLElBQUksQ0FBQztRQUNyQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLFFBQUcsR0FBVyxLQUFLLENBQUM7UUFDcEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUNoQyxZQUFPLEdBQVcsTUFBTSxDQUFDO1FBQ3pCLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixZQUFPLEdBQVksSUFB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OzhDQUFpRDtBQUNoRDtJQUFSLEtBQUssRUFBRTtnREFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7bURBQTJCO0FBQzFCO0lBQVIsS0FBSyxFQUFFO2tEQUF5QjtBQUN4QjtJQUFSLEtBQUssRUFBRTsrQ0FBdUI7QUFDdEI7SUFBUixLQUFLLEVBQUU7a0RBQXlCO0FBQ3hCO0lBQVIsS0FBSyxFQUFFO3FEQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTtzREFBOEI7QUFDN0I7SUFBUixLQUFLLEVBQUU7MkRBQW1DO0FBQ2xDO0lBQVIsS0FBSyxFQUFFOzhDQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTttREFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7Z0RBQWlDO0FBQ2hDO0lBQVIsS0FBSyxFQUFFO2tEQUEwQjtBQUN6QjtJQUFSLEtBQUssRUFBRTtpREFBdUI7QUFDdEI7SUFBUixLQUFLLEVBQUU7bURBQTBCO0FBQ3pCO0lBQVIsS0FBSyxFQUFFO2tEQUF5QjtBQUN4QjtJQUFSLEtBQUssRUFBRTtnREFBd0I7QUFDdEI7SUFBVCxNQUFNLEVBQUU7c0RBQTJDO0FBSXBEO0lBREMsS0FBSyxFQUFFOzZDQUdQO0FBRVM7SUFBVCxNQUFNLEVBQUU7cURBQXlDO0FBOUJ6QyxpQkFBaUI7SUFMN0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsaXFFQUFxQzs7S0FFeEMsQ0FBQztHQUNXLGlCQUFpQixDQXNLN0I7U0F0S1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE91dHB1dCxcbiAgICBSZW5kZXJlcjIsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IE1hdFZvbHVtZUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3VpL21hdC12b2x1bWUtY29udHJvbC9tYXQtdm9sdW1lLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJy4vaW50ZXJmYWNlcy9ldmVudC1oYW5kbGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21hdC12aWRlbycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZGVvLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi92aWRlby5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0VmlkZW9Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgQFZpZXdDaGlsZCgncGxheWVyJykgcHJpdmF0ZSBwbGF5ZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgndmlkZW8nKSBwcml2YXRlIHZpZGVvOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoTWF0Vm9sdW1lQ29udHJvbENvbXBvbmVudCkgcHJpdmF0ZSB2b2x1bWVDb250cm9sOiBNYXRWb2x1bWVDb250cm9sQ29tcG9uZW50O1xuXG4gICAgQElucHV0KCkgc3JjOiBzdHJpbmd8TWVkaWFTdHJlYW18TWVkaWFTb3VyY2V8QmxvYiA9IG51bGw7XG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9IG51bGw7XG4gICAgQElucHV0KCkgYXV0b3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBwcmVsb2FkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBsb29wOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgcXVhbGl0eTogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgZnVsbHNjcmVlbjogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgcGxheXNpbmxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBzaG93RnJhbWVCeUZyYW1lOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZnBzOiBudW1iZXIgPSAyOS45NztcbiAgICBASW5wdXQoKSBkb3dubG9hZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gICAgQElucHV0KCkgc3Bpbm5lcjogc3RyaW5nID0gJ3NwaW4nO1xuICAgIEBJbnB1dCgpIHBvc3Rlcjogc3RyaW5nID0gbnVsbDtcbiAgICBASW5wdXQoKSBrZXlib2FyZDogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgb3ZlcmxheTogYm9vbGVhbiA9IG51bGw7XG4gICAgQElucHV0KCkgbXV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAT3V0cHV0KCkgbXV0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IHRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFZpZGVvVGFnKCkuY3VycmVudFRpbWU7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpIHRpbWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgICBzZXQgdGltZSh2YWw6IG51bWJlcikge1xuICAgICAgICBjb25zdCB2aWRlbzogSFRNTFZpZGVvRWxlbWVudCA9IHRoaXMuZ2V0VmlkZW9UYWcoKTtcbiAgICAgICAgaWYgKHZpZGVvICYmIHZhbCkge1xuICAgICAgICAgICAgaWYgKHZhbCA+IHZpZGVvLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gdmlkZW8uZHVyYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsIDwgMCkge1xuICAgICAgICAgICAgICAgIHZhbCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsICE9PSB2aWRlby5jdXJyZW50VGltZSkge1xuICAgICAgICAgICAgICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdFRpbWUgIT09IHZpZGVvLmN1cnJlbnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRpbWVDaGFuZ2UuZW1pdCh2aWRlby5jdXJyZW50VGltZSksIDApO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB2aWRlby5jdXJyZW50VGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGlzRnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgdmlkZW9XaWR0aDogbnVtYmVyO1xuICAgIHZpZGVvSGVpZ2h0OiBudW1iZXI7XG4gICAgbGFzdFRpbWU6IG51bWJlcjtcblxuICAgIHZpZGVvTG9hZGVkID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGlzTW91c2VNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGlzTW91c2VNb3ZpbmdUaW1lcjogTm9kZUpTLlRpbWVyO1xuICAgIHByaXZhdGUgaXNNb3VzZU1vdmluZ1RpbWVvdXQ6IG51bWJlciA9IDIwMDA7XG5cbiAgICBwcml2YXRlIGV2ZW50czogRXZlbnRIYW5kbGVyW107XG5cbiAgICBwcml2YXRlIHNyY09iamVjdFVSTDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBldnQ6IEV2ZW50U2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gW1xuICAgICAgICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQsIG5hbWU6ICdsb2Fkc3RhcnQnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy52aWRlb0xvYWRlZCA9IGZhbHNlLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICAgICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCwgbmFtZTogJ2xvYWRlZG1ldGFkYXRhJywgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMuZXZMb2FkZWRNZXRhZGF0YShldmVudCksIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgICAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LCBuYW1lOiAnZXJyb3InLCBjYWxsYmFjazogZXZlbnQgPT4gY29uc29sZS5lcnJvcignVW5oYW5kbGVkIFZpZGVvIEVycm9yJywgZXZlbnQpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICAgICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCwgbmFtZTogJ2NvbnRleHRtZW51JywgY2FsbGJhY2s6IGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCksIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgICAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LCBuYW1lOiAndGltZXVwZGF0ZScsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLmV2VGltZVVwZGF0ZShldmVudCksIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgICAgICAgIHsgZWxlbWVudDogdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudCwgbmFtZTogJ21vdXNlbW92ZScsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLmV2TW91c2VNb3ZlKGV2ZW50KSwgZGlzcG9zZTogbnVsbCB9XG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50Lm9ubG9hZGVkZGF0YSA9ICgpID0+IHRoaXMudmlkZW9Mb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZXZ0LmFkZEV2ZW50cyh0aGlzLnJlbmRlcmVyLCB0aGlzLmV2ZW50cyk7XG4gICAgICAgIHRoaXMuc2V0VmlkZW9TcmModGhpcy5zcmMpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuc3JjKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZpZGVvU3JjKHRoaXMuc3JjKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQub25sb2FkZWRkYXRhID0gbnVsbDtcblxuICAgICAgICB0aGlzLmV2dC5yZW1vdmVFdmVudHModGhpcy5ldmVudHMpO1xuICAgICAgICB0aGlzLnNldFZpZGVvU3JjKG51bGwpO1xuICAgIH1cblxuICAgIGxvYWQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnZpZGVvICYmIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudClcbiAgICAgICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5sb2FkKCk7XG4gICAgfVxuXG4gICAgZ2V0VmlkZW9UYWcoKTogSFRNTFZpZGVvRWxlbWVudCB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy52aWRlbyAmJiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTFZpZGVvRWxlbWVudCA6IG51bGw7XG4gICAgfVxuXG4gICAgZXZMb2FkZWRNZXRhZGF0YShldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlkZW9XaWR0aCA9IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC52aWRlb1dpZHRoO1xuICAgICAgICB0aGlzLnZpZGVvSGVpZ2h0ID0gdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgICAgICB0aGlzLnZpZGVvTG9hZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBldk1vdXNlTW92ZShldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNNb3VzZU1vdmluZyA9IHRydWU7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmlzTW91c2VNb3ZpbmdUaW1lcik7XG4gICAgICAgIHRoaXMuaXNNb3VzZU1vdmluZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzTW91c2VNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgfSwgdGhpcy5pc01vdXNlTW92aW5nVGltZW91dCk7XG4gICAgfVxuXG4gICAgZXZUaW1lVXBkYXRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW1lID0gdGhpcy5nZXRWaWRlb1RhZygpLmN1cnJlbnRUaW1lO1xuICAgIH1cblxuICAgIGdldE92ZXJsYXlDbGFzcyhhY3RpdmVDbGFzczogc3RyaW5nLCBpbmFjdGl2ZUNsYXNzOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gKCF0aGlzLnBsYXlpbmcgfHwgdGhpcy5pc01vdXNlTW92aW5nKSA/IGFjdGl2ZUNsYXNzIDogaW5hY3RpdmVDbGFzcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkgPyBhY3RpdmVDbGFzcyA6IGluYWN0aXZlQ2xhc3M7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFZpZGVvU3JjKHNyYzogc3RyaW5nfE1lZGlhU3RyZWFtfE1lZGlhU291cmNlfEJsb2IpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3JjT2JqZWN0VVJMKSB7XG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuc3JjT2JqZWN0VVJMKTtcbiAgICAgICAgICAgIHRoaXMuc3JjT2JqZWN0VVJMID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy52aWRlbyB8fCAhdGhpcy52aWRlby5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LnNyYyA9IG51bGw7XG4gICAgICAgICAgICBpZiAoJ3NyY09iamVjdCcgaW4gSFRNTFZpZGVvRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQuc3JjT2JqZWN0ID0gbmV3IE1lZGlhU3RyZWFtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNyYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5zcmMgPSBzcmM7XG4gICAgICAgIH0gZWxzZSBpZiAoJ3NyY09iamVjdCcgaW4gSFRNTFZpZGVvRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5zcmNPYmplY3QgPSBzcmM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNyY09iamVjdFVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc3JjKTtcbiAgICAgICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLnNyY09iamVjdFVSTDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnZvbHVtZUNvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMudm9sdW1lQ29udHJvbC51cGRhdGVNdXRlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==