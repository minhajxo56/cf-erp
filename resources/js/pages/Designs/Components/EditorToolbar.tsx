import React from 'react';
import { Image as ImageIcon, Quote, CircleUserRound, Copy, Download, Share2, AlignCenter, LayoutTemplate } from 'lucide-react';

interface Props {
    onTheme: () => void;
    onBg: () => void;
    onImg: () => void;
    onQuote: () => void;
    onName: () => void;
    onCopy: () => void;
    onSave: () => void;
    onPost: () => void;
    bgRef: React.RefObject<HTMLInputElement | null>;
    imgRef: React.RefObject<HTMLInputElement | null>;
    onBgUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onImgUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EditorToolbar({ onTheme, onBg, onImg, onQuote, onName, onCopy, onSave, onPost, bgRef, imgRef, onBgUpload, onImgUpload }: Props) {
    return (
        <div className="flex w-full p-1 dark:bg-gray-800 rounded-t-xl overflow-x-auto no-scrollbar justify-start md:justify-center border border-gray-700">
            <button className="flex flex-col items-center gap-1 text-[7px] font-bold uppercase text-purple-400 p-1 min-w-[60px]" onClick={onTheme}><LayoutTemplate size={18}/> Templates</button>
            <button className="flex flex-col items-center gap-1 text-[7px] font-bold uppercase text-blue-400 p-1 min-w-[60px]" onClick={onBg}><ImageIcon size={18}/> Image</button>
            <button className="flex flex-col items-center gap-1 text-[7px] font-bold uppercase text-rose-500 p-1 min-w-[60px]" onClick={onImg}><CircleUserRound size={18}/> DP</button>
            <button className="flex flex-col items-center gap-1 text-[7px] font-bold uppercase text-rose-500 p-1 min-w-[60px]" onClick={onQuote}><Quote size={18}/> Quote</button>
            <button className="flex flex-col items-center gap-1 text-[7px] font-bold uppercase text-gray-300 p-1 min-w-[60px]" onClick={onName}><AlignCenter size={18}/> Speaker</button>
            <button className="flex flex-col items-center gap-1 text-[7px] font-bold uppercase text-amber-500 p-1 min-w-[60px]" onClick={onCopy}><Copy size={18}/> Copy</button>
            <button className="flex flex-col items-center gap-1 text-[7px] font-bold uppercase text-emerald-500 p-1 min-w-[60px]" onClick={onSave}><Download size={18}/> Save</button>
            <button className="flex flex-col items-center gap-1 text-[7px] font-bold uppercase text-blue-500 p-1 min-w-[60px]" onClick={onPost}><Share2 size={18}/> Post</button>
            <input type="file" ref={bgRef} className="hidden" accept="image/*" onChange={onBgUpload} />
            <input type="file" ref={imgRef} className="hidden" accept="image/*" onChange={onImgUpload} />
        </div>
    );
}