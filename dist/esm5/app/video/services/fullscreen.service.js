import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
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
    FullscreenService = tslib_1.__decorate([
        Injectable()
    ], FullscreenService);
    return FullscreenService;
}());
export { FullscreenService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL3NlcnZpY2VzL2Z1bGxzY3JlZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQztJQXVESTtRQXJEUSxVQUFLLEdBQWU7WUFDeEIsY0FBYztZQUNkO2dCQUNJLG1CQUFtQjtnQkFDbkIsZ0JBQWdCO2dCQUNoQixtQkFBbUI7Z0JBQ25CLG1CQUFtQjtnQkFDbkIsa0JBQWtCO2dCQUNsQixpQkFBaUI7YUFDcEI7WUFDRCxhQUFhO1lBQ2I7Z0JBQ0kseUJBQXlCO2dCQUN6QixzQkFBc0I7Z0JBQ3RCLHlCQUF5QjtnQkFDekIseUJBQXlCO2dCQUN6Qix3QkFBd0I7Z0JBQ3hCLHVCQUF1QjthQUUxQjtZQUNELDBCQUEwQjtZQUMxQjtnQkFDSSx5QkFBeUI7Z0JBQ3pCLHdCQUF3QjtnQkFDeEIsZ0NBQWdDO2dCQUNoQyx3QkFBd0I7Z0JBQ3hCLHdCQUF3QjtnQkFDeEIsdUJBQXVCO2FBRTFCO1lBQ0QsVUFBVTtZQUNWO2dCQUNJLHNCQUFzQjtnQkFDdEIscUJBQXFCO2dCQUNyQixzQkFBc0I7Z0JBQ3RCLHNCQUFzQjtnQkFDdEIscUJBQXFCO2dCQUNyQixvQkFBb0I7YUFDdkI7WUFDRCxLQUFLO1lBQ0w7Z0JBQ0kscUJBQXFCO2dCQUNyQixrQkFBa0I7Z0JBQ2xCLHFCQUFxQjtnQkFDckIscUJBQXFCO2dCQUNyQixvQkFBb0I7Z0JBQ3BCLG1CQUFtQjthQUN0QjtTQUNKLENBQUM7UUFNRSxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxzQkFBc0IsSUFBSSxPQUFPLENBQUM7UUFDM0YsSUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLElBQUksR0FBRyxDQUFDO1FBRVIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUU7Z0JBQzNCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDN0IsMkNBQTJDO29CQUMzQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7Z0JBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7YUFDakI7U0FDSjtJQUNMLENBQUM7SUFFTSxtQ0FBTyxHQUFkLFVBQWUsSUFBUztRQUNwQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBRTFDLElBQUksR0FBRyxJQUFJLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQztRQUV4QyxrREFBa0Q7UUFDbEQsaURBQWlEO1FBQ2pELCtDQUErQztRQUMvQyw0QkFBNEI7UUFDNUIsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1NBQ25CO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUUsT0FBZSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNwRjtJQUNMLENBQUM7SUFFTSxnQ0FBSSxHQUFYO1FBQ0ksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRU0sa0NBQU0sR0FBYixVQUFjLElBQVM7UUFDbkIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRU0sb0NBQVEsR0FBZixVQUFnQixRQUFhO1FBQ3pCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU0sbUNBQU8sR0FBZCxVQUFlLFFBQWE7UUFDeEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU0sd0NBQVksR0FBbkI7UUFDSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLHFDQUFTLEdBQWhCO1FBQ0ksMENBQTBDO1FBQzFDLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU0sc0NBQVUsR0FBakI7UUFDSSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQXZIUSxpQkFBaUI7UUFEN0IsVUFBVSxFQUFFO09BQ0EsaUJBQWlCLENBeUg3QjtJQUFELHdCQUFDO0NBQUEsQUF6SEQsSUF5SEM7U0F6SFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRnVsbHNjcmVlbkNvbnRyb2xzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9mdWxsc2NyZWVuLWNvbnRyb2xzLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGdWxsc2NyZWVuU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGZuTWFwOiBzdHJpbmdbXVtdID0gW1xuICAgICAgICAvLyBPYmplY3Qga2V5c1xuICAgICAgICBbXG4gICAgICAgICAgICAncmVxdWVzdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgJ2V4aXRGdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICdmdWxsc2NyZWVuRWxlbWVudCcsXG4gICAgICAgICAgICAnZnVsbHNjcmVlbkVuYWJsZWQnLFxuICAgICAgICAgICAgJ2Z1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICAgICAgICAgJ2Z1bGxzY3JlZW5lcnJvcidcbiAgICAgICAgXSxcbiAgICAgICAgLy8gTmV3IFdlYktpdFxuICAgICAgICBbXG4gICAgICAgICAgICAnd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCcsXG4gICAgICAgICAgICAnd2Via2l0RnVsbHNjcmVlbkVuYWJsZWQnLFxuICAgICAgICAgICAgJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICAgICAgICAgJ3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcblxuICAgICAgICBdLFxuICAgICAgICAvLyBPbGQgV2ViS2l0IChTYWZhcmkgNS4xKVxuICAgICAgICBbXG4gICAgICAgICAgICAnd2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICAgICAgICAgJ3dlYmtpdENhbmNlbEZ1bGxTY3JlZW4nLFxuICAgICAgICAgICAgJ3dlYmtpdEN1cnJlbnRGdWxsU2NyZWVuRWxlbWVudCcsXG4gICAgICAgICAgICAnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXG4gICAgICAgICAgICAnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgICAgICAgICAnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xuXG4gICAgICAgIF0sXG4gICAgICAgIC8vIE1vemlsbGFcbiAgICAgICAgW1xuICAgICAgICAgICAgJ21velJlcXVlc3RGdWxsU2NyZWVuJyxcbiAgICAgICAgICAgICdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAgICAgICAgICdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXG4gICAgICAgICAgICAnbW96RnVsbFNjcmVlbkVuYWJsZWQnLFxuICAgICAgICAgICAgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICAgICAgICAgJ21vemZ1bGxzY3JlZW5lcnJvcidcbiAgICAgICAgXSxcbiAgICAgICAgLy8gTVNcbiAgICAgICAgW1xuICAgICAgICAgICAgJ21zUmVxdWVzdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgJ21zRXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgJ21zRnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICAgICAgICAgJ21zRnVsbHNjcmVlbkVuYWJsZWQnLFxuICAgICAgICAgICAgJ01TRnVsbHNjcmVlbkNoYW5nZScsXG4gICAgICAgICAgICAnTVNGdWxsc2NyZWVuRXJyb3InXG4gICAgICAgIF1cbiAgICBdO1xuXG4gICAgcHJpdmF0ZSBmbjogRnVsbHNjcmVlbkNvbnRyb2xzO1xuICAgIHByaXZhdGUga2V5Ym9hcmRBbGxvd2VkOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRBbGxvd2VkID0gdHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICdBTExPV19LRVlCT0FSRF9JTlBVVCcgaW4gRWxlbWVudDtcbiAgICAgICAgY29uc3QgcmV0OiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IHZhbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZm5NYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhbCA9IHRoaXMuZm5NYXBbaV07XG4gICAgICAgICAgICBpZiAodmFsICYmIHZhbFsxXSBpbiBkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFwIGV2ZXJ5dGhpbmcgdG8gdGhlIGZpcnN0IGxpc3Qgb2Yga2V5c1xuICAgICAgICAgICAgICAgICAgICByZXRbdGhpcy5mbk1hcFswXVtpXS50b1N0cmluZygpXSA9IHZhbFtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mbiA9IHJldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1ZXN0KGVsZW06IGFueSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5mbi5yZXF1ZXN0RnVsbHNjcmVlbjtcblxuICAgICAgICBlbGVtID0gZWxlbSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgLy8gV29yayBhcm91bmQgU2FmYXJpIDUuMSBidWc6IHJlcG9ydHMgc3VwcG9ydCBmb3JcbiAgICAgICAgLy8ga2V5Ym9hcmQgaW4gZnVsbHNjcmVlbiBldmVuIHRob3VnaCBpdCBkb2Vzbid0LlxuICAgICAgICAvLyBCcm93c2VyIHNuaWZmaW5nLCBzaW5jZSB0aGUgYWx0ZXJuYXRpdmUgd2l0aFxuICAgICAgICAvLyBzZXRUaW1lb3V0IGlzIGV2ZW4gd29yc2UuXG4gICAgICAgIGlmICgvNVxcLjFbLlxcZF0qIFNhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgZWxlbVtyZXF1ZXN0XSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbVtyZXF1ZXN0XSh0aGlzLmtleWJvYXJkQWxsb3dlZCA/IChFbGVtZW50IGFzIGFueSkuQUxMT1dfS0VZQk9BUkRfSU5QVVQgOiB7fSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZXhpdCgpIHtcbiAgICAgICAgZG9jdW1lbnRbdGhpcy5mbi5leGl0RnVsbHNjcmVlbl0oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKGVsZW06IGFueSkge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bGxzY3JlZW4oKSkge1xuICAgICAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QoZWxlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25DaGFuZ2UoY2FsbGJhY2s6IGFueSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZm4uZnVsbHNjcmVlbmNoYW5nZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25FcnJvcihjYWxsYmFjazogYW55KSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5mbi5mdWxsc2NyZWVuZXJyb3IsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzRnVsbHNjcmVlbigpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oZG9jdW1lbnRbdGhpcy5mbi5mdWxsc2NyZWVuRWxlbWVudF0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0VuYWJsZWQoKSB7XG4gICAgICAgIC8vIENvZXJjZSB0byBib29sZWFuIGluIGNhc2Ugb2Ygb2xkIFdlYktpdFxuICAgICAgICByZXR1cm4gQm9vbGVhbihkb2N1bWVudFt0aGlzLmZuLmZ1bGxzY3JlZW5FbmFibGVkXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudFt0aGlzLmZuLmZ1bGxzY3JlZW5FbGVtZW50XTtcbiAgICB9XG5cbn1cbiJdfQ==