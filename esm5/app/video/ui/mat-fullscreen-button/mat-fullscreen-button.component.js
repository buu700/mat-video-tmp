import * as tslib_1 from "tslib";
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { EventService } from '../../services/event.service';
import { FullscreenService } from '../../services/fullscreen.service';
var MatFullscreenButtonComponent = /** @class */ (function () {
    function MatFullscreenButtonComponent(fscreen, evt) {
        this.fscreen = fscreen;
        this.evt = evt;
        this.canFullscreen = false;
        this.fullscreen = false;
        this.fullscreenChanged = new EventEmitter();
        this.keyboard = true;
    }
    MatFullscreenButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.fscreen.isEnabled())
            this.canFullscreen = true;
        this.fscreen.onChange(function (event) { return _this.fscreen.isFullscreen() ? _this.onChangesFullscreen(true) : _this.onChangesFullscreen(false); });
    };
    MatFullscreenButtonComponent.prototype.setFullscreen = function (value) {
        if (this.canFullscreen && this.fullscreen !== value)
            this.toggleFullscreen();
    };
    MatFullscreenButtonComponent.prototype.toggleFullscreen = function () {
        this.fullscreen = !this.fullscreen;
        this.updateFullscreen();
    };
    MatFullscreenButtonComponent.prototype.updateFullscreen = function () {
        this.fullscreen ? this.fscreen.request(this.player) : this.fscreen.exit();
        this.fullscreenChanged.emit(this.fullscreen);
    };
    MatFullscreenButtonComponent.prototype.onChangesFullscreen = function (value) {
        this.fullscreen = value;
        this.fullscreenChanged.emit(this.fullscreen);
    };
    MatFullscreenButtonComponent.prototype.onFullscreenKey = function (event) {
        if (this.keyboard) {
            this.toggleFullscreen();
            event.preventDefault();
        }
    };
    MatFullscreenButtonComponent.ctorParameters = function () { return [
        { type: FullscreenService },
        { type: EventService }
    ]; };
    tslib_1.__decorate([
        Input()
    ], MatFullscreenButtonComponent.prototype, "player", void 0);
    tslib_1.__decorate([
        Input()
    ], MatFullscreenButtonComponent.prototype, "fullscreen", void 0);
    tslib_1.__decorate([
        Output()
    ], MatFullscreenButtonComponent.prototype, "fullscreenChanged", void 0);
    tslib_1.__decorate([
        Input()
    ], MatFullscreenButtonComponent.prototype, "keyboard", void 0);
    tslib_1.__decorate([
        HostListener('document:keyup.f', ['$event'])
    ], MatFullscreenButtonComponent.prototype, "onFullscreenKey", null);
    MatFullscreenButtonComponent = tslib_1.__decorate([
        Component({
            selector: 'mat-fullscreen-button',
            template: "<button mat-icon-button [disabled]=\"!canFullscreen\" (click)=\"toggleFullscreen()\">\n  <mat-icon *ngIf=\"!fullscreen\">fullscreen</mat-icon>\n  <mat-icon *ngIf=\"fullscreen\">fullscreen_exit</mat-icon>\n</button>",
            styles: [""]
        })
    ], MatFullscreenButtonComponent);
    return MatFullscreenButtonComponent;
}());
export { MatFullscreenButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWZ1bGxzY3JlZW4tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby91aS9tYXQtZnVsbHNjcmVlbi1idXR0b24vbWF0LWZ1bGxzY3JlZW4tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBT3RFO0lBV0Usc0NBQ1UsT0FBMEIsRUFDMUIsR0FBaUI7UUFEakIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDMUIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVozQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUl0QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTNCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFakQsYUFBUSxHQUFZLElBQUksQ0FBQztJQUs5QixDQUFDO0lBRUwsK0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUU1QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUE5RixDQUE4RixDQUFDLENBQUM7SUFDakksQ0FBQztJQUVELG9EQUFhLEdBQWIsVUFBYyxLQUFjO1FBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUs7WUFDakQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHVEQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCx1REFBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDBEQUFtQixHQUFuQixVQUFvQixLQUFjO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFHRCxzREFBZSxHQUFmLFVBQWdCLEtBQW9CO1FBQ2xDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOztnQkFyQ2tCLGlCQUFpQjtnQkFDckIsWUFBWTs7SUFWbEI7UUFBUixLQUFLLEVBQUU7Z0VBQTBCO0lBRXpCO1FBQVIsS0FBSyxFQUFFO29FQUE2QjtJQUUzQjtRQUFULE1BQU0sRUFBRTsyRUFBaUQ7SUFFakQ7UUFBUixLQUFLLEVBQUU7a0VBQTBCO0lBbUNsQztRQURDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3VFQU01QztJQWpEVSw0QkFBNEI7UUFMeEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxrT0FBcUQ7O1NBRXRELENBQUM7T0FDVyw0QkFBNEIsQ0FtRHhDO0lBQUQsbUNBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQW5EWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBGdWxsc2NyZWVuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Z1bGxzY3JlZW4uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1mdWxsc2NyZWVuLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtZnVsbHNjcmVlbi1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXQtZnVsbHNjcmVlbi1idXR0b24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdEZ1bGxzY3JlZW5CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjYW5GdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgcGxheWVyOiBIVE1MVmlkZW9FbGVtZW50O1xuXG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgZnVsbHNjcmVlbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZnNjcmVlbjogRnVsbHNjcmVlblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBldnQ6IEV2ZW50U2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZzY3JlZW4uaXNFbmFibGVkKCkpXG4gICAgICB0aGlzLmNhbkZ1bGxzY3JlZW4gPSB0cnVlO1xuXG4gICAgdGhpcy5mc2NyZWVuLm9uQ2hhbmdlKGV2ZW50ID0+IHRoaXMuZnNjcmVlbi5pc0Z1bGxzY3JlZW4oKSA/IHRoaXMub25DaGFuZ2VzRnVsbHNjcmVlbih0cnVlKSA6IHRoaXMub25DaGFuZ2VzRnVsbHNjcmVlbihmYWxzZSkpO1xuICB9XG5cbiAgc2V0RnVsbHNjcmVlbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmNhbkZ1bGxzY3JlZW4gJiYgdGhpcy5mdWxsc2NyZWVuICE9PSB2YWx1ZSlcbiAgICAgIHRoaXMudG9nZ2xlRnVsbHNjcmVlbigpO1xuICB9XG5cbiAgdG9nZ2xlRnVsbHNjcmVlbigpOiB2b2lkIHtcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPSAhdGhpcy5mdWxsc2NyZWVuO1xuICAgIHRoaXMudXBkYXRlRnVsbHNjcmVlbigpO1xuICB9XG5cbiAgdXBkYXRlRnVsbHNjcmVlbigpOiB2b2lkIHtcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPyB0aGlzLmZzY3JlZW4ucmVxdWVzdCh0aGlzLnBsYXllcikgOiB0aGlzLmZzY3JlZW4uZXhpdCgpO1xuICAgIHRoaXMuZnVsbHNjcmVlbkNoYW5nZWQuZW1pdCh0aGlzLmZ1bGxzY3JlZW4pO1xuICB9XG5cbiAgb25DaGFuZ2VzRnVsbHNjcmVlbih2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZnVsbHNjcmVlbiA9IHZhbHVlO1xuICAgIHRoaXMuZnVsbHNjcmVlbkNoYW5nZWQuZW1pdCh0aGlzLmZ1bGxzY3JlZW4pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAuZicsIFsnJGV2ZW50J10pXG4gIG9uRnVsbHNjcmVlbktleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLmtleWJvYXJkKSB7XG4gICAgICB0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==