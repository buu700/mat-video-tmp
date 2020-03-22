var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Directive, ElementRef, Host, Input } from '@angular/core';
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
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MatVideoTrackDirective.prototype, "src", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MatVideoTrackDirective.prototype, "kind", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MatVideoTrackDirective.prototype, "srclang", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MatVideoTrackDirective.prototype, "label", void 0);
    MatVideoTrackDirective = __decorate([
        Directive({
            selector: '[matVideoTrack]'
        }),
        __param(0, Host()),
        __metadata("design:paramtypes", [MatVideoComponent,
            ElementRef])
    ], MatVideoTrackDirective);
    return MatVideoTrackDirective;
}());
export { MatVideoTrackDirective };
//# sourceMappingURL=mat-video-track.directive.js.map