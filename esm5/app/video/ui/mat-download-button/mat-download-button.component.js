import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var MatDownloadButtonComponent = /** @class */ (function () {
    function MatDownloadButtonComponent() {
    }
    tslib_1.__decorate([
        Input()
    ], MatDownloadButtonComponent.prototype, "video", void 0);
    tslib_1.__decorate([
        Input()
    ], MatDownloadButtonComponent.prototype, "title", void 0);
    MatDownloadButtonComponent = tslib_1.__decorate([
        Component({
            selector: 'mat-download-button',
            template: "<a mat-icon-button [href]=\"video?.currentSrc\" [download]=\"title\">\n  <mat-icon>file_download</mat-icon>\n</a>",
            styles: ["a{color:inherit;text-decoration:none}"]
        })
    ], MatDownloadButtonComponent);
    return MatDownloadButtonComponent;
}());
export { MatDownloadButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRvd25sb2FkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vdWkvbWF0LWRvd25sb2FkLWJ1dHRvbi9tYXQtZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQ7SUFJRTtJQUFnQixDQUFDO0lBSFI7UUFBUixLQUFLLEVBQUU7NkRBQXlCO0lBQ3hCO1FBQVIsS0FBSyxFQUFFOzZEQUFlO0lBRlosMEJBQTBCO1FBTHRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsNkhBQW1EOztTQUVwRCxDQUFDO09BQ1csMEJBQTBCLENBTXRDO0lBQUQsaUNBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWRvd25sb2FkLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LWRvd25sb2FkLWJ1dHRvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0RG93bmxvYWRCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSB2aWRlbzogSFRNTFZpZGVvRWxlbWVudDtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iXX0=