import { __decorate } from "tslib";
import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnDestroy, Output, Renderer2 } from '@angular/core';
import { EventService } from '../../services/event.service';
let MatPlayButtonComponent = class MatPlayButtonComponent {
    constructor(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.play = false;
        this.playChanged = new EventEmitter();
        this.keyboard = true;
    }
    ngAfterViewInit() {
        this.events = [
            { element: this.video, name: 'play', callback: event => this.setVideoPlayback(true), dispose: null },
            { element: this.video, name: 'pause', callback: event => this.setVideoPlayback(false), dispose: null },
            { element: this.video, name: 'durationchange', callback: event => this.setVideoPlayback(false), dispose: null },
            { element: this.video, name: 'ended', callback: event => this.setVideoPlayback(false), dispose: null },
            { element: this.video, name: 'click', callback: event => this.toggleVideoPlayback(), dispose: null }
        ];
        this.evt.addEvents(this.renderer, this.events);
    }
    ngOnDestroy() {
        this.evt.removeEvents(this.events);
    }
    setVideoPlayback(value) {
        if (this.play !== value)
            this.toggleVideoPlayback();
    }
    toggleVideoPlayback() {
        this.play = !this.play;
        this.updateVideoPlayback();
    }
    updateVideoPlayback() {
        this.play ? this.video.play() : this.video.pause();
        this.playChanged.emit(this.play);
    }
    onPlayKey(event) {
        if (this.keyboard) {
            this.toggleVideoPlayback();
            event.preventDefault();
        }
    }
};
MatPlayButtonComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: EventService }
];
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
export { MatPlayButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby91aS9tYXQtcGxheS1idXR0b24vbWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTzVELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBV2pDLFlBQ1UsUUFBbUIsRUFDbkIsR0FBaUI7UUFEakIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBVmxCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFFckIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRTNDLGFBQVEsR0FBWSxJQUFJLENBQUM7SUFPOUIsQ0FBQztJQUVMLGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ3BHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUMvRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7U0FDckcsQ0FBQztRQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFjO1FBQzdCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLO1lBQ3JCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0QsU0FBUyxDQUFDLEtBQW9CO1FBQzVCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0NBRUYsQ0FBQTs7WUEzQ3FCLFNBQVM7WUFDZCxZQUFZOztBQVpsQjtJQUFSLEtBQUssRUFBRTtxREFBeUI7QUFFeEI7SUFBUixLQUFLLEVBQUU7b0RBQXVCO0FBRXJCO0lBQVQsTUFBTSxFQUFFOzJEQUEyQztBQUUzQztJQUFSLEtBQUssRUFBRTt3REFBMEI7QUF5Q2xDO0lBREMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7dURBTWhEO0FBckRVLHNCQUFzQjtJQUxsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLGlMQUErQzs7S0FFaEQsQ0FBQztHQUNXLHNCQUFzQixDQXVEbEM7U0F2RFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9ldmVudC1oYW5kbGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ldmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LXBsYXktYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1wbGF5LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdC1wbGF5LWJ1dHRvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0UGxheUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xuXG4gIEBJbnB1dCgpIHBsYXk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgcGxheUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgZXZlbnRzOiBFdmVudEhhbmRsZXJbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBldnQ6IEV2ZW50U2VydmljZVxuICApIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50cyA9IFtcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogJ3BsYXknLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy5zZXRWaWRlb1BsYXliYWNrKHRydWUpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdwYXVzZScsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnNldFZpZGVvUGxheWJhY2soZmFsc2UpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdkdXJhdGlvbmNoYW5nZScsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnNldFZpZGVvUGxheWJhY2soZmFsc2UpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdlbmRlZCcsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnNldFZpZGVvUGxheWJhY2soZmFsc2UpLCBkaXNwb3NlOiBudWxsIH0sXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdjbGljaycsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnRvZ2dsZVZpZGVvUGxheWJhY2soKSwgZGlzcG9zZTogbnVsbCB9XG4gICAgXTtcblxuICAgIHRoaXMuZXZ0LmFkZEV2ZW50cyh0aGlzLnJlbmRlcmVyLCB0aGlzLmV2ZW50cyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmV2dC5yZW1vdmVFdmVudHModGhpcy5ldmVudHMpO1xuICB9XG5cbiAgc2V0VmlkZW9QbGF5YmFjayh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnBsYXkgIT09IHZhbHVlKVxuICAgICAgdGhpcy50b2dnbGVWaWRlb1BsYXliYWNrKCk7XG4gIH1cblxuICB0b2dnbGVWaWRlb1BsYXliYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucGxheSA9ICF0aGlzLnBsYXk7XG4gICAgdGhpcy51cGRhdGVWaWRlb1BsYXliYWNrKCk7XG4gIH1cblxuICB1cGRhdGVWaWRlb1BsYXliYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucGxheSA/IHRoaXMudmlkZW8ucGxheSgpIDogdGhpcy52aWRlby5wYXVzZSgpO1xuICAgIHRoaXMucGxheUNoYW5nZWQuZW1pdCh0aGlzLnBsYXkpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAuc3BhY2UnLCBbJyRldmVudCddKVxuICBvblBsYXlLZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5rZXlib2FyZCkge1xuICAgICAgdGhpcy50b2dnbGVWaWRlb1BsYXliYWNrKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=