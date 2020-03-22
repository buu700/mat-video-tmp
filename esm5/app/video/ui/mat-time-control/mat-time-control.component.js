import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var MatTimeControlComponent = /** @class */ (function () {
    function MatTimeControlComponent() {
    }
    tslib_1.__decorate([
        Input()
    ], MatTimeControlComponent.prototype, "video", void 0);
    MatTimeControlComponent = tslib_1.__decorate([
        Component({
            selector: 'mat-time-control',
            template: "<div class=\"playtime\">\n  {{ video?.currentTime | secondsToTime }} / {{ video?.duration | secondsToTime}}\n</div>",
            styles: [".playtime{display:inline;font-size:12px}"]
        })
    ], MatTimeControlComponent);
    return MatTimeControlComponent;
}());
export { MatTimeControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRpbWUtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vdWkvbWF0LXRpbWUtY29udHJvbC9tYXQtdGltZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQ7SUFHRTtJQUFnQixDQUFDO0lBRlI7UUFBUixLQUFLLEVBQUU7MERBQXlCO0lBRHRCLHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLCtIQUFnRDs7U0FFakQsQ0FBQztPQUNXLHVCQUF1QixDQUtuQztJQUFELDhCQUFDO0NBQUEsQUFMRCxJQUtDO1NBTFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtdGltZS1jb250cm9sJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC10aW1lLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXQtdGltZS1jb250cm9sLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRUaW1lQ29udHJvbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiJdfQ==