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
        this._muted = false;
        this.mutedChanged = new EventEmitter();
        this.keyboard = true;
    }
    get muted() { return this._muted; }
    set muted(v) {
        this._muted = v;
        if (this.video) {
            this.video.muted = this._muted;
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
    updateMuted() {
        if (this.video) {
            this.video.muted = this.muted;
        }
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
], MatVolumeControlComponent.prototype, "muted", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby91aS9tYXQtdm9sdW1lLWNvbnRyb2wvbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTzVELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBdUJwQyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBdEI1QixVQUFLLEdBQXFCLElBQUksQ0FBQztRQUUvQixVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUVoQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU3QyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBVXRCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUU1QyxhQUFRLEdBQVksSUFBSSxDQUFDO0lBRU8sQ0FBQztJQVoxQyxJQUFJLEtBQUssS0FBSyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25DLElBQUksS0FBSyxDQUFDLENBQVU7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNoQztJQUNILENBQUM7SUFRRCxTQUFTLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYztRQUNyQixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSztZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFHRCxTQUFTLENBQUMsS0FBb0I7UUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0NBRUYsQ0FBQTs7WUFwQzBCLFlBQVk7O0FBdEI1QjtJQUFSLEtBQUssRUFBRTt3REFBZ0M7QUFFL0I7SUFBUixLQUFLLEVBQUU7d0RBQWlDO0FBRWhDO0lBQVIsS0FBSyxFQUFFO3lEQUFvQjtBQUVsQjtJQUFULE1BQU0sRUFBRTtnRUFBNEM7QUFJckQ7SUFEQyxLQUFLLEVBQUU7c0RBQzJCO0FBUXpCO0lBQVQsTUFBTSxFQUFFOytEQUE0QztBQUU1QztJQUFSLEtBQUssRUFBRTsyREFBMEI7QUErQmxDO0lBREMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7MERBTTVDO0FBekRVLHlCQUF5QjtJQUxyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLDRrQkFBa0Q7O0tBRW5ELENBQUM7R0FDVyx5QkFBeUIsQ0EyRHJDO1NBM0RZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ldmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LXZvbHVtZS1jb250cm9sJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC12b2x1bWUtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdC12b2x1bWUtY29udHJvbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0Vm9sdW1lQ29udHJvbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50ID0gbnVsbDtcblxuICBASW5wdXQoKSBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuXG4gIEBJbnB1dCgpIHZvbHVtZTogbnVtYmVyID0gMTtcblxuICBAT3V0cHV0KCkgdm9sdW1lQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHByaXZhdGUgX211dGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGdldCBtdXRlZCgpIHsgcmV0dXJuIHRoaXMuX211dGVkOyB9XG4gIHNldCBtdXRlZCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXV0ZWQgPSB2O1xuICAgIGlmICh0aGlzLnZpZGVvKSB7XG4gICAgICB0aGlzLnZpZGVvLm11dGVkID0gdGhpcy5fbXV0ZWQ7XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgpIG11dGVkQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKSBrZXlib2FyZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBldnQ6IEV2ZW50U2VydmljZSkgeyB9XG5cbiAgc2V0Vm9sdW1lKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZvbHVtZSA9IHZhbHVlO1xuICAgIHRoaXMudmlkZW8udm9sdW1lID0gdGhpcy52b2x1bWU7XG4gICAgdGhpcy52b2x1bWVDaGFuZ2VkLmVtaXQodGhpcy52b2x1bWUpO1xuXG4gICAgaWYgKHRoaXMudm9sdW1lID4gMClcbiAgICAgIHRoaXMuc2V0TXV0ZWQoZmFsc2UpO1xuICB9XG5cbiAgc2V0TXV0ZWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tdXRlZCAhPT0gdmFsdWUpXG4gICAgICB0aGlzLnRvZ2dsZU11dGVkKCk7XG4gIH1cblxuICB0b2dnbGVNdXRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm11dGVkID0gIXRoaXMubXV0ZWQ7XG4gICAgdGhpcy51cGRhdGVNdXRlZCgpO1xuICB9XG5cbiAgdXBkYXRlTXV0ZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmlkZW8pIHtcbiAgICAgIHRoaXMudmlkZW8ubXV0ZWQgPSB0aGlzLm11dGVkO1xuICAgIH1cbiAgICB0aGlzLm11dGVkQ2hhbmdlZC5lbWl0KHRoaXMubXV0ZWQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAubScsIFsnJGV2ZW50J10pXG4gIG9uTXV0ZUtleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLmtleWJvYXJkKSB7XG4gICAgICB0aGlzLnRvZ2dsZU11dGVkKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=