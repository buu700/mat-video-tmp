import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var MatFrameByFrameControlComponent = /** @class */ (function () {
    function MatFrameByFrameControlComponent() {
        this.fps = 29.97;
    }
    MatFrameByFrameControlComponent.prototype.ngOnInit = function () {
    };
    MatFrameByFrameControlComponent.prototype.seekFrames = function (nbFrames) {
        if (!this.video.paused) {
            this.video.pause();
        }
        var currentFrames = this.video.currentTime * this.fps;
        var newPos = ((currentFrames + nbFrames) / this.fps) + 0.00001;
        this.video.currentTime = newPos;
    };
    __decorate([
        Input()
    ], MatFrameByFrameControlComponent.prototype, "video", void 0);
    __decorate([
        Input()
    ], MatFrameByFrameControlComponent.prototype, "fps", void 0);
    MatFrameByFrameControlComponent = __decorate([
        Component({
            selector: 'mat-frame-by-frame-control',
            template: "<button mat-icon-button (click)=\"seekFrames(-5)\">\n    <mat-icon>skip_previous</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(-1)\">\n    <mat-icon>arrow_left</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(1)\">\n    <mat-icon>arrow_right</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(5)\">\n    <mat-icon>skip_next</mat-icon>\n</button>",
            styles: [""]
        })
    ], MatFrameByFrameControlComponent);
    return MatFrameByFrameControlComponent;
}());
export { MatFrameByFrameControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWZyYW1lLWJ5LWZyYW1lLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL3VpL21hdC1mcmFtZS1ieS1mcmFtZS1jb250cm9sL21hdC1mcmFtZS1ieS1mcmFtZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPekQ7SUFJSTtRQUZTLFFBQUcsR0FBVyxLQUFLLENBQUM7SUFFYixDQUFDO0lBRWpCLGtEQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0RBQVUsR0FBVixVQUFXLFFBQWdCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN4RCxJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0lBQ3BDLENBQUM7SUFoQlE7UUFBUixLQUFLLEVBQUU7a0VBQXlCO0lBQ3hCO1FBQVIsS0FBSyxFQUFFO2dFQUFxQjtJQUZwQiwrQkFBK0I7UUFMM0MsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxxYUFBMEQ7O1NBRTdELENBQUM7T0FDVywrQkFBK0IsQ0FtQjNDO0lBQUQsc0NBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtYXQtZnJhbWUtYnktZnJhbWUtY29udHJvbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21hdC1mcmFtZS1ieS1mcmFtZS1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tYXQtZnJhbWUtYnktZnJhbWUtY29udHJvbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0RnJhbWVCeUZyYW1lQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XG4gICAgQElucHV0KCkgZnBzOiBudW1iZXIgPSAyOS45NztcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBzZWVrRnJhbWVzKG5iRnJhbWVzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpZGVvLnBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy52aWRlby5wYXVzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudEZyYW1lcyA9IHRoaXMudmlkZW8uY3VycmVudFRpbWUgKiB0aGlzLmZwcztcbiAgICAgICAgY29uc3QgbmV3UG9zID0gKChjdXJyZW50RnJhbWVzICsgbmJGcmFtZXMpIC8gdGhpcy5mcHMpICsgMC4wMDAwMTtcbiAgICAgICAgdGhpcy52aWRlby5jdXJyZW50VGltZSA9IG5ld1BvcztcbiAgICB9XG5cbn1cbiJdfQ==