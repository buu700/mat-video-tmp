var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    __decorate([
        Input(),
        __metadata("design:type", HTMLVideoElement)
    ], MatFullscreenButtonComponent.prototype, "player", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatFullscreenButtonComponent.prototype, "fullscreen", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MatFullscreenButtonComponent.prototype, "fullscreenChanged", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatFullscreenButtonComponent.prototype, "keyboard", void 0);
    __decorate([
        HostListener('document:keyup.f', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MatFullscreenButtonComponent.prototype, "onFullscreenKey", null);
    MatFullscreenButtonComponent = __decorate([
        Component({
            selector: 'mat-fullscreen-button',
            templateUrl: './mat-fullscreen-button.component.html',
            styleUrls: ['./mat-fullscreen-button.component.css']
        }),
        __metadata("design:paramtypes", [FullscreenService,
            EventService])
    ], MatFullscreenButtonComponent);
    return MatFullscreenButtonComponent;
}());
export { MatFullscreenButtonComponent };
//# sourceMappingURL=mat-fullscreen-button.component.js.map