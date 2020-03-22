var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var MatQualityControlComponent = /** @class */ (function () {
    function MatQualityControlComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", HTMLVideoElement)
    ], MatQualityControlComponent.prototype, "video", void 0);
    MatQualityControlComponent = __decorate([
        Component({
            selector: 'mat-quality-control',
            templateUrl: './mat-quality-control.component.html',
            styleUrls: ['./mat-quality-control.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MatQualityControlComponent);
    return MatQualityControlComponent;
}());
export { MatQualityControlComponent };
//# sourceMappingURL=mat-quality-control.component.js.map