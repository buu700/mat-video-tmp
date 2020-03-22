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
        this._muted = false;
        this.mutedChanged = new EventEmitter();
        this.keyboard = true;
    }
    Object.defineProperty(MatVolumeControlComponent.prototype, "muted", {
        get: function () { return this._muted; },
        set: function (v) {
            this._muted = v;
            if (this.video) {
                this.video.muted = this._muted;
            }
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
        if (this.video) {
            this.video.muted = this.muted;
        }
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
    return MatVolumeControlComponent;
}());
export { MatVolumeControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby91aS9tYXQtdm9sdW1lLWNvbnRyb2wvbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTzVEO0lBdUJFLG1DQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBdEI1QixVQUFLLEdBQXFCLElBQUksQ0FBQztRQUUvQixVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUVoQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU3QyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBVXRCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUU1QyxhQUFRLEdBQVksSUFBSSxDQUFDO0lBRU8sQ0FBQztJQVoxQyxzQkFBSSw0Q0FBSzthQUFULGNBQWMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNuQyxVQUFVLENBQVU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDaEM7UUFDSCxDQUFDOzs7T0FOa0M7SUFjbkMsNkNBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsNENBQVEsR0FBUixVQUFTLEtBQWM7UUFDckIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUs7WUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBR0QsNkNBQVMsR0FBVCxVQUFVLEtBQW9CO1FBQzVCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Z0JBbEN3QixZQUFZOztJQXRCNUI7UUFBUixLQUFLLEVBQUU7NERBQWdDO0lBRS9CO1FBQVIsS0FBSyxFQUFFOzREQUFpQztJQUVoQztRQUFSLEtBQUssRUFBRTs2REFBb0I7SUFFbEI7UUFBVCxNQUFNLEVBQUU7b0VBQTRDO0lBSXJEO1FBREMsS0FBSyxFQUFFOzBEQUMyQjtJQVF6QjtRQUFULE1BQU0sRUFBRTttRUFBNEM7SUFFNUM7UUFBUixLQUFLLEVBQUU7K0RBQTBCO0lBK0JsQztRQURDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzhEQU01QztJQXpEVSx5QkFBeUI7UUFMckMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5Qiw0a0JBQWtEOztTQUVuRCxDQUFDO09BQ1cseUJBQXlCLENBMkRyQztJQUFELGdDQUFDO0NBQUEsQUEzREQsSUEyREM7U0EzRFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtdm9sdW1lLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRWb2x1bWVDb250cm9sQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQgPSBudWxsO1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG5cbiAgQElucHV0KCkgdm9sdW1lOiBudW1iZXIgPSAxO1xuXG4gIEBPdXRwdXQoKSB2b2x1bWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgcHJpdmF0ZSBfbXV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZ2V0IG11dGVkKCkgeyByZXR1cm4gdGhpcy5fbXV0ZWQ7IH1cbiAgc2V0IG11dGVkKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdXRlZCA9IHY7XG4gICAgaWYgKHRoaXMudmlkZW8pIHtcbiAgICAgIHRoaXMudmlkZW8ubXV0ZWQgPSB0aGlzLl9tdXRlZDtcbiAgICB9XG4gIH1cblxuICBAT3V0cHV0KCkgbXV0ZWRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpIGtleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2dDogRXZlbnRTZXJ2aWNlKSB7IH1cblxuICBzZXRWb2x1bWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudm9sdW1lID0gdmFsdWU7XG4gICAgdGhpcy52aWRlby52b2x1bWUgPSB0aGlzLnZvbHVtZTtcbiAgICB0aGlzLnZvbHVtZUNoYW5nZWQuZW1pdCh0aGlzLnZvbHVtZSk7XG5cbiAgICBpZiAodGhpcy52b2x1bWUgPiAwKVxuICAgICAgdGhpcy5zZXRNdXRlZChmYWxzZSk7XG4gIH1cblxuICBzZXRNdXRlZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLm11dGVkICE9PSB2YWx1ZSlcbiAgICAgIHRoaXMudG9nZ2xlTXV0ZWQoKTtcbiAgfVxuXG4gIHRvZ2dsZU11dGVkKCk6IHZvaWQge1xuICAgIHRoaXMubXV0ZWQgPSAhdGhpcy5tdXRlZDtcbiAgICB0aGlzLnVwZGF0ZU11dGVkKCk7XG4gIH1cblxuICB1cGRhdGVNdXRlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52aWRlbykge1xuICAgICAgdGhpcy52aWRlby5tdXRlZCA9IHRoaXMubXV0ZWQ7XG4gICAgfVxuICAgIHRoaXMubXV0ZWRDaGFuZ2VkLmVtaXQodGhpcy5tdXRlZCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cC5tJywgWyckZXZlbnQnXSlcbiAgb25NdXRlS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMua2V5Ym9hcmQpIHtcbiAgICAgIHRoaXMudG9nZ2xlTXV0ZWQoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==