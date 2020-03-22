import * as tslib_1 from "tslib";
import { Directive, ElementRef, Host, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatVideoComponent } from '../video.component';
let MatVideoTrackDirective = class MatVideoTrackDirective {
    constructor(matVideoComponent, el) {
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
    ngOnChanges(changes) {
        this.track.src = this.src;
        this.track.kind = this.kind;
        this.track.srclang = this.srclang;
        this.track.label = this.label;
        if (!this.init)
            this.video.load();
    }
};
MatVideoTrackDirective.ctorParameters = () => [
    { type: MatVideoComponent, decorators: [{ type: Host }] },
    { type: ElementRef }
];
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
export { MatVideoTrackDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZpZGVvLXRyYWNrLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby9kaXJlY3RpdmVzL21hdC12aWRlby10cmFjay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUt2RCxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQVUvQixZQUNvQixpQkFBb0MsRUFDNUMsRUFBYztRQUROLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDNUMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQVhqQixRQUFHLEdBQVcsSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBVyxJQUFJLENBQUM7UUFDcEIsWUFBTyxHQUFXLElBQUksQ0FBQztRQUN2QixVQUFLLEdBQVcsSUFBSSxDQUFDO1FBRXRCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFRaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztDQUVKLENBQUE7O1lBbEIwQyxpQkFBaUIsdUJBQW5ELElBQUk7WUFDTyxVQUFVOztBQVhqQjtJQUFSLEtBQUssRUFBRTttREFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7b0RBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFO3VEQUF3QjtBQUN2QjtJQUFSLEtBQUssRUFBRTtxREFBc0I7QUFKckIsc0JBQXNCO0lBSGxDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7S0FDOUIsQ0FBQztJQVlPLG1CQUFBLElBQUksRUFBRSxDQUFBO0dBWEYsc0JBQXNCLENBNkJsQztTQTdCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3QsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0VmlkZW9Db21wb25lbnQgfSBmcm9tICcuLi92aWRlby5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1ttYXRWaWRlb1RyYWNrXSdcbn0pXG5leHBvcnQgY2xhc3MgTWF0VmlkZW9UcmFja0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgc3JjOiBzdHJpbmcgPSBudWxsO1xuICAgIEBJbnB1dCgpIGtpbmQ6IHN0cmluZyA9IG51bGw7XG4gICAgQElucHV0KCkgc3JjbGFuZzogc3RyaW5nID0gbnVsbDtcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gbnVsbDtcblxuICAgIHByaXZhdGUgaW5pdCA9IHRydWU7XG4gICAgcHJpdmF0ZSB2aWRlbzogTWF0VmlkZW9Db21wb25lbnQ7XG4gICAgcHJpdmF0ZSB0cmFjazogSFRNTFRyYWNrRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASG9zdCgpIHByaXZhdGUgbWF0VmlkZW9Db21wb25lbnQ6IE1hdFZpZGVvQ29tcG9uZW50LFxuICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG4gICAgKSB7XG4gICAgICAgIHRoaXMudmlkZW8gPSBtYXRWaWRlb0NvbXBvbmVudDtcbiAgICAgICAgdGhpcy50cmFjayA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5pdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmFjay5zcmMgPSB0aGlzLnNyYztcbiAgICAgICAgdGhpcy50cmFjay5raW5kID0gdGhpcy5raW5kO1xuICAgICAgICB0aGlzLnRyYWNrLnNyY2xhbmcgPSB0aGlzLnNyY2xhbmc7XG4gICAgICAgIHRoaXMudHJhY2subGFiZWwgPSB0aGlzLmxhYmVsO1xuXG4gICAgICAgIGlmICghdGhpcy5pbml0KVxuICAgICAgICAgICAgdGhpcy52aWRlby5sb2FkKCk7XG4gICAgfVxuXG59XG4iXX0=