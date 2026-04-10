import React, { useMemo, useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import ResumePreview from './components/ResumePreview';
import ResumePdfDocument from './components/ResumePdfDocument';
import { contentLibrary, jobTitles } from './data/contentLibrary';

const summaryToSkills = {
  'Software Engineering': ['Programming', 'Development Tools', 'Systems and Methodologies', 'Protocols and Techniques'],
  'Hardware/FPGA': ['Programming', 'Development Tools', 'Protocols and Techniques'],
  'Quantitative Research': ['Programming', 'Development Tools', 'Systems and Methodologies', 'Protocols and Techniques']
};

function getSummaryByJobTitle(title) {
  const normalized = title.toLowerCase();
  if (normalized.includes('fpga') || normalized.includes('hardware') || normalized.includes('rtl')) {
    return 'Hardware/FPGA';
  }
  if (normalized.includes('quant') || normalized.includes('trading') || normalized.includes('research')) {
    return 'Quantitative Research';
  }
  return 'Software Engineering';
}

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedJobTitle, setSelectedJobTitle] = useState(jobTitles[0]);
  const [selectedSummary, setSelectedSummary] = useState(getSummaryByJobTitle(jobTitles[0]));
  const [selectedProjectIds, setSelectedProjectIds] = useState(contentLibrary.projects.slice(0, 3).map((p) => p.id));
  const [selectedSkillCategories, setSelectedSkillCategories] = useState(summaryToSkills[getSummaryByJobTitle(jobTitles[0])]);
  const [isGenerating, setIsGenerating] = useState(false);

  const filteredJobTitles = useMemo(
    () => jobTitles.filter((title) => title.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  const selectedProjects = contentLibrary.projects.filter((project) => selectedProjectIds.includes(project.id));

  const onJobTitleSelect = (title) => {
    setSelectedJobTitle(title);
    const nextSummary = getSummaryByJobTitle(title);
    setSelectedSummary(nextSummary);
    setSelectedSkillCategories(summaryToSkills[nextSummary]);
  };

  const toggleProject = (id) => {
    setSelectedProjectIds((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        if (prev.length <= 3) {
          return prev;
        }
        return prev.filter((x) => x !== id);
      }
      if (prev.length >= 4) {
        return prev;
      }
      return [...prev, id];
    });
  };

  const toggleSkillCategory = (category) => {
    setSelectedSkillCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((x) => x !== category);
      }
      return [...prev, category];
    });
  };

  const downloadPdf = async () => {
    setIsGenerating(true);
    try {
      const blob = await pdf(
        <ResumePdfDocument
          content={contentLibrary}
          selectedSummary={selectedSummary}
          selectedProjects={selectedProjects}
          selectedSkillCategories={selectedSkillCategories}
        />
      ).toBlob();

      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `${contentLibrary.profile.name.replace(/\s+/g, '_')}_Resume.pdf`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      setTimeout(() => URL.revokeObjectURL(url), 100);
    } catch (error) {
      console.error('PDF Generation failed:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="h-screen bg-slate-100 p-4 text-slate-900">
      <h1 className="mb-4 text-2xl font-bold">Modular Resume Builder</h1>
      <div className="grid h-[calc(100vh-4.5rem)] grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="overflow-y-auto rounded-lg border bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold">Configuration</h2>

          <div className="mt-4">
            <label className="mb-1 block text-sm font-semibold">Job Title Selector</label>
            <input
              className="w-full rounded border border-slate-300 p-2"
              placeholder="Search job titles"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="mt-2 max-h-36 overflow-y-auto rounded border border-slate-300">
              {filteredJobTitles.map((title) => (
                <button
                  key={title}
                  type="button"
                  className={`block w-full border-b border-slate-200 px-3 py-2 text-left text-sm hover:bg-slate-100 ${
                    selectedJobTitle === title ? 'bg-slate-200 font-semibold' : ''
                  }`}
                  onClick={() => onJobTitleSelect(title)}
                >
                  {title}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="mb-1 block text-sm font-semibold">Summary Toggle</label>
            <select
              className="w-full rounded border border-slate-300 p-2"
              value={selectedSummary}
              onChange={(e) => {
                const summary = e.target.value;
                setSelectedSummary(summary);
                setSelectedSkillCategories(summaryToSkills[summary]);
              }}
            >
              {Object.keys(contentLibrary.summaries).map((summaryName) => (
                <option key={summaryName} value={summaryName}>
                  {summaryName}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            <label className="mb-1 block text-sm font-semibold">Project Picker (select 3 to 4)</label>
            <div className="space-y-2 rounded border border-slate-300 p-2">
              {contentLibrary.projects.map((project) => (
                <label key={project.id} className="flex items-start gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="mt-0.5"
                    checked={selectedProjectIds.includes(project.id)}
                    onChange={() => toggleProject(project.id)}
                  />
                  <span>{project.title}</span>
                </label>
              ))}
            </div>
            <p className="mt-1 text-xs text-slate-600">Selected: {selectedProjectIds.length} projects.</p>
          </div>

          <div className="mt-4">
            <label className="mb-1 block text-sm font-semibold">Skill Set Configurator</label>
            <div className="space-y-2 rounded border border-slate-300 p-2">
              {Object.keys(contentLibrary.skills).map((category) => (
                <label key={category} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedSkillCategories.includes(category)}
                    onChange={() => toggleSkillCategory(category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded bg-blue-700 px-4 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-400"
            disabled={selectedProjects.length < 3 || selectedProjects.length > 4 || isGenerating}
            onClick={downloadPdf}
          >
            {isGenerating ? 'Generating PDF...' : 'Download PDF'}
          </button>
        </section>

        <section className="h-full min-h-0">
          <h2 className="mb-2 text-lg font-semibold">Live Preview</h2>
          <ResumePreview
            content={contentLibrary}
            selectedSummary={selectedSummary}
            selectedProjects={selectedProjects}
            selectedSkillCategories={selectedSkillCategories}
          />
        </section>
      </div>
    </main>
  );
}
