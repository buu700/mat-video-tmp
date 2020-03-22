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
var MatFrameByFrameControlComponent = /** @class */ (function () {
    function MatFrameByFrameControlComponent() {
        this.fps = 29.97;
    }
    MatFrameByFrameControlComponent.prototype.ngOnInit = function () {
    };
    MatFrameByFrameControlComponent.prototype.seekFrames = function (nbFrames) {
        if (!this.video.paused) {
            this.video.pause();
        }
        var currentFrames = this.video.currentTime * this.fps;
        var newPos = ((currentFrames + nbFrames) / this.fps) + 0.00001;
        this.video.currentTime = newPos;
    };
    __decorate([
        Input(),
        __metadata("design:type", HTMLVideoElement)
    ], MatFrameByFrameControlComponent.prototype, "video", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MatFrameByFrameControlComponent.prototype, "fps", void 0);
    MatFrameByFrameControlComponent = __decorate([
        Component({
            selector: 'mat-frame-by-frame-control',
            templateUrl: './mat-frame-by-frame-control.component.html',
            styleUrls: ['./mat-frame-by-frame-control.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MatFrameByFrameControlComponent);
    return MatFrameByFrameControlComponent;
}());
export { MatFrameByFrameControlComponent };
//# sourceMappingURL=mat-frame-by-frame-control.component.js.map