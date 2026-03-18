import React from 'react';
// Assuming you are using Inertia.js, you'd use <Link>. I will use standard a tags for generic React compatibility.

export default function DesignsIndex() {
  const templates = [
    { id: 'quote-card', name: 'Quote Card', icon: '💬', color: 'bg-red-600' },
    { id: 'youtube-thumb', name: 'Youtube Thumbnail', icon: '🔴', color: 'bg-blue-600' },
    // Add more templates here
  ];

  return (
    <div className="min-h-[100dvh] bg-neutral-900 p-6 text-white font-sans">
      <h1 className="text-2xl font-bold mb-6">Select Template</h1>
      
      <div className="grid grid-cols-2 gap-4">
        {templates.map((tpl) => (
          <a 
            key={tpl.id}
            href={`/designs/modules/${tpl.id}`} 
            className={`${tpl.color} rounded-2xl p-6 flex flex-col items-center justify-center gap-4 shadow-lg active:scale-95 transition-transform`}
          >
            <span className="text-4xl">{tpl.icon}</span>
            <span className="font-semibold text-center">{tpl.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}