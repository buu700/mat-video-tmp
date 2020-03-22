import { __decorate } from "tslib";
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { EventService } from '../../services/event.service';
let MatVolumeControlComponent = class MatVolumeControlComponent {
    constructor(evt) {
        this.evt = evt;
        this.video = null;
        this.color = 'primary';
        this.volume = 1;
        this.volumeChanged = new EventEmitter();
        this._muted = false;
        this.mutedChanged = new EventEmitter();
        this.keyboard = true;
    }
    get muted() { return this._muted; }
    set muted(v) {
        this._muted = v;
        this.video.muted = this._muted;
    }
    setVolume(value) {
        this.volume = value;
        this.video.volume = this.volume;
        this.volumeChanged.emit(this.volume);
        if (this.volume > 0)
            this.setMuted(false);
    }
    setMuted(value) {
        if (this.muted !== value)
            this.toggleMuted();
    }
    toggleMuted() {
        this.muted = !this.muted;
        this.updateMuted();
    }
    updateMuted() {
        this.video.muted = this.muted;
        this.mutedChanged.emit(this.muted);
    }
    onMuteKey(event) {
        if (this.keyboard) {
            this.toggleMuted();
            event.preventDefault();
        }
    }
};
MatVolumeControlComponent.ctorParameters = () => [
    { type: EventService }
];
__decorate([
    Input()
], MatVolumeControlComponent.prototype, "video", void 0);
__decorate([
    Input()
], MatVolumeControlComponent.prototype, "color", void 0);
__decorate([
    Input()
], MatVolumeControlComponent.prototype, "volume", void 0);
__decorate([
    Output()
], MatVolumeControlComponent.prototype, "volumeChanged", void 0);
__decorate([
    Input()
], MatVolumeControlComponent.prototype, "muted", null);
__decorate([
    Output()
], MatVolumeControlComponent.prototype, "mutedChanged", void 0);
__decorate([
    Input()
], MatVolumeControlComponent.prototype, "keyboard", void 0);
__decorate([
    HostListener('document:keyup.m', ['$event'])
], MatVolumeControlComponent.prototype, "onMuteKey", null);
MatVolumeControlComponent = __decorate([
    Component({
        selector: 'mat-volume-control',
        template: "<div class=\"volume-control\">\n  <button mat-icon-button (click)=\"toggleMuted()\">\n    <mat-icon *ngIf=\"muted || volume === 0\">volume_off</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume > 0 && volume < 0.25\">volume_mute</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume >= 0.25 && volume < 0.5\">volume_down</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume >= 0.5\">volume_up</mat-icon>\n  </button>\n  <mat-slider class=\"volume-slider\" [color]=\"color\" min=\"0\" max=\"1\" step=\"0.01\" value=\"1\" (input)=\"setVolume($event.value)\">\n  </mat-slider>\n</div>",
        styles: [".volume-control{display:inline}.volume-slider{margin-left:-15px}::ng-deep.mat-slider-thumb{border-color:transparent!important}::ng-deep.mat-slider-track-background{background-color:#d3d3d3!important;transform:translateX(0)!important}.volume-control .volume-slider{visibility:hidden;opacity:0;min-width:0;width:0;transition:visibility .2s,opacity .2s linear,width .2s linear}.volume-control:hover .volume-slider{visibility:visible;opacity:1;min-width:90px;width:90px;transition:opacity .2s linear,width .2s linear,min-width .2s linear}"]
    })
], MatVolumeControlComponent);
export { MatVolumeControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby91aS9tYXQtdm9sdW1lLWNvbnRyb2wvbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTzVELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBcUJwQyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBcEI1QixVQUFLLEdBQXFCLElBQUksQ0FBQztRQUUvQixVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUVoQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU3QyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBUXRCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUU1QyxhQUFRLEdBQVksSUFBSSxDQUFDO0lBRU8sQ0FBQztJQVYxQyxJQUFJLEtBQUssS0FBSyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25DLElBQUksS0FBSyxDQUFDLENBQVU7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBUUQsU0FBUyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWM7UUFDckIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUs7WUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUdELFNBQVMsQ0FBQyxLQUFvQjtRQUM1QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7Q0FFRixDQUFBOztZQWxDMEIsWUFBWTs7QUFwQjVCO0lBQVIsS0FBSyxFQUFFO3dEQUFnQztBQUUvQjtJQUFSLEtBQUssRUFBRTt3REFBaUM7QUFFaEM7SUFBUixLQUFLLEVBQUU7eURBQW9CO0FBRWxCO0lBQVQsTUFBTSxFQUFFO2dFQUE0QztBQUlyRDtJQURDLEtBQUssRUFBRTtzREFDMkI7QUFNekI7SUFBVCxNQUFNLEVBQUU7K0RBQTRDO0FBRTVDO0lBQVIsS0FBSyxFQUFFOzJEQUEwQjtBQTZCbEM7SUFEQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzswREFNNUM7QUFyRFUseUJBQXlCO0lBTHJDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsNGtCQUFrRDs7S0FFbkQsQ0FBQztHQUNXLHlCQUF5QixDQXVEckM7U0F2RFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtdm9sdW1lLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRWb2x1bWVDb250cm9sQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQgPSBudWxsO1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG5cbiAgQElucHV0KCkgdm9sdW1lOiBudW1iZXIgPSAxO1xuXG4gIEBPdXRwdXQoKSB2b2x1bWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgcHJpdmF0ZSBfbXV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZ2V0IG11dGVkKCkgeyByZXR1cm4gdGhpcy5fbXV0ZWQ7IH1cbiAgc2V0IG11dGVkKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdXRlZCA9IHY7XG4gICAgdGhpcy52aWRlby5tdXRlZCA9IHRoaXMuX211dGVkO1xuICB9XG5cbiAgQE91dHB1dCgpIG11dGVkQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKSBrZXlib2FyZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBldnQ6IEV2ZW50U2VydmljZSkgeyB9XG5cbiAgc2V0Vm9sdW1lKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZvbHVtZSA9IHZhbHVlO1xuICAgIHRoaXMudmlkZW8udm9sdW1lID0gdGhpcy52b2x1bWU7XG4gICAgdGhpcy52b2x1bWVDaGFuZ2VkLmVtaXQodGhpcy52b2x1bWUpO1xuXG4gICAgaWYgKHRoaXMudm9sdW1lID4gMClcbiAgICAgIHRoaXMuc2V0TXV0ZWQoZmFsc2UpO1xuICB9XG5cbiAgc2V0TXV0ZWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tdXRlZCAhPT0gdmFsdWUpXG4gICAgICB0aGlzLnRvZ2dsZU11dGVkKCk7XG4gIH1cblxuICB0b2dnbGVNdXRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm11dGVkID0gIXRoaXMubXV0ZWQ7XG4gICAgdGhpcy51cGRhdGVNdXRlZCgpO1xuICB9XG5cbiAgdXBkYXRlTXV0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy52aWRlby5tdXRlZCA9IHRoaXMubXV0ZWQ7XG4gICAgdGhpcy5tdXRlZENoYW5nZWQuZW1pdCh0aGlzLm11dGVkKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleXVwLm0nLCBbJyRldmVudCddKVxuICBvbk11dGVLZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5rZXlib2FyZCkge1xuICAgICAgdGhpcy50b2dnbGVNdXRlZCgpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxufVxuIl19