export declare class FullscreenService {
    private fnMap;
    private fn;
    private keyboardAllowed;
    constructor();
    request(elem: any): void;
    exit(): void;
    toggle(elem: any): void;
    onChange(callback: any): void;
    onError(callback: any): void;
    isFullscreen(): boolean;
    isEnabled(): boolean;
    getElement(): any;
}
