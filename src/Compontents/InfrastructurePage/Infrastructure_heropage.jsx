import React from 'react';

export default function Infrastructure_heropage() {
  return (
    <header
      className="py-15 px-5 md:px-10 lg:px-20"
      aria-label="Infrastructure Hero Section"
    >
      <div
        className="py-35 md:py-45 lg:py-60 bg-green-300 rounded-4xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.theconversation.com/files/675612/original/file-20250620-56-novrkv.jpg?ixlib=rb-4.1.0&rect=300%2C0%2C5340%2C2567&q=45&auto=format&w=668&h=324&fit=crop')",
        }}
        role="img"
        aria-label="A view representing Biomed International's infrastructure and facilities"
      >
        <h1 className="px-10 md:px-20 lg:px-30 font-bold text-white text-3xl md:text-5xl lg:text-7xl">
          Infrastructure
        </h1>
      </div>
    </header>
  );
}
