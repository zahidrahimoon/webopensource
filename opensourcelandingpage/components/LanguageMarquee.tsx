"use client";

import { Code2, FileCode, Type, Server } from "lucide-react";

const languages = [
  { name: "HTML", icon: <Code2 className="w-6 h-6 text-orange-500" /> },
  { name: "CSS", icon: <Code2 className="w-6 h-6 text-blue-500" /> },
  { name: "JavaScript", icon: <Code2 className="w-6 h-6 text-yellow-400" /> },
  { name: "SCSS", icon: <FileCode className="w-6 h-6 text-pink-500" /> },
  { name: "TypeScript", icon: <Type className="w-6 h-6 text-blue-600" /> },
  { name: "Laravel", icon: <Server className="w-6 h-6 text-red-600" /> },
  { name: "PHP", icon: <FileCode className="w-6 h-6 text-indigo-600" /> },
];

const LanguageMarquee = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8 overflow-hidden relative flex justify-center">
      <div className="flex flex-wrap justify-center space-x-6">
        {languages.map((lang, index) => (
          <div key={index} className="flex items-center space-x-2 text-lg font-semibold text-gray-900 dark:text-gray-200">
            {lang.icon}
            <span>{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageMarquee;
