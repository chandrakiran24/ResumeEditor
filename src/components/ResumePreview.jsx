import React from 'react';

function SectionTitle({ children }) {
  return <h3 className="mt-4 border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wide">{children}</h3>;
}

export default function ResumePreview({ content, selectedSummary, selectedProjects, selectedSkillCategories }) {
  return (
    <div className="h-full overflow-y-auto rounded-lg border bg-white p-6 text-[12px] leading-tight shadow-sm">
      <header className="border-b border-slate-300 pb-2">
        <h1 className="text-xl font-bold">{content.profile.name}</h1>
        <p className="text-[11px] text-slate-700">
          {content.profile.location} | {content.profile.phone} | {content.profile.email}
        </p>
        <p className="text-[11px] text-slate-700">{content.profile.links.map((x) => `${x.label}: ${x.url}`).join(' | ')}</p>
      </header>

      <SectionTitle>Summary</SectionTitle>
      <p>{content.summaries[selectedSummary]}</p>

      <SectionTitle>Education</SectionTitle>
      {content.education.map((edu) => (
        <div key={edu.school} className="mt-1">
          <p className="font-semibold">{edu.degree}</p>
          <p>
            {edu.school} - {edu.location}
          </p>
        </div>
      ))}

      <SectionTitle>Skills</SectionTitle>
      {selectedSkillCategories.map((category) => (
        <p key={category} className="mt-1">
          <span className="font-semibold">{category}:</span> {content.skills[category].join(', ')}
        </p>
      ))}

      <SectionTitle>Projects</SectionTitle>
      {selectedProjects.map((project) => (
        <div key={project.id} className="mt-1.5">
          <p className="font-semibold">{project.title}</p>
          <ul className="list-inside list-disc">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}

      <SectionTitle>Professional Experience</SectionTitle>
      {content.professionalExperience.map((job) => (
        <div key={`${job.company}-${job.role}`} className="mt-1.5">
          <p className="font-semibold">
            {job.role} - {job.company} ({job.dates})
          </p>
          <ul className="list-inside list-disc">
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
