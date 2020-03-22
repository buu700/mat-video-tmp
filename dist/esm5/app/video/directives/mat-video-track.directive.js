import { __decorate, __param } from "tslib";
import { Directive, ElementRef, Host, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatVideoComponent } from '../video.component';
var MatVideoTrackDirective = /** @class */ (function () {
    function MatVideoTrackDirective(matVideoComponent, el) {
        this.matVideoComponent = matVideoComponent;
        this.el = el;
        this.src = null;
        this.kind = null;
        this.srclang = null;
        this.label = null;
        this.init = true;
        this.video = matVideoComponent;
        this.track = el.nativeElement;
        this.init = false;
    }
    MatVideoTrackDirective.prototype.ngOnChanges = function (changes) {
        this.track.src = this.src;
        this.track.kind = this.kind;
        this.track.srclang = this.srclang;
        this.track.label = this.label;
        if (!this.init)
            this.video.load();
    };
    MatVideoTrackDirective.ctorParameters = function () { return [
        { type: MatVideoComponent, decorators: [{ type: Host }] },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], MatVideoTrackDirective.prototype, "src", void 0);
    __decorate([
        Input()
    ], MatVideoTrackDirective.prototype, "kind", void 0);
    __decorate([
        Input()
    ], MatVideoTrackDirective.prototype, "srclang", void 0);
    __decorate([
        Input()
    ], MatVideoTrackDirective.prototype, "label", void 0);
    MatVideoTrackDirective = __decorate([
        Directive({
            selector: '[matVideoTrack]'
        }),
        __param(0, Host())
    ], MatVideoTrackDirective);
    return MatVideoTrackDirective;
}());
export { MatVideoTrackDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZpZGVvLXRyYWNrLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby9kaXJlY3RpdmVzL21hdC12aWRlby10cmFjay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUt2RDtJQVVJLGdDQUNvQixpQkFBb0MsRUFDNUMsRUFBYztRQUROLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDNUMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQVhqQixRQUFHLEdBQVcsSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBVyxJQUFJLENBQUM7UUFDcEIsWUFBTyxHQUFXLElBQUksQ0FBQztRQUN2QixVQUFLLEdBQVcsSUFBSSxDQUFDO1FBRXRCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFRaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELDRDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBaEJzQyxpQkFBaUIsdUJBQW5ELElBQUk7Z0JBQ08sVUFBVTs7SUFYakI7UUFBUixLQUFLLEVBQUU7dURBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFO3dEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTsyREFBd0I7SUFDdkI7UUFBUixLQUFLLEVBQUU7eURBQXNCO0lBSnJCLHNCQUFzQjtRQUhsQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1NBQzlCLENBQUM7UUFZTyxXQUFBLElBQUksRUFBRSxDQUFBO09BWEYsc0JBQXNCLENBNkJsQztJQUFELDZCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E3Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1hdFZpZGVvQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlkZW8uY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbWF0VmlkZW9UcmFja10nXG59KVxuZXhwb3J0IGNsYXNzIE1hdFZpZGVvVHJhY2tEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIHNyYzogc3RyaW5nID0gbnVsbDtcbiAgICBASW5wdXQoKSBraW5kOiBzdHJpbmcgPSBudWxsO1xuICAgIEBJbnB1dCgpIHNyY2xhbmc6IHN0cmluZyA9IG51bGw7XG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9IG51bGw7XG5cbiAgICBwcml2YXRlIGluaXQgPSB0cnVlO1xuICAgIHByaXZhdGUgdmlkZW86IE1hdFZpZGVvQ29tcG9uZW50O1xuICAgIHByaXZhdGUgdHJhY2s6IEhUTUxUcmFja0VsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEhvc3QoKSBwcml2YXRlIG1hdFZpZGVvQ29tcG9uZW50OiBNYXRWaWRlb0NvbXBvbmVudCxcbiAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxuICAgICkge1xuICAgICAgICB0aGlzLnZpZGVvID0gbWF0VmlkZW9Db21wb25lbnQ7XG4gICAgICAgIHRoaXMudHJhY2sgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmluaXQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJhY2suc3JjID0gdGhpcy5zcmM7XG4gICAgICAgIHRoaXMudHJhY2sua2luZCA9IHRoaXMua2luZDtcbiAgICAgICAgdGhpcy50cmFjay5zcmNsYW5nID0gdGhpcy5zcmNsYW5nO1xuICAgICAgICB0aGlzLnRyYWNrLmxhYmVsID0gdGhpcy5sYWJlbDtcblxuICAgICAgICBpZiAoIXRoaXMuaW5pdClcbiAgICAgICAgICAgIHRoaXMudmlkZW8ubG9hZCgpO1xuICAgIH1cblxufVxuIl19