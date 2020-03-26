import * as tslib_1 from "tslib";
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { EventService } from '../../services/event.service';
var MatVolumeControlComponent = /** @class */ (function () {
    function MatVolumeControlComponent(evt) {
        this.evt = evt;
        this.video = null;
        this.color = 'primary';
        this.volume = 1;
        this.volumeChanged = new EventEmitter();
        this.muted = false;
        this.mutedChanged = new EventEmitter();
        this.keyboard = true;
    }
    MatVolumeControlComponent.prototype.ngAfterViewInit = function () {
        this.updateMuted(false);
    };
    MatVolumeControlComponent.prototype.ngOnChanges = function (changes) {
        if (changes.muted) {
            this.updateMuted(false);
        }
    };
    MatVolumeControlComponent.prototype.setVolume = function (value) {
        this.volume = value;
        this.video.volume = this.volume;
        this.volumeChanged.emit(this.volume);
        if (this.volume > 0)
            this.setMuted(false);
    };
    MatVolumeControlComponent.prototype.setMuted = function (value) {
        if (this.muted !== value)
            this.toggleMuted();
    };
    MatVolumeControlComponent.prototype.toggleMuted = function () {
        this.muted = !this.muted;
        this.updateMuted();
    };
    MatVolumeControlComponent.prototype.updateMuted = function (emitChange) {
        if (emitChange === void 0) { emitChange = true; }
        if (this.video) {
            this.video.muted = this.muted;
        }
        if (emitChange) {
            this.mutedChanged.emit(this.muted);
        }
    };
    MatVolumeControlComponent.prototype.onMuteKey = function (event) {
        if (this.keyboard) {
            this.toggleMuted();
            event.preventDefault();
        }
    };
    MatVolumeControlComponent.ctorParameters = function () { return [
        { type: EventService }
    ]; };
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
    return MatVolumeControlComponent;
}());
export { MatVolumeControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby91aS9tYXQtdm9sdW1lLWNvbnRyb2wvbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTzVEO0lBZUUsbUNBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFkNUIsVUFBSyxHQUFxQixJQUFJLENBQUM7UUFFL0IsVUFBSyxHQUFpQixTQUFTLENBQUM7UUFFaEMsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUVsQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFNUMsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUV0QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFNUMsYUFBUSxHQUFZLElBQUksQ0FBQztJQUVPLENBQUM7SUFFMUMsbURBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELCtDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCw2Q0FBUyxHQUFULFVBQVUsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCw0Q0FBUSxHQUFSLFVBQVMsS0FBYztRQUNyQixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSztZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELCtDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELCtDQUFXLEdBQVgsVUFBWSxVQUEwQjtRQUExQiwyQkFBQSxFQUFBLGlCQUEwQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQy9CO1FBRUQsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBR0QsNkNBQVMsR0FBVCxVQUFVLEtBQW9CO1FBQzVCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Z0JBL0N3QixZQUFZOztJQWQ1QjtRQUFSLEtBQUssRUFBRTs0REFBZ0M7SUFFL0I7UUFBUixLQUFLLEVBQUU7NERBQWlDO0lBRWhDO1FBQVIsS0FBSyxFQUFFOzZEQUFvQjtJQUVsQjtRQUFULE1BQU0sRUFBRTtvRUFBNEM7SUFFNUM7UUFBUixLQUFLLEVBQUU7NERBQXdCO0lBRXRCO1FBQVQsTUFBTSxFQUFFO21FQUE0QztJQUU1QztRQUFSLEtBQUssRUFBRTsrREFBMEI7SUE0Q2xDO1FBREMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7OERBTTVDO0lBOURVLHlCQUF5QjtRQUxyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLDRrQkFBa0Q7O1NBRW5ELENBQUM7T0FDVyx5QkFBeUIsQ0FnRXJDO0lBQUQsZ0NBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQWhFWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC12b2x1bWUtY29udHJvbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtdm9sdW1lLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXQtdm9sdW1lLWNvbnRyb2wuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdFZvbHVtZUNvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB2aWRlbzogSFRNTFZpZGVvRWxlbWVudCA9IG51bGw7XG5cbiAgQElucHV0KCkgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcblxuICBASW5wdXQoKSB2b2x1bWU6IG51bWJlciA9IDE7XG5cbiAgQE91dHB1dCgpIHZvbHVtZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBASW5wdXQoKSBtdXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBtdXRlZENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZ0OiBFdmVudFNlcnZpY2UpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZU11dGVkKGZhbHNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5tdXRlZCkge1xuICAgICAgdGhpcy51cGRhdGVNdXRlZChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0Vm9sdW1lKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZvbHVtZSA9IHZhbHVlO1xuICAgIHRoaXMudmlkZW8udm9sdW1lID0gdGhpcy52b2x1bWU7XG4gICAgdGhpcy52b2x1bWVDaGFuZ2VkLmVtaXQodGhpcy52b2x1bWUpO1xuXG4gICAgaWYgKHRoaXMudm9sdW1lID4gMClcbiAgICAgIHRoaXMuc2V0TXV0ZWQoZmFsc2UpO1xuICB9XG5cbiAgc2V0TXV0ZWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tdXRlZCAhPT0gdmFsdWUpXG4gICAgICB0aGlzLnRvZ2dsZU11dGVkKCk7XG4gIH1cblxuICB0b2dnbGVNdXRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm11dGVkID0gIXRoaXMubXV0ZWQ7XG4gICAgdGhpcy51cGRhdGVNdXRlZCgpO1xuICB9XG5cbiAgdXBkYXRlTXV0ZWQoZW1pdENoYW5nZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52aWRlbykge1xuICAgICAgdGhpcy52aWRlby5tdXRlZCA9IHRoaXMubXV0ZWQ7XG4gICAgfVxuXG4gICAgaWYgKGVtaXRDaGFuZ2UpIHtcbiAgICAgIHRoaXMubXV0ZWRDaGFuZ2VkLmVtaXQodGhpcy5tdXRlZCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAubScsIFsnJGV2ZW50J10pXG4gIG9uTXV0ZUtleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLmtleWJvYXJkKSB7XG4gICAgICB0aGlzLnRvZ2dsZU11dGVkKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=