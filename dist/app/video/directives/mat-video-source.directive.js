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
var MatVideoSourceDirective = /** @class */ (function () {
    function MatVideoSourceDirective(matVideoComponent, el) {
        this.matVideoComponent = matVideoComponent;
        this.el = el;
        this.src = null;
        this.type = null;
        this.init = true;
        this.video = matVideoComponent;
        this.source = el.nativeElement;
        this.init = false;
    }
    MatVideoSourceDirective.prototype.ngOnChanges = function (changes) {
        this.source.src = this.src;
        this.source.type = this.type;
        if (!this.init)
            this.video.load();
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MatVideoSourceDirective.prototype, "src", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MatVideoSourceDirective.prototype, "type", void 0);
    MatVideoSourceDirective = __decorate([
        Directive({
            selector: '[matVideoSource]'
        }),
        __param(0, Host()),
        __metadata("design:paramtypes", [MatVideoComponent,
            ElementRef])
    ], MatVideoSourceDirective);
    return MatVideoSourceDirective;
}());
export { MatVideoSourceDirective };
//# sourceMappingURL=mat-video-source.directive.js.map