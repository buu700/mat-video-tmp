import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var MatQualityControlComponent = /** @class */ (function () {
    function MatQualityControlComponent() {
    }
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
    return MatQualityControlComponent;
}());
export { MatQualityControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXF1YWxpdHktY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vdWkvbWF0LXF1YWxpdHktY29udHJvbC9tYXQtcXVhbGl0eS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQ7SUFHRTtJQUFnQixDQUFDO0lBRlI7UUFBUixLQUFLLEVBQUU7NkRBQXlCO0lBRHRCLDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLDRHQUFtRDs7U0FFcEQsQ0FBQztPQUNXLDBCQUEwQixDQUt0QztJQUFELGlDQUFDO0NBQUEsQUFMRCxJQUtDO1NBTFksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtcXVhbGl0eS1jb250cm9sJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1xdWFsaXR5LWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXQtcXVhbGl0eS1jb250cm9sLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRRdWFsaXR5Q29udHJvbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiJdfQ==