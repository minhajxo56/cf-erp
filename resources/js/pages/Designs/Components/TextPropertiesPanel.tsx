import React from 'react';
import { Check } from 'lucide-react';

interface Props {
    textColor: string;
    fontSize: number;
    textInput: string;
    onColor: (c: string) => void;
    onSize: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onText: (v: string) => void;
    onCenter: () => void;
    onClose: () => void;
}

export default function TextPropertiesPanel({ textColor, fontSize, textInput, onColor, onSize, onText, onCenter, onClose }: Props) {
    return (
        <div className="fixed bottom-0 left-0 w-full z-40 dark:bg-gray-900 border-t border-gray-700 pb-safe shadow-2xl">
            <div className="flex justify-center gap-4 p-4 dark:bg-black/50">
                {['#000000', '#ffffff', '#ef4444', '#3b82f6', '#eab308'].map(c => (
                    <button key={c} onClick={() => onColor(c)} className={`w-8 h-8 rounded-full border-2 transition-transform ${textColor === c ? 'border-white scale-110' : 'border-transparent'}`} style={{ backgroundColor: c }} />
                ))}
            </div>
            <div className="p-4 flex flex-col gap-4 max-w-3xl mx-auto">
                <div className="flex items-center justify-between gap-4">
                    <span className="text-xs dark:text-gray-400 font-bold">Size</span>
                    <input type="range" min="40" max="300" value={fontSize} onChange={onSize} className="flex-1 accent-blue-500" />
                    <button onClick={onCenter} className="dark:bg-gray-700 dark:text-white px-3 py-1 rounded text-xs font-bold tracking-wider">CENTER</button>
                </div>
                <div className="flex gap-2">
                    <textarea value={textInput} onChange={(e) => onText(e.target.value)} placeholder="Type here..." className="flex-1 dark:bg-gray-800 dark:text-white p-3 rounded-lg border-2 border-blue-500 focus:outline-none resize-none h-[50px] font-semibold" />
                    <button onClick={onClose} className="bg-blue-600 text-white px-6 rounded-lg font-bold flex items-center justify-center"><Check size={20}/></button>
                </div>
            </div>
        </div>
    );
}