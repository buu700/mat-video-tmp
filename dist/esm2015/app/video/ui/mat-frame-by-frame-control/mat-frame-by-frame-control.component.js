import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let MatFrameByFrameControlComponent = class MatFrameByFrameControlComponent {
    constructor() {
        this.fps = 29.97;
    }
    ngOnInit() {
    }
    seekFrames(nbFrames) {
        if (!this.video.paused) {
            this.video.pause();
        }
        const currentFrames = this.video.currentTime * this.fps;
        const newPos = ((currentFrames + nbFrames) / this.fps) + 0.00001;
        this.video.currentTime = newPos;
    }
};
tslib_1.__decorate([
    Input()
], MatFrameByFrameControlComponent.prototype, "video", void 0);
tslib_1.__decorate([
    Input()
], MatFrameByFrameControlComponent.prototype, "fps", void 0);
MatFrameByFrameControlComponent = tslib_1.__decorate([
    Component({
        selector: 'mat-frame-by-frame-control',
        template: "<button mat-icon-button (click)=\"seekFrames(-5)\">\n    <mat-icon>skip_previous</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(-1)\">\n    <mat-icon>arrow_left</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(1)\">\n    <mat-icon>arrow_right</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(5)\">\n    <mat-icon>skip_next</mat-icon>\n</button>",
        styles: [""]
    })
], MatFrameByFrameControlComponent);
export { MatFrameByFrameControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWZyYW1lLWJ5LWZyYW1lLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL3VpL21hdC1mcmFtZS1ieS1mcmFtZS1jb250cm9sL21hdC1mcmFtZS1ieS1mcmFtZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPekQsSUFBYSwrQkFBK0IsR0FBNUMsTUFBYSwrQkFBK0I7SUFJeEM7UUFGUyxRQUFHLEdBQVcsS0FBSyxDQUFDO0lBRWIsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELFVBQVUsQ0FBQyxRQUFnQjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QjtRQUVELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDeEQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztJQUNwQyxDQUFDO0NBRUosQ0FBQTtBQWxCWTtJQUFSLEtBQUssRUFBRTs4REFBeUI7QUFDeEI7SUFBUixLQUFLLEVBQUU7NERBQXFCO0FBRnBCLCtCQUErQjtJQUwzQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsNEJBQTRCO1FBQ3RDLHFhQUEwRDs7S0FFN0QsQ0FBQztHQUNXLCtCQUErQixDQW1CM0M7U0FuQlksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWF0LWZyYW1lLWJ5LWZyYW1lLWNvbnRyb2wnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYXQtZnJhbWUtYnktZnJhbWUtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbWF0LWZyYW1lLWJ5LWZyYW1lLWNvbnRyb2wuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdEZyYW1lQnlGcmFtZUNvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xuICAgIEBJbnB1dCgpIGZwczogbnVtYmVyID0gMjkuOTc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgc2Vla0ZyYW1lcyhuYkZyYW1lczogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy52aWRlby5wYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmlkZW8ucGF1c2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRGcmFtZXMgPSB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lICogdGhpcy5mcHM7XG4gICAgICAgIGNvbnN0IG5ld1BvcyA9ICgoY3VycmVudEZyYW1lcyArIG5iRnJhbWVzKSAvIHRoaXMuZnBzKSArIDAuMDAwMDE7XG4gICAgICAgIHRoaXMudmlkZW8uY3VycmVudFRpbWUgPSBuZXdQb3M7XG4gICAgfVxuXG59XG4iXX0=