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
var MatVolumeControlComponent = /** @class */ (function () {
    function MatVolumeControlComponent(evt) {
        this.evt = evt;
        this.video = null;
        this.color = 'primary';
        this.volume = 1;
        this.volumeChanged = new EventEmitter();
        this._muted = false;
        this.mutedChanged = new EventEmitter();
        this.keyboard = true;
    }
    Object.defineProperty(MatVolumeControlComponent.prototype, "muted", {
        get: function () { return this._muted; },
        set: function (v) {
            this._muted = v;
            this.video.muted = this._muted;
        },
        enumerable: true,
        configurable: true
    });
    MatVolumeControlComponent.prototype.setVolume = function (value) {
        this.volume = value;
        this.video.volume = this.volume;
        this.volumeChanged.emit(this.volume);
        if (this.volume > 0)
            this.setMuted(false);
    };
    MatVolumeControlComponent.prototype.setMuted = function (value) {
        if (this.muted !== value)
            this.toggleMuted();
    };
    MatVolumeControlComponent.prototype.toggleMuted = function () {
        this.muted = !this.muted;
        this.updateMuted();
    };
    MatVolumeControlComponent.prototype.updateMuted = function () {
        this.video.muted = this.muted;
        this.mutedChanged.emit(this.muted);
    };
    MatVolumeControlComponent.prototype.onMuteKey = function (event) {
        if (this.keyboard) {
            this.toggleMuted();
            event.preventDefault();
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", HTMLVideoElement)
    ], MatVolumeControlComponent.prototype, "video", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MatVolumeControlComponent.prototype, "color", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MatVolumeControlComponent.prototype, "volume", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MatVolumeControlComponent.prototype, "volumeChanged", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MatVolumeControlComponent.prototype, "muted", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MatVolumeControlComponent.prototype, "mutedChanged", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MatVolumeControlComponent.prototype, "keyboard", void 0);
    __decorate([
        HostListener('document:keyup.m', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MatVolumeControlComponent.prototype, "onMuteKey", null);
    MatVolumeControlComponent = __decorate([
        Component({
            selector: 'mat-volume-control',
            templateUrl: './mat-volume-control.component.html',
            styleUrls: ['./mat-volume-control.component.css']
        }),
        __metadata("design:paramtypes", [EventService])
    ], MatVolumeControlComponent);
    return MatVolumeControlComponent;
}());
export { MatVolumeControlComponent };
//# sourceMappingURL=mat-volume-control.component.js.map