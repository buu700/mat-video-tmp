import { __decorate } from "tslib";
import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnDestroy, Output, Renderer2 } from '@angular/core';
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
    MatPlayButtonComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: EventService }
    ]; };
    __decorate([
        Input()
    ], MatPlayButtonComponent.prototype, "video", void 0);
    __decorate([
        Input()
    ], MatPlayButtonComponent.prototype, "play", void 0);
    __decorate([
        Output()
    ], MatPlayButtonComponent.prototype, "playChanged", void 0);
    __decorate([
        Input()
    ], MatPlayButtonComponent.prototype, "keyboard", void 0);
    __decorate([
        HostListener('document:keyup.space', ['$event'])
    ], MatPlayButtonComponent.prototype, "onPlayKey", null);
    MatPlayButtonComponent = __decorate([
        Component({
            selector: 'mat-play-button',
            template: "<button mat-icon-button (click)=\"toggleVideoPlayback()\">\n  <mat-icon *ngIf=\"!play\">play_arrow</mat-icon>\n  <mat-icon *ngIf=\"play\">pause</mat-icon>\n</button>",
            styles: [""]
        })
    ], MatPlayButtonComponent);
    return MatPlayButtonComponent;
}());
export { MatPlayButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby91aS9tYXQtcGxheS1idXR0b24vbWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTzVEO0lBV0UsZ0NBQ1UsUUFBbUIsRUFDbkIsR0FBaUI7UUFEakIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBVmxCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFFckIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRTNDLGFBQVEsR0FBWSxJQUFJLENBQUM7SUFPOUIsQ0FBQztJQUVMLGdEQUFlLEdBQWY7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUEzQixDQUEyQixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDcEcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQy9HLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixFQUFFLEVBQTFCLENBQTBCLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtTQUNyRyxDQUFDO1FBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGlEQUFnQixHQUFoQixVQUFpQixLQUFjO1FBQzdCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLO1lBQ3JCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxvREFBbUIsR0FBbkI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsb0RBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUdELDBDQUFTLEdBQVQsVUFBVSxLQUFvQjtRQUM1QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Z0JBekNtQixTQUFTO2dCQUNkLFlBQVk7O0lBWmxCO1FBQVIsS0FBSyxFQUFFO3lEQUF5QjtJQUV4QjtRQUFSLEtBQUssRUFBRTt3REFBdUI7SUFFckI7UUFBVCxNQUFNLEVBQUU7K0RBQTJDO0lBRTNDO1FBQVIsS0FBSyxFQUFFOzREQUEwQjtJQXlDbEM7UUFEQyxZQUFZLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzsyREFNaEQ7SUFyRFUsc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsaUxBQStDOztTQUVoRCxDQUFDO09BQ1csc0JBQXNCLENBdURsQztJQUFELDZCQUFDO0NBQUEsQUF2REQsSUF1REM7U0F2RFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9ldmVudC1oYW5kbGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ldmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LXBsYXktYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1wbGF5LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdC1wbGF5LWJ1dHRvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0UGxheUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xuXG4gIEBJbnB1dCgpIHBsYXk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgcGxheUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgZXZlbnRzOiBFdmVudEhhbmRsZXJbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBldnQ6IEV2ZW50U2VydmljZVxuICApIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50cyA9IFtcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogJ3BsYXknLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy5zZXRWaWRlb1BsYXliYWNrKHRydWUpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdwYXVzZScsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnNldFZpZGVvUGxheWJhY2soZmFsc2UpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdkdXJhdGlvbmNoYW5nZScsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnNldFZpZGVvUGxheWJhY2soZmFsc2UpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdlbmRlZCcsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnNldFZpZGVvUGxheWJhY2soZmFsc2UpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdjbGljaycsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnRvZ2dsZVZpZGVvUGxheWJhY2soKSwgZGlzcG9zZTogbnVsbCB9XG4gICAgXTtcblxuICAgIHRoaXMuZXZ0LmFkZEV2ZW50cyh0aGlzLnJlbmRlcmVyLCB0aGlzLmV2ZW50cyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmV2dC5yZW1vdmVFdmVudHModGhpcy5ldmVudHMpO1xuICB9XG5cbiAgc2V0VmlkZW9QbGF5YmFjayh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnBsYXkgIT09IHZhbHVlKVxuICAgICAgdGhpcy50b2dnbGVWaWRlb1BsYXliYWNrKCk7XG4gIH1cblxuICB0b2dnbGVWaWRlb1BsYXliYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucGxheSA9ICF0aGlzLnBsYXk7XG4gICAgdGhpcy51cGRhdGVWaWRlb1BsYXliYWNrKCk7XG4gIH1cblxuICB1cGRhdGVWaWRlb1BsYXliYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucGxheSA/IHRoaXMudmlkZW8ucGxheSgpIDogdGhpcy52aWRlby5wYXVzZSgpO1xuICAgIHRoaXMucGxheUNoYW5nZWQuZW1pdCh0aGlzLnBsYXkpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAuc3BhY2UnLCBbJyRldmVudCddKVxuICBvblBsYXlLZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5rZXlib2FyZCkge1xuICAgICAgdGhpcy50b2dnbGVWaWRlb1BsYXliYWNrKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=