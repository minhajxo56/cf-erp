import React from 'react';

interface Props {
    containerRef: React.RefObject<HTMLDivElement | null>;
    canvasElRef: React.RefObject<HTMLCanvasElement | null>;
    displayScale: number;
    canvasWidth: number;
    canvasHeight: number;
}

export default function CanvasWorkspace({ containerRef, canvasElRef, displayScale, canvasWidth, canvasHeight }: Props) {
    return (
        <div ref={containerRef} className="w-full relative dark:bg-gray-950 flex justify-center overflow-hidden rounded-b-xl border border-t-0 border-gray-700 shadow-2xl" style={{ height: canvasHeight * displayScale }}>
            <div style={{ transform: `scale(${displayScale})`, transformOrigin: 'top left', width: canvasWidth, height: canvasHeight, position: 'absolute', top: 0, left: 0 }}>
                <canvas ref={canvasElRef} />
            </div>
        </div>
    );
}