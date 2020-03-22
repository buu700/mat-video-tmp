import { __decorate } from "tslib";
import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, Renderer2 } from '@angular/core';
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
    MatSeekProgressControlComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: EventService }
    ]; };
    __decorate([
        Input()
    ], MatSeekProgressControlComponent.prototype, "video", void 0);
    __decorate([
        Input()
    ], MatSeekProgressControlComponent.prototype, "color", void 0);
    __decorate([
        Input()
    ], MatSeekProgressControlComponent.prototype, "currentTime", void 0);
    __decorate([
        Output()
    ], MatSeekProgressControlComponent.prototype, "currentTimeChanged", void 0);
    __decorate([
        Input()
    ], MatSeekProgressControlComponent.prototype, "bufferedTime", void 0);
    __decorate([
        Output()
    ], MatSeekProgressControlComponent.prototype, "bufferedTimeChanged", void 0);
    MatSeekProgressControlComponent = __decorate([
        Component({
            selector: 'mat-seek-progress-control',
            template: "<mat-slider-progress-bar [color]=\"color\" mode=\"buffer\" step=\"0.01\" [value]=\"curTimePercent\" [bufferValue]=\"bufTimePercent\"\n  (input)=\"seekVideo($event.value)\"></mat-slider-progress-bar>",
            styles: [""]
        })
    ], MatSeekProgressControlComponent);
    return MatSeekProgressControlComponent;
}());
export { MatSeekProgressControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vdWkvbWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC9tYXQtc2Vlay1wcm9ncmVzcy1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk1RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFPNUQ7SUFrQkUseUNBQ1UsUUFBbUIsRUFDbkIsR0FBaUI7UUFEakIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBbkIzQixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUVsQixVQUFLLEdBQXFCLElBQUksQ0FBQztRQUUvQixVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUVoQyxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV2Qix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRWpELGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFPdkQsQ0FBQztJQUVMLHlEQUFlLEdBQWY7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQTlDLENBQThDLEVBQUUs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LENBQUMsQ0FBQztRQUNuQixPQUFPLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7SUFDMUMsQ0FBQzs7Z0JBaERtQixTQUFTO2dCQUNkLFlBQVk7O0lBaEJsQjtRQUFSLEtBQUssRUFBRTtrRUFBZ0M7SUFFL0I7UUFBUixLQUFLLEVBQUU7a0VBQWlDO0lBRWhDO1FBQVIsS0FBSyxFQUFFO3dFQUF5QjtJQUV2QjtRQUFULE1BQU0sRUFBRTsrRUFBaUQ7SUFFakQ7UUFBUixLQUFLLEVBQUU7eUVBQTBCO0lBRXhCO1FBQVQsTUFBTSxFQUFFO2dGQUFrRDtJQWRoRCwrQkFBK0I7UUFMM0MsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxrTkFBeUQ7O1NBRTFELENBQUM7T0FDVywrQkFBK0IsQ0FxRTNDO0lBQUQsc0NBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQXJFWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2V2ZW50LWhhbmRsZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtc2Vlay1wcm9ncmVzcy1jb250cm9sJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1zZWVrLXByb2dyZXNzLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXQtc2Vlay1wcm9ncmVzcy1jb250cm9sLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRTZWVrUHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgY3VyVGltZVBlcmNlbnQ6IG51bWJlciA9IDA7XG4gIGJ1ZlRpbWVQZXJjZW50OiBudW1iZXIgPSAwO1xuXG4gIEBJbnB1dCgpIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50ID0gbnVsbDtcblxuICBASW5wdXQoKSBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuXG4gIEBJbnB1dCgpIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xuXG4gIEBPdXRwdXQoKSBjdXJyZW50VGltZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBASW5wdXQoKSBidWZmZXJlZFRpbWU6IG51bWJlciA9IDA7XG5cbiAgQE91dHB1dCgpIGJ1ZmZlcmVkVGltZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBwcml2YXRlIGV2ZW50czogRXZlbnRIYW5kbGVyW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZXZ0OiBFdmVudFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudHMgPSBbXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdzZWVraW5nJywgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMudXBkYXRlQ3VycmVudFRpbWUodGhpcy52aWRlby5jdXJyZW50VGltZSksIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogJ2NhbnBsYXl0aHJvdWdoJywgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMudXBkYXRlQnVmZmVyZWRUaW1lKCksIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogJ3RpbWV1cGRhdGUnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy51cGRhdGVDdXJyZW50VGltZSh0aGlzLnZpZGVvLmN1cnJlbnRUaW1lKSwgZGlzcG9zZTogbnVsbCB9LFxuICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLCBuYW1lOiAncHJvZ3Jlc3MnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy51cGRhdGVCdWZmZXJlZFRpbWUoKSwgZGlzcG9zZTogbnVsbCB9XG4gICAgXTtcblxuICAgIHRoaXMuZXZ0LmFkZEV2ZW50cyh0aGlzLnJlbmRlcmVyLCB0aGlzLmV2ZW50cyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmV2dC5yZW1vdmVFdmVudHModGhpcy5ldmVudHMpO1xuICB9XG5cbiAgc2Vla1ZpZGVvKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBwZXJjZW50YWdlID0gdmFsdWUgLyAxMDA7XG4gICAgY29uc3QgbmV3VGltZSA9IHRoaXMudmlkZW8uZHVyYXRpb24gKiBwZXJjZW50YWdlO1xuICAgIHRoaXMudmlkZW8uY3VycmVudFRpbWUgPSBuZXdUaW1lO1xuICB9XG5cbiAgdXBkYXRlQ3VycmVudFRpbWUodGltZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50VGltZSA9IHRpbWU7XG4gICAgdGhpcy5jdXJUaW1lUGVyY2VudCA9IHRoaXMudXBkYXRlVGltZSh0aGlzLmN1cnJlbnRUaW1lQ2hhbmdlZCwgdGhpcy5jdXJyZW50VGltZSk7XG4gIH1cblxuICB1cGRhdGVCdWZmZXJlZFRpbWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmlkZW8uYnVmZmVyZWQubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGxhcmdlc3RCdWZmZXJWYWx1ZSA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmlkZW8uYnVmZmVyZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VyID0gdGhpcy52aWRlby5jdXJyZW50VGltZTtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLnZpZGVvLmJ1ZmZlcmVkLnN0YXJ0KGkpO1xuICAgICAgICBjb25zdCBlbmQgPSB0aGlzLnZpZGVvLmJ1ZmZlcmVkLmVuZChpKTtcbiAgICAgICAgaWYgKHN0YXJ0IDw9IGN1ciAmJiBlbmQgPiBjdXIgJiYgKGVuZCAtIHN0YXJ0KSA+IGxhcmdlc3RCdWZmZXJWYWx1ZSlcbiAgICAgICAgICBsYXJnZXN0QnVmZmVyVmFsdWUgPSBlbmQ7XG4gICAgICB9XG4gICAgICB0aGlzLmJ1ZmZlcmVkVGltZSA9IGxhcmdlc3RCdWZmZXJWYWx1ZTtcbiAgICAgIHRoaXMuYnVmVGltZVBlcmNlbnQgPSB0aGlzLnVwZGF0ZVRpbWUodGhpcy5idWZmZXJlZFRpbWVDaGFuZ2VkLCB0aGlzLmJ1ZmZlcmVkVGltZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGltZShlbWl0dGVyOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiwgdGltZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBlbWl0dGVyLmVtaXQodGltZSk7XG4gICAgcmV0dXJuIHRpbWUgLyB0aGlzLnZpZGVvLmR1cmF0aW9uICogMTAwO1xuICB9XG5cbn1cbiJdfQ==