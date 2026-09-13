import React from 'react';

const programmingLanguages = ['Python', 'JavaScript', 'React', 'SQL', 'C++', 'HTML', 'CSS', 'Git'];

const TechStack = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1661d2ff] mb-3">Tech Stack</p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#1661d2ff]">Programming Language</h2>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="flex flex-wrap gap-2 justify-center">
            {programmingLanguages.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
