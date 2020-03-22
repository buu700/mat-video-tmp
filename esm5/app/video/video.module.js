import * as tslib_1 from "tslib";
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
var MatVideoModule = /** @class */ (function () {
    function MatVideoModule() {
    }
    MatVideoModule = tslib_1.__decorate([
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
    return MatVideoModule;
}());
export { MatVideoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL3ZpZGVvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDckgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ3JILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBbUN0RDtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQWpDMUIsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLGlCQUFpQjtnQkFDakIsaUJBQWlCO2dCQUNqQiw2QkFBNkI7Z0JBQzdCLHNCQUFzQjtnQkFDdEIseUJBQXlCO2dCQUN6QiwwQkFBMEI7Z0JBQzFCLDRCQUE0QjtnQkFDNUIsdUJBQXVCO2dCQUN2QiwwQkFBMEI7Z0JBQzFCLHdCQUF3QjtnQkFDeEIsK0JBQStCO2dCQUMvQix1QkFBdUI7Z0JBQ3ZCLHNCQUFzQjtnQkFDdEIsK0JBQStCO2FBQ2xDO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixlQUFlO2dCQUNmLGVBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsaUJBQWlCO2dCQUNqQix1QkFBdUI7Z0JBQ3ZCLHNCQUFzQjthQUN6QjtZQUNELFNBQVMsRUFBRTtnQkFDUCxpQkFBaUI7Z0JBQ2pCLFlBQVk7YUFDZjtTQUNKLENBQUM7T0FDVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBLEFBQS9CLElBQStCO1NBQWxCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRTbGlkZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuXG5pbXBvcnQgeyBNYXRWaWRlb1NvdXJjZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9tYXQtdmlkZW8tc291cmNlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYXRWaWRlb1RyYWNrRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21hdC12aWRlby10cmFjay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWF0U2xpZGVyUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL2ludGVybmFsL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWNvbmRzVG9UaW1lUGlwZSB9IGZyb20gJy4vcGlwZXMvc2Vjb25kcy10by10aW1lLnBpcGUnO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEZ1bGxzY3JlZW5TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9mdWxsc2NyZWVuLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0RG93bmxvYWRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3VpL21hdC1kb3dubG9hZC1idXR0b24vbWF0LWRvd25sb2FkLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0RnJhbWVCeUZyYW1lQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vdWkvbWF0LWZyYW1lLWJ5LWZyYW1lLWNvbnRyb2wvbWF0LWZyYW1lLWJ5LWZyYW1lLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEZ1bGxzY3JlZW5CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3VpL21hdC1mdWxsc2NyZWVuLWJ1dHRvbi9tYXQtZnVsbHNjcmVlbi1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE1hdFBsYXlCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3VpL21hdC1wbGF5LWJ1dHRvbi9tYXQtcGxheS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE1hdFF1YWxpdHlDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi91aS9tYXQtcXVhbGl0eS1jb250cm9sL21hdC1xdWFsaXR5LWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdFNlZWtQcm9ncmVzc0NvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3VpL21hdC1zZWVrLXByb2dyZXNzLWNvbnRyb2wvbWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0VGltZUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3VpL21hdC10aW1lLWNvbnRyb2wvbWF0LXRpbWUtY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0VmlkZW9TcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi91aS9tYXQtdmlkZW8tc3Bpbm5lci9tYXQtdmlkZW8tc3Bpbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0Vm9sdW1lQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vdWkvbWF0LXZvbHVtZS1jb250cm9sL21hdC12b2x1bWUtY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0VmlkZW9Db21wb25lbnQgfSBmcm9tICcuL3ZpZGVvLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNlY29uZHNUb1RpbWVQaXBlLFxuICAgICAgICBNYXRWaWRlb0NvbXBvbmVudCxcbiAgICAgICAgTWF0U2xpZGVyUHJvZ3Jlc3NCYXJDb21wb25lbnQsXG4gICAgICAgIE1hdFBsYXlCdXR0b25Db21wb25lbnQsXG4gICAgICAgIE1hdFZvbHVtZUNvbnRyb2xDb21wb25lbnQsXG4gICAgICAgIE1hdERvd25sb2FkQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBNYXRGdWxsc2NyZWVuQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBNYXRUaW1lQ29udHJvbENvbXBvbmVudCxcbiAgICAgICAgTWF0UXVhbGl0eUNvbnRyb2xDb21wb25lbnQsXG4gICAgICAgIE1hdFZpZGVvU3Bpbm5lckNvbXBvbmVudCxcbiAgICAgICAgTWF0U2Vla1Byb2dyZXNzQ29udHJvbENvbXBvbmVudCxcbiAgICAgICAgTWF0VmlkZW9Tb3VyY2VEaXJlY3RpdmUsXG4gICAgICAgIE1hdFZpZGVvVHJhY2tEaXJlY3RpdmUsXG4gICAgICAgIE1hdEZyYW1lQnlGcmFtZUNvbnRyb2xDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBNYXRJY29uTW9kdWxlLFxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTWF0VmlkZW9Db21wb25lbnQsXG4gICAgICAgIE1hdFZpZGVvU291cmNlRGlyZWN0aXZlLFxuICAgICAgICBNYXRWaWRlb1RyYWNrRGlyZWN0aXZlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRnVsbHNjcmVlblNlcnZpY2UsXG4gICAgICAgIEV2ZW50U2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0VmlkZW9Nb2R1bGUgeyB9XG4iXX0=