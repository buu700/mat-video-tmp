import * as tslib_1 from "tslib";
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { EventService } from '../../services/event.service';
let MatVolumeControlComponent = class MatVolumeControlComponent {
    constructor(evt) {
        this.evt = evt;
        this.video = null;
        this.color = 'primary';
        this.volume = 1;
        this.volumeChanged = new EventEmitter();
        this.muted = false;
        this.mutedChanged = new EventEmitter();
        this.keyboard = true;
    }
    ngAfterViewInit() {
        this.updateMuted(false);
    }
    ngOnChanges(changes) {
        if (changes.muted) {
            this.updateMuted(false);
        }
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
    updateMuted(emitChange = true) {
        if (this.video) {
            this.video.muted = this.muted;
        }
        if (emitChange) {
            this.mutedChanged.emit(this.muted);
        }
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
tslib_1.__decorate([
    Input()
], MatVolumeControlComponent.prototype, "video", void 0);
tslib_1.__decorate([
    Input()
], MatVolumeControlComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Input()
], MatVolumeControlComponent.prototype, "volume", void 0);
tslib_1.__decorate([
    Output()
], MatVolumeControlComponent.prototype, "volumeChanged", void 0);
tslib_1.__decorate([
    Input()
], MatVolumeControlComponent.prototype, "muted", void 0);
tslib_1.__decorate([
    Output()
], MatVolumeControlComponent.prototype, "mutedChanged", void 0);
tslib_1.__decorate([
    Input()
], MatVolumeControlComponent.prototype, "keyboard", void 0);
tslib_1.__decorate([
    HostListener('document:keyup.m', ['$event'])
], MatVolumeControlComponent.prototype, "onMuteKey", null);
MatVolumeControlComponent = tslib_1.__decorate([
    Component({
        selector: 'mat-volume-control',
        template: "<div class=\"volume-control\">\n  <button mat-icon-button (click)=\"toggleMuted()\">\n    <mat-icon *ngIf=\"muted || volume === 0\">volume_off</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume > 0 && volume < 0.25\">volume_mute</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume >= 0.25 && volume < 0.5\">volume_down</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume >= 0.5\">volume_up</mat-icon>\n  </button>\n  <mat-slider class=\"volume-slider\" [color]=\"color\" min=\"0\" max=\"1\" step=\"0.01\" value=\"1\" (input)=\"setVolume($event.value)\">\n  </mat-slider>\n</div>",
        styles: [".volume-control{display:inline}.volume-slider{margin-left:-15px}::ng-deep.mat-slider-thumb{border-color:transparent!important}::ng-deep.mat-slider-track-background{background-color:#d3d3d3!important;transform:translateX(0)!important}.volume-control .volume-slider{visibility:hidden;opacity:0;min-width:0;width:0;transition:visibility .2s,opacity .2s linear,width .2s linear}.volume-control:hover .volume-slider{visibility:visible;opacity:1;min-width:90px;width:90px;transition:opacity .2s linear,width .2s linear,min-width .2s linear}"]
    })
], MatVolumeControlComponent);
export { MatVolumeControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby91aS9tYXQtdm9sdW1lLWNvbnRyb2wvbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTzVELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBZXBDLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFkNUIsVUFBSyxHQUFxQixJQUFJLENBQUM7UUFFL0IsVUFBSyxHQUFpQixTQUFTLENBQUM7UUFFaEMsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUVsQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFNUMsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUV0QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFNUMsYUFBUSxHQUFZLElBQUksQ0FBQztJQUVPLENBQUM7SUFFMUMsZUFBZTtRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxTQUFTLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYztRQUNyQixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSztZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVcsQ0FBQyxhQUFzQixJQUFJO1FBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDL0I7UUFFRCxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFHRCxTQUFTLENBQUMsS0FBb0I7UUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0NBRUYsQ0FBQTs7WUFqRDBCLFlBQVk7O0FBZDVCO0lBQVIsS0FBSyxFQUFFO3dEQUFnQztBQUUvQjtJQUFSLEtBQUssRUFBRTt3REFBaUM7QUFFaEM7SUFBUixLQUFLLEVBQUU7eURBQW9CO0FBRWxCO0lBQVQsTUFBTSxFQUFFO2dFQUE0QztBQUU1QztJQUFSLEtBQUssRUFBRTt3REFBd0I7QUFFdEI7SUFBVCxNQUFNLEVBQUU7K0RBQTRDO0FBRTVDO0lBQVIsS0FBSyxFQUFFOzJEQUEwQjtBQTRDbEM7SUFEQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzswREFNNUM7QUE5RFUseUJBQXlCO0lBTHJDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsNGtCQUFrRDs7S0FFbkQsQ0FBQztHQUNXLHlCQUF5QixDQWdFckM7U0FoRVkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtdm9sdW1lLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRWb2x1bWVDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQgPSBudWxsO1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG5cbiAgQElucHV0KCkgdm9sdW1lOiBudW1iZXIgPSAxO1xuXG4gIEBPdXRwdXQoKSB2b2x1bWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgQElucHV0KCkgbXV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgbXV0ZWRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpIGtleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2dDogRXZlbnRTZXJ2aWNlKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVNdXRlZChmYWxzZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubXV0ZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlTXV0ZWQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZvbHVtZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52b2x1bWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZpZGVvLnZvbHVtZSA9IHRoaXMudm9sdW1lO1xuICAgIHRoaXMudm9sdW1lQ2hhbmdlZC5lbWl0KHRoaXMudm9sdW1lKTtcblxuICAgIGlmICh0aGlzLnZvbHVtZSA+IDApXG4gICAgICB0aGlzLnNldE11dGVkKGZhbHNlKTtcbiAgfVxuXG4gIHNldE11dGVkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubXV0ZWQgIT09IHZhbHVlKVxuICAgICAgdGhpcy50b2dnbGVNdXRlZCgpO1xuICB9XG5cbiAgdG9nZ2xlTXV0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5tdXRlZCA9ICF0aGlzLm11dGVkO1xuICAgIHRoaXMudXBkYXRlTXV0ZWQoKTtcbiAgfVxuXG4gIHVwZGF0ZU11dGVkKGVtaXRDaGFuZ2U6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmlkZW8pIHtcbiAgICAgIHRoaXMudmlkZW8ubXV0ZWQgPSB0aGlzLm11dGVkO1xuICAgIH1cblxuICAgIGlmIChlbWl0Q2hhbmdlKSB7XG4gICAgICB0aGlzLm11dGVkQ2hhbmdlZC5lbWl0KHRoaXMubXV0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleXVwLm0nLCBbJyRldmVudCddKVxuICBvbk11dGVLZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5rZXlib2FyZCkge1xuICAgICAgdGhpcy50b2dnbGVNdXRlZCgpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxufVxuIl19