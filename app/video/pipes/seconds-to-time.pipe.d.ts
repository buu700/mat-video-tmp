import { PipeTransform } from '@angular/core';
export declare class SecondsToTimePipe implements PipeTransform {
    times: {
        year: number;
        month: number;
        day: number;
        hour: number;
    };
    transform(seconds: number): string;
}
