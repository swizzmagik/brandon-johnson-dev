"use client";

export const WorkExperienceContent = ({ experience }: { experience: any }) => {
  return (
    <div className="text-neutral-800 dark:text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <div className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
        {experience.period}
      </div>
      <div className="text-lg font-bold mb-2">{experience.role}</div>
      <div className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        {experience.company}
      </div>
      <p className="mb-8">{experience.description}</p>
      <a
        href={experience.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm text-blue-500 hover:text-blue-600 transition-colors"
      >
        Learn More →
      </a>
    </div>
  );
};
