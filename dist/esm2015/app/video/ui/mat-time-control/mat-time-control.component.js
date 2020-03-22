import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let MatTimeControlComponent = class MatTimeControlComponent {
    constructor() { }
};
__decorate([
    Input()
], MatTimeControlComponent.prototype, "video", void 0);
MatTimeControlComponent = __decorate([
    Component({
        selector: 'mat-time-control',
        template: "<div class=\"playtime\">\n  {{ video?.currentTime | secondsToTime }} / {{ video?.duration | secondsToTime}}\n</div>",
        styles: [".playtime{display:inline;font-size:12px}"]
    })
], MatTimeControlComponent);
export { MatTimeControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRpbWUtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vdWkvbWF0LXRpbWUtY29udHJvbC9tYXQtdGltZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFHbEMsZ0JBQWdCLENBQUM7Q0FFbEIsQ0FBQTtBQUpVO0lBQVIsS0FBSyxFQUFFO3NEQUF5QjtBQUR0Qix1QkFBdUI7SUFMbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QiwrSEFBZ0Q7O0tBRWpELENBQUM7R0FDVyx1QkFBdUIsQ0FLbkM7U0FMWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC10aW1lLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LXRpbWUtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdC10aW1lLWNvbnRyb2wuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRpbWVDb250cm9sQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIl19