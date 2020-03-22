import * as tslib_1 from "tslib";
import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, Renderer2 } from '@angular/core';
import { EventService } from '../../services/event.service';
let MatSeekProgressControlComponent = class MatSeekProgressControlComponent {
    constructor(renderer, evt) {
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
    ngAfterViewInit() {
        this.events = [
            { element: this.video, name: 'seeking', callback: event => this.updateCurrentTime(this.video.currentTime), dispose: null },
            { element: this.video, name: 'canplaythrough', callback: event => this.updateBufferedTime(), dispose: null },
            { element: this.video, name: 'timeupdate', callback: event => this.updateCurrentTime(this.video.currentTime), dispose: null },
            { element: this.video, name: 'progress', callback: event => this.updateBufferedTime(), dispose: null }
        ];
        this.evt.addEvents(this.renderer, this.events);
    }
    ngOnDestroy() {
        this.evt.removeEvents(this.events);
    }
    seekVideo(value) {
        const percentage = value / 100;
        const newTime = this.video.duration * percentage;
        this.video.currentTime = newTime;
    }
    updateCurrentTime(time) {
        this.currentTime = time;
        this.curTimePercent = this.updateTime(this.currentTimeChanged, this.currentTime);
    }
    updateBufferedTime() {
        if (this.video.buffered.length > 0) {
            let largestBufferValue = 0;
            for (let i = 0; i < this.video.buffered.length; i++) {
                const cur = this.video.currentTime;
                const start = this.video.buffered.start(i);
                const end = this.video.buffered.end(i);
                if (start <= cur && end > cur && (end - start) > largestBufferValue)
                    largestBufferValue = end;
            }
            this.bufferedTime = largestBufferValue;
            this.bufTimePercent = this.updateTime(this.bufferedTimeChanged, this.bufferedTime);
        }
    }
    updateTime(emitter, time) {
        emitter.emit(time);
        return time / this.video.duration * 100;
    }
};
MatSeekProgressControlComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: EventService }
];
tslib_1.__decorate([
    Input()
], MatSeekProgressControlComponent.prototype, "video", void 0);
tslib_1.__decorate([
    Input()
], MatSeekProgressControlComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Input()
], MatSeekProgressControlComponent.prototype, "currentTime", void 0);
tslib_1.__decorate([
    Output()
], MatSeekProgressControlComponent.prototype, "currentTimeChanged", void 0);
tslib_1.__decorate([
    Input()
], MatSeekProgressControlComponent.prototype, "bufferedTime", void 0);
tslib_1.__decorate([
    Output()
], MatSeekProgressControlComponent.prototype, "bufferedTimeChanged", void 0);
MatSeekProgressControlComponent = tslib_1.__decorate([
    Component({
        selector: 'mat-seek-progress-control',
        template: "<mat-slider-progress-bar [color]=\"color\" mode=\"buffer\" step=\"0.01\" [value]=\"curTimePercent\" [bufferValue]=\"bufTimePercent\"\n  (input)=\"seekVideo($event.value)\"></mat-slider-progress-bar>",
        styles: [""]
    })
], MatSeekProgressControlComponent);
export { MatSeekProgressControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vdWkvbWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC9tYXQtc2Vlay1wcm9ncmVzcy1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk1RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFPNUQsSUFBYSwrQkFBK0IsR0FBNUMsTUFBYSwrQkFBK0I7SUFrQjFDLFlBQ1UsUUFBbUIsRUFDbkIsR0FBaUI7UUFEakIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBbkIzQixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUVsQixVQUFLLEdBQXFCLElBQUksQ0FBQztRQUUvQixVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUVoQyxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV2Qix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRWpELGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFPdkQsQ0FBQztJQUVMLGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFF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RyxDQUFDO0lBQzFDLENBQUM7Q0FFRixDQUFBOztZQWxEcUIsU0FBUztZQUNkLFlBQVk7O0FBaEJsQjtJQUFSLEtBQUssRUFBRTs4REFBZ0M7QUFFL0I7SUFBUixLQUFLLEVBQUU7OERBQWlDO0FBRWhDO0lBQVIsS0FBSyxFQUFFO29FQUF5QjtBQUV2QjtJQUFULE1BQU0sRUFBRTsyRUFBaUQ7QUFFakQ7SUFBUixLQUFLLEVBQUU7cUVBQTBCO0FBRXhCO0lBQVQsTUFBTSxFQUFFOzRFQUFrRDtBQWRoRCwrQkFBK0I7SUFMM0MsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyxrTkFBeUQ7O0tBRTFELENBQUM7R0FDVywrQkFBK0IsQ0FxRTNDO1NBckVZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZXZlbnQtaGFuZGxlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1zZWVrLXByb2dyZXNzLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdC1zZWVrLXByb2dyZXNzLWNvbnRyb2wuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdFNlZWtQcm9ncmVzc0NvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBjdXJUaW1lUGVyY2VudDogbnVtYmVyID0gMDtcbiAgYnVmVGltZVBlcmNlbnQ6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KCkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQgPSBudWxsO1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG5cbiAgQElucHV0KCkgY3VycmVudFRpbWU6IG51bWJlciA9IDA7XG5cbiAgQE91dHB1dCgpIGN1cnJlbnRUaW1lQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBJbnB1dCgpIGJ1ZmZlcmVkVGltZTogbnVtYmVyID0gMDtcblxuICBAT3V0cHV0KCkgYnVmZmVyZWRUaW1lQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHByaXZhdGUgZXZlbnRzOiBFdmVudEhhbmRsZXJbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBldnQ6IEV2ZW50U2VydmljZVxuICApIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50cyA9IFtcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogJ3NlZWtpbmcnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy51cGRhdGVDdXJyZW50VGltZSh0aGlzLnZpZGVvLmN1cnJlbnRUaW1lKSwgZGlzcG9zZTogbnVsbCB9LFxuICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLCBuYW1lOiAnY2FucGxheXRocm91Z2gnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy51cGRhdGVCdWZmZXJlZFRpbWUoKSwgZGlzcG9zZTogbnVsbCB9LFxuICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLCBuYW1lOiAndGltZXVwZGF0ZScsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnVwZGF0ZUN1cnJlbnRUaW1lKHRoaXMudmlkZW8uY3VycmVudFRpbWUpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdwcm9ncmVzcycsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnVwZGF0ZUJ1ZmZlcmVkVGltZSgpLCBkaXNwb3NlOiBudWxsIH1cbiAgICBdO1xuXG4gICAgdGhpcy5ldnQuYWRkRXZlbnRzKHRoaXMucmVuZGVyZXIsIHRoaXMuZXZlbnRzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZXZ0LnJlbW92ZUV2ZW50cyh0aGlzLmV2ZW50cyk7XG4gIH1cblxuICBzZWVrVmlkZW8odmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSB2YWx1ZSAvIDEwMDtcbiAgICBjb25zdCBuZXdUaW1lID0gdGhpcy52aWRlby5kdXJhdGlvbiAqIHBlcmNlbnRhZ2U7XG4gICAgdGhpcy52aWRlby5jdXJyZW50VGltZSA9IG5ld1RpbWU7XG4gIH1cblxuICB1cGRhdGVDdXJyZW50VGltZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGltZTtcbiAgICB0aGlzLmN1clRpbWVQZXJjZW50ID0gdGhpcy51cGRhdGVUaW1lKHRoaXMuY3VycmVudFRpbWVDaGFuZ2VkLCB0aGlzLmN1cnJlbnRUaW1lKTtcbiAgfVxuXG4gIHVwZGF0ZUJ1ZmZlcmVkVGltZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52aWRlby5idWZmZXJlZC5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgbGFyZ2VzdEJ1ZmZlclZhbHVlID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52aWRlby5idWZmZXJlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXIgPSB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lO1xuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMudmlkZW8uYnVmZmVyZWQuc3RhcnQoaSk7XG4gICAgICAgIGNvbnN0IGVuZCA9IHRoaXMudmlkZW8uYnVmZmVyZWQuZW5kKGkpO1xuICAgICAgICBpZiAoc3RhcnQgPD0gY3VyICYmIGVuZCA+IGN1ciAmJiAoZW5kIC0gc3RhcnQpID4gbGFyZ2VzdEJ1ZmZlclZhbHVlKVxuICAgICAgICAgIGxhcmdlc3RCdWZmZXJWYWx1ZSA9IGVuZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuYnVmZmVyZWRUaW1lID0gbGFyZ2VzdEJ1ZmZlclZhbHVlO1xuICAgICAgdGhpcy5idWZUaW1lUGVyY2VudCA9IHRoaXMudXBkYXRlVGltZSh0aGlzLmJ1ZmZlcmVkVGltZUNoYW5nZWQsIHRoaXMuYnVmZmVyZWRUaW1lKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUaW1lKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxudW1iZXI+LCB0aW1lOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGVtaXR0ZXIuZW1pdCh0aW1lKTtcbiAgICByZXR1cm4gdGltZSAvIHRoaXMudmlkZW8uZHVyYXRpb24gKiAxMDA7XG4gIH1cblxufVxuIl19