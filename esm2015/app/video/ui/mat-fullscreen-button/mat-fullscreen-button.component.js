import { __decorate } from "tslib";
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { EventService } from '../../services/event.service';
import { FullscreenService } from '../../services/fullscreen.service';
let MatFullscreenButtonComponent = class MatFullscreenButtonComponent {
    constructor(fscreen, evt) {
        this.fscreen = fscreen;
        this.evt = evt;
        this.canFullscreen = false;
        this.fullscreen = false;
        this.fullscreenChanged = new EventEmitter();
        this.keyboard = true;
    }
    ngOnInit() {
        if (this.fscreen.isEnabled())
            this.canFullscreen = true;
        this.fscreen.onChange(event => this.fscreen.isFullscreen() ? this.onChangesFullscreen(true) : this.onChangesFullscreen(false));
    }
    setFullscreen(value) {
        if (this.canFullscreen && this.fullscreen !== value)
            this.toggleFullscreen();
    }
    toggleFullscreen() {
        this.fullscreen = !this.fullscreen;
        this.updateFullscreen();
    }
    updateFullscreen() {
        this.fullscreen ? this.fscreen.request(this.player) : this.fscreen.exit();
        this.fullscreenChanged.emit(this.fullscreen);
    }
    onChangesFullscreen(value) {
        this.fullscreen = value;
        this.fullscreenChanged.emit(this.fullscreen);
    }
    onFullscreenKey(event) {
        if (this.keyboard) {
            this.toggleFullscreen();
            event.preventDefault();
        }
    }
};
MatFullscreenButtonComponent.ctorParameters = () => [
    { type: FullscreenService },
    { type: EventService }
];
__decorate([
    Input()
], MatFullscreenButtonComponent.prototype, "player", void 0);
__decorate([
    Input()
], MatFullscreenButtonComponent.prototype, "fullscreen", void 0);
__decorate([
    Output()
], MatFullscreenButtonComponent.prototype, "fullscreenChanged", void 0);
__decorate([
    Input()
], MatFullscreenButtonComponent.prototype, "keyboard", void 0);
__decorate([
    HostListener('document:keyup.f', ['$event'])
], MatFullscreenButtonComponent.prototype, "onFullscreenKey", null);
MatFullscreenButtonComponent = __decorate([
    Component({
        selector: 'mat-fullscreen-button',
        template: "<button mat-icon-button [disabled]=\"!canFullscreen\" (click)=\"toggleFullscreen()\">\n  <mat-icon *ngIf=\"!fullscreen\">fullscreen</mat-icon>\n  <mat-icon *ngIf=\"fullscreen\">fullscreen_exit</mat-icon>\n</button>",
        styles: [""]
    })
], MatFullscreenButtonComponent);
export { MatFullscreenButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWZ1bGxzY3JlZW4tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby91aS9tYXQtZnVsbHNjcmVlbi1idXR0b24vbWF0LWZ1bGxzY3JlZW4tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBT3RFLElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0lBV3ZDLFlBQ1UsT0FBMEIsRUFDMUIsR0FBaUI7UUFEakIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDMUIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVozQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUl0QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTNCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFakQsYUFBUSxHQUFZLElBQUksQ0FBQztJQUs5QixDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFFNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pJLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYztRQUMxQixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLO1lBQ2pELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFjO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFHRCxlQUFlLENBQUMsS0FBb0I7UUFDbEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7Q0FFRixDQUFBOztZQXZDb0IsaUJBQWlCO1lBQ3JCLFlBQVk7O0FBVmxCO0lBQVIsS0FBSyxFQUFFOzREQUEwQjtBQUV6QjtJQUFSLEtBQUssRUFBRTtnRUFBNkI7QUFFM0I7SUFBVCxNQUFNLEVBQUU7dUVBQWlEO0FBRWpEO0lBQVIsS0FBSyxFQUFFOzhEQUEwQjtBQW1DbEM7SUFEQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzttRUFNNUM7QUFqRFUsNEJBQTRCO0lBTHhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsa09BQXFEOztLQUV0RCxDQUFDO0dBQ1csNEJBQTRCLENBbUR4QztTQW5EWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBGdWxsc2NyZWVuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Z1bGxzY3JlZW4uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1mdWxsc2NyZWVuLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtZnVsbHNjcmVlbi1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXQtZnVsbHNjcmVlbi1idXR0b24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdEZ1bGxzY3JlZW5CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjYW5GdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgcGxheWVyOiBIVE1MVmlkZW9FbGVtZW50O1xuXG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgZnVsbHNjcmVlbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZnNjcmVlbjogRnVsbHNjcmVlblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBldnQ6IEV2ZW50U2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZzY3JlZW4uaXNFbmFibGVkKCkpXG4gICAgICB0aGlzLmNhbkZ1bGxzY3JlZW4gPSB0cnVlO1xuXG4gICAgdGhpcy5mc2NyZWVuLm9uQ2hhbmdlKGV2ZW50ID0+IHRoaXMuZnNjcmVlbi5pc0Z1bGxzY3JlZW4oKSA/IHRoaXMub25DaGFuZ2VzRnVsbHNjcmVlbih0cnVlKSA6IHRoaXMub25DaGFuZ2VzRnVsbHNjcmVlbihmYWxzZSkpO1xuICB9XG5cbiAgc2V0RnVsbHNjcmVlbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmNhbkZ1bGxzY3JlZW4gJiYgdGhpcy5mdWxsc2NyZWVuICE9PSB2YWx1ZSlcbiAgICAgIHRoaXMudG9nZ2xlRnVsbHNjcmVlbigpO1xuICB9XG5cbiAgdG9nZ2xlRnVsbHNjcmVlbigpOiB2b2lkIHtcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPSAhdGhpcy5mdWxsc2NyZWVuO1xuICAgIHRoaXMudXBkYXRlRnVsbHNjcmVlbigpO1xuICB9XG5cbiAgdXBkYXRlRnVsbHNjcmVlbigpOiB2b2lkIHtcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPyB0aGlzLmZzY3JlZW4ucmVxdWVzdCh0aGlzLnBsYXllcikgOiB0aGlzLmZzY3JlZW4uZXhpdCgpO1xuICAgIHRoaXMuZnVsbHNjcmVlbkNoYW5nZWQuZW1pdCh0aGlzLmZ1bGxzY3JlZW4pO1xuICB9XG5cbiAgb25DaGFuZ2VzRnVsbHNjcmVlbih2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZnVsbHNjcmVlbiA9IHZhbHVlO1xuICAgIHRoaXMuZnVsbHNjcmVlbkNoYW5nZWQuZW1pdCh0aGlzLmZ1bGxzY3JlZW4pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAuZicsIFsnJGV2ZW50J10pXG4gIG9uRnVsbHNjcmVlbktleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLmtleWJvYXJkKSB7XG4gICAgICB0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==