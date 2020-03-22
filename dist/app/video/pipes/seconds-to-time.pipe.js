var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
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
        Pipe({
            name: 'secondsToTime'
        })
    ], SecondsToTimePipe);
    return SecondsToTimePipe;
}());
export { SecondsToTimePipe };
//# sourceMappingURL=seconds-to-time.pipe.js.map