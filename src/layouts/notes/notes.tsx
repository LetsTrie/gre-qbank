import { LatexBlock } from "../../components/LatexBlock";
import { noteSections } from "./data";
import _5lbBook from "../../assets/books/Manhattab 5Lb (Five Pound) .pdf";
import { useState } from "react";
import { ChevronDown, ExternalLink, BookOpen, Circle } from "lucide-react";
import "./notes.css";

export const Notes: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState(new Set([0]));

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSections(newExpanded);
  };

  // Color palette for section indices
  const sectionColors = [
    {
      bg: "from-violet-500 to-purple-600",
      text: "text-violet-700",
      border: "border-violet-200",
      accent: "bg-violet-50",
    },
    {
      bg: "from-blue-500 to-indigo-600",
      text: "text-blue-700",
      border: "border-blue-200",
      accent: "bg-blue-50",
    },
    {
      bg: "from-emerald-500 to-green-600",
      text: "text-emerald-700",
      border: "border-emerald-200",
      accent: "bg-emerald-50",
    },
    {
      bg: "from-orange-500 to-red-600",
      text: "text-orange-700",
      border: "border-orange-200",
      accent: "bg-orange-50",
    },
    {
      bg: "from-pink-500 to-rose-600",
      text: "text-pink-700",
      border: "border-pink-200",
      accent: "bg-pink-50",
    },
  ];

  return (
    <div className="bg-white font-['Inter',_system-ui,_-apple-system,_sans-serif] antialiased">
      {/* Page header */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 sticky top-0 z-10 shadow-xl">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-semibold mb-6 tracking-wide">
              📚 Study Guide
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent leading-[1.1]">
              GRE Mathematics
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed font-medium">
              Master essential concepts, formulas, and strategies for
              <span className="text-white font-bold">
                {" "}
                Quantitative Reasoning{" "}
              </span>
              success
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Main content */}
        <main>
          {/* Subject sections */}
          <div className="space-y-6">
            {noteSections.map((section, sectionIndex) => {
              const colors = sectionColors[sectionIndex % sectionColors.length];

              return (
                <div
                  key={sectionIndex}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Section header */}
                  <button
                    onClick={() => toggleSection(sectionIndex)}
                    className="w-full px-8 py-6 flex items-center justify-between transition-all duration-200 hover:bg-gray-50/80"
                  >
                    <div className="flex items-center space-x-5">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center text-white text-lg font-black shadow-lg`}
                      >
                        {sectionIndex + 1}
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 text-left tracking-tight">
                        {section.headerText}
                      </h2>
                    </div>
                    <div className="relative">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-200 hover:border-gray-300 transition-colors">
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-all duration-300 ease-in-out ${
                            expandedSections.has(sectionIndex)
                              ? "rotate-180 text-purple-600"
                              : ""
                          }`}
                        />
                      </div>
                    </div>
                  </button>

                  {/* Section content with smooth animation */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-gray-100 ${
                      expandedSections.has(sectionIndex)
                        ? "max-h-[600px] overflow-y-auto opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className={`border-t border-gray-200 ${colors.accent}/30`}
                    >
                      <div className="px-8 py-6 space-y-4">
                        {section.notes.map((note, index) => (
                          <div
                            key={index}
                            className={`bg-white rounded-lg p-5 border ${colors.border} shadow-sm hover:shadow-md transition-all duration-200`}
                          >
                            <div className="flex items-start space-x-4">
                              <div className="flex-shrink-0 mt-2">
                                <Circle
                                  className={`w-2.5 h-2.5 fill-current ${colors.text}`}
                                />
                              </div>
                              <div className="flex-1">
                                <LatexBlock
                                  codes={note.latexCodes}
                                  fontSize="17px"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reference materials section */}
          <div className="mt-12 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl border border-gray-200 p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                Reference Materials
              </h2>
            </div>

            <div className="bg-white rounded-xl p-6 border border-green-200 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg tracking-tight">
                    5 lb. Book of GRE Practice Problems
                  </h3>
                  <p className="text-base text-gray-600 font-medium">
                    Comprehensive practice problems for test preparation
                  </p>
                </div>
                <a
                  href={_5lbBook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 text-base font-bold shadow-lg hover:shadow-xl transform hover:text-white"
                >
                  <span>Open PDF</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
