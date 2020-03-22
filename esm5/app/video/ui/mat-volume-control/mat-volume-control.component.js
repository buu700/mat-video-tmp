import { __decorate } from "tslib";
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { EventService } from '../../services/event.service';
var MatVolumeControlComponent = /** @class */ (function () {
    function MatVolumeControlComponent(evt) {
        this.evt = evt;
        this.video = null;
        this.color = 'primary';
        this.volume = 1;
        this.volumeChanged = new EventEmitter();
        this._muted = false;
        this.mutedChanged = new EventEmitter();
        this.keyboard = true;
    }
    Object.defineProperty(MatVolumeControlComponent.prototype, "muted", {
        get: function () { return this._muted; },
        set: function (v) {
            this._muted = v;
            this.video.muted = this._muted;
        },
        enumerable: true,
        configurable: true
    });
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
    MatVolumeControlComponent.prototype.updateMuted = function () {
        this.video.muted = this.muted;
        this.mutedChanged.emit(this.muted);
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
    return MatVolumeControlComponent;
}());
export { MatVolumeControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby91aS9tYXQtdm9sdW1lLWNvbnRyb2wvbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTzVEO0lBcUJFLG1DQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBcEI1QixVQUFLLEdBQXFCLElBQUksQ0FBQztRQUUvQixVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUVoQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU3QyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBUXRCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUU1QyxhQUFRLEdBQVksSUFBSSxDQUFDO0lBRU8sQ0FBQztJQVYxQyxzQkFBSSw0Q0FBSzthQUFULGNBQWMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNuQyxVQUFVLENBQVU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxDQUFDOzs7T0FKa0M7SUFZbkMsNkNBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsNENBQVEsR0FBUixVQUFTLEtBQWM7UUFDckIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUs7WUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUdELDZDQUFTLEdBQVQsVUFBVSxLQUFvQjtRQUM1QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7O2dCQWhDd0IsWUFBWTs7SUFwQjVCO1FBQVIsS0FBSyxFQUFFOzREQUFnQztJQUUvQjtRQUFSLEtBQUssRUFBRTs0REFBaUM7SUFFaEM7UUFBUixLQUFLLEVBQUU7NkRBQW9CO0lBRWxCO1FBQVQsTUFBTSxFQUFFO29FQUE0QztJQUlyRDtRQURDLEtBQUssRUFBRTswREFDMkI7SUFNekI7UUFBVCxNQUFNLEVBQUU7bUVBQTRDO0lBRTVDO1FBQVIsS0FBSyxFQUFFOytEQUEwQjtJQTZCbEM7UUFEQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs4REFNNUM7SUFyRFUseUJBQXlCO1FBTHJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsNGtCQUFrRDs7U0FFbkQsQ0FBQztPQUNXLHlCQUF5QixDQXVEckM7SUFBRCxnQ0FBQztDQUFBLEFBdkRELElBdURDO1NBdkRZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ldmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LXZvbHVtZS1jb250cm9sJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC12b2x1bWUtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdC12b2x1bWUtY29udHJvbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0Vm9sdW1lQ29udHJvbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50ID0gbnVsbDtcblxuICBASW5wdXQoKSBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuXG4gIEBJbnB1dCgpIHZvbHVtZTogbnVtYmVyID0gMTtcblxuICBAT3V0cHV0KCkgdm9sdW1lQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHByaXZhdGUgX211dGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGdldCBtdXRlZCgpIHsgcmV0dXJuIHRoaXMuX211dGVkOyB9XG4gIHNldCBtdXRlZCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXV0ZWQgPSB2O1xuICAgIHRoaXMudmlkZW8ubXV0ZWQgPSB0aGlzLl9tdXRlZDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBtdXRlZENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZ0OiBFdmVudFNlcnZpY2UpIHsgfVxuXG4gIHNldFZvbHVtZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52b2x1bWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZpZGVvLnZvbHVtZSA9IHRoaXMudm9sdW1lO1xuICAgIHRoaXMudm9sdW1lQ2hhbmdlZC5lbWl0KHRoaXMudm9sdW1lKTtcblxuICAgIGlmICh0aGlzLnZvbHVtZSA+IDApXG4gICAgICB0aGlzLnNldE11dGVkKGZhbHNlKTtcbiAgfVxuXG4gIHNldE11dGVkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubXV0ZWQgIT09IHZhbHVlKVxuICAgICAgdGhpcy50b2dnbGVNdXRlZCgpO1xuICB9XG5cbiAgdG9nZ2xlTXV0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5tdXRlZCA9ICF0aGlzLm11dGVkO1xuICAgIHRoaXMudXBkYXRlTXV0ZWQoKTtcbiAgfVxuXG4gIHVwZGF0ZU11dGVkKCk6IHZvaWQge1xuICAgIHRoaXMudmlkZW8ubXV0ZWQgPSB0aGlzLm11dGVkO1xuICAgIHRoaXMubXV0ZWRDaGFuZ2VkLmVtaXQodGhpcy5tdXRlZCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cC5tJywgWyckZXZlbnQnXSlcbiAgb25NdXRlS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMua2V5Ym9hcmQpIHtcbiAgICAgIHRoaXMudG9nZ2xlTXV0ZWQoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==