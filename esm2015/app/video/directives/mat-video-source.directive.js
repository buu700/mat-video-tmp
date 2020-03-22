import * as tslib_1 from "tslib";
import { Directive, ElementRef, Host, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatVideoComponent } from '../video.component';
let MatVideoSourceDirective = class MatVideoSourceDirective {
    constructor(matVideoComponent, el) {
        this.matVideoComponent = matVideoComponent;
        this.el = el;
        this.src = null;
        this.type = null;
        this.init = true;
        this.video = matVideoComponent;
        this.source = el.nativeElement;
        this.init = false;
    }
    ngOnChanges(changes) {
        this.source.src = this.src;
        this.source.type = this.type;
        if (!this.init)
            this.video.load();
    }
};
MatVideoSourceDirective.ctorParameters = () => [
    { type: MatVideoComponent, decorators: [{ type: Host }] },
    { type: ElementRef }
];
tslib_1.__decorate([
    Input()
], MatVideoSourceDirective.prototype, "src", void 0);
tslib_1.__decorate([
    Input()
], MatVideoSourceDirective.prototype, "type", void 0);
MatVideoSourceDirective = tslib_1.__decorate([
    Directive({
        selector: '[matVideoSource]'
    }),
    tslib_1.__param(0, Host())
], MatVideoSourceDirective);
export { MatVideoSourceDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZpZGVvLXNvdXJjZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vZGlyZWN0aXZlcy9tYXQtdmlkZW8tc291cmNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS3ZELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBUWxDLFlBQ2tCLGlCQUFvQyxFQUM1QyxFQUFjO1FBRE4sc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM1QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBVGYsUUFBRyxHQUFXLElBQUksQ0FBQztRQUNuQixTQUFJLEdBQVcsSUFBSSxDQUFDO1FBRXJCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFRbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0NBRUYsQ0FBQTs7WUFoQnNDLGlCQUFpQix1QkFBbkQsSUFBSTtZQUNPLFVBQVU7O0FBVGY7SUFBUixLQUFLLEVBQUU7b0RBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFO3FEQUFxQjtBQUZsQix1QkFBdUI7SUFIbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtLQUM3QixDQUFDO0lBVUcsbUJBQUEsSUFBSSxFQUFFLENBQUE7R0FURSx1QkFBdUIsQ0F5Qm5DO1NBekJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXRWaWRlb0NvbXBvbmVudCB9IGZyb20gJy4uL3ZpZGVvLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXRWaWRlb1NvdXJjZV0nXG59KVxuZXhwb3J0IGNsYXNzIE1hdFZpZGVvU291cmNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgc3JjOiBzdHJpbmcgPSBudWxsO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSBudWxsO1xuXG4gIHByaXZhdGUgaW5pdCA9IHRydWU7XG4gIHByaXZhdGUgdmlkZW86IE1hdFZpZGVvQ29tcG9uZW50O1xuICBwcml2YXRlIHNvdXJjZTogSFRNTFNvdXJjZUVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKSBwcml2YXRlIG1hdFZpZGVvQ29tcG9uZW50OiBNYXRWaWRlb0NvbXBvbmVudCxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMudmlkZW8gPSBtYXRWaWRlb0NvbXBvbmVudDtcbiAgICB0aGlzLnNvdXJjZSA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5pbml0ID0gZmFsc2U7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5zb3VyY2Uuc3JjID0gdGhpcy5zcmM7XG4gICAgdGhpcy5zb3VyY2UudHlwZSA9IHRoaXMudHlwZTtcblxuICAgIGlmICghdGhpcy5pbml0KVxuICAgICAgdGhpcy52aWRlby5sb2FkKCk7XG4gIH1cblxufVxuIl19