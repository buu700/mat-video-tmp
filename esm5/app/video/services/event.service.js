import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var EventService = /** @class */ (function () {
    function EventService() {
    }
    EventService.prototype.addEvents = function (renderer, events) {
        var e_1, _a;
        var _loop_1 = function (event_1) {
            event_1.dispose = renderer.listen(event_1.element, event_1.name, function (newEvent) { return event_1.callback(newEvent); });
        };
        try {
            for (var events_1 = tslib_1.__values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
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
            for (var events_2 = tslib_1.__values(events), events_2_1 = events_2.next(); !events_2_1.done; events_2_1 = events_2.next()) {
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
    EventService = tslib_1.__decorate([
        Injectable()
    ], EventService);
    return EventService;
}());
export { EventService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby9zZXJ2aWNlcy9ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBSXREO0lBRUk7SUFBZ0IsQ0FBQztJQUVqQixnQ0FBUyxHQUFULFVBQVUsUUFBbUIsRUFBRSxNQUFzQjs7Z0NBQ3RDLE9BQUs7WUFDWixPQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFLLENBQUMsSUFBSSxFQUFFLFVBQUEsUUFBUSxJQUFJLE9BQUEsT0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDOzs7WUFEckcsS0FBb0IsSUFBQSxXQUFBLGlCQUFBLE1BQU0sQ0FBQSw4QkFBQTtnQkFBckIsSUFBTSxPQUFLLG1CQUFBO3dCQUFMLE9BQUs7YUFDcUY7Ozs7Ozs7OztJQUN6RyxDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFhLE1BQXNCOzs7WUFDL0IsS0FBb0IsSUFBQSxXQUFBLGlCQUFBLE1BQU0sQ0FBQSw4QkFBQTtnQkFBckIsSUFBTSxPQUFLLG1CQUFBO2dCQUNaLElBQUksT0FBSyxDQUFDLE9BQU87b0JBQ2IsT0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQUE7Ozs7Ozs7OztJQUM1QixDQUFDO0lBYlEsWUFBWTtRQUR4QixVQUFVLEVBQUU7T0FDQSxZQUFZLENBZXhCO0lBQUQsbUJBQUM7Q0FBQSxBQWZELElBZUM7U0FmWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2V2ZW50LWhhbmRsZXIuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV2ZW50U2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgYWRkRXZlbnRzKHJlbmRlcmVyOiBSZW5kZXJlcjIsIGV2ZW50czogRXZlbnRIYW5kbGVyW10pOiB2b2lkIHtcbiAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpXG4gICAgICAgICAgICBldmVudC5kaXNwb3NlID0gcmVuZGVyZXIubGlzdGVuKGV2ZW50LmVsZW1lbnQsIGV2ZW50Lm5hbWUsIG5ld0V2ZW50ID0+IGV2ZW50LmNhbGxiYWNrKG5ld0V2ZW50KSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnRzKGV2ZW50czogRXZlbnRIYW5kbGVyW10pOiB2b2lkIHtcbiAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGlzcG9zZSlcbiAgICAgICAgICAgICAgICBldmVudC5kaXNwb3NlKCk7XG4gICAgfVxuXG59XG4iXX0=