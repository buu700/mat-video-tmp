(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/slider'), require('@angular/cdk/a11y'), require('@angular/cdk/bidi')) :
    typeof define === 'function' && define.amd ? define('mat-video', ['exports', '@angular/common', '@angular/core', '@angular/material/button', '@angular/material/icon', '@angular/material/slider', '@angular/cdk/a11y', '@angular/cdk/bidi'], factory) :
    (global = global || self, factory(global['mat-video'] = {}, global.ng.common, global.ng.core, global.ng.material.button, global.ng.material.icon, global.ng.material.slider, global.ng.cdk.a11y, global.ng.cdk.bidi));
}(this, (function (exports, common, core, button, icon, slider, a11y, bidi) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var EventService = /** @class */ (function () {
        function EventService() {
        }
        EventService.prototype.addEvents = function (renderer, events) {
            var e_1, _a;
            var _loop_1 = function (event_1) {
                event_1.dispose = renderer.listen(event_1.element, event_1.name, function (newEvent) { return event_1.callback(newEvent); });
            };
            try {
                for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                    var event_1 = events_1_1.value;
                    _loop_1(event_1);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        EventService.prototype.removeEvents = function (events) {
            var e_2, _a;
            try {
                for (var events_2 = __values(events), events_2_1 = events_2.next(); !events_2_1.done; events_2_1 = events_2.next()) {
                    var event_2 = events_2_1.value;
                    if (event_2.dispose)
                        event_2.dispose();
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (events_2_1 && !events_2_1.done && (_a = events_2.return)) _a.call(events_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        EventService = __decorate([
            core.Injectable()
        ], EventService);
        return EventService;
    }());

    var MatVolumeControlComponent = /** @class */ (function () {
        function MatVolumeControlComponent(evt) {
            this.evt = evt;
            this.video = null;
            this.color = 'primary';
            this.volume = 1;
            this.volumeChanged = new core.EventEmitter();
            this.muted = false;
            this.mutedChanged = new core.EventEmitter();
            this.keyboard = true;
        }
        MatVolumeControlComponent.prototype.ngAfterViewInit = function () {
            this.updateMuted(false);
        };
        MatVolumeControlComponent.prototype.ngOnChanges = function (changes) {
            if (changes.muted) {
                this.updateMuted(false);
            }
        };
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
        MatVolumeControlComponent.prototype.updateMuted = function (emitChange) {
            if (emitChange === void 0) { emitChange = true; }
            if (this.video) {
                this.video.muted = this.muted;
            }
            if (emitChange) {
                this.mutedChanged.emit(this.muted);
            }
        };
        MatVolumeControlComponent.prototype.onMuteKey = function (event) {
            if (this.keyboard) {
                this.toggleMuted();
                event.preventDefault();
            }
        };
        MatVolumeControlComponent.ctorParameters = function () { return [
            { type: EventService }
        ]; };
        __decorate([
            core.Input()
        ], MatVolumeControlComponent.prototype, "video", void 0);
        __decorate([
            core.Input()
        ], MatVolumeControlComponent.prototype, "color", void 0);
        __decorate([
            core.Input()
        ], MatVolumeControlComponent.prototype, "volume", void 0);
        __decorate([
            core.Output()
        ], MatVolumeControlComponent.prototype, "volumeChanged", void 0);
        __decorate([
            core.Input()
        ], MatVolumeControlComponent.prototype, "muted", void 0);
        __decorate([
            core.Output()
        ], MatVolumeControlComponent.prototype, "mutedChanged", void 0);
        __decorate([
            core.Input()
        ], MatVolumeControlComponent.prototype, "keyboard", void 0);
        __decorate([
            core.HostListener('document:keyup.m', ['$event'])
        ], MatVolumeControlComponent.prototype, "onMuteKey", null);
        MatVolumeControlComponent = __decorate([
            core.Component({
                selector: 'mat-volume-control',
                template: "<div class=\"volume-control\">\n  <button mat-icon-button (click)=\"toggleMuted()\">\n    <mat-icon *ngIf=\"muted || volume === 0\">volume_off</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume > 0 && volume < 0.25\">volume_mute</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume >= 0.25 && volume < 0.5\">volume_down</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume >= 0.5\">volume_up</mat-icon>\n  </button>\n  <mat-slider class=\"volume-slider\" [color]=\"color\" min=\"0\" max=\"1\" step=\"0.01\" value=\"1\" (input)=\"setVolume($event.value)\">\n  </mat-slider>\n</div>",
                styles: [".volume-control{display:inline}.volume-slider{margin-left:-15px}::ng-deep.mat-slider-thumb{border-color:transparent!important}::ng-deep.mat-slider-track-background{background-color:#d3d3d3!important;transform:translateX(0)!important}.volume-control .volume-slider{visibility:hidden;opacity:0;min-width:0;width:0;transition:visibility .2s,opacity .2s linear,width .2s linear}.volume-control:hover .volume-slider{visibility:visible;opacity:1;min-width:90px;width:90px;transition:opacity .2s linear,width .2s linear,min-width .2s linear}"]
            })
        ], MatVolumeControlComponent);
        return MatVolumeControlComponent;
    }());

    var MatVideoComponent = /** @class */ (function () {
        function MatVideoComponent(renderer, evt) {
            this.renderer = renderer;
            this.evt = evt;
            this.src = null;
            this.title = null;
            this.autoplay = false;
            this.preload = true;
            this.loop = false;
            this.quality = true;
            this.fullscreen = true;
            this.playsinline = false;
            this.showFrameByFrame = false;
            this.fps = 29.97;
            this.download = false;
            this.color = 'primary';
            this.spinner = 'spin';
            this.poster = null;
            this.keyboard = true;
            this.overlay = null;
            this.muted = false;
            this.mutedChange = new core.EventEmitter();
            this.timeChange = new core.EventEmitter();
            this.playing = false;
            this.isFullscreen = false;
            this.videoLoaded = false;
            this.isMouseMoving = false;
            this.isMouseMovingTimeout = 2000;
        }
        Object.defineProperty(MatVideoComponent.prototype, "time", {
            get: function () {
                return this.getVideoTag().currentTime;
            },
            set: function (val) {
                var _this = this;
                var video = this.getVideoTag();
                if (video && val) {
                    if (val > video.duration) {
                        val = video.duration;
                    }
                    if (val < 0) {
                        val = 0;
                    }
                    if (val !== video.currentTime) {
                        video.currentTime = val;
                    }
                    if (this.lastTime !== video.currentTime) {
                        setTimeout(function () { return _this.timeChange.emit(video.currentTime); }, 0);
                        this.lastTime = video.currentTime;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        MatVideoComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.events = [
                { element: this.video.nativeElement, name: 'loadstart', callback: function (event) { return _this.videoLoaded = false; }, dispose: null },
                { element: this.video.nativeElement, name: 'loadedmetadata', callback: function (event) { return _this.evLoadedMetadata(event); }, dispose: null },
                { element: this.video.nativeElement, name: 'error', callback: function (event) { return console.error('Unhandled Video Error', event); }, dispose: null },
                { element: this.video.nativeElement, name: 'contextmenu', callback: function (event) { return event.preventDefault(); }, dispose: null },
                { element: this.video.nativeElement, name: 'timeupdate', callback: function (event) { return _this.evTimeUpdate(event); }, dispose: null },
                { element: this.player.nativeElement, name: 'mousemove', callback: function (event) { return _this.evMouseMove(event); }, dispose: null }
            ];
            this.video.nativeElement.onloadeddata = function () { return _this.videoLoaded = true; };
            this.evt.addEvents(this.renderer, this.events);
            this.setVideoSrc(this.src);
        };
        MatVideoComponent.prototype.ngOnChanges = function (changes) {
            if (changes.src) {
                this.setVideoSrc(this.src);
            }
        };
        MatVideoComponent.prototype.ngOnDestroy = function () {
            this.video.nativeElement.onloadeddata = null;
            this.evt.removeEvents(this.events);
            this.setVideoSrc(null);
        };
        MatVideoComponent.prototype.load = function () {
            if (this.video && this.video.nativeElement)
                this.video.nativeElement.load();
        };
        MatVideoComponent.prototype.getVideoTag = function () {
            return this.video && this.video.nativeElement ? this.video.nativeElement : null;
        };
        MatVideoComponent.prototype.evLoadedMetadata = function (event) {
            this.videoWidth = this.video.nativeElement.videoWidth;
            this.videoHeight = this.video.nativeElement.videoHeight;
            this.videoLoaded = true;
        };
        MatVideoComponent.prototype.evMouseMove = function (event) {
            var _this = this;
            this.isMouseMoving = true;
            clearTimeout(this.isMouseMovingTimer);
            this.isMouseMovingTimer = setTimeout(function () {
                _this.isMouseMoving = false;
            }, this.isMouseMovingTimeout);
        };
        MatVideoComponent.prototype.evTimeUpdate = function (event) {
            this.time = this.getVideoTag().currentTime;
        };
        MatVideoComponent.prototype.getOverlayClass = function (activeClass, inactiveClass) {
            if (this.overlay === null) {
                return (!this.playing || this.isMouseMoving) ? activeClass : inactiveClass;
            }
            else {
                return this.overlay ? activeClass : inactiveClass;
            }
        };
        MatVideoComponent.prototype.setVideoSrc = function (src) {
            if (this.srcObjectURL) {
                URL.revokeObjectURL(this.srcObjectURL);
                this.srcObjectURL = null;
            }
            if (!this.video || !this.video.nativeElement) {
                return;
            }
            if (!src) {
                this.video.nativeElement.src = null;
                if ('srcObject' in HTMLVideoElement.prototype) {
                    this.video.nativeElement.srcObject = new MediaStream();
                }
            }
            else if (typeof src === 'string') {
                this.video.nativeElement.src = src;
            }
            else if ('srcObject' in HTMLVideoElement.prototype) {
                this.video.nativeElement.srcObject = src;
            }
            else {
                this.srcObjectURL = URL.createObjectURL(src);
                this.video.nativeElement.src = this.srcObjectURL;
            }
            if (this.volumeControl) {
                this.volumeControl.updateMuted(false);
            }
        };
        MatVideoComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: EventService }
        ]; };
        __decorate([
            core.ViewChild('player')
        ], MatVideoComponent.prototype, "player", void 0);
        __decorate([
            core.ViewChild('video')
        ], MatVideoComponent.prototype, "video", void 0);
        __decorate([
            core.ViewChild(MatVolumeControlComponent)
        ], MatVideoComponent.prototype, "volumeControl", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "src", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "title", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "autoplay", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "preload", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "loop", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "quality", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "fullscreen", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "playsinline", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "showFrameByFrame", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "fps", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "download", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "color", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "spinner", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "poster", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "keyboard", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "overlay", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "muted", void 0);
        __decorate([
            core.Output()
        ], MatVideoComponent.prototype, "mutedChange", void 0);
        __decorate([
            core.Input()
        ], MatVideoComponent.prototype, "time", null);
        __decorate([
            core.Output()
        ], MatVideoComponent.prototype, "timeChange", void 0);
        MatVideoComponent = __decorate([
            core.Component({
                selector: 'mat-video',
                template: "<div #player class=\"videoplayer\" [ngClass]=\"getOverlayClass('show-mouse', 'hide-mouse')\">\n    <div class=\"header\" *ngIf=\"title\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\n        {{title}}\n    </div>\n\n    <video #video class=\"video\" [attr.autoplay]=\"autoplay ? true : null\"\n        [preload]=\"preload ? 'auto' : 'metadata'\" [attr.poster]=\"poster ? poster : null\"\n        [attr.loop]=\"loop ? loop : null\" [attr.playsinline]=\"playsinline ? true : null\">\n        <ng-content select=\"source\"></ng-content>\n        <ng-content select=\"track\"></ng-content>\n        This browser does not support HTML5 video.\n    </video>\n\n    <div class=\"controls\" *ngIf=\"videoLoaded\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\n        <div class=\"progress\">\n            <mat-seek-progress-control [color]=\"color\" [video]=\"video\"></mat-seek-progress-control>\n        </div>\n\n        <div class=\"menu\">\n            <div class=\"left\">\n                <mat-play-button (playChanged)=\"playing = $event\" [video]=\"video\" [keyboard]=\"keyboard\">\n                </mat-play-button>\n\n                <mat-frame-by-frame-control *ngIf=\"showFrameByFrame\" [video]=\"video\" [fps]=\"fps\"></mat-frame-by-frame-control>\n\n                <mat-volume-control [muted]=\"muted\" (mutedChanged)=\"muted = $event; mutedChange.emit(muted);\"\n                    [color]=\"color\" [video]=\"video\" [keyboard]=\"keyboard\">\n                </mat-volume-control>\n\n                <mat-time-control [video]=\"video\"></mat-time-control>\n            </div>\n\n            <div class=\"right\">\n                <mat-quality-control *ngIf=\"quality\" [video]=\"video\"></mat-quality-control>\n\n                <mat-download-button *ngIf=\"download\" [title]=\"title\" [video]=\"video\"></mat-download-button>\n\n                <mat-fullscreen-button *ngIf=\"fullscreen\" (fullscreenChanged)=\"isFullscreen = $event\" [player]=\"player\"\n                    [keyboard]=\"keyboard\"></mat-fullscreen-button>\n            </div>\n        </div>\n    </div>\n\n    <mat-video-spinner [spinner]=\"spinner\" [video]=\"video\"></mat-video-spinner>\n</div>\n",
                styles: [".videoplayer{font-family:Roboto,\"Helvetica Neue\",sans-serif;background-color:#000;position:relative;width:100%;height:100%}.header{color:#fff;display:flex;justify-content:center;align-items:center;position:absolute;left:0;top:0;padding:14px 0;width:100%;z-index:1;background-image:linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.65))}.video{display:block;width:100%;height:100%;z-index:0}.controls{color:#fff;position:absolute;left:0;bottom:0;width:100%;z-index:1;background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.65))}.controls .progress{height:26px}.controls .menu{display:flex;align-items:center;flex-direction:row;justify-content:space-between;height:48px}.controls .menu .left{justify-content:flex-start}.controls .menu .right{justify-content:flex-end}.visible{visibility:visible;opacity:1;transition:opacity .5s linear}.hidden{visibility:hidden;opacity:0;transition:visibility .5s,opacity .5s linear}.show-mouse{cursor:default}.hide-mouse{cursor:none}"]
            })
        ], MatVideoComponent);
        return MatVideoComponent;
    }());

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
        MatVideoSourceDirective.ctorParameters = function () { return [
            { type: MatVideoComponent, decorators: [{ type: core.Host }] },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], MatVideoSourceDirective.prototype, "src", void 0);
        __decorate([
            core.Input()
        ], MatVideoSourceDirective.prototype, "type", void 0);
        MatVideoSourceDirective = __decorate([
            core.Directive({
                selector: '[matVideoSource]'
            }),
            __param(0, core.Host())
        ], MatVideoSourceDirective);
        return MatVideoSourceDirective;
    }());

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
            { type: MatVideoComponent, decorators: [{ type: core.Host }] },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], MatVideoTrackDirective.prototype, "src", void 0);
        __decorate([
            core.Input()
        ], MatVideoTrackDirective.prototype, "kind", void 0);
        __decorate([
            core.Input()
        ], MatVideoTrackDirective.prototype, "srclang", void 0);
        __decorate([
            core.Input()
        ], MatVideoTrackDirective.prototype, "label", void 0);
        MatVideoTrackDirective = __decorate([
            core.Directive({
                selector: '[matVideoTrack]'
            }),
            __param(0, core.Host())
        ], MatVideoTrackDirective);
        return MatVideoTrackDirective;
    }());

    /** Counter used to generate unique IDs for progress bars. */
    var sliderprogressbarId = 0;
    var MatSliderProgressBarComponent = /** @class */ (function (_super) {
        __extends(MatSliderProgressBarComponent, _super);
        function MatSliderProgressBarComponent(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) {
            var _this = _super.call(this, elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) || this;
            _this.mode = 'buffer';
            _this.value = 0;
            _this._bufferValue = 0;
            /** The id of the progress bar. */
            _this.sliderprogressbarId = "mat-slider-progress-bar-" + sliderprogressbarId++;
            _this.tabIndex = parseInt(tabIndex) || 0;
            return _this;
        }
        Object.defineProperty(MatSliderProgressBarComponent.prototype, "bufferValue", {
            /** Buffer value of the progress bar. Defaults to zero. */
            get: function () { return this._bufferValue; },
            set: function (v) { this._bufferValue = clamp(v || 0); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatSliderProgressBarComponent.prototype, "_trackBufferStyles", {
            /** CSS styles for the track fill element. */
            get: function () {
                if (this.mode === 'buffer') {
                    var axis = this.vertical ? 'Y' : 'X';
                    return {
                        'transform': "translate" + axis + "(0px) scale" + axis + "(" + this._bufferValue / 100 + ")"
                    };
                }
            },
            enumerable: true,
            configurable: true
        });
        MatSliderProgressBarComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: a11y.FocusMonitor },
            { type: core.ChangeDetectorRef },
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
            { type: String, decorators: [{ type: core.Attribute, args: ['tabindex',] }] }
        ]; };
        __decorate([
            core.Input()
        ], MatSliderProgressBarComponent.prototype, "mode", void 0);
        __decorate([
            core.Input()
        ], MatSliderProgressBarComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], MatSliderProgressBarComponent.prototype, "bufferValue", null);
        MatSliderProgressBarComponent = __decorate([
            core.Component({
                selector: 'mat-slider-progress-bar',
                template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n    <div class=\"mat-slider-track-wrapper\">\n        <svg width=\"100%\" height=\"2\" focusable=\"false\" class=\"mat-slider-progress-background\">\n            <defs>\n                <pattern [id]=\"sliderprogressbarId\" x=\"2.5\" y=\"0\" width=\"5\" height=\"2.5\" patternUnits=\"userSpaceOnUse\">\n                    <circle cx=\"1.25\" cy=\"1.25\" r=\"1.25\" />\n                </pattern>\n            </defs>\n            <rect [attr.fill]=\"'url(#' + sliderprogressbarId + ')'\" width=\"100%\" height=\"100%\" />\n        </svg>\n        <div class=\"mat-slider-track-fill mat-slider-track-buffer\" [ngStyle]=\"_trackBufferStyles\"></div>\n        <div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div>\n    </div>\n    <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\">\n        <div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div>\n    </div>\n    <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\">\n        <div class=\"mat-slider-focus-ring\"></div>\n        <div class=\"mat-slider-thumb\"></div>\n        <div class=\"mat-slider-thumb-label\">\n            <span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span>\n        </div>\n    </div>\n</div>",
                providers: [slider.MAT_SLIDER_VALUE_ACCESSOR],
                host: {
                    '(focus)': '_onFocus()',
                    '(blur)': '_onBlur()',
                    '(click)': 'this["_onClick"] ? this["_onClick"]($event) : null',
                    '(mousedown)': 'this["_onMousedown"] ? this["_onMousedown"]($event) : null',
                    '(keydown)': '_onKeydown($event)',
                    '(keyup)': '_onKeyup()',
                    '(mouseenter)': '_onMouseenter()',
                    'class': 'mat-slider',
                    'role': 'slider',
                    '[tabIndex]': 'tabIndex',
                    '[attr.aria-disabled]': 'disabled',
                    '[attr.aria-valuemax]': 'max',
                    '[attr.aria-valuemin]': 'min',
                    '[attr.aria-valuenow]': 'value',
                    '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
                    '[class.mat-slider-disabled]': 'disabled',
                    '[class.mat-slider-has-ticks]': 'tickInterval',
                    '[class.mat-slider-horizontal]': '!vertical',
                    '[class.mat-slider-axis-inverted]': '_invertAxis',
                    '[class.mat-slider-sliding]': '_isSliding',
                    '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
                    '[class.mat-slider-vertical]': 'vertical',
                    '[class.mat-slider-min-value]': '_isMinValue',
                    '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue && _thumbGap && _invertAxis',
                },
                inputs: ['disabled', 'color', 'tabIndex'],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [":host{width:100%}.mat-slider-progress-background{position:absolute;height:2px;width:100%;fill:#d3d3d3}.mat-slider-track-buffer{background-color:#d3d3d3!important}.mat-slider-thumb{border-color:transparent!important;visibility:hidden;opacity:0;transition:visibility .2s,opacity .2s linear}:host:hover .mat-slider-thumb{visibility:visible;opacity:1;transition:opacity .2s linear}"]
            }),
            __param(3, core.Optional()),
            __param(4, core.Attribute('tabindex'))
        ], MatSliderProgressBarComponent);
        return MatSliderProgressBarComponent;
    }(slider.MatSlider));
    /** Clamps a value to be between two numbers, by default 0 and 100. */
    function clamp(v, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 100; }
        return Math.max(min, Math.min(max, v));
    }

    var SecondsToTimePipe = /** @class */ (function () {
        function SecondsToTimePipe() {
            this.times = {
                year: 31557600,
                month: 2629746,
                day: 86400,
                hour: 3600,
            };
        }
        SecondsToTimePipe.prototype.transform = function (seconds) {
            if (!seconds)
                return '0:00';
            else {
                var time_string = '';
                for (var key in this.times) {
                    if (Math.floor(seconds / this.times[key]) > 0) {
                        time_string += Math.floor(seconds / this.times[key]).toString() + ':';
                        seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);
                    }
                }
                time_string += Math.floor(seconds / 60).toString() + ':';
                seconds = seconds - 60 * Math.floor(seconds / 60);
                if (Math.floor(seconds) < 10)
                    time_string += '0';
                time_string += Math.floor(seconds).toString();
                return time_string;
            }
        };
        SecondsToTimePipe = __decorate([
            core.Pipe({
                name: 'secondsToTime'
            })
        ], SecondsToTimePipe);
        return SecondsToTimePipe;
    }());

    var FullscreenService = /** @class */ (function () {
        function FullscreenService() {
            this.fnMap = [
                // Object keys
                [
                    'requestFullscreen',
                    'exitFullscreen',
                    'fullscreenElement',
                    'fullscreenEnabled',
                    'fullscreenchange',
                    'fullscreenerror'
                ],
                // New WebKit
                [
                    'webkitRequestFullscreen',
                    'webkitExitFullscreen',
                    'webkitFullscreenElement',
                    'webkitFullscreenEnabled',
                    'webkitfullscreenchange',
                    'webkitfullscreenerror'
                ],
                // Old WebKit (Safari 5.1)
                [
                    'webkitRequestFullScreen',
                    'webkitCancelFullScreen',
                    'webkitCurrentFullScreenElement',
                    'webkitCancelFullScreen',
                    'webkitfullscreenchange',
                    'webkitfullscreenerror'
                ],
                // Mozilla
                [
                    'mozRequestFullScreen',
                    'mozCancelFullScreen',
                    'mozFullScreenElement',
                    'mozFullScreenEnabled',
                    'mozfullscreenchange',
                    'mozfullscreenerror'
                ],
                // MS
                [
                    'msRequestFullscreen',
                    'msExitFullscreen',
                    'msFullscreenElement',
                    'msFullscreenEnabled',
                    'MSFullscreenChange',
                    'MSFullscreenError'
                ]
            ];
            this.keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;
            var ret = {};
            var val;
            for (var i = 0; i < this.fnMap.length; i++) {
                val = this.fnMap[i];
                if (val && val[1] in document) {
                    for (i = 0; i < val.length; i++) {
                        // Map everything to the first list of keys
                        ret[this.fnMap[0][i].toString()] = val[i];
                    }
                    this.fn = ret;
                }
            }
        }
        FullscreenService.prototype.request = function (elem) {
            var request = this.fn.requestFullscreen;
            elem = elem || document.documentElement;
            // Work around Safari 5.1 bug: reports support for
            // keyboard in fullscreen even though it doesn't.
            // Browser sniffing, since the alternative with
            // setTimeout is even worse.
            if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) {
                elem[request]();
            }
            else {
                elem[request](this.keyboardAllowed ? Element.ALLOW_KEYBOARD_INPUT : {});
            }
        };
        FullscreenService.prototype.exit = function () {
            document[this.fn.exitFullscreen]();
        };
        FullscreenService.prototype.toggle = function (elem) {
            if (this.isFullscreen()) {
                this.exit();
            }
            else {
                this.request(elem);
            }
        };
        FullscreenService.prototype.onChange = function (callback) {
            document.addEventListener(this.fn.fullscreenchange, callback, false);
        };
        FullscreenService.prototype.onError = function (callback) {
            document.addEventListener(this.fn.fullscreenerror, callback, false);
        };
        FullscreenService.prototype.isFullscreen = function () {
            return Boolean(document[this.fn.fullscreenElement]);
        };
        FullscreenService.prototype.isEnabled = function () {
            // Coerce to boolean in case of old WebKit
            return Boolean(document[this.fn.fullscreenEnabled]);
        };
        FullscreenService.prototype.getElement = function () {
            return document[this.fn.fullscreenElement];
        };
        FullscreenService = __decorate([
            core.Injectable()
        ], FullscreenService);
        return FullscreenService;
    }());

    var MatDownloadButtonComponent = /** @class */ (function () {
        function MatDownloadButtonComponent() {
        }
        __decorate([
            core.Input()
        ], MatDownloadButtonComponent.prototype, "video", void 0);
        __decorate([
            core.Input()
        ], MatDownloadButtonComponent.prototype, "title", void 0);
        MatDownloadButtonComponent = __decorate([
            core.Component({
                selector: 'mat-download-button',
                template: "<a mat-icon-button [href]=\"video?.currentSrc\" [download]=\"title\">\n  <mat-icon>file_download</mat-icon>\n</a>",
                styles: ["a{color:inherit;text-decoration:none}"]
            })
        ], MatDownloadButtonComponent);
        return MatDownloadButtonComponent;
    }());

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
            core.Input()
        ], MatFrameByFrameControlComponent.prototype, "video", void 0);
        __decorate([
            core.Input()
        ], MatFrameByFrameControlComponent.prototype, "fps", void 0);
        MatFrameByFrameControlComponent = __decorate([
            core.Component({
                selector: 'mat-frame-by-frame-control',
                template: "<button mat-icon-button (click)=\"seekFrames(-5)\">\n    <mat-icon>skip_previous</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(-1)\">\n    <mat-icon>arrow_left</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(1)\">\n    <mat-icon>arrow_right</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(5)\">\n    <mat-icon>skip_next</mat-icon>\n</button>",
                styles: [""]
            })
        ], MatFrameByFrameControlComponent);
        return MatFrameByFrameControlComponent;
    }());

    var MatFullscreenButtonComponent = /** @class */ (function () {
        function MatFullscreenButtonComponent(fscreen, evt) {
            this.fscreen = fscreen;
            this.evt = evt;
            this.canFullscreen = false;
            this.fullscreen = false;
            this.fullscreenChanged = new core.EventEmitter();
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
        MatFullscreenButtonComponent.ctorParameters = function () { return [
            { type: FullscreenService },
            { type: EventService }
        ]; };
        __decorate([
            core.Input()
        ], MatFullscreenButtonComponent.prototype, "player", void 0);
        __decorate([
            core.Input()
        ], MatFullscreenButtonComponent.prototype, "fullscreen", void 0);
        __decorate([
            core.Output()
        ], MatFullscreenButtonComponent.prototype, "fullscreenChanged", void 0);
        __decorate([
            core.Input()
        ], MatFullscreenButtonComponent.prototype, "keyboard", void 0);
        __decorate([
            core.HostListener('document:keyup.f', ['$event'])
        ], MatFullscreenButtonComponent.prototype, "onFullscreenKey", null);
        MatFullscreenButtonComponent = __decorate([
            core.Component({
                selector: 'mat-fullscreen-button',
                template: "<button mat-icon-button [disabled]=\"!canFullscreen\" (click)=\"toggleFullscreen()\">\n  <mat-icon *ngIf=\"!fullscreen\">fullscreen</mat-icon>\n  <mat-icon *ngIf=\"fullscreen\">fullscreen_exit</mat-icon>\n</button>",
                styles: [""]
            })
        ], MatFullscreenButtonComponent);
        return MatFullscreenButtonComponent;
    }());

    var MatPlayButtonComponent = /** @class */ (function () {
        function MatPlayButtonComponent(renderer, evt) {
            this.renderer = renderer;
            this.evt = evt;
            this.play = false;
            this.playChanged = new core.EventEmitter();
            this.keyboard = true;
        }
        MatPlayButtonComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.events = [
                { element: this.video, name: 'play', callback: function (event) { return _this.setVideoPlayback(true); }, dispose: null },
                { element: this.video, name: 'pause', callback: function (event) { return _this.setVideoPlayback(false); }, dispose: null },
                { element: this.video, name: 'durationchange', callback: function (event) { return _this.setVideoPlayback(false); }, dispose: null },
                { element: this.video, name: 'ended', callback: function (event) { return _this.setVideoPlayback(false); }, dispose: null },
                { element: this.video, name: 'click', callback: function (event) { return _this.toggleVideoPlayback(); }, dispose: null }
            ];
            this.evt.addEvents(this.renderer, this.events);
        };
        MatPlayButtonComponent.prototype.ngOnDestroy = function () {
            this.evt.removeEvents(this.events);
        };
        MatPlayButtonComponent.prototype.setVideoPlayback = function (value) {
            if (this.play !== value)
                this.toggleVideoPlayback();
        };
        MatPlayButtonComponent.prototype.toggleVideoPlayback = function () {
            this.play = !this.play;
            this.updateVideoPlayback();
        };
        MatPlayButtonComponent.prototype.updateVideoPlayback = function () {
            this.play ? this.video.play() : this.video.pause();
            this.playChanged.emit(this.play);
        };
        MatPlayButtonComponent.prototype.onPlayKey = function (event) {
            if (this.keyboard) {
                this.toggleVideoPlayback();
                event.preventDefault();
            }
        };
        MatPlayButtonComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: EventService }
        ]; };
        __decorate([
            core.Input()
        ], MatPlayButtonComponent.prototype, "video", void 0);
        __decorate([
            core.Input()
        ], MatPlayButtonComponent.prototype, "play", void 0);
        __decorate([
            core.Output()
        ], MatPlayButtonComponent.prototype, "playChanged", void 0);
        __decorate([
            core.Input()
        ], MatPlayButtonComponent.prototype, "keyboard", void 0);
        __decorate([
            core.HostListener('document:keyup.space', ['$event'])
        ], MatPlayButtonComponent.prototype, "onPlayKey", null);
        MatPlayButtonComponent = __decorate([
            core.Component({
                selector: 'mat-play-button',
                template: "<button mat-icon-button (click)=\"toggleVideoPlayback()\">\n  <mat-icon *ngIf=\"!play\">play_arrow</mat-icon>\n  <mat-icon *ngIf=\"play\">pause</mat-icon>\n</button>",
                styles: [""]
            })
        ], MatPlayButtonComponent);
        return MatPlayButtonComponent;
    }());

    var MatQualityControlComponent = /** @class */ (function () {
        function MatQualityControlComponent() {
        }
        __decorate([
            core.Input()
        ], MatQualityControlComponent.prototype, "video", void 0);
        MatQualityControlComponent = __decorate([
            core.Component({
                selector: 'mat-quality-control',
                template: "<div *ngIf=\"video && video.videoHeight\" class=\"quality\">\n  {{ video.videoHeight }}p\n</div>",
                styles: [".quality{display:inline-block;font-size:12px;padding-left:12px;padding-right:12px}"]
            })
        ], MatQualityControlComponent);
        return MatQualityControlComponent;
    }());

    var MatSeekProgressControlComponent = /** @class */ (function () {
        function MatSeekProgressControlComponent(renderer, evt) {
            this.renderer = renderer;
            this.evt = evt;
            this.curTimePercent = 0;
            this.bufTimePercent = 0;
            this.video = null;
            this.color = 'primary';
            this.currentTime = 0;
            this.currentTimeChanged = new core.EventEmitter();
            this.bufferedTime = 0;
            this.bufferedTimeChanged = new core.EventEmitter();
        }
        MatSeekProgressControlComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.events = [
                { element: this.video, name: 'seeking', callback: function (event) { return _this.updateCurrentTime(_this.video.currentTime); }, dispose: null },
                { element: this.video, name: 'canplaythrough', callback: function (event) { return _this.updateBufferedTime(); }, dispose: null },
                { element: this.video, name: 'timeupdate', callback: function (event) { return _this.updateCurrentTime(_this.video.currentTime); }, dispose: null },
                { element: this.video, name: 'progress', callback: function (event) { return _this.updateBufferedTime(); }, dispose: null }
            ];
            this.evt.addEvents(this.renderer, this.events);
        };
        MatSeekProgressControlComponent.prototype.ngOnDestroy = function () {
            this.evt.removeEvents(this.events);
        };
        MatSeekProgressControlComponent.prototype.seekVideo = function (value) {
            var percentage = value / 100;
            var newTime = this.video.duration * percentage;
            this.video.currentTime = newTime;
        };
        MatSeekProgressControlComponent.prototype.updateCurrentTime = function (time) {
            this.currentTime = time;
            this.curTimePercent = this.updateTime(this.currentTimeChanged, this.currentTime);
        };
        MatSeekProgressControlComponent.prototype.updateBufferedTime = function () {
            if (this.video.buffered.length > 0) {
                var largestBufferValue = 0;
                for (var i = 0; i < this.video.buffered.length; i++) {
                    var cur = this.video.currentTime;
                    var start = this.video.buffered.start(i);
                    var end = this.video.buffered.end(i);
                    if (start <= cur && end > cur && (end - start) > largestBufferValue)
                        largestBufferValue = end;
                }
                this.bufferedTime = largestBufferValue;
                this.bufTimePercent = this.updateTime(this.bufferedTimeChanged, this.bufferedTime);
            }
        };
        MatSeekProgressControlComponent.prototype.updateTime = function (emitter, time) {
            emitter.emit(time);
            return time / this.video.duration * 100;
        };
        MatSeekProgressControlComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: EventService }
        ]; };
        __decorate([
            core.Input()
        ], MatSeekProgressControlComponent.prototype, "video", void 0);
        __decorate([
            core.Input()
        ], MatSeekProgressControlComponent.prototype, "color", void 0);
        __decorate([
            core.Input()
        ], MatSeekProgressControlComponent.prototype, "currentTime", void 0);
        __decorate([
            core.Output()
        ], MatSeekProgressControlComponent.prototype, "currentTimeChanged", void 0);
        __decorate([
            core.Input()
        ], MatSeekProgressControlComponent.prototype, "bufferedTime", void 0);
        __decorate([
            core.Output()
        ], MatSeekProgressControlComponent.prototype, "bufferedTimeChanged", void 0);
        MatSeekProgressControlComponent = __decorate([
            core.Component({
                selector: 'mat-seek-progress-control',
                template: "<mat-slider-progress-bar [color]=\"color\" mode=\"buffer\" step=\"0.01\" [value]=\"curTimePercent\" [bufferValue]=\"bufTimePercent\"\n  (input)=\"seekVideo($event.value)\"></mat-slider-progress-bar>",
                styles: [""]
            })
        ], MatSeekProgressControlComponent);
        return MatSeekProgressControlComponent;
    }());

    var MatTimeControlComponent = /** @class */ (function () {
        function MatTimeControlComponent() {
        }
        __decorate([
            core.Input()
        ], MatTimeControlComponent.prototype, "video", void 0);
        MatTimeControlComponent = __decorate([
            core.Component({
                selector: 'mat-time-control',
                template: "<div class=\"playtime\">\n  {{ video?.currentTime | secondsToTime }} / {{ video?.duration | secondsToTime}}\n</div>",
                styles: [".playtime{display:inline;font-size:12px}"]
            })
        ], MatTimeControlComponent);
        return MatTimeControlComponent;
    }());

    var MatVideoSpinnerComponent = /** @class */ (function () {
        function MatVideoSpinnerComponent(renderer, evt) {
            this.renderer = renderer;
            this.evt = evt;
            this.spinner = 'spin';
            this.videoBuffering = false;
            this.videoLoaded = false;
            this.events = [];
        }
        MatVideoSpinnerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.events = [
                { element: this.video, name: 'loadstart', callback: function (event) { return _this.videoLoaded = false; }, dispose: null },
                { element: this.video, name: 'loadedmetadata', callback: function (event) { return _this.videoLoaded = true; }, dispose: null },
                { element: this.video, name: 'canplay', callback: function (event) { return _this.videoBuffering = false; }, dispose: null },
                { element: this.video, name: 'waiting', callback: function (event) { return _this.videoBuffering = true; }, dispose: null },
                { element: this.video, name: 'durationchange', callback: function (event) { return _this.videoBuffering = true; }, dispose: null }
            ];
            this.video.onloadeddata = function () { return _this.videoLoaded = true; };
            this.evt.addEvents(this.renderer, this.events);
        };
        MatVideoSpinnerComponent.prototype.ngOnDestroy = function () {
            this.video.onloadeddata = null;
            this.evt.removeEvents(this.events);
        };
        MatVideoSpinnerComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: EventService }
        ]; };
        __decorate([
            core.Input()
        ], MatVideoSpinnerComponent.prototype, "video", void 0);
        __decorate([
            core.Input()
        ], MatVideoSpinnerComponent.prototype, "spinner", void 0);
        MatVideoSpinnerComponent = __decorate([
            core.Component({
                selector: 'mat-video-spinner',
                template: "<div *ngIf=\"!videoLoaded || videoBuffering\" [class]=\"spinner\"></div>",
                styles: [":host{position:absolute;left:calc(50% - 32px);top:calc(50% - 32px);z-index:1}", ".spin{box-sizing:border-box;width:64px;height:64px;border-radius:100%;border:10px solid rgba(255,255,255,.2);border-top-color:#fff;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".dot{width:64px;height:64px;background-color:#fff;border-radius:100%;-webkit-animation:1s ease-in-out infinite dot;animation:1s ease-in-out infinite dot}@-webkit-keyframes dot{0%{-webkit-transform:scale(0)}100%{-webkit-transform:scale(1);opacity:0}}@keyframes dot{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}", ".split-ring{display:inline-block;width:64px;height:64px}.split-ring:after{content:\" \";display:block;width:46px;height:46px;margin:1px;border-radius:50%;border:5px solid #fff;border-color:#fff transparent;-webkit-animation:1.2s linear infinite split-ring;animation:1.2s linear infinite split-ring}@-webkit-keyframes split-ring{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes split-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".hourglass{display:inline-block;position:relative;width:64px;height:64px}.hourglass:after{content:\" \";display:block;border-radius:50%;width:0;height:0;margin:6px;box-sizing:border-box;border:26px solid #fff;border-color:#fff transparent;-webkit-animation:1.2s infinite hourglass;animation:1.2s infinite hourglass}@-webkit-keyframes hourglass{0%{-webkit-transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{-webkit-transform:rotate(360deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1)}100%{-webkit-transform:rotate(720deg)}}@keyframes hourglass{0%{transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{transform:rotate(360deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}100%{transform:rotate(720deg)}}"]
            })
        ], MatVideoSpinnerComponent);
        return MatVideoSpinnerComponent;
    }());

    var MatVideoModule = /** @class */ (function () {
        function MatVideoModule() {
        }
        MatVideoModule = __decorate([
            core.NgModule({
                declarations: [
                    SecondsToTimePipe,
                    MatVideoComponent,
                    MatSliderProgressBarComponent,
                    MatPlayButtonComponent,
                    MatVolumeControlComponent,
                    MatDownloadButtonComponent,
                    MatFullscreenButtonComponent,
                    MatTimeControlComponent,
                    MatQualityControlComponent,
                    MatVideoSpinnerComponent,
                    MatSeekProgressControlComponent,
                    MatVideoSourceDirective,
                    MatVideoTrackDirective,
                    MatFrameByFrameControlComponent
                ],
                imports: [
                    common.CommonModule,
                    icon.MatIconModule,
                    button.MatButtonModule,
                    slider.MatSliderModule,
                ],
                exports: [
                    MatVideoComponent,
                    MatVideoSourceDirective,
                    MatVideoTrackDirective
                ],
                providers: [
                    FullscreenService,
                    EventService
                ]
            })
        ], MatVideoModule);
        return MatVideoModule;
    }());

    exports.MatVideoModule = MatVideoModule;
    exports.ɵa = SecondsToTimePipe;
    exports.ɵb = MatVideoComponent;
    exports.ɵc = MatVolumeControlComponent;
    exports.ɵd = EventService;
    exports.ɵe = MatSliderProgressBarComponent;
    exports.ɵf = MatPlayButtonComponent;
    exports.ɵg = MatDownloadButtonComponent;
    exports.ɵh = MatFullscreenButtonComponent;
    exports.ɵi = FullscreenService;
    exports.ɵj = MatTimeControlComponent;
    exports.ɵk = MatQualityControlComponent;
    exports.ɵl = MatVideoSpinnerComponent;
    exports.ɵm = MatSeekProgressControlComponent;
    exports.ɵn = MatVideoSourceDirective;
    exports.ɵo = MatVideoTrackDirective;
    exports.ɵp = MatFrameByFrameControlComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mat-video.umd.js.map
