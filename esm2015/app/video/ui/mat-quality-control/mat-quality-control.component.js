import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let MatQualityControlComponent = class MatQualityControlComponent {
    constructor() { }
};
__decorate([
    Input()
], MatQualityControlComponent.prototype, "video", void 0);
MatQualityControlComponent = __decorate([
    Component({
        selector: 'mat-quality-control',
        template: "<div *ngIf=\"video && video.videoHeight\" class=\"quality\">\n  {{ video.videoHeight }}p\n</div>",
        styles: [".quality{display:inline-block;font-size:12px;padding-left:12px;padding-right:12px}"]
    })
], MatQualityControlComponent);
export { MatQualityControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXF1YWxpdHktY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vdWkvbWF0LXF1YWxpdHktY29udHJvbC9tYXQtcXVhbGl0eS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFHckMsZ0JBQWdCLENBQUM7Q0FFbEIsQ0FBQTtBQUpVO0lBQVIsS0FBSyxFQUFFO3lEQUF5QjtBQUR0QiwwQkFBMEI7SUFMdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQiw0R0FBbUQ7O0tBRXBELENBQUM7R0FDVywwQkFBMEIsQ0FLdEM7U0FMWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1xdWFsaXR5LWNvbnRyb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LXF1YWxpdHktY29udHJvbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdC1xdWFsaXR5LWNvbnRyb2wuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdFF1YWxpdHlDb250cm9sQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIl19