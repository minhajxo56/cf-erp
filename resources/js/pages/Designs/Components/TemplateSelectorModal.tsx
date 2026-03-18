import React from 'react';
import { X } from 'lucide-react';

interface Props {
    templates: string[];
    activeTemplate: string;
    onSelect: (url: string) => void;
    onClose: () => void;
}

export default function TemplateSelectorModal({ templates, activeTemplate, onSelect, onClose }: Props) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center dark:bg-gray-950/95 p-4 md:p-8">
            <div className="dark:bg-gray-900 border border-gray-700 p-6 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="dark:text-white font-bold text-xl md:text-2xl">Select Template</h2>
                    <button onClick={onClose} className="dark:text-gray-400 hover:dark:text-white transition-colors"><X size={24} /></button>
                </div>
                <div className="flex flex-wrap gap-4 overflow-y-auto min-h-0 pr-2 pb-4">
                    {templates.map((t) => (
                        <div key={t} onClick={() => onSelect(t)} className={`cursor-pointer w-[calc(50%-0.5rem)] aspect-[4/5] rounded-xl border-4 overflow-hidden transition-all ${activeTemplate === t ? "border-blue-500 scale-[0.98]" : "border-transparent hover:border-gray-600"}`}>
                            <img src={t} alt="Template" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}