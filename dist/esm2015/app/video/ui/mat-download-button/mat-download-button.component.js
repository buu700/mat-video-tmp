import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let MatDownloadButtonComponent = class MatDownloadButtonComponent {
    constructor() { }
};
__decorate([
    Input()
], MatDownloadButtonComponent.prototype, "video", void 0);
__decorate([
    Input()
], MatDownloadButtonComponent.prototype, "title", void 0);
MatDownloadButtonComponent = __decorate([
    Component({
        selector: 'mat-download-button',
        template: "<a mat-icon-button [href]=\"video?.currentSrc\" [download]=\"title\">\n  <mat-icon>file_download</mat-icon>\n</a>",
        styles: ["a{color:inherit;text-decoration:none}"]
    })
], MatDownloadButtonComponent);
export { MatDownloadButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRvd25sb2FkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vdWkvbWF0LWRvd25sb2FkLWJ1dHRvbi9tYXQtZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFJckMsZ0JBQWdCLENBQUM7Q0FFbEIsQ0FBQTtBQUxVO0lBQVIsS0FBSyxFQUFFO3lEQUF5QjtBQUN4QjtJQUFSLEtBQUssRUFBRTt5REFBZTtBQUZaLDBCQUEwQjtJQUx0QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLDZIQUFtRDs7S0FFcEQsQ0FBQztHQUNXLDBCQUEwQixDQU10QztTQU5ZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtZG93bmxvYWQtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1kb3dubG9hZC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXQtZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXREb3dubG9hZEJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiJdfQ==