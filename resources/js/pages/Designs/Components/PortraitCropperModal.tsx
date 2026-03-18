import React from 'react';
import { X, Check } from 'lucide-react';

interface Props {
    canvasRef: React.RefObject<HTMLCanvasElement | null>;
    zoom: number;
    onZoom: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onApply: () => void;
    onCancel: () => void;
}

export default function PortraitCropperModal({ canvasRef, zoom, onZoom, onApply, onCancel }: Props) {
    return (
        <div className="fixed inset-0 z-50 dark:bg-black flex flex-col items-center justify-center">
            <canvas ref={canvasRef} />
            <div className="absolute bottom-10 w-11/12 max-w-md dark:bg-gray-900 border border-gray-700 p-5 rounded-xl flex flex-col gap-6 shadow-2xl">
                <div className="flex items-center gap-4 dark:text-white">
                    <span className="font-bold text-sm">Zoom</span>
                    <input type="range" min="1" max="4" step="0.01" value={zoom} onChange={onZoom} className="flex-1 accent-blue-500" />
                </div>
                <div className="flex gap-4">
                    <button onClick={onCancel} className="flex-1 dark:bg-gray-800 dark:text-white py-3 rounded-lg font-bold flex justify-center items-center gap-2 hover:dark:bg-gray-700 transition-colors"><X size={18}/> Cancel</button>
                    <button onClick={onApply} className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-bold flex justify-center items-center gap-2 hover:bg-blue-700 transition-colors"><Check size={18}/> Apply</button>
                </div>
            </div>
        </div>
    );
}