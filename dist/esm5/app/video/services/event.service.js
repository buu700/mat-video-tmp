import { __decorate, __values } from "tslib";
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
        Injectable()
    ], EventService);
    return EventService;
}());
export { EventService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby9zZXJ2aWNlcy9ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBSXREO0lBRUk7SUFBZ0IsQ0FBQztJQUVqQixnQ0FBUyxHQUFULFVBQVUsUUFBbUIsRUFBRSxNQUFzQjs7Z0NBQ3RDLE9BQUs7WUFDWixPQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFLLENBQUMsSUFBSSxFQUFFLFVBQUEsUUFBUSxJQUFJLE9BQUEsT0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDOzs7WUFEckcsS0FBb0IsSUFBQSxXQUFBLFNBQUEsTUFBTSxDQUFBLDhCQUFBO2dCQUFyQixJQUFNLE9BQUssbUJBQUE7d0JBQUwsT0FBSzthQUNxRjs7Ozs7Ozs7O0lBQ3pHLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsTUFBc0I7OztZQUMvQixLQUFvQixJQUFBLFdBQUEsU0FBQSxNQUFNLENBQUEsOEJBQUE7Z0JBQXJCLElBQU0sT0FBSyxtQkFBQTtnQkFDWixJQUFJLE9BQUssQ0FBQyxPQUFPO29CQUNiLE9BQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUFBOzs7Ozs7Ozs7SUFDNUIsQ0FBQztJQWJRLFlBQVk7UUFEeEIsVUFBVSxFQUFFO09BQ0EsWUFBWSxDQWV4QjtJQUFELG1CQUFDO0NBQUEsQUFmRCxJQWVDO1NBZlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ldmVudC1oYW5kbGVyLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFdmVudFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGFkZEV2ZW50cyhyZW5kZXJlcjogUmVuZGVyZXIyLCBldmVudHM6IEV2ZW50SGFuZGxlcltdKTogdm9pZCB7XG4gICAgICAgIGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKVxuICAgICAgICAgICAgZXZlbnQuZGlzcG9zZSA9IHJlbmRlcmVyLmxpc3RlbihldmVudC5lbGVtZW50LCBldmVudC5uYW1lLCBuZXdFdmVudCA9PiBldmVudC5jYWxsYmFjayhuZXdFdmVudCkpO1xuICAgIH1cblxuICAgIHJlbW92ZUV2ZW50cyhldmVudHM6IEV2ZW50SGFuZGxlcltdKTogdm9pZCB7XG4gICAgICAgIGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKVxuICAgICAgICAgICAgaWYgKGV2ZW50LmRpc3Bvc2UpXG4gICAgICAgICAgICAgICAgZXZlbnQuZGlzcG9zZSgpO1xuICAgIH1cblxufVxuIl19