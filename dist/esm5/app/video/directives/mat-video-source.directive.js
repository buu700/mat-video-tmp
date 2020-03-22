import * as tslib_1 from "tslib";
import { Directive, ElementRef, Host, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatVideoComponent } from '../video.component';
var MatVideoSourceDirective = /** @class */ (function () {
    function MatVideoSourceDirective(matVideoComponent, el) {
        this.matVideoComponent = matVideoComponent;
        this.el = el;
        this.src = null;
        this.type = null;
        this.init = true;
        this.video = matVideoComponent;
        this.source = el.nativeElement;
        this.init = false;
    }
    MatVideoSourceDirective.prototype.ngOnChanges = function (changes) {
        this.source.src = this.src;
        this.source.type = this.type;
        if (!this.init)
            this.video.load();
    };
    MatVideoSourceDirective.ctorParameters = function () { return [
        { type: MatVideoComponent, decorators: [{ type: Host }] },
        { type: ElementRef }
    ]; };
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
    return MatVideoSourceDirective;
}());
export { MatVideoSourceDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZpZGVvLXNvdXJjZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vZGlyZWN0aXZlcy9tYXQtdmlkZW8tc291cmNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS3ZEO0lBUUUsaUNBQ2tCLGlCQUFvQyxFQUM1QyxFQUFjO1FBRE4sc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM1QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBVGYsUUFBRyxHQUFXLElBQUksQ0FBQztRQUNuQixTQUFJLEdBQVcsSUFBSSxDQUFDO1FBRXJCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFRbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELDZDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOztnQkFkb0MsaUJBQWlCLHVCQUFuRCxJQUFJO2dCQUNPLFVBQVU7O0lBVGY7UUFBUixLQUFLLEVBQUU7d0RBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFO3lEQUFxQjtJQUZsQix1QkFBdUI7UUFIbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtTQUM3QixDQUFDO1FBVUcsbUJBQUEsSUFBSSxFQUFFLENBQUE7T0FURSx1QkFBdUIsQ0F5Qm5DO0lBQUQsOEJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXpCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3QsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0VmlkZW9Db21wb25lbnQgfSBmcm9tICcuLi92aWRlby5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF0VmlkZW9Tb3VyY2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXRWaWRlb1NvdXJjZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nID0gbnVsbDtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gbnVsbDtcblxuICBwcml2YXRlIGluaXQgPSB0cnVlO1xuICBwcml2YXRlIHZpZGVvOiBNYXRWaWRlb0NvbXBvbmVudDtcbiAgcHJpdmF0ZSBzb3VyY2U6IEhUTUxTb3VyY2VFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBtYXRWaWRlb0NvbXBvbmVudDogTWF0VmlkZW9Db21wb25lbnQsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLnZpZGVvID0gbWF0VmlkZW9Db21wb25lbnQ7XG4gICAgdGhpcy5zb3VyY2UgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuaW5pdCA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuc291cmNlLnNyYyA9IHRoaXMuc3JjO1xuICAgIHRoaXMuc291cmNlLnR5cGUgPSB0aGlzLnR5cGU7XG5cbiAgICBpZiAoIXRoaXMuaW5pdClcbiAgICAgIHRoaXMudmlkZW8ubG9hZCgpO1xuICB9XG5cbn1cbiJdfQ==