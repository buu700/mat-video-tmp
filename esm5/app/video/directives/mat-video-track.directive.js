import * as tslib_1 from "tslib";
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
    tslib_1.__decorate([
        Input()
    ], MatVideoTrackDirective.prototype, "src", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoTrackDirective.prototype, "kind", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoTrackDirective.prototype, "srclang", void 0);
    tslib_1.__decorate([
        Input()
    ], MatVideoTrackDirective.prototype, "label", void 0);
    MatVideoTrackDirective = tslib_1.__decorate([
        Directive({
            selector: '[matVideoTrack]'
        }),
        tslib_1.__param(0, Host())
    ], MatVideoTrackDirective);
    return MatVideoTrackDirective;
}());
export { MatVideoTrackDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZpZGVvLXRyYWNrLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby9kaXJlY3RpdmVzL21hdC12aWRlby10cmFjay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUt2RDtJQVVJLGdDQUNvQixpQkFBb0MsRUFDNUMsRUFBYztRQUROLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDNUMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQVhqQixRQUFHLEdBQVcsSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBVyxJQUFJLENBQUM7UUFDcEIsWUFBTyxHQUFXLElBQUksQ0FBQztRQUN2QixVQUFLLEdBQVcsSUFBSSxDQUFDO1FBRXRCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFRaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELDRDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBaEJzQyxpQkFBaUIsdUJBQW5ELElBQUk7Z0JBQ08sVUFBVTs7SUFYakI7UUFBUixLQUFLLEVBQUU7dURBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFO3dEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTsyREFBd0I7SUFDdkI7UUFBUixLQUFLLEVBQUU7eURBQXNCO0lBSnJCLHNCQUFzQjtRQUhsQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1NBQzlCLENBQUM7UUFZTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtPQVhGLHNCQUFzQixDQTZCbEM7SUFBRCw2QkFBQztDQUFBLEFBN0JELElBNkJDO1NBN0JZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXRWaWRlb0NvbXBvbmVudCB9IGZyb20gJy4uL3ZpZGVvLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW21hdFZpZGVvVHJhY2tdJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXRWaWRlb1RyYWNrRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBzcmM6IHN0cmluZyA9IG51bGw7XG4gICAgQElucHV0KCkga2luZDogc3RyaW5nID0gbnVsbDtcbiAgICBASW5wdXQoKSBzcmNsYW5nOiBzdHJpbmcgPSBudWxsO1xuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBpbml0ID0gdHJ1ZTtcbiAgICBwcml2YXRlIHZpZGVvOiBNYXRWaWRlb0NvbXBvbmVudDtcbiAgICBwcml2YXRlIHRyYWNrOiBIVE1MVHJhY2tFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBIb3N0KCkgcHJpdmF0ZSBtYXRWaWRlb0NvbXBvbmVudDogTWF0VmlkZW9Db21wb25lbnQsXG4gICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcbiAgICApIHtcbiAgICAgICAgdGhpcy52aWRlbyA9IG1hdFZpZGVvQ29tcG9uZW50O1xuICAgICAgICB0aGlzLnRyYWNrID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbml0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyYWNrLnNyYyA9IHRoaXMuc3JjO1xuICAgICAgICB0aGlzLnRyYWNrLmtpbmQgPSB0aGlzLmtpbmQ7XG4gICAgICAgIHRoaXMudHJhY2suc3JjbGFuZyA9IHRoaXMuc3JjbGFuZztcbiAgICAgICAgdGhpcy50cmFjay5sYWJlbCA9IHRoaXMubGFiZWw7XG5cbiAgICAgICAgaWYgKCF0aGlzLmluaXQpXG4gICAgICAgICAgICB0aGlzLnZpZGVvLmxvYWQoKTtcbiAgICB9XG5cbn1cbiJdfQ==