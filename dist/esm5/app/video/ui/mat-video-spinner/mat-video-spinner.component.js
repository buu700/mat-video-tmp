import { __decorate } from "tslib";
import { AfterViewInit, Component, Input, OnDestroy, Renderer2 } from '@angular/core';
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
    MatVideoSpinnerComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: EventService }
    ]; };
    __decorate([
        Input()
    ], MatVideoSpinnerComponent.prototype, "video", void 0);
    __decorate([
        Input()
    ], MatVideoSpinnerComponent.prototype, "spinner", void 0);
    MatVideoSpinnerComponent = __decorate([
        Component({
            selector: 'mat-video-spinner',
            template: "<div *ngIf=\"!videoLoaded || videoBuffering\" [class]=\"spinner\"></div>",
            styles: [":host{position:absolute;left:calc(50% - 32px);top:calc(50% - 32px);z-index:1}", ".spin{box-sizing:border-box;width:64px;height:64px;border-radius:100%;border:10px solid rgba(255,255,255,.2);border-top-color:#fff;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".dot{width:64px;height:64px;background-color:#fff;border-radius:100%;-webkit-animation:1s ease-in-out infinite dot;animation:1s ease-in-out infinite dot}@-webkit-keyframes dot{0%{-webkit-transform:scale(0)}100%{-webkit-transform:scale(1);opacity:0}}@keyframes dot{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}", ".split-ring{display:inline-block;width:64px;height:64px}.split-ring:after{content:\" \";display:block;width:46px;height:46px;margin:1px;border-radius:50%;border:5px solid #fff;border-color:#fff transparent;-webkit-animation:1.2s linear infinite split-ring;animation:1.2s linear infinite split-ring}@-webkit-keyframes split-ring{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes split-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".hourglass{display:inline-block;position:relative;width:64px;height:64px}.hourglass:after{content:\" \";display:block;border-radius:50%;width:0;height:0;margin:6px;box-sizing:border-box;border:26px solid #fff;border-color:#fff transparent;-webkit-animation:1.2s infinite hourglass;animation:1.2s infinite hourglass}@-webkit-keyframes hourglass{0%{-webkit-transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{-webkit-transform:rotate(360deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1)}100%{-webkit-transform:rotate(720deg)}}@keyframes hourglass{0%{transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{transform:rotate(360deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}100%{transform:rotate(720deg)}}"]
        })
    ], MatVideoSpinnerComponent);
    return MatVideoSpinnerComponent;
}());
export { MatVideoSpinnerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZpZGVvLXNwaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL3VpL21hdC12aWRlby1zcGlubmVyL21hdC12aWRlby1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBYTVEO0lBU0Usa0NBQ1UsUUFBbUIsRUFDbkIsR0FBaUI7UUFEakIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBVGxCLFlBQU8sR0FBVyxNQUFNLENBQUM7UUFFbEMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFFWixXQUFNLEdBQW1CLEVBQUUsQ0FBQztJQUtoQyxDQUFDO0lBRUwsa0RBQWUsR0FBZjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssRUFBeEIsQ0FBd0IsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUF2QixDQUF1QixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDMUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxFQUEzQixDQUEyQixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDdkcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxFQUExQixDQUEwQixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEVBQTFCLENBQTBCLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtTQUM5RyxDQUFDO1FBRUYsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUF2QixDQUF1QixDQUFDO1FBRXhELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCw4Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRS9CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnQkF0Qm1CLFNBQVM7Z0JBQ2QsWUFBWTs7SUFWbEI7UUFBUixLQUFLLEVBQUU7MkRBQXlCO0lBQ3hCO1FBQVIsS0FBSyxFQUFFOzZEQUEwQjtJQUZ2Qix3QkFBd0I7UUFYcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixvRkFBaUQ7O1NBUWxELENBQUM7T0FDVyx3QkFBd0IsQ0FrQ3BDO0lBQUQsK0JBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWxDWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2V2ZW50LWhhbmRsZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtdmlkZW8tc3Bpbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtdmlkZW8tc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL21hdC12aWRlby1zcGlubmVyLmNvbXBvbmVudC5zY3NzJyxcbiAgICAnLi9pbmRpY2F0b3JzL3NwaW4uY3NzJyxcbiAgICAnLi9pbmRpY2F0b3JzL2RvdC5jc3MnLFxuICAgICcuL2luZGljYXRvcnMvc3BsaXQtcmluZy5jc3MnLFxuICAgICcuL2luZGljYXRvcnMvaG91cmdsYXNzLmNzcydcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRWaWRlb1NwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB2aWRlbzogSFRNTFZpZGVvRWxlbWVudDtcbiAgQElucHV0KCkgc3Bpbm5lcjogc3RyaW5nID0gJ3NwaW4nO1xuXG4gIHZpZGVvQnVmZmVyaW5nID0gZmFsc2U7XG4gIHZpZGVvTG9hZGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBldmVudHM6IEV2ZW50SGFuZGxlcltdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZXZ0OiBFdmVudFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudHMgPSBbXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdsb2Fkc3RhcnQnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy52aWRlb0xvYWRlZCA9IGZhbHNlLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdsb2FkZWRtZXRhZGF0YScsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnZpZGVvTG9hZGVkID0gdHJ1ZSwgZGlzcG9zZTogbnVsbCB9LFxuICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLCBuYW1lOiAnY2FucGxheScsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnZpZGVvQnVmZmVyaW5nID0gZmFsc2UsIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogJ3dhaXRpbmcnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy52aWRlb0J1ZmZlcmluZyA9IHRydWUsIGRpc3Bvc2U6IG51bGwgfSxcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogJ2R1cmF0aW9uY2hhbmdlJywgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMudmlkZW9CdWZmZXJpbmcgPSB0cnVlLCBkaXNwb3NlOiBudWxsIH1cbiAgICBdO1xuXG4gICAgdGhpcy52aWRlby5vbmxvYWRlZGRhdGEgPSAoKSA9PiB0aGlzLnZpZGVvTG9hZGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuZXZ0LmFkZEV2ZW50cyh0aGlzLnJlbmRlcmVyLCB0aGlzLmV2ZW50cyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZGVvLm9ubG9hZGVkZGF0YSA9IG51bGw7XG5cbiAgICB0aGlzLmV2dC5yZW1vdmVFdmVudHModGhpcy5ldmVudHMpO1xuICB9XG5cbn1cbiJdfQ==