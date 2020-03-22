import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatVideoSourceDirective } from './directives/mat-video-source.directive';
import { MatVideoTrackDirective } from './directives/mat-video-track.directive';
import { MatSliderProgressBarComponent } from './internal/mat-slider-progress-bar/mat-slider-progress-bar.component';
import { SecondsToTimePipe } from './pipes/seconds-to-time.pipe';
import { EventService } from './services/event.service';
import { FullscreenService } from './services/fullscreen.service';
import { MatDownloadButtonComponent } from './ui/mat-download-button/mat-download-button.component';
import { MatFrameByFrameControlComponent } from './ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component';
import { MatFullscreenButtonComponent } from './ui/mat-fullscreen-button/mat-fullscreen-button.component';
import { MatPlayButtonComponent } from './ui/mat-play-button/mat-play-button.component';
import { MatQualityControlComponent } from './ui/mat-quality-control/mat-quality-control.component';
import { MatSeekProgressControlComponent } from './ui/mat-seek-progress-control/mat-seek-progress-control.component';
import { MatTimeControlComponent } from './ui/mat-time-control/mat-time-control.component';
import { MatVideoSpinnerComponent } from './ui/mat-video-spinner/mat-video-spinner.component';
import { MatVolumeControlComponent } from './ui/mat-volume-control/mat-volume-control.component';
import { MatVideoComponent } from './video.component';
let MatVideoModule = class MatVideoModule {
};
MatVideoModule = __decorate([
    NgModule({
        declarations: [
            SecondsToTimePipe,
            MatVideoComponent,
            MatSliderProgressBarComponent,
            MatPlayButtonComponent,
            MatVolumeControlComponent,
            MatDownloadButtonComponent,
            MatFullscreenButtonComponent,
            MatTimeControlComponent,
            MatQualityControlComponent,
            MatVideoSpinnerComponent,
            MatSeekProgressControlComponent,
            MatVideoSourceDirective,
            MatVideoTrackDirective,
            MatFrameByFrameControlComponent
        ],
        imports: [
            CommonModule,
            MatIconModule,
            MatButtonModule,
            MatSliderModule,
        ],
        exports: [
            MatVideoComponent,
            MatVideoSourceDirective,
            MatVideoTrackDirective
        ],
        providers: [
            FullscreenService,
            EventService
        ]
    })
], MatVideoModule);
export { MatVideoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL3ZpZGVvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDckgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ3JILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBbUN0RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBQUksQ0FBQTtBQUFsQixjQUFjO0lBakMxQixRQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDVixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLDZCQUE2QjtZQUM3QixzQkFBc0I7WUFDdEIseUJBQXlCO1lBQ3pCLDBCQUEwQjtZQUMxQiw0QkFBNEI7WUFDNUIsdUJBQXVCO1lBQ3ZCLDBCQUEwQjtZQUMxQix3QkFBd0I7WUFDeEIsK0JBQStCO1lBQy9CLHVCQUF1QjtZQUN2QixzQkFBc0I7WUFDdEIsK0JBQStCO1NBQ2xDO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsWUFBWTtZQUNaLGFBQWE7WUFDYixlQUFlO1lBQ2YsZUFBZTtTQUNsQjtRQUNELE9BQU8sRUFBRTtZQUNMLGlCQUFpQjtZQUNqQix1QkFBdUI7WUFDdkIsc0JBQXNCO1NBQ3pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsaUJBQWlCO1lBQ2pCLFlBQVk7U0FDZjtLQUNKLENBQUM7R0FDVyxjQUFjLENBQUk7U0FBbEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdFNsaWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlcic7XG5cbmltcG9ydCB7IE1hdFZpZGVvU291cmNlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21hdC12aWRlby1zb3VyY2UuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1hdFZpZGVvVHJhY2tEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWF0LXZpZGVvLXRyYWNrLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYXRTbGlkZXJQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gJy4vaW50ZXJuYWwvbWF0LXNsaWRlci1wcm9ncmVzcy1iYXIvbWF0LXNsaWRlci1wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNlY29uZHNUb1RpbWVQaXBlIH0gZnJvbSAnLi9waXBlcy9zZWNvbmRzLXRvLXRpbWUucGlwZSc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgRnVsbHNjcmVlblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Z1bGxzY3JlZW4uc2VydmljZSc7XG5pbXBvcnQgeyBNYXREb3dubG9hZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vdWkvbWF0LWRvd25sb2FkLWJ1dHRvbi9tYXQtZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRGcmFtZUJ5RnJhbWVDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi91aS9tYXQtZnJhbWUtYnktZnJhbWUtY29udHJvbC9tYXQtZnJhbWUtYnktZnJhbWUtY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0RnVsbHNjcmVlbkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vdWkvbWF0LWZ1bGxzY3JlZW4tYnV0dG9uL21hdC1mdWxsc2NyZWVuLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0UGxheUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vdWkvbWF0LXBsYXktYnV0dG9uL21hdC1wbGF5LWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0UXVhbGl0eUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3VpL21hdC1xdWFsaXR5LWNvbnRyb2wvbWF0LXF1YWxpdHktY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0U2Vla1Byb2dyZXNzQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vdWkvbWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC9tYXQtc2Vlay1wcm9ncmVzcy1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRUaW1lQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vdWkvbWF0LXRpbWUtY29udHJvbC9tYXQtdGltZS1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRWaWRlb1NwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL3VpL21hdC12aWRlby1zcGlubmVyL21hdC12aWRlby1zcGlubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRWb2x1bWVDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi91aS9tYXQtdm9sdW1lLWNvbnRyb2wvbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRWaWRlb0NvbXBvbmVudCB9IGZyb20gJy4vdmlkZW8uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2Vjb25kc1RvVGltZVBpcGUsXG4gICAgICAgIE1hdFZpZGVvQ29tcG9uZW50LFxuICAgICAgICBNYXRTbGlkZXJQcm9ncmVzc0JhckNvbXBvbmVudCxcbiAgICAgICAgTWF0UGxheUJ1dHRvbkNvbXBvbmVudCxcbiAgICAgICAgTWF0Vm9sdW1lQ29udHJvbENvbXBvbmVudCxcbiAgICAgICAgTWF0RG93bmxvYWRCdXR0b25Db21wb25lbnQsXG4gICAgICAgIE1hdEZ1bGxzY3JlZW5CdXR0b25Db21wb25lbnQsXG4gICAgICAgIE1hdFRpbWVDb250cm9sQ29tcG9uZW50LFxuICAgICAgICBNYXRRdWFsaXR5Q29udHJvbENvbXBvbmVudCxcbiAgICAgICAgTWF0VmlkZW9TcGlubmVyQ29tcG9uZW50LFxuICAgICAgICBNYXRTZWVrUHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50LFxuICAgICAgICBNYXRWaWRlb1NvdXJjZURpcmVjdGl2ZSxcbiAgICAgICAgTWF0VmlkZW9UcmFja0RpcmVjdGl2ZSxcbiAgICAgICAgTWF0RnJhbWVCeUZyYW1lQ29udHJvbENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBNYXRWaWRlb0NvbXBvbmVudCxcbiAgICAgICAgTWF0VmlkZW9Tb3VyY2VEaXJlY3RpdmUsXG4gICAgICAgIE1hdFZpZGVvVHJhY2tEaXJlY3RpdmVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBGdWxsc2NyZWVuU2VydmljZSxcbiAgICAgICAgRXZlbnRTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRWaWRlb01vZHVsZSB7IH1cbiJdfQ==