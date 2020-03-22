import { __decorate, __param } from "tslib";
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
__decorate([
    Input()
], MatVideoSourceDirective.prototype, "src", void 0);
__decorate([
    Input()
], MatVideoSourceDirective.prototype, "type", void 0);
MatVideoSourceDirective = __decorate([
    Directive({
        selector: '[matVideoSource]'
    }),
    __param(0, Host())
], MatVideoSourceDirective);
export { MatVideoSourceDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZpZGVvLXNvdXJjZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vZGlyZWN0aXZlcy9tYXQtdmlkZW8tc291cmNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS3ZELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBUWxDLFlBQ2tCLGlCQUFvQyxFQUM1QyxFQUFjO1FBRE4sc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM1QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBVGYsUUFBRyxHQUFXLElBQUksQ0FBQztRQUNuQixTQUFJLEdBQVcsSUFBSSxDQUFDO1FBRXJCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFRbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0NBRUYsQ0FBQTs7WUFoQnNDLGlCQUFpQix1QkFBbkQsSUFBSTtZQUNPLFVBQVU7O0FBVGY7SUFBUixLQUFLLEVBQUU7b0RBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFO3FEQUFxQjtBQUZsQix1QkFBdUI7SUFIbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtLQUM3QixDQUFDO0lBVUcsV0FBQSxJQUFJLEVBQUUsQ0FBQTtHQVRFLHVCQUF1QixDQXlCbkM7U0F6QlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1hdFZpZGVvQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlkZW8uY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdFZpZGVvU291cmNlXSdcbn0pXG5leHBvcnQgY2xhc3MgTWF0VmlkZW9Tb3VyY2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzcmM6IHN0cmluZyA9IG51bGw7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9IG51bGw7XG5cbiAgcHJpdmF0ZSBpbml0ID0gdHJ1ZTtcbiAgcHJpdmF0ZSB2aWRlbzogTWF0VmlkZW9Db21wb25lbnQ7XG4gIHByaXZhdGUgc291cmNlOiBIVE1MU291cmNlRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpIHByaXZhdGUgbWF0VmlkZW9Db21wb25lbnQ6IE1hdFZpZGVvQ29tcG9uZW50LFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy52aWRlbyA9IG1hdFZpZGVvQ29tcG9uZW50O1xuICAgIHRoaXMuc291cmNlID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmluaXQgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnNvdXJjZS5zcmMgPSB0aGlzLnNyYztcbiAgICB0aGlzLnNvdXJjZS50eXBlID0gdGhpcy50eXBlO1xuXG4gICAgaWYgKCF0aGlzLmluaXQpXG4gICAgICB0aGlzLnZpZGVvLmxvYWQoKTtcbiAgfVxuXG59XG4iXX0=